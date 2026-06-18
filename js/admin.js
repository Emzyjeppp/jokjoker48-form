// CONFIGURATION
        const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUSURtPJzojazKVl3DqVE6D4WRYNDqd9P00gHyoH-7JkI7Y3z0FyDQO05sHFqN3wFWgA/exec";

        // Local State
        let allBookings = []; // Raw parsed list of all bookings
        let filteredBookings = []; // Bookings after filters and search applied
        let activeServiceFilter = "all";
        let activeSearchQuery = "";
        let rawSelectedPassword = ""; // Temporary storage for selected ticket password
        let isPasswordVisible = false;

        // Check authentication status on load
        window.addEventListener('DOMContentLoaded', () => {
            const isAuth = sessionStorage.getItem('adminAuthenticated');
            const token = sessionStorage.getItem('adminToken');
            if (isAuth === 'true' && token) {
                showDashboard();
            }
        });

        // 1. Authentication Handlers
        function handleLogin(e) {
            e.preventDefault();
            const input = document.getElementById("adminPasswordInput").value;
            
            // Simpan password sementara di sessionStorage sebagai token
            sessionStorage.setItem('adminToken', input);
            document.getElementById("loginError").style.display = 'none';
            
            showDashboard();
        }

        function logoutAdmin() {
            sessionStorage.removeItem('adminAuthenticated');
            sessionStorage.removeItem('adminToken');
            document.getElementById("loginOverlay").style.display = "flex";
            document.getElementById("dashboardContainer").style.display = "none";
            document.getElementById("adminPasswordInput").value = "";
        }

        function showDashboard() {
            document.getElementById("loginOverlay").style.display = "none";
            document.getElementById("dashboardContainer").style.display = "block";
            fetchSheetData();
        }

        // 2. Fetch Data from Google Sheets API
        async function fetchSheetData() {
            const loading = document.getElementById("loadingIndicator");
            const empty = document.getElementById("emptyState");
            const tableBody = document.getElementById("tableBody");
            
            loading.style.display = "block";
            empty.style.display = "none";
            tableBody.innerHTML = "";
            
            resetMetrics();

            if (!GOOGLE_SHEET_SCRIPT_URL) {
                loading.style.display = "none";
                empty.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--warning-red);"></i><p>URL Web App Google Sheets belum dikonfigurasi.</p>`;
                empty.style.display = "block";
                return;
            }

            const token = sessionStorage.getItem('adminToken') || '';

            try {
                // Fetch data via GET using action=getData & pass parameter
                const response = await fetch(`${GOOGLE_SHEET_SCRIPT_URL}?action=getData&pass=${encodeURIComponent(token)}`);
                const result = await response.json();

                if (result.result === "success" && result.data) {
                    sessionStorage.setItem('adminAuthenticated', 'true');
                    processBookings(result.data);
                } else if (result.result === "error" && result.message === "Unauthorized") {
                    throw new Error("Unauthorized");
                } else {
                    throw new Error("Invalid response format");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                loading.style.display = "none";
                
                if (error.message === "Unauthorized") {
                    // Password salah, keluarkan admin dan tampilkan pesan kesalahan
                    logoutAdmin();
                    document.getElementById("loginError").style.display = 'block';
                    document.getElementById("loginError").textContent = "Kata sandi salah! Akses ditolak.";
                } else {
                    empty.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: var(--warning-red);"></i><p>Gagal memuat data dari spreadsheet.<br><small style="color: var(--text-muted); font-size: 0.8rem;">Pastikan Apps Script telah di-deploy ulang dan URL benar.</small></p>`;
                    empty.style.display = "block";
                }
            }
        }

        // Reset metrics UI
        function resetMetrics() {
            document.getElementById("metricTotal").textContent = "0";
            document.getElementById("metricIncome").textContent = "Rp 0";
            document.getElementById("metric2s").textContent = "0";
            document.getElementById("metricMng").textContent = "0";
            document.getElementById("metricVc").textContent = "0";
        }

        // Parse and combine bookings from separate sheets
        function processBookings(data) {
            allBookings = [];
            
            // Iterate over all three service categories
            const services = ["2-Shot", "Meet & Greet", "Video Call"];
            services.forEach(service => {
                const rows = data[service] || [];
                rows.forEach(row => {
                    // Extract Order ID from Keterangan e.g. "2-Shot [JOKER-A8B9C]"
                    const rawKeterangan = String(row["Keterangan"] || service);
                    const orderIdMatch = rawKeterangan.match(/\[(JOKER-[A-Z0-9]+)\]/i);
                    const orderId = orderIdMatch ? orderIdMatch[1] : "-";
                    const cleanKeterangan = rawKeterangan.replace(/\s*\[JOKER-[A-Z0-9]+\]/i, '').trim();

                    // Normalize spreadsheet headers (handling lowercase/spaces)
                    const normalizedRow = {
                        timestamp: row["Timestamp"] || "",
                        email: String(row["Email address"] || ""),
                        agree: String(row["Sudah membaca deskripsi diatas?"] || ""),
                        accountType: String(row["Tipe akun"] || ""),
                        name: String(row["Nama"] || ""),
                        city: String(row["Kota"] || ""),
                        jkt48Email: String(row["Email Akun JKT48 Pastikan diisi dengan benar !"] || ""),
                        jkt48Password: String(row["Password Akun JKT48 Pastikan diisi dengan benar !"] || ""),
                        whatsapp: String(row["Nomor WhatsApp Aktif (Untuk Dihubungi)"] || ""),
                        priorities: String(row["2Shot Prioritas NAMA LENGKAP MEMBER - TEAM"] || ""),
                        backups: String(row["2Shot Cadangan (kalau prioritas habis) NAMA LENGKAP MEMBER - TEAM"] || ""),
                        keterangan: cleanKeterangan,
                        orderId: orderId
                    };
                    allBookings.push(normalizedRow);
                });
            });

            // Sort by Timestamp descending (newest first)
            allBookings.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

            calculateMetrics();
            applyFilters();
        }

        // Calculate metrics dynamically based on current data
        function calculateMetrics() {
            let total = allBookings.length;
            let income = 0;
            let count2s = 0;
            let countMng = 0;
            let countVc = 0;

            allBookings.forEach(booking => {
                const service = booking.keterangan;
                const price = getEstimatedBookingPrice(booking);
                
                income += price;

                if (service === "2-Shot") count2s++;
                else if (service === "Meet & Greet") countMng++;
                else if (service === "Video Call") countVc++;
            });

            document.getElementById("metricTotal").textContent = total;
            document.getElementById("metricIncome").textContent = formatRupiah(income);
            document.getElementById("metric2s").textContent = count2s;
            document.getElementById("metricMng").textContent = countMng;
            document.getElementById("metricVc").textContent = countVc;
        }

        // Get estimated price of a booking based on oshi priority tier
        function getEstimatedBookingPrice(booking) {
            const service = booking.keterangan;
            const priorityText = booking.priorities || "";
            const oshiName = priorityText.split(" - ")[0].trim();
            
            // Hardcoded price tables matching app.js member database
            // Fallback rates if member not matched
            let rate = 60000;
            if (service === "Meet & Greet") rate = 25000;
            else if (service === "Video Call") rate = 45000;

            // Price tier mapping
            const lowTier = ["Alya Amanda", "Anindya Ramadhani", "Celine Thefani", "Nayla Suji", "Cathleen Nixie", "Helisma Putri", "Gendis Mayranisa", "Jesslyn Elly", "Shabilqis Nalia", "Nina Tutachia", "Febriola Sinambela", "Dena Natalia", "Desy Natalia", "Lulu Salsabila", "Raisha Syifa", "Ribka Budiman", "Victoria Kimberly", "Astrella Virgiananda", "Aulia Riza", "Bong Aprili", "Hagia Sopia", "Humaira Ramadhani", "Afera Thalia", "Carissa Dini", "Christabella Bonita", "Fahira Putri", "Fatimah Azzahra", "Heidi Suyangga", "Maxine Faye", "Putry Jazyta", "Ralyne Van Irwan", "Sona Kalyana"];
            const midTier = ["Aurellia", "Aurhel Alana", "Cynthia Yaputera", "Fritzy Rosmerian", "Grace Octaviani", "Indah Cahya", "Jazzlyn Trisha", "Michelle Levia", "Cornelia Vanisa", "Jessica Chandra", "Kathrina Irene", "Mutiara Azzahra", "Mikaela Kusjanto"];
            const highTier = ["Michelle Alexandra", "Fiony Alveria", "Gabriela Abigail", "Greesella Adhalia", "Gita Sekar Andarini", "Freya Jayawardana", "Marsha Lenathea", "Jemima Evodie", "Jacqueline Immanuela", "Nur Intan"];
            const premiumTier = ["Hillary Abigail", "Adeline Wijaya", "Oline Manuel", "Abigail Rachel", "Angelina Christy", "Catherine Valencia"];

            if (lowTier.some(name => oshiName.toLowerCase() === name.toLowerCase())) {
                if (service === "2-Shot") return 60000;
                if (service === "Meet & Greet") return 25000;
                if (service === "Video Call") return 45000;
            }
            if (midTier.some(name => oshiName.toLowerCase() === name.toLowerCase())) {
                if (service === "2-Shot") return 75000;
                if (service === "Meet & Greet") return 30000;
                if (service === "Video Call") return 45000;
            }
            if (highTier.some(name => oshiName.toLowerCase() === name.toLowerCase())) {
                if (service === "2-Shot") return 85000;
                if (service === "Meet & Greet") return 40000;
                if (service === "Video Call") return 45000;
            }
            if (premiumTier.some(name => oshiName.toLowerCase() === name.toLowerCase())) {
                if (service === "2-Shot") return 100000;
                if (service === "Meet & Greet") return 50000;
                if (service === "Video Call") return 45000;
            }
            return rate; // Fallback
        }

        // Apply Tab Filter and Search filter concurrently
        function applyFilters() {
            filteredBookings = allBookings.filter(booking => {
                // Service filter
                const matchesService = activeServiceFilter === "all" || booking.keterangan === activeServiceFilter;
                
                // Search filter
                const query = activeSearchQuery.toLowerCase();
                const matchesSearch = !query || 
                    booking.name.toLowerCase().includes(query) ||
                    booking.email.toLowerCase().includes(query) ||
                    booking.whatsapp.toLowerCase().includes(query) ||
                    booking.priorities.toLowerCase().includes(query) ||
                    booking.backups.toLowerCase().includes(query) ||
                    booking.orderId.toLowerCase().includes(query) ||
                    booking.city.toLowerCase().includes(query);

                return matchesService && matchesSearch;
            });

            renderTable();
        }

        // Set service active tab filter
        function setFilter(filter, el) {
            document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
            el.classList.add("active");
            activeServiceFilter = filter;
            applyFilters();
        }

        // Handle typing in search input
        function handleSearch(val) {
            activeSearchQuery = val;
            applyFilters();
        }

        // Render rows into HTML Table
        function renderTable() {
            const tableBody = document.getElementById("tableBody");
            const loading = document.getElementById("loadingIndicator");
            const empty = document.getElementById("emptyState");
            
            loading.style.display = "none";
            tableBody.innerHTML = "";

            if (filteredBookings.length === 0) {
                empty.style.display = "block";
                return;
            }

            empty.style.display = "none";
            
            filteredBookings.forEach((booking, index) => {
                const tr = document.createElement("tr");
                
                // Format Timestamp
                let timeStr = "-";
                if (booking.timestamp) {
                    const d = new Date(booking.timestamp);
                    if (!isNaN(d.getTime())) {
                        timeStr = d.toLocaleDateString("id-ID", { day: 'numeric', month: 'short' }) + " " + 
                                  d.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' });
                    } else {
                        timeStr = String(booking.timestamp);
                    }
                }

                // Service Badge class mapping
                let badgeClass = "badge-2s";
                if (booking.keterangan === "Meet & Greet") badgeClass = "badge-mng";
                if (booking.keterangan === "Video Call") badgeClass = "badge-vc";

                const price = getEstimatedBookingPrice(booking);
                const firstPriorityName = booking.priorities.split("\n")[0] || "-";

                // WhatsApp clean formatting
                let cleanWa = booking.whatsapp.replace(/[^0-9]/g, '');
                if (cleanWa.startsWith("0")) {
                    cleanWa = "62" + cleanWa.slice(1);
                }

                const penjokoList = ["Aqza", "Jessen", "Arvi", "Iqbal", "Dapa", "Naury", "Faher", "Jepp", "Raygar", "oetrik", "Senna"];
                const activePenjokoClass = booking.penjoko ? `penjoko-${booking.penjoko}` : 'penjoko-none';
                
                let penjokoSelectHtml = `
                    <select class="penjoko-select ${activePenjokoClass}" onchange="changePenjoko('${booking.orderId}', '${booking.keterangan}', this)">
                        <option value="" class="penjoko-none">-- Pilih --</option>
                        ${penjokoList.map(name => `<option value="${name}" ${booking.penjoko === name ? 'selected' : ''}>${name}</option>`).join("")}
                    </select>
                `;

                tr.innerHTML = `
                    <td style="color: var(--text-muted); font-weight: 500;">${index + 1}</td>
                    <td style="font-weight: 700; color: var(--color-gold); font-family: monospace;">${booking.orderId}</td>
                    <td style="font-size: 0.8rem; font-weight: 500;">${timeStr}</td>
                    <td><span class="badge-service ${badgeClass}">${booking.keterangan}</span></td>
                    <td style="font-weight: 600;">${booking.name}</td>
                    <td><span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${booking.city}</span></td>
                    <td>
                        <a href="https://wa.me/${cleanWa}" target="_blank" class="btn-action-small btn-wa-direct">
                            <i class="fa-brands fa-whatsapp"></i> ${booking.whatsapp}
                        </a>
                    </td>
                    <td style="font-size: 0.85rem; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        ${firstPriorityName}
                    </td>
                    <td>${penjokoSelectHtml}</td>
                    <td style="font-weight: 700; color: var(--color-gold); font-size: 0.95rem;">${formatRupiah(price)}</td>
                    <td style="text-align: center;">
                        <button onclick="viewBookingDetails(${allBookings.indexOf(booking)})" class="btn-action-small">
                            <i class="fa-solid fa-eye"></i> Detail
                        </button>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        }

        // 3. Modal Details Handlers
        function viewBookingDetails(rawIndex) {
            const booking = allBookings[rawIndex];
            if (!booking) return;

            rawSelectedPassword = booking.jkt48Password;
            isPasswordVisible = false;
            document.getElementById("infoJkt48Password").textContent = "••••••••";
            document.getElementById("togglePassBtn").innerHTML = `<i class="fa-solid fa-eye"></i>`;

            // Set modal title with Order ID
            document.getElementById("modalTitle").innerHTML = `<i class="fa-solid fa-ticket"></i> Detail Pemesanan <span style="color: var(--color-gold); font-family: monospace; font-size: 0.95rem; margin-left: 0.5rem;">[${booking.orderId}]</span>`;

            // Populate text details
            document.getElementById("infoTimestamp").textContent = booking.timestamp ? new Date(booking.timestamp).toLocaleString("id-ID") : "-";
            document.getElementById("infoService").textContent = booking.keterangan;
            document.getElementById("infoName").textContent = booking.name;
            document.getElementById("infoCity").textContent = booking.city;
            document.getElementById("infoPersonalEmail").textContent = booking.email;
            document.getElementById("infoWhatsapp").textContent = booking.whatsapp;
            document.getElementById("infoAccountType").textContent = booking.accountType;
            document.getElementById("infoPrice").textContent = formatRupiah(getEstimatedBookingPrice(booking));
            document.getElementById("infoPenjoko").textContent = booking.penjoko || "Belum Ditugaskan";
            document.getElementById("infoJkt48Email").textContent = booking.jkt48Email;
            
            // Priorities list
            const prioritiesList = booking.priorities.split("\n").map((p, i) => `${i + 1}. ${p}`).join("\n");
            document.getElementById("infoPriorities").textContent = prioritiesList || "-";

            // Backups list
            const backupsList = booking.backups.split("\n").map((b, i) => `${i + 1}. ${b}`).join("\n");
            document.getElementById("infoBackups").textContent = backupsList || "-";

            // Generate structured format output for clipboard copy
            const textOutput = generateStructuredOutput(booking);
            document.getElementById("formattedTextArea").value = textOutput;

            // WhatsApp link
            let cleanWa = booking.whatsapp.replace(/[^0-9]/g, '');
            if (cleanWa.startsWith("0")) {
                cleanWa = "62" + cleanWa.slice(1);
            }
            const firstPriorityName = booking.priorities ? booking.priorities.split("\n")[0].split(" - ")[0].trim() : "-";
            const greeting = `Permisi kak selamat malam, ini dari JokiJOKER48, ingin konfirmasi bahwa form A/N ${booking.name} yang sudah di isi untuk Theater Sementara kota ${booking.city}, Member yang dipilih Sebelumnya itu ${firstPriorityName} jika iya, mohon konfirmasi nya dan apakah ada alternatif yang mau ditambahkan dari kedua pilihan tersebut tersebut?, Terimakasih🙏🏻`;
            const waMsg = encodeURIComponent(greeting);
            document.getElementById("modalWaBtn").href = `https://wa.me/${cleanWa}?text=${waMsg}`;

            toggleDetailsModal(true);
        }

        function togglePasswordVisibility() {
            const passSpan = document.getElementById("infoJkt48Password");
            const btn = document.getElementById("togglePassBtn");
            
            if (isPasswordVisible) {
                passSpan.textContent = "••••••••";
                btn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
                isPasswordVisible = false;
            } else {
                passSpan.textContent = rawSelectedPassword || "(Kosong)";
                btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
                isPasswordVisible = true;
            }
        }

        // Show/hide details modal
        function toggleDetailsModal(show) {
            const modal = document.getElementById("detailsModal");
            if (show) {
                modal.classList.add("show");
            } else {
                modal.classList.remove("show");
            }
        }

        function closeDetailsModal(e) {
            if (e.target.id === "detailsModal") {
                toggleDetailsModal(false);
            }
        }

        // Generate the matching formatted WhatsApp template for easy admin tracking
        function generateStructuredOutput(booking) {
            const price = getEstimatedBookingPrice(booking);
            const prioritiesFormatted = booking.priorities.split("\n").map((p, i) => `${i + 1}. ${p}`).join("\n");
            const backupsFormatted = booking.backups.split("\n").map((b, i) => `${i + 1}. ${b}`).join("\n");
            
            const firstPriorityName = booking.priorities ? booking.priorities.split("\n")[0].split(" - ")[0].trim() : "-";
            
            let cityLine = "";
            if (booking.keterangan !== "Video Call") {
                cityLine = `• *Nama Kota:* ${booking.city}\n`;
            }

            return `Permisi kak selamat malam, ini dari JokiJOKER48, ingin konfirmasi bahwa form A/N ${booking.name} yang sudah di isi untuk Theater Sementara kota ${booking.city}, Member yang dipilih Sebelumnya itu ${firstPriorityName} jika iya, mohon konfirmasi nya dan apakah ada alternatif yang mau ditambahkan dari kedua pilihan tersebut tersebut?, Terimakasih🙏🏻

*RINCIAN FORM PEMESANAN:*
----------------------------------------
• *Jenis Layanan:* ${booking.keterangan}
• *Nama Lengkap:* ${booking.name}
• *Email address:* ${booking.email}
• *Tipe akun:* ${booking.accountType}
${cityLine}• *Email Akun JKT48:* ${booking.jkt48Email}
• *Password Akun JKT48:* ${booking.jkt48Password}
• *Nomor WhatsApp:* ${booking.whatsapp}

*${booking.keterangan.toUpperCase()} PRIORITAS*
${prioritiesFormatted || "-"}

*${booking.keterangan.toUpperCase()} CADANGAN*
${backupsFormatted || "-"}

----------------------------------------
*Estimasi Biaya:* ${formatRupiah(price)}
_(Pembayaran dilakukan setelah tiket didapatkan)_`;
        }

        // Clipboard copying helper
        function copyModalFormattedText() {
            const area = document.getElementById("formattedTextArea");
            area.select();
            document.execCommand("copy");
            showToast("Format teks berhasil disalin ke clipboard!");
        }

        // Utility: rupiah currency conversion
        function formatRupiah(num) {
            return "Rp " + num.toLocaleString('id-ID');
        }

        // Reused Toast Alert
        function showToast(message) {
            const toast = document.getElementById("toast");
            const toastMessage = document.getElementById("toastMessage");
            toastMessage.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> ${message}`;
            toast.classList.add("show");
            
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }

        // Change Penjoko handler
        async function changePenjoko(orderId, service, selectEl) {
            updatePenjokoStyle(selectEl);
            
            const token = sessionStorage.getItem('adminToken') || '';
            const penjokoVal = selectEl.value;
            
            showToast(`Menyimpan pembagian joki ke ${penjokoVal || 'kosong'}...`);
            
            const url = GOOGLE_SHEET_SCRIPT_URL;
            if (!url) {
                showToast("URL script Google Sheets belum dikonfigurasi.");
                return;
            }
            
            const payload = {
                action: "updatePenjoko",
                pass: token,
                orderId: orderId,
                service: service,
                penjoko: penjokoVal
            };
            
            try {
                await fetch(url, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                
                // Keep local state in sync
                const found = allBookings.find(b => b.orderId === orderId);
                if (found) {
                    found.penjoko = penjokoVal;
                }
                
                showToast(`Joki berhasil dibagi ke ${penjokoVal || 'kosong'}!`);
            } catch (err) {
                console.error(err);
                showToast("Gagal menyimpan pembagian joki ke Google Sheets.");
            }
        }

        // Update CSS class for Penjoko select element dynamically
        function updatePenjokoStyle(selectEl) {
            const classes = Array.from(selectEl.classList).filter(c => c.startsWith('penjoko-'));
            classes.forEach(c => selectEl.classList.remove(c));
            
            const val = selectEl.value;
            if (val) {
                selectEl.classList.add(`penjoko-${val}`);
            } else {
                selectEl.classList.add('penjoko-none');
            }
        }