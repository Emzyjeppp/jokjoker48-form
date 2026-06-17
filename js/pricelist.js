// Database lengkap member & harga joki berdasarkan gambar spreadsheet
        const memberData = {
            "Love": [
                { name: "Alya Amanda", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Anindya Ramadhani", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Celine Thefani", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Nayla Suji", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Cathleen Nixie", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Aurellia", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Aurhel Alana", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Cynthia Yaputera", price2s: 75000, priceMng: 30000, vcTier: "40k" },
                { name: "Fritzy Rosmerian", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Grace Octaviani", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Indah Cahya", price2s: 75000, priceMng: 30000, vcTier: "40k" },
                { name: "Jazzlyn Trisha", price2s: 75000, priceMng: 30000, vcTier: "40k" },
                { name: "Michelle Alexandra", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Fiony Alveria", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Hillary Abigail", price2s: 100000, priceMng: 50000, vcTier: "70k" }
            ],
            "Dream": [
                { name: "Helisma Putri", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Gendis Mayranisa", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Jesslyn Elly", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Shabilqis Nalia", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Nina Tutachia", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Febriola Sinambela", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Gabriela Abigail", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Greesella Adhalia", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Gita Sekar Andarini", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Freya Jayawardana", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Marsha Lenathea", price2s: 85000, priceMng: 40000, vcTier: "70k" },
                { name: "Adeline Wijaya", price2s: 100000, priceMng: 50000, vcTier: "70k" },
                { name: "Oline Manuel", price2s: 100000, priceMng: 50000, vcTier: "70k" }
            ],
            "Passion": [
                { name: "Dena Natalia", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Desy Natalia", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Lulu Salsabila", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Raisha Syifa", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Ribka Budiman", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Victoria Kimberly", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Michelle Levia", price2s: 75000, priceMng: 30000, vcTier: "40k" },
                { name: "Cornelia Vanisa", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Jessica Chandra", price2s: 75000, priceMng: 30000, vcTier: "40k" },
                { name: "Kathrina Irene", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Mutiara Azzahra", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Abigail Rachel", price2s: 100000, priceMng: 50000, vcTier: "85k" },
                { name: "Angelina Christy", price2s: 100000, priceMng: 50000, vcTier: "70k" },
                { name: "Catherine Valencia", price2s: 100000, priceMng: 50000, vcTier: "85k" },
                { name: "Feni Fitriyanti", price2s: null, priceMng: null, vcTier: "40k" }
            ],
            "Trainee": [
                { name: "Astrella Virgiananda", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Aulia Riza", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Bong Aprili", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Hagia Sopia", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Humaira Ramadhani", price2s: 60000, priceMng: 25000, vcTier: "40k" },
                { name: "Mikaela Kusjanto", price2s: 75000, priceMng: 30000, vcTier: "45k" },
                { name: "Jemima Evodie", price2s: 85000, priceMng: 40000, vcTier: "45k" },
                { name: "Jacqueline Immanuela", price2s: 85000, priceMng: 40000, vcTier: "70k" },
                { name: "Nur Intan", price2s: 85000, priceMng: 40000, vcTier: "70k" },
                { name: "Afera Thalia", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Carissa Dini", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Christabella Bonita", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Fahira Putri", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Fatimah Azzahra", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Heidi Suyangga", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Maxine Faye", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Putry Jazyta", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Ralyne Van Irwan", price2s: 60000, priceMng: 25000, vcTier: "45k" },
                { name: "Sona Kalyana", price2s: 60000, priceMng: 25000, vcTier: "45k" }
            ]
        };

        // Tambahan data spesifik untuk member yang hanya ada di Videocall
        const vcExtraMembers = [
            { name: "Amanda Sukma", vcTier: "40k" },
            { name: "Chelsea Davina", vcTier: "40k" },
            { name: "Regina Willian", vcTier: "40k" }
        ];

        // Active State
        let currentTab = "twoshot";
        let searchKeyword = "";

        // Elements
        const pricelistContent = document.getElementById("pricelistContent");
        const universalSearch = document.getElementById("universalSearch");
        const tabButtons = document.querySelectorAll(".pricelist-tab-btn");

        // Format to IDR
        function formatRupiah(num) {
            if (num === null) return `<span class="member-price unknown">Tanya Admin</span>`;
            return `<span class="member-price">Rp ${num.toLocaleString('id-ID')}</span>`;
        }

        // Render functions
        function render() {
            pricelistContent.innerHTML = "";
            
            if (currentTab === "twoshot") {
                renderTeamBased("price2s");
            } else if (currentTab === "mng") {
                renderTeamBased("priceMng");
            } else if (currentTab === "videocall") {
                renderVcTiers();
            }
        }

        // Render 2-Shot and MnG lists (grouped by Team)
        function renderTeamBased(priceField) {
            const grid = document.createElement("div");
            grid.className = "twoshot-price-grid";
            
            const teams = ["Love", "Dream", "Passion", "Trainee"];
            let hasGlobalMatch = false;

            teams.forEach(team => {
                const members = memberData[team].filter(m => 
                    m.name.toLowerCase().includes(searchKeyword)
                );

                if (members.length > 0) {
                    hasGlobalMatch = true;
                    
                    const card = document.createElement("div");
                    card.className = "team-table-card";
                    card.innerHTML = `
                        <div class="team-table-header">
                            <span>Team ${team}</span>
                        </div>
                        <div class="team-table-rows">
                            ${members.map(m => `
                                <div class="table-row">
                                    <span class="member-name">${m.name}</span>
                                    ${formatRupiah(m[priceField])}
                                </div>
                            `).join("")}
                        </div>
                    `;
                    grid.appendChild(card);
                }
            });

            if (!hasGlobalMatch) {
                pricelistContent.innerHTML = `<div class="no-results">Member "${universalSearch.value}" tidak ditemukan.</div>`;
            } else {
                pricelistContent.appendChild(grid);
            }
        }

        // Render Videocall price tiers (grouped by price Rp40K, Rp45K, Rp70K, Rp85K)
        function renderVcTiers() {
            const grid = document.createElement("div");
            grid.className = "vc-price-grid";
            
            // Definisikan Tiers
            const tiers = [
                { label: "Rp 40.000", value: "40k" },
                { label: "Rp 45.000", value: "45k" },
                { label: "Rp 70.000", value: "70k" },
                { label: "Rp 85.000", value: "85k" }
            ];

            // Kumpulkan semua member dari data utama
            let allMembers = [];
            for (let team in memberData) {
                memberData[team].forEach(m => {
                    allMembers.push({ name: m.name, vcTier: m.vcTier });
                });
            }
            // Tambahkan member extra videocall
            vcExtraMembers.forEach(m => {
                allMembers.push(m);
            });

            // Filter berdasar search
            allMembers = allMembers.filter(m => 
                m.name.toLowerCase().includes(searchKeyword)
            );

            let hasGlobalMatch = false;

            tiers.forEach(tier => {
                const tierMembers = allMembers.filter(m => m.vcTier === tier.value);
                
                // Tambahkan ALL GEN 14 ke tier 45k jika mencari "gen" atau mencari kosong
                const is45kTier = tier.value === "45k";
                const matchGen14 = "all gen 14".includes(searchKeyword);
                
                if (tierMembers.length > 0 || (is45kTier && matchGen14)) {
                    hasGlobalMatch = true;
                    
                    const card = document.createElement("div");
                    card.className = "vc-tier-card";
                    
                    let gen14Html = "";
                    if (is45kTier && matchGen14) {
                        gen14Html = `<div class="vc-member-item" style="font-weight: 700; color: var(--color-gold);">ALL GEN 14</div>`;
                    }

                    card.innerHTML = `
                        <div class="vc-tier-header">
                            <span class="vc-tier-label">Biaya Joki</span>
                            <span class="vc-tier-price">${tier.label}</span>
                        </div>
                        <div class="vc-member-list">
                            ${gen14Html}
                            ${tierMembers.map(m => `
                                <div class="vc-member-item">${m.name}</div>
                            `).join("")}
                        </div>
                    `;
                    grid.appendChild(card);
                }
            });

            if (!hasGlobalMatch) {
                pricelistContent.innerHTML = `<div class="no-results">Member "${universalSearch.value}" tidak ditemukan.</div>`;
            } else {
                pricelistContent.appendChild(grid);
            }
        }

        // Set up event listeners
        universalSearch.addEventListener("input", (e) => {
            searchKeyword = e.target.value.toLowerCase().trim();
            render();
        });

        tabButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                tabButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentTab = btn.getAttribute("data-tab");
                render();
            });
        });

        // Init
        document.addEventListener("DOMContentLoaded", () => {
            render();
        });