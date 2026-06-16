// Data Pricelist Joki 2-Shot JKT48
const memberPricelist = [
    // Team Love
    { name: "Alya Amanda", team: "Love", price: 60000 },
    { name: "Anindya Ramadhani", team: "Love", price: 60000 },
    { name: "Celine Thefani", team: "Love", price: 60000 },
    { name: "Nayla Suji", team: "Love", price: 60000 },
    { name: "Cathleen Nixie", team: "Love", price: 60000 },
    { name: "Aurellia", team: "Love", price: 75000 },
    { name: "Aurhel Alana", team: "Love", price: 75000 },
    { name: "Cynthia Yaputera", team: "Love", price: 75000 },
    { name: "Fritzy Rosmerian", team: "Love", price: 75000 },
    { name: "Grace Octaviani", team: "Love", price: 75000 },
    { name: "Indah Cahya", team: "Love", price: 75000 },
    { name: "Jazzlyn Trisha", team: "Love", price: 75000 },
    { name: "Michelle Alexandra", team: "Love", price: 85000 },
    { name: "Fiony Alveria", team: "Love", price: 85000 },
    { name: "Hillary Abigail", team: "Love", price: 100000 },

    // Team Dream
    { name: "Helisma Putri", team: "Dream", price: 60000 },
    { name: "Gendis Mayranisa", team: "Dream", price: 60000 },
    { name: "Jesslyn Elly", team: "Dream", price: 60000 },
    { name: "Shabilqis Nalia", team: "Dream", price: 60000 },
    { name: "Nina Tutachia", team: "Dream", price: 60000 },
    { name: "Febriola Sinambela", team: "Dream", price: 60000 },
    { name: "Gabriela Abigail", team: "Dream", price: 85000 },
    { name: "Greesella Adhalia", team: "Dream", price: 85000 },
    { name: "Gita Sekar Andarini", team: "Dream", price: 85000 },
    { name: "Freya Jayawardana", team: "Dream", price: 85000 },
    { name: "Marsha Lenathea", team: "Dream", price: 85000 },
    { name: "Adeline Wijaya", team: "Dream", price: 100000 },
    { name: "Oline Manuel", team: "Dream", price: 100000 },

    // Team Passion
    { name: "Dena Natalia", team: "Passion", price: 60000 },
    { name: "Desy Natalia", team: "Passion", price: 60000 },
    { name: "Lulu Salsabila", team: "Passion", price: 60000 },
    { name: "Raisha Syifa", team: "Passion", price: 60000 },
    { name: "Ribka Budiman", team: "Passion", price: 60000 },
    { name: "Victoria Kimberly", team: "Passion", price: 60000 },
    { name: "Michelle Levia", team: "Passion", price: 75000 },
    { name: "Cornelia Vanisa", team: "Passion", price: 75000 },
    { name: "Jessica Chandra", team: "Passion", price: 75000 },
    { name: "Kathrina Irene", team: "Passion", price: 75000 },
    { name: "Mutiara Azzahra", team: "Passion", price: 75000 },
    { name: "Abigail Rachel", team: "Passion", price: 100000 },
    { name: "Angelina Christy", team: "Passion", price: 100000 },
    { name: "Catherine Valencia", team: "Passion", price: 100000 },
    { name: "Feni Fitriyanti", team: "Passion", price: null }, // Hubungi Admin

    // Trainee
    { name: "Astrella Virgiananda", team: "Trainee", price: 60000 },
    { name: "Aulia Riza", team: "Trainee", price: 60000 },
    { name: "Bong Aprili", team: "Trainee", price: 60000 },
    { name: "Hagia Sopia", team: "Trainee", price: 60000 },
    { name: "Humaira Ramadhani", team: "Trainee", price: 60000 },
    { name: "Mikaela Kusjanto", team: "Trainee", price: 75000 },
    { name: "Jemima Evodie", team: "Trainee", price: 85000 },
    { name: "Jacqueline Immanuela", team: "Trainee", price: 85000 },
    { name: "Nur Intan", team: "Trainee", price: 85000 },
    { name: "Afera Thalia", team: "Trainee", price: 60000 },
    { name: "Carissa Dini", team: "Trainee", price: 60000 },
    { name: "Christabella Bonita", team: "Trainee", price: 60000 },
    { name: "Fahira Putri", team: "Trainee", price: 60000 },
    { name: "Fatimah Azzahra", team: "Trainee", price: 60000 },
    { name: "Heidi Suyangga", team: "Trainee", price: 60000 },
    { name: "Maxine Faye", team: "Trainee", price: 60000 },
    { name: "Putry Jazyta", team: "Trainee", price: 60000 },
    { name: "Ralyne Van Irwan", team: "Trainee", price: 60000 },
    { name: "Sona Kalyana", team: "Trainee", price: 60000 }
];

// Configuration
const WA_ADMIN_NUMBER = "6282251090558"; // Ganti dengan nomor WhatsApp Admin tujuan
const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUSURtPJzojazKVl3DqVE6D4WRYNDqd9P00gHyoH-7JkI7Y3z0FyDQO05sHFqN3wFWgA/exec"; // Tempelkan URL Google Apps Script Web App Anda di sini (contoh: https://script.google.com/macros/s/.../exec)

// DOM Elements
const agreeCheckbox = document.getElementById("agreeCheckbox");
const jokiForm = document.getElementById("jokiForm");
const pricelistContent = document.getElementById("pricelistContent");
const memberSearch = document.getElementById("memberSearch");
const tabButtons = document.querySelectorAll(".tab-btn");

// Screen Containers
const serviceSelectorScreen = document.getElementById("serviceSelectorScreen");
const bookingFormScreen = document.getElementById("bookingFormScreen");
const backToSelectorBtn = document.getElementById("backToSelectorBtn");
const serviceSelectCards = document.querySelectorAll(".service-select-card");

