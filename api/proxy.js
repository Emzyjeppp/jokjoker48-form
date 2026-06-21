export default async function handler(req, res) {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const sheetUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;
    if (!sheetUrl) {
        return res.status(500).json({ error: "GOOGLE_SHEET_SCRIPT_URL environment variable is not configured." });
    }

    const { method, query, body } = req;

    try {
        if (method === "GET") {
            const queryString = new URLSearchParams(query).toString();
            const targetUrl = queryString ? `${sheetUrl}?${queryString}` : sheetUrl;
            
            const response = await fetch(targetUrl);
            const data = await response.json();
            return res.status(response.status || 200).json(data);
        } else if (method === "POST") {
            const response = await fetch(sheetUrl, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: typeof body === "string" ? body : JSON.stringify(body)
            });

            const text = await response.text();
            try {
                const json = JSON.parse(text);
                return res.status(response.status || 200).json(json);
            } catch {
                return res.status(response.status || 200).send(text);
            }
        }
        return res.status(405).json({ error: `Method ${method} not allowed` });
    } catch (error) {
        console.error("Proxy error:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}
