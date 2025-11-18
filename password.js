// ==================== COMPANY PASSWORD DATA ====================
const companyData = {
    'AFN SPORTS EQUIPMENT SDN BHD': { password: 'Afn@tkfant' },
    'AKER SOLUTIONS': { password: 'Aker@tkfant' },
    'ANSHIN': { password: 'Anshin@tkfant' },
    'ARATA AUTO CENTRE SDN BHD': { password: 'password123' },
    'BBCC DEVELOPMENT': { password: 'password123' },
    'CITY UNIVERSITY': { password: 'password123' },
    'CLICKASIA SDN BHD': { password: 'password123' },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': { password: 'password123' },
    'DHUB': { password: 'password123' },
    'ECRL': { password: 'password123' },
    'EXHIBITION SAMPLE': { password: 'password123' },
    'FEDEX-BUKIT JELUTONG': { password: 'password123' },
    'FEDEX-HITECH': { password: 'password123' },
    'FEDEX-KLIA': { password: 'password123' },
    'FINEGUARD INDUSTRIES': { password: 'password123' },
    'FOODAGON CONNEXION SDN BHD': { password: 'password123' },
    'FURI GLOBAL SDN BHD': { password: 'password123' },
    'GBB BAKERY': { password: 'password123' },
    'GOOD TIMING FOOD VILLAGE': { password: 'password123' },
    'HONDA LOGISTICS': { password: 'password123' },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': { password: 'password123' },
    'ISKANDAR INNOVATIONS SDN BHD': { password: 'password123' },
    'JOYCAMP PJ SDN BHD': { password: 'password123' },
    'KOH TIKI OKR SDN BHD': { password: 'password123' },
    'KUEHNE + NAGEL': { password: 'password123' },
    'LH ELECTRIC & SERVICES': { password: 'password123' },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': { password: 'password123' },
    'LUXE ACRE SDN BHD': { password: 'password123' },
    'MACRO PERSPECTIVE SDN BHD': { password: 'password123' },
    'MILLENNIUM WELT SDN BHD': { password: 'password123' },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': { password: 'password123' },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': { password: 'password123' },
    'PERCETAKAN TENAGA': { password: 'password123' },
    'PERODUA MANUFACTURING SDN BHD': { password: 'password123' },
    'REDVEST': { password: 'password123' },
    'SAGA MAKMUR SDN BHD': { password: 'password123' },
    'SEA ASIA SDN BHD': { password: 'password123' },
    'SIN TAI HING': { password: 'password123' },
    'SJK(C) HUA LIAN 3': { password: 'password123' },
    'SJK(C) KEHSENG': { password: 'password123' },
    'SK SAUJANA IMPIAN 2': { password: 'password123' },
    'SMK TELOK DATOK': { password: 'password123' },
    'SUNSET': { password: 'password123' },
    'T7 AERO REPORT': { password: 'password123' },
    'TAYLOR (TEG)': { password: 'password123' },
    'UCSI INTERNATIONAL SCHOOL SB': { password: 'password123' },
    'UPPER HERITAGE SDN BHD': { password: 'password123' }
};

// ==================== MOBILE MENU ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// ==================== PAGE INITIALIZATION ====================
const companyDisplay = document.getElementById('companyDisplay');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const helpSection = document.getElementById('helpSection');
const whatsappBtn = document.getElementById('whatsappBtn');

let attemptCount = 0;

// Get company name from localStorage
const companyName = localStorage.getItem('companyName');

if (!companyName) {
    // No company selected, redirect to home
    window.location.href = 'index.html';
} else {
    companyDisplay.textContent = companyName;
}

// ==================== TOGGLE PASSWORD VISIBILITY ====================
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
    }
});

// ==================== WHATSAPP SUPPORT ====================
whatsappBtn.addEventListener('click', () => {
    const phone = '601118769339';
    const message = `Hello, I need help accessing the service reports for ${companyName}. I'm having trouble with the password.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

// ==================== PASSWORD VERIFICATION ====================
passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === '') {
        showError('Please enter a password.');
        return;
    }
    
    // Disable submit button during verification
    submitBtn.disabled = true;
    submitBtn.textContent = 'VERIFYING...';
    
    // Simulate API call delay
    setTimeout(() => {
        const company = companyData[companyName];
        
        if (!company) {
            showError('Company not found in our records.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT';
            return;
        }
        
        if (company.password === enteredPassword) {
            // Password correct! Redirect to date selection
            localStorage.setItem('passwordVerified', 'true');
            window.location.href = 'date-selection.html';
        } else {
            // Password incorrect
            attemptCount++;
            showError('❌ Incorrect password. Please try again.');
            passwordInput.value = '';
            
            // Show help section after first failed attempt
            if (attemptCount >= 1) {
                helpSection.style.display = 'block';
            }
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT';
        }
    }, 500);
});

// ==================== ERROR MESSAGE DISPLAY ====================
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // Add shake animation
    passwordForm.style.animation = 'shake 0.5s';
    setTimeout(() => {
        passwordForm.style.animation = '';
    }, 500);
    
    // Hide error after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}