// Dynamic Text Elements
const formTitleText = document.getElementById("formTitleText");
const selectionBoxTitle = document.getElementById("selectionBoxTitle");
const selectionBoxDesc = document.getElementById("selectionBoxDesc");
const priorityLabel = document.getElementById("priorityLabel");
const backupLabel = document.getElementById("backupLabel");
const ticketTitleText = document.getElementById("ticketTitleText");
const ticketPriorityLabel = document.getElementById("ticketPriorityLabel");
const ticketBackupLabel = document.getElementById("ticketBackupLabel");
const disclaimerServiceType = document.getElementById("disclaimerServiceType");
const pricelistTitleText = document.getElementById("pricelistTitleText");
const priceLegendContainer = document.getElementById("priceLegendContainer");
const cityInputGroup = document.getElementById("cityInputGroup");

// Form Inputs
const userNameInput = document.getElementById("userName");
const personalEmailInput = document.getElementById("personalEmail");
const accountTypeInput = document.getElementById("accountType");
const cityInput = document.getElementById("city");
const jkt48EmailInput = document.getElementById("jkt48Email");
const jkt48PasswordInput = document.getElementById("jkt48Password");
const whatsappInput = document.getElementById("whatsapp");
const priorityInput = document.getElementById("priorityMember");
const backupInput = document.getElementById("backupMember");
const additionalPrioritiesContainer = document.getElementById("additionalPrioritiesContainer");
const addPriorityBtn = document.getElementById("addPriorityBtn");
const additionalBackupsContainer = document.getElementById("additionalBackupsContainer");
const addBackupBtn = document.getElementById("addBackupBtn");

// Toggle Buttons
const togglePasswordBtn = document.getElementById("togglePasswordBtn");

// Ticket Elements
const ticketCity = document.getElementById("ticketCity");
const ticketAccountType = document.getElementById("ticketAccountType");
const ticketPriority = document.getElementById("ticketPriority");
const ticketBackup = document.getElementById("ticketBackup");
const ticketPrice = document.getElementById("ticketPrice");
const virtualTicket = document.getElementById("virtualTicket");

// Action Buttons
const copyTextBtn = document.getElementById("copyTextBtn");
const downloadTicketBtn = document.getElementById("downloadTicketBtn");
const submitWaBtn = document.getElementById("submitWaBtn");

// Active state values
let selectedService = "twoshot"; // default
let currentTeamFilter = "all";
let searchKeyword = "";
let estimatedPrice = 0;

// Helper to determine member price based on active service
function getMemberPrice(member, service) {
    if (service === "twoshot") {
        return member.price;
    } else if (service === "mng") {
        if (member.price === 60000) return 25000;
        if (member.price === 75000) return 30000;
        if (member.price === 85000) return 40000;
        if (member.price === 100000) return 50000;
        return null;
    } else if (service === "videocall") {
        const name = member.name.toLowerCase();
        
        const vcTiers = {
            "40k": [
                "alya amanda", "anindya ramadhani", "celine thefani", "nayla suji", "cathleen nixie",
                "cynthia yaputera", "indah cahya", "jazzlyn trisha", "helisma putri", "gendis mayranisa",
                "jesslyn elly", "shabilqis nalia", "nina tutachia", "febriola sinambela", "dena natalia",
                "desy natalia", "lulu salsabila", "raisha syifa", "ribka budiman", "victoria kimberly",
                "michelle levia", "jessica chandra", "feni fitriyanti", "aulia riiza", "aulia riza", "bong aprili",
                "hagia sopia", "humaira ramadhani"
            ],
            "45k": [
                "aurellia", "aurhel alana", "fritzy rosmerian", "grace octaviani", "michelle alexandra",
                "fiony alveria", "gabriela abigail", "greesella adhalia", "gita sekar andarini", "freya jayawardana",
                "cornelia vanisa", "kathrina irene", "mutiara azzahra", "astrella virgiananda", "mikaela kusjanto",
                "jemima evodie",
                "afera thalia", "fera",
                "carissa dini", "carissa",
                "christabella bonita", "bella",
                "fahira putri", "fahira",
                "fatimah azzahra", "rara",
                "heidi suyangga", "heidi",
                "maxine faye", "maxine",
                "putry jazyta", "jazzy",
                "ralyne van irwan", "ralyne",
                "sona kalyana", "sona"
            ],
            "70k": [
                "hillary abigail", "adeline wijaya", "oline manuel", "marsha lenathea", "angelina christy",
                "jacqueline immanuela", "nur intan"
            ],
            "85k": [
                "abigail rachel", "catherine valencia"
            ]
        };
        
        if (vcTiers["40k"].some(n => name.includes(n))) return 40000;
        if (vcTiers["45k"].some(n => name.includes(n))) return 45000;
        if (vcTiers["70k"].some(n => name.includes(n))) return 70000;
        if (vcTiers["85k"].some(n => name.includes(n))) return 85000;
        
        // Default fallback if not found in specific lists
        if (member.price === 60000) return 40000;
        if (member.price === 75000) return 45000;
        if (member.price === 85000) return 45000;
        if (member.price === 100000) return 70000;
        return 40000;
    }
    return null;
}

// Update price legend based on active service
function updatePriceLegend() {
    if (!priceLegendContainer) return;
    
    if (selectedService === "twoshot") {
        priceLegendContainer.innerHTML = `
            <span class="legend-item"><span class="legend-color tier-green"></span> Rp 60K</span>
            <span class="legend-item"><span class="legend-color tier-purple"></span> Rp 75K</span>
            <span class="legend-item"><span class="legend-color tier-orange"></span> Rp 85K</span>
            <span class="legend-item"><span class="legend-color tier-pink"></span> Rp 100K</span>
            <span class="legend-item"><span class="legend-color tier-grey"></span> Tanya Admin</span>
        `;
    } else if (selectedService === "mng") {
        priceLegendContainer.innerHTML = `
            <span class="legend-item"><span class="legend-color tier-green"></span> Rp 25K</span>
            <span class="legend-item"><span class="legend-color tier-purple"></span> Rp 30K</span>
            <span class="legend-item"><span class="legend-color tier-orange"></span> Rp 40K</span>
            <span class="legend-item"><span class="legend-color tier-pink"></span> Rp 50K</span>
            <span class="legend-item"><span class="legend-color tier-grey"></span> Tanya Admin</span>
        `;
    } else if (selectedService === "videocall") {
        priceLegendContainer.innerHTML = `
            <span class="legend-item"><span class="legend-color tier-green"></span> Rp 40K</span>
            <span class="legend-item"><span class="legend-color tier-purple"></span> Rp 45K</span>
            <span class="legend-item"><span class="legend-color tier-orange"></span> Rp 70K</span>
            <span class="legend-item"><span class="legend-color tier-pink"></span> Rp 85K</span>
            <span class="legend-item"><span class="legend-color tier-grey"></span> Tanya Admin</span>
        `;
    }
}

// Populate dropdown options on load
function populateDropdowns() {
    let prefix = "2Shot";
    if (selectedService === "mng") prefix = "MnG";
    if (selectedService === "videocall") prefix = "VC";

    priorityInput.innerHTML = `<option value="" disabled selected>Pilih Member Prioritas 1</option><option value="">-- Kosongkan Pilihan --</option>`;
    backupInput.innerHTML = `<option value="" disabled selected>Pilih Member Cadangan 1 (Alternatif)</option><option value="">-- Kosongkan Pilihan --</option>`;
    
    memberPricelist.forEach(member => {
        const optionVal = `${member.name} - ${member.team}`;
        const activePrice = getMemberPrice(member, selectedService);
        const priceLabel = activePrice ? ` - Rp ${(activePrice / 1000)}K` : ' - Tanya Admin';
        const optionText = `${member.name} (${member.team})${priceLabel}`;
        
        const opt1 = document.createElement("option");
        opt1.value = optionVal;
        opt1.textContent = optionText;
        priorityInput.appendChild(opt1);
        
        const opt2 = document.createElement("option");
        opt2.value = optionVal;
        opt2.textContent = optionText;
        backupInput.appendChild(opt2);
    });
}

// Update Priority Labels re-sequencing
function updatePriorityLabels() {
    let prefix = "2Shot";
    if (selectedService === "mng") prefix = "MnG";
    if (selectedService === "videocall") prefix = "VC";

    const rows = additionalPrioritiesContainer.querySelectorAll(".dynamic-member-row");
    rows.forEach((row, index) => {
        const label = row.querySelector("label");
        const select = row.querySelector("select");
        const num = index + 2;
        label.innerHTML = `<i class="fa-solid fa-star text-gold"></i> ${prefix} Prioritas ${num}`;
        select.id = `priorityMember_${num}`;
        const firstOpt = select.querySelector("option[disabled]");
        if (firstOpt) {
            firstOpt.textContent = `Pilih Member Prioritas ${num}`;
        }
    });
}

// Add dynamic Priority selector
function addAdditionalPriority(initialValue = "") {
    const rowCount = additionalPrioritiesContainer.querySelectorAll(".dynamic-member-row").length;
    const num = rowCount + 2;
    
    let prefix = "2Shot";
    if (selectedService === "mng") prefix = "MnG";
    if (selectedService === "videocall") prefix = "VC";

    const row = document.createElement("div");
    row.className = "dynamic-member-row animate-fade-in";
    row.style.animationDuration = "0.3s";
    
    row.innerHTML = `
        <div class="input-group">
            <label for="priorityMember_${num}"><i class="fa-solid fa-star text-gold"></i> ${prefix} Prioritas ${num}</label>
            <select id="priorityMember_${num}" required>
                <option value="" disabled selected>Pilih Member Prioritas ${num}</option>
                <option value="">-- Kosongkan Pilihan --</option>
            </select>
        </div>
        <button type="button" class="btn-remove-member" title="Hapus Pilihan ini">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    const select = row.querySelector("select");
    memberPricelist.forEach(member => {
        const optionVal = `${member.name} - ${member.team}`;
        const activePrice = getMemberPrice(member, selectedService);
        const priceLabel = activePrice ? ` - Rp ${(activePrice / 1000)}K` : ' - Tanya Admin';
        const optionText = `${member.name} (${member.team})${priceLabel}`;
        
        const opt = document.createElement("option");
        opt.value = optionVal;
        opt.textContent = optionText;
        select.appendChild(opt);
    });
    
    if (initialValue) {
        select.value = initialValue;
    }
    
    select.addEventListener("change", () => {
        updateTicketPreview();
        checkFormValidity();
    });
    
    const removeBtn = row.querySelector(".btn-remove-member");
    removeBtn.addEventListener("click", () => {
        row.remove();
        updatePriorityLabels();
        updateTicketPreview();
        checkFormValidity();
        showToast("Member prioritas dihapus");
    });
    
    additionalPrioritiesContainer.appendChild(row);
    updatePriorityLabels();
    updateTicketPreview();
    checkFormValidity();
}

// Update Backup Labels re-sequencing
function updateBackupLabels() {
    let prefix = "2Shot";
    if (selectedService === "mng") prefix = "MnG";
    if (selectedService === "videocall") prefix = "VC";

    const rows = additionalBackupsContainer.querySelectorAll(".dynamic-member-row");
    rows.forEach((row, index) => {
        const label = row.querySelector("label");
        const select = row.querySelector("select");
        const num = index + 2;
        label.innerHTML = `<i class="fa-solid fa-star-half-stroke text-gold-dim"></i> ${prefix} Cadangan ${num} (Alternatif)`;
        select.id = `backupMember_${num}`;
        const firstOpt = select.querySelector("option[disabled]");
        if (firstOpt) {
            firstOpt.textContent = `Pilih Member Cadangan ${num} (Alternatif)`;
        }
    });
}

// Add dynamic Backup selector
function addAdditionalBackup(initialValue = "") {
    const rowCount = additionalBackupsContainer.querySelectorAll(".dynamic-member-row").length;
    const num = rowCount + 2;
    
    let prefix = "2Shot";
    if (selectedService === "mng") prefix = "MnG";
    if (selectedService === "videocall") prefix = "VC";

    const row = document.createElement("div");
    row.className = "dynamic-member-row animate-fade-in";
    row.style.animationDuration = "0.3s";
    
    row.innerHTML = `
        <div class="input-group">
            <label for="backupMember_${num}"><i class="fa-solid fa-star-half-stroke text-gold-dim"></i> ${prefix} Cadangan ${num} (Alternatif)</label>
            <select id="backupMember_${num}" required>
                <option value="" disabled selected>Pilih Member Cadangan ${num} (Alternatif)</option>
                <option value="">-- Kosongkan Pilihan --</option>
            </select>
        </div>
        <button type="button" class="btn-remove-member" title="Hapus Pilihan ini">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    const select = row.querySelector("select");
    memberPricelist.forEach(member => {
        const optionVal = `${member.name} - ${member.team}`;
        const activePrice = getMemberPrice(member, selectedService);
        const priceLabel = activePrice ? ` - Rp ${(activePrice / 1000)}K` : ' - Tanya Admin';
        const optionText = `${member.name} (${member.team})${priceLabel}`;
        
        const opt = document.createElement("option");
        opt.value = optionVal;
        opt.textContent = optionText;
        select.appendChild(opt);
    });
    
    if (initialValue) {
        select.value = initialValue;
    }
    
    select.addEventListener("change", () => {
        updateTicketPreview();
        checkFormValidity();
    });
    
    const removeBtn = row.querySelector(".btn-remove-member");
    removeBtn.addEventListener("click", () => {
        row.remove();
        updateBackupLabels();
        updateTicketPreview();
        checkFormValidity();
        showToast("Member cadangan dihapus");
    });
    
    additionalBackupsContainer.appendChild(row);
    updateBackupLabels();
    updateTicketPreview();
    checkFormValidity();
}

// Initialize Web App
document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Service selector cards click
    serviceSelectCards.forEach(card => {
        card.addEventListener("click", () => {
            const service = card.getAttribute("data-service");
            selectService(service);
        });
    });

    // Back to selector button click
    backToSelectorBtn.addEventListener("click", () => {
        jokiForm.reset();
        additionalPrioritiesContainer.innerHTML = "";
        additionalBackupsContainer.innerHTML = "";
        bookingFormScreen.style.display = "none";
        serviceSelectorScreen.style.display = "block";
        checkFormValidity();
    });

    // Checkbox Terms
    agreeCheckbox.addEventListener("change", checkFormValidity);

    // Form inputs change
    const allInputs = [
        userNameInput, personalEmailInput, accountTypeInput, cityInput,
        jkt48EmailInput, jkt48PasswordInput, whatsappInput,
        priorityInput, backupInput
    ];
    
    allInputs.forEach(input => {
        const eventType = input.tagName === "SELECT" ? "change" : "input";
        input.addEventListener(eventType, () => {
            updateTicketPreview();
            checkFormValidity();
        });
    });

    // Toggle Password Visibility
    togglePasswordBtn.addEventListener("click", () => {
        const type = jkt48PasswordInput.getAttribute("type") === "password" ? "text" : "password";
        jkt48PasswordInput.setAttribute("type", type);
        togglePasswordBtn.innerHTML = type === "password" ? '<i class="fa-solid fa-eye"></i>' : '<i class="fa-solid fa-eye-slash"></i>';
    });

    // Search filter
    memberSearch.addEventListener("input", (e) => {
        searchKeyword = e.target.value.toLowerCase();
        renderPricelist();
    });

    // Tab buttons
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentTeamFilter = btn.getAttribute("data-team");
            renderPricelist();
        });
    });

    // Add Priority Button Click
    addPriorityBtn.addEventListener("click", () => {
        addAdditionalPriority();
    });

    // Add Backup Button Click
    addBackupBtn.addEventListener("click", () => {
        addAdditionalBackup();
    });

    // Action clicks
    copyTextBtn.addEventListener("click", copyFormattedText);
    submitWaBtn.addEventListener("click", sendToWhatsApp);
    downloadTicketBtn.addEventListener("click", downloadTicketImage);
}

// Function to select active service and transition to the booking form screen
function selectService(service) {
    selectedService = service;
    
    // Toggle City field based on service
    if (service === "videocall") {
        if (cityInputGroup) cityInputGroup.style.display = "none";
        cityInput.removeAttribute("required");
        cityInput.value = "";
    } else {
        if (cityInputGroup) cityInputGroup.style.display = "flex";
        cityInput.setAttribute("required", "");
    }
    
    // Update UI headers and labels dynamically
    if (service === "twoshot") {
        formTitleText.textContent = "Formulir Pemesanan Joki 2-Shot";
        selectionBoxTitle.textContent = "Pemilihan Member 2-Shot";
        selectionBoxDesc.textContent = "Klik nama member pada daftar harga di sebelah kanan untuk mengisi otomatis, atau pilih dari dropdown di bawah.";
        priorityLabel.innerHTML = '<i class="fa-solid fa-star text-gold"></i> 2Shot Prioritas 1';
        backupLabel.innerHTML = '<i class="fa-solid fa-star-half-stroke text-gold-dim"></i> 2Shot Cadangan 1 (Alternatif)';
        ticketTitleText.textContent = "JOKI 2-SHOT TICKET";
        ticketPriorityLabel.textContent = "PRIORITAS 2-SHOT";
        ticketBackupLabel.textContent = "CADANGAN 2-SHOT";
        disclaimerServiceType.textContent = "2-Shot";
        pricelistTitleText.textContent = "Pricelist Joki 2-Shot";
        
        addPriorityBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Member Prioritas';
        addBackupBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Member Cadangan';
    } else if (service === "mng") {
        formTitleText.textContent = "Formulir Pemesanan Joki Meet & Greet";
        selectionBoxTitle.textContent = "Pemilihan Member Meet & Greet";
        selectionBoxDesc.textContent = "Klik nama member pada daftar harga di sebelah kanan untuk mengisi otomatis, atau pilih dari dropdown di bawah.";
        priorityLabel.innerHTML = '<i class="fa-solid fa-star text-gold"></i> MnG Prioritas 1';
        backupLabel.innerHTML = '<i class="fa-solid fa-star-half-stroke text-gold-dim"></i> MnG Cadangan 1 (Alternatif)';
        ticketTitleText.textContent = "JOKI MEET & GREET TICKET";
        ticketPriorityLabel.textContent = "PRIORITAS MnG";
        ticketBackupLabel.textContent = "CADANGAN MnG";
        disclaimerServiceType.textContent = "Meet & Greet";
        pricelistTitleText.textContent = "Pricelist Joki Meet & Greet";
        
        addPriorityBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Member Prioritas';
        addBackupBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Member Cadangan';
    } else if (service === "videocall") {
        formTitleText.textContent = "Formulir Pemesanan Joki Video Call";
        selectionBoxTitle.textContent = "Pemilihan Member Video Call";
        selectionBoxDesc.textContent = "Klik nama member pada daftar harga di sebelah kanan untuk mengisi otomatis, atau pilih dari dropdown di bawah.";
        priorityLabel.innerHTML = '<i class="fa-solid fa-star text-gold"></i> VC Prioritas 1';
        backupLabel.innerHTML = '<i class="fa-solid fa-star-half-stroke text-gold-dim"></i> VC Cadangan 1 (Alternatif)';
        ticketTitleText.textContent = "JOKI VIDEO CALL TICKET";
        ticketPriorityLabel.textContent = "PRIORITAS VIDEO CALL";
        ticketBackupLabel.textContent = "CADANGAN VIDEO CALL";
        disclaimerServiceType.textContent = "Video Call";
        pricelistTitleText.textContent = "Pricelist Joki Video Call";
        
        addPriorityBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Member Prioritas';
        addBackupBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Member Cadangan';
    }
    
    // Switch screens
    serviceSelectorScreen.style.display = "none";
    bookingFormScreen.style.display = "block";
    
    // Run setup and populating logic for this service
    updatePriceLegend();
    populateDropdowns();
    renderPricelist();
    updateTicketPreview();
    checkFormValidity();
    
    // Smooth scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Check validation state of inputs & checkbox
function checkFormValidity() {
    let isFormValid = jokiForm.checkValidity();
    
    // Validate all dynamic dropdowns (both priorities and backups)
    const dynamicSelects = [
        ...additionalPrioritiesContainer.querySelectorAll("select"),
        ...additionalBackupsContainer.querySelectorAll("select")
    ];
    dynamicSelects.forEach(select => {
        if (!select.checkValidity()) {
            isFormValid = false;
        }
    });

    const isAgreed = agreeCheckbox.checked;
    const canSubmit = isFormValid && isAgreed;
    
    copyTextBtn.disabled = !canSubmit;
    downloadTicketBtn.disabled = !canSubmit;
    submitWaBtn.disabled = !canSubmit;

    const stamp = document.querySelector(".ticket-status-stamp");
    if (canSubmit) {
        stamp.textContent = "READY";
        stamp.classList.add("ready");
    } else {
        stamp.textContent = "PENDING";
        stamp.classList.remove("ready");
    }
}



// Render Pricelist based on filters
function renderPricelist() {
    pricelistContent.innerHTML = "";
    
    // Group members by team
    const teams = ["Love", "Dream", "Passion", "Trainee"];
    
    teams.forEach(team => {
        // Skip team if team filter is active and doesn't match
        if (currentTeamFilter !== "all" && currentTeamFilter !== team) return;
        
        // Filter members
        const filteredMembers = memberPricelist.filter(m => {
            const matchesTeam = m.team === team;
            const matchesSearch = m.name.toLowerCase().includes(searchKeyword);
            return matchesTeam && matchesSearch;
        });
        
        if (filteredMembers.length === 0) return;
        
        // Create Team container
        const teamGroup = document.createElement("div");
        teamGroup.className = "team-group";
        
        const teamTitle = document.createElement("div");
        teamTitle.className = "team-title";
        teamTitle.textContent = `Team ${team}`;
        teamGroup.appendChild(teamTitle);
        
        const memberGrid = document.createElement("div");
        memberGrid.className = "member-grid";
        
        filteredMembers.forEach(member => {
            const item = document.createElement("div");
            item.className = "member-item";
            
            // Format Price label
            const activePrice = getMemberPrice(member, selectedService);
            let priceLabel = "Tanya Admin";
            let priceClass = "price-tag-unknown";
            if (activePrice) {
                priceLabel = `Rp ${(activePrice / 1000)}K`;
                if (selectedService === "twoshot") {
                    priceClass = `price-tag-${activePrice / 1000}k`;
                } else if (selectedService === "mng") {
                    if (activePrice === 25000) priceClass = "price-tag-60k";
                    else if (activePrice === 30000) priceClass = "price-tag-75k";
                    else if (activePrice === 40000) priceClass = "price-tag-85k";
                    else if (activePrice === 50000) priceClass = "price-tag-100k";
                } else if (selectedService === "videocall") {
                    if (activePrice === 40000) priceClass = "price-tag-60k";
                    else if (activePrice === 45000) priceClass = "price-tag-75k";
                    else if (activePrice === 70000) priceClass = "price-tag-85k";
                    else if (activePrice === 85000) priceClass = "price-tag-100k";
                }
            }
            
            item.innerHTML = `
                <div class="member-info">
                    <span class="member-name">${member.name}</span>
                    <span class="member-action-hint">Click to choose</span>
                </div>
                <span class="member-price-tag ${priceClass}">${priceLabel}</span>
            `;
            
            // On click handle auto-fill
            item.addEventListener("click", () => {
                selectMember(member);
            });
            
            memberGrid.appendChild(item);
        });
        
        teamGroup.appendChild(memberGrid);
        pricelistContent.appendChild(teamGroup);
    });
    
    if (pricelistContent.innerHTML === "") {
        pricelistContent.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">Member tidak ditemukan.</div>`;
    }
}

// Handle Auto-fill Member from Pricelist
function selectMember(member) {
    const formatted = `${member.name} - ${member.team}`;
    
    if (!priorityInput.value) {
        priorityInput.value = formatted;
        showToast(`Prioritas 1 diisi: ${member.name}`);
    } else {
        // 1. Check if there is an empty dropdown among dynamic priorities
        const dynamicPriorities = additionalPrioritiesContainer.querySelectorAll("select");
        let filledPriority = false;
        
        for (let select of dynamicPriorities) {
            if (!select.value) {
                select.value = formatted;
                const labelText = select.closest(".dynamic-member-row").querySelector("label").textContent.trim();
                const cleanLabel = labelText.replace(/2Shot\s+/i, '');
                showToast(`${cleanLabel} diisi: ${member.name}`);
                filledPriority = true;
                break;
            }
        }
        
        if (!filledPriority) {
            // 2. Try to fill backup 1
            if (!backupInput.value) {
                backupInput.value = formatted;
                showToast(`Cadangan 1 diisi: ${member.name}`);
            } else {
                // 3. Check if there is an empty dropdown among dynamic backups
                const dynamicBackups = additionalBackupsContainer.querySelectorAll("select");
                let filledBackup = false;
                
                for (let select of dynamicBackups) {
                    if (!select.value) {
                        select.value = formatted;
                        const labelText = select.closest(".dynamic-member-row").querySelector("label").textContent.trim();
                        const cleanLabel = labelText.replace(/2Shot\s+/i, '');
                        showToast(`${cleanLabel} diisi: ${member.name}`);
                        filledBackup = true;
                        break;
                    }
                }
                
                if (!filledBackup) {
                    // Everything is full, add new backup row
                    addAdditionalBackup(formatted);
                    const count = additionalBackupsContainer.querySelectorAll(".dynamic-member-row").length + 1;
                    showToast(`Cadangan ${count} dibuat & diisi: ${member.name}`);
                }
            }
        }
    }
    
    updateTicketPreview();
    checkFormValidity();
}

// Update the Virtual Ticket Mockup Visuals
function updateTicketPreview() {
    ticketCity.textContent = (selectedService === "videocall") ? "ONLINE" : (cityInput.value ? cityInput.value.toUpperCase() : "NAMA KOTA");
    ticketAccountType.textContent = accountTypeInput.value ? accountTypeInput.value.toUpperCase() : "TIPE AKUN";
    
    // Collect all priorities
    const priorities = [];
    if (priorityInput.value) {
        priorities.push(priorityInput.value.split(" - ")[0]);
    }
    const dynamicPrioritySelects = additionalPrioritiesContainer.querySelectorAll("select");
    dynamicPrioritySelects.forEach(select => {
        if (select.value) {
            priorities.push(select.value.split(" - ")[0]);
        }
    });
    ticketPriority.textContent = priorities.length > 0 ? priorities.join(", ") : "BELUM DIPILIH";
    
    // Collect all backups
    const backups = [];
    if (backupInput.value) {
        backups.push(backupInput.value.split(" - ")[0]); // just member name
    }
    const dynamicSelects = additionalBackupsContainer.querySelectorAll("select");
    dynamicSelects.forEach(select => {
        if (select.value) {
            backups.push(select.value.split(" - ")[0]);
        }
    });
    
    ticketBackup.textContent = backups.length > 0 ? backups.join(", ") : "BELUM DIPILIH";
    
    // Calculate price based on selected priority member
    calculateEstimatedPrice();
}

// Calculate price of the joki order based on priority
function calculateEstimatedPrice() {
    const priorityVal = priorityInput.value;
    if (!priorityVal) {
        estimatedPrice = 0;
        ticketPrice.textContent = "Rp 0";
        return;
    }
    
    // Try to find the member in the pricelist
    const memberName = priorityVal.split(" - ")[0].trim();
    const found = memberPricelist.find(m => m.name.toLowerCase() === memberName.toLowerCase());
    
    if (found) {
        const activePrice = getMemberPrice(found, selectedService);
        if (activePrice) {
            estimatedPrice = activePrice;
            ticketPrice.textContent = formatRupiah(activePrice);
        } else {
            estimatedPrice = "Hubungi Admin";
            ticketPrice.textContent = "Tanya Admin";
        }
    } else {
        // If typed manually, search fallback
        let baseline = 60000;
        if (selectedService === "mng") baseline = 25000;
        if (selectedService === "videocall") baseline = 40000;
        estimatedPrice = baseline;
        ticketPrice.textContent = formatRupiah(estimatedPrice);
    }
}

// Format number to Indonesian Rupiah
function formatRupiah(num) {
    return "Rp " + num.toLocaleString('id-ID');
}

// Toast notification display
function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    toastMessage.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> ${message}`;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Copy form details to clipboard in a neat, structured format
function copyFormattedText() {
    const text = generateFormatString();
    navigator.clipboard.writeText(text).then(() => {
        showToast("Format teks berhasil disalin ke clipboard!");
    }).catch(err => {
        alert("Gagal menyalin teks: " + err);
    });
}

// Generate the WhatsApp / Clipboard formatted message
function generateFormatString() {
    const userName = userNameInput.value;
    const emailVal = personalEmailInput.value;
    const isAgreed = agreeCheckbox.checked ? "Sudah" : "Belum";
    const accountType = accountTypeInput.value;
    const city = (selectedService === "videocall") ? "ONLINE" : cityInput.value;
    const jkt48Email = jkt48EmailInput.value;
    const jkt48Password = jkt48PasswordInput.value;
    const waNumber = whatsappInput.value;
    
    // Collect all priorities
    const priorities = [];
    if (priorityInput.value) {
        priorities.push(priorityInput.value);
    }
    const dynamicPrioritySelects = additionalPrioritiesContainer.querySelectorAll("select");
    dynamicPrioritySelects.forEach(select => {
        if (select.value) {
            priorities.push(select.value);
        }
    });
    
    let prioritiesText = "";
    if (priorities.length > 0) {
        prioritiesText = priorities.map((p, i) => `${i + 1}. ${p}`).join("\n");
    } else {
        prioritiesText = "-";
    }
    
    // Collect all backups
    const backups = [];
    if (backupInput.value) {
        backups.push(backupInput.value);
    }
    const dynamicSelects = additionalBackupsContainer.querySelectorAll("select");
    dynamicSelects.forEach(select => {
        if (select.value) {
            backups.push(select.value);
        }
    });
    
    let backupsText = "";
    if (backups.length > 0) {
        backupsText = backups.map((b, i) => `${i + 1}. ${b}`).join("\n");
    } else {
        backupsText = "-";
    }
    
    const priceText = typeof estimatedPrice === 'number' ? formatRupiah(estimatedPrice) : "Hubungi Admin";

    let serviceName = "2-Shot";
    if (selectedService === "mng") serviceName = "Meet & Greet";
    if (selectedService === "videocall") serviceName = "Video Call";
    
    const serviceUpper = serviceName.toUpperCase();

    let cityLine = "";
    if (selectedService !== "videocall") {
        cityLine = `• *Nama Kota:* ${city}\n`;
    }

    return `*FORM JOKI JOKER48 - ${serviceUpper}*
----------------------------------------
• *Nama Lengkap:* ${userName}
• *Email address:* ${emailVal}
• *Sudah membaca deskripsi:* ${isAgreed}
• *Tipe akun:* ${accountType}
${cityLine}• *Email Akun JKT48:* ${jkt48Email}
• *Password Akun JKT48:* ${jkt48Password}
• *Nomor WhatsApp:* ${waNumber}

*${serviceUpper} PRIORITAS*
${prioritiesText}

*${serviceUpper} CADANGAN*
${backupsText}

----------------------------------------
*Estimasi Biaya:* ${priceText}
_(Pembayaran dilakukan setelah tiket didapatkan)_`;
}

// Submit data directly to Google Sheet Apps Script endpoint
async function submitToGoogleSheet() {
    if (!GOOGLE_SHEET_SCRIPT_URL) {
        console.warn("GOOGLE_SHEET_SCRIPT_URL belum dikonfigurasi. Data tidak dikirim ke Google Sheets.");
        return true; // Skip gracefully if not configured
    }
    
    // Gather all dynamic priority elements
    const priorities = [];
    if (priorityInput.value) {
        priorities.push(priorityInput.value);
    }
    additionalPrioritiesContainer.querySelectorAll("select").forEach(select => {
        if (select.value) {
            priorities.push(select.value);
        }
    });
    
    // Gather all dynamic backup elements
    const backups = [];
    if (backupInput.value) {
        backups.push(backupInput.value);
    }
    additionalBackupsContainer.querySelectorAll("select").forEach(select => {
        if (select.value) {
            backups.push(select.value);
        }
    });
    
    let serviceName = "2-Shot";
    if (selectedService === "mng") serviceName = "Meet & Greet";
    if (selectedService === "videocall") serviceName = "Video Call";

    const payload = {
        personalEmail: personalEmailInput.value,
        agree: agreeCheckbox.checked ? "Sudah" : "Belum",
        accountType: accountTypeInput.value,
        userName: userNameInput.value,
        city: selectedService === "videocall" ? "ONLINE" : cityInput.value,
        jkt48Email: jkt48EmailInput.value,
        jkt48Password: jkt48PasswordInput.value,
        whatsapp: whatsappInput.value,
        priorities: priorities.join("\n"),
        backups: backups.join("\n"),
        keterangan: serviceName
    };
    
    try {
        await fetch(GOOGLE_SHEET_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        return true;
    } catch (error) {
        console.error("Gagal menyimpan data ke Google Sheets:", error);
        return false;
    }
}

// Redirect user to WhatsApp with pre-filled details (and submit to sheet first)
async function sendToWhatsApp() {
    const originalText = submitWaBtn.innerHTML;
    
    // Show sending state
    submitWaBtn.disabled = true;
    submitWaBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim Data...';
    
    // Attempt saving to Google Sheet
    await submitToGoogleSheet();
    
    // Restore button
    submitWaBtn.disabled = false;
    submitWaBtn.innerHTML = originalText;
    
    // Open WhatsApp URL
    const text = generateFormatString();
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WA_ADMIN_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
}

// Draw Ticket onto canvas and trigger PNG download
function downloadTicketImage() {
    const canvas = document.getElementById("ticketCanvas");
    const ctx = canvas.getContext("2d");
    
    // Set high resolution sizes for crisp image
    canvas.width = 1200;
    canvas.height = 440;
    
    // 1. Draw Background Gradient (Deep Chocolate / Dark Brown)
    const bgGrad = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 50, canvas.width / 2, canvas.height / 2, canvas.width / 1.5);
    bgGrad.addColorStop(0, '#2f1b12');
    bgGrad.addColorStop(1, '#130905');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 2. Draw border (Gold)
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    
    // 3. Draw Ticket Split Line (dashed line at 72%)
    const splitX = canvas.width * 0.72;
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 3;
    ctx.setLineDash([15, 10]);
    ctx.beginPath();
    ctx.moveTo(splitX, 15);
    ctx.lineTo(splitX, canvas.height - 15);
    ctx.stroke();
    ctx.setLineDash([]); // Reset dashed line
    
    // Draw notches (simulated on image as circles filled with background)
    // Left notch is at splitX, top (y=0) and bottom (y=height)
    ctx.fillStyle = '#120804'; // main body background
    ctx.beginPath();
    ctx.arc(splitX, 0, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(splitX, canvas.height, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // 4. Draw Branding & Title
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 24px Cinzel, Georgia, serif';
    ctx.letterSpacing = '5px';
    ctx.fillText("JOKJOKER48", 50, 60);
    
    let ticketTitle = "JOKI 2-SHOT TICKET";
    if (selectedService === "mng") ticketTitle = "JOKI MEET & GREET TICKET";
    if (selectedService === "videocall") ticketTitle = "JOKI VIDEO CALL TICKET";

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Cinzel, Georgia, serif';
    ctx.fillText(ticketTitle, 50, 110);
    
    // 5. Draw Details Grid (Left Section)
    const drawDetail = (lbl, val, x, y, highlight = false) => {
        ctx.fillStyle = '#8e786b';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.fillText(lbl, x, y);
        
        ctx.fillStyle = highlight ? '#d4af37' : '#f8f1ed';
        ctx.font = 'bold 20px Inter, sans-serif';
        // Truncate text if too long
        let valText = val || "-";
        
        const maxWidth = (lbl.includes("CADANGAN") || lbl.includes("PRIORITAS")) ? 700 : 340;
        if (ctx.measureText(valText).width > maxWidth) {
            while (ctx.measureText(valText + "...").width > maxWidth && valText.length > 0) {
                valText = valText.substring(0, valText.length - 1);
            }
            valText += "...";
        }
        ctx.fillText(valText, x, y + 28);
    };
    
    const cityVal = selectedService === "videocall" ? "ONLINE" : (cityInput.value ? cityInput.value.toUpperCase() : "-");
    const typeVal = accountTypeInput.value ? accountTypeInput.value.toUpperCase() : "-";
    
    // Collect priorities for drawing
    const priorities = [];
    if (priorityInput.value) {
        priorities.push(priorityInput.value.split(" - ")[0]);
    }
    const dynamicPrioritySelects = additionalPrioritiesContainer.querySelectorAll("select");
    dynamicPrioritySelects.forEach(select => {
        if (select.value) {
            priorities.push(select.value.split(" - ")[0]);
        }
    });
    const priorityVal = priorities.length > 0 ? priorities.join(", ") : "-";
    
    // Collect backups for drawing
    const backups = [];
    if (backupInput.value) {
        backups.push(backupInput.value.split(" - ")[0]);
    }
    const dynamicSelects = additionalBackupsContainer.querySelectorAll("select");
    dynamicSelects.forEach(select => {
        if (select.value) {
            backups.push(select.value.split(" - ")[0]);
        }
    });
    const backupVal = backups.length > 0 ? backups.join(", ") : "-";
    
    let priorityLabelText = "PRIORITAS 2-SHOT";
    let backupLabelText = "CADANGAN 2-SHOT";
    if (selectedService === "mng") {
        priorityLabelText = "PRIORITAS MnG";
        backupLabelText = "CADANGAN MnG";
    } else if (selectedService === "videocall") {
        priorityLabelText = "PRIORITAS VIDEO CALL";
        backupLabelText = "CADANGAN VIDEO CALL";
    }
    
    drawDetail("NAMA KOTA", cityVal, 50, 180);
    drawDetail("TIPE AKUN", typeVal, 420, 180);
    drawDetail(priorityLabelText, priorityVal, 50, 270, true);
    drawDetail(backupLabelText, backupVal, 50, 350);
    
    // 6. Draw Pricing details (Right Section)
    ctx.fillStyle = '#8e786b';
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("ESTIMASI BIAYA", (splitX + canvas.width) / 2, 70);
    
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 32px Inter, sans-serif';
    const priceText = typeof estimatedPrice === 'number' ? formatRupiah(estimatedPrice) : "Tanya Admin";
    ctx.fillText(priceText, (splitX + canvas.width) / 2, 115);
    
    // 7. Draw "READY" Stamp (Glow Gold, tilted)
    ctx.save();
    ctx.translate((splitX + canvas.width) / 2, 200);
    ctx.rotate(-8 * Math.PI / 180);
    
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 20px Cinzel, Georgia, serif';
    ctx.strokeRect(-60, -20, 120, 40);
    ctx.fillText("READY", 0, 7);
    ctx.restore();
    ctx.textAlign = 'left'; // Reset alignment
    
    // 8. Draw Barcode (Right Section Bottom)
    const barcodeStartX = splitX + 45;
    const barcodeWidth = canvas.width - splitX - 90;
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = 0.7;
    // Render lines for barcode
    for (let i = 0; i < barcodeWidth; i += 6) {
        const lineW = (i % 4 === 0) ? 3 : (i % 3 === 0) ? 1.5 : 2;
        ctx.fillRect(barcodeStartX + i, 305, lineW, 70);
    }
    ctx.globalAlpha = 1.0;
    
    ctx.fillStyle = '#8e786b';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("JOKER48-WAR-TICKET", (splitX + canvas.width) / 2, 395);
    ctx.textAlign = 'left'; // Reset alignment

    // 9. Trigger download of canvas
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `JokJoker48-Ticket-${cityVal.replace(/\s+/g, '-')}.png`;
    link.href = image;
    link.click();
    showToast("Tiket joki berhasil diunduh!");
}
