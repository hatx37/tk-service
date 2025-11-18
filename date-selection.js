// Service history data for each company
// FORMAT: Each date lists which fans were serviced on that specific date
// YOU MUST UPDATE THESE WITH YOUR ACTUAL SERVICE DATES
const companyServiceData = {
    'AFN SPORTS EQUIPMENT SDN BHD': {
        lastServiceDate: '2025-03-28',
        nextServiceDate: '2026-03-28',
        serviceDates: {
            '2025-03-28': ['Fan 1', 'Fan 2']
       }
    },
    'AKER SOLUTIONS': {
        lastServiceDate: '2025-08-16',
        nextServiceDate: '2026-08-16',
        serviceDates: {
            '2025-08-30': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2025-08-16': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2025-11-16': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2024-08-24': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
        }
    },
    'ANSHIN': {
        lastServiceDate: '2025-01-20',
        nextServiceDate: '2025-04-20',
        serviceDates: {
            '2025-01-20': ['Fan 1', 'Fan 2', 'Fan 3', 'Fan 4'],
            '2024-12-18': ['Fan 1', 'Fan 2'],
            '2024-11-25': ['Fan 3', 'Fan 4'],
            '2024-11-10': ['Fan 1', 'Fan 3'],
        }
    },
    'ARATA AUTO CENTRE SDN BHD': {
        lastServiceDate: '2025-01-12',
        nextServiceDate: '2025-04-12',
        serviceDates: {
            '2025-01-12': ['Fan 1', 'Fan 2'],
            '2024-12-08': ['Fan 1'],
            '2024-11-20': ['Fan 2'],
        }
    },
    'BBCC DEVELOPMENT': {
        lastServiceDate: '2025-01-18',
        nextServiceDate: '2025-04-18',
        serviceDates: {
            '2025-01-18': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2024-12-12': ['Fan 1', 'Fan 2'],
            '2024-11-28': ['Fan 3'],
        }
    },
    'CITY UNIVERSITY': {
        lastServiceDate: '2025-01-14',
        nextServiceDate: '2025-04-14',
        serviceDates: {
            '2025-01-14': ['Fan 1', 'Fan 2'],
            '2024-12-10': ['Fan 1'],
            '2024-11-18': ['Fan 2'],
        }
    },
    'CLICKASIA SDN BHD': {
        lastServiceDate: '2025-01-16',
        nextServiceDate: '2025-04-16',
        serviceDates: {
            '2025-01-16': ['Fan 1'],
            '2024-12-14': ['Fan 1'],
            '2024-11-12': ['Fan 1'],
        }
    },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': {
        lastServiceDate: '2025-01-11',
        nextServiceDate: '2025-04-11',
        serviceDates: {
            '2025-01-11': ['Fan 1', 'Fan 2'],
            '2024-12-09': ['Fan 1'],
            '2024-11-15': ['Fan 2'],
        }
    },
    'DHUB': {
        lastServiceDate: '2025-01-19',
        nextServiceDate: '2025-04-19',
        serviceDates: {
            '2025-01-19': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2024-12-16': ['Fan 1', 'Fan 2'],
            '2024-11-22': ['Fan 3'],
        }
    },
    'ECRL': {
        lastServiceDate: '2025-01-13',
        nextServiceDate: '2025-04-13',
        serviceDates: {
            '2025-01-13': ['Fan 1', 'Fan 2'],
            '2024-12-11': ['Fan 1'],
            '2024-11-19': ['Fan 2'],
        }
    },
    'EXHIBITION SAMPLE': {
        lastServiceDate: '2025-01-17',
        nextServiceDate: '2025-04-17',
        serviceDates: {
            '2025-01-17': ['Fan 1'],
            '2024-12-15': ['Fan 1'],
        }
    },
    'FEDEX-BUKIT JELUTONG': {
        lastServiceDate: '2025-01-21',
        nextServiceDate: '2025-04-21',
        serviceDates: {
            '2025-01-21': ['Fan 1', 'Fan 2'],
            '2024-12-19': ['Fan 1'],
            '2024-11-25': ['Fan 2'],
        }
    },
    'FEDEX-HITECH': {
        lastServiceDate: '2025-01-22',
        nextServiceDate: '2025-04-22',
        serviceDates: {
            '2025-01-22': ['Fan 1', 'Fan 2'],
            '2024-12-20': ['Fan 1', 'Fan 2'],
            '2024-11-18': ['Fan 1'],
        }
    },
    'FEDEX-KLIA': {
        lastServiceDate: '2025-01-23',
        nextServiceDate: '2025-04-23',
        serviceDates: {
            '2025-01-23': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2024-12-21': ['Fan 1', 'Fan 2'],
            '2024-11-20': ['Fan 3'],
        }
    },
    'FINEGUARD INDUSTRIES': {
        lastServiceDate: '2025-01-24',
        nextServiceDate: '2025-04-24',
        serviceDates: {
            '2025-01-24': ['Fan 1'],
            '2024-12-18': ['Fan 1'],
        }
    },
    'FOODAGON CONNEXION SDN BHD': {
        lastServiceDate: '2025-01-25',
        nextServiceDate: '2025-04-25',
        serviceDates: {
            '2025-01-25': ['Fan 1', 'Fan 2'],
            '2024-12-22': ['Fan 1'],
            '2024-11-28': ['Fan 2'],
        }
    },
    'FURI GLOBAL SDN BHD': {
        lastServiceDate: '2025-01-26',
        nextServiceDate: '2025-04-26',
        serviceDates: {
            '2025-01-26': ['Fan 1'],
            '2024-12-24': ['Fan 1'],
        }
    },
    'GBB BAKERY': {
        lastServiceDate: '2025-01-27',
        nextServiceDate: '2025-04-27',
        serviceDates: {
            '2025-01-27': ['Fan 1', 'Fan 2'],
            '2024-12-25': ['Fan 1'],
            '2024-11-30': ['Fan 2'],
        }
    },
    'GOOD TIMING FOOD VILLAGE': {
        lastServiceDate: '2025-01-28',
        nextServiceDate: '2025-04-28',
        serviceDates: {
            '2025-01-28': ['Fan 1', 'Fan 2'],
            '2024-12-26': ['Fan 1', 'Fan 2'],
        }
    },
    'HONDA LOGISTICS': {
        lastServiceDate: '2025-01-29',
        nextServiceDate: '2025-04-29',
        serviceDates: {
            '2025-01-29': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2024-12-28': ['Fan 1', 'Fan 2'],
            '2024-11-26': ['Fan 3'],
        }
    },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': {
        lastServiceDate: '2025-01-30',
        nextServiceDate: '2025-04-30',
        serviceDates: {
            '2025-01-30': ['Fan 1'],
            '2024-12-30': ['Fan 1'],
        }
    },
    'ISKANDAR INNOVATIONS SDN BHD': {
        lastServiceDate: '2025-01-31',
        nextServiceDate: '2025-05-01',
        serviceDates: {
            '2025-01-31': ['Fan 1'],
            '2024-12-29': ['Fan 1'],
        }
    },
    'JOYCAMP PJ SDN BHD': {
        lastServiceDate: '2025-02-01',
        nextServiceDate: '2025-05-02',
        serviceDates: {
            '2025-02-01': ['Fan 1', 'Fan 2'],
            '2025-01-05': ['Fan 1'],
            '2024-12-15': ['Fan 2'],
        }
    },
    'KOH TIKI OKR SDN BHD': {
        lastServiceDate: '2025-02-02',
        nextServiceDate: '2025-05-03',
        serviceDates: {
            '2025-02-02': ['Fan 1'],
            '2025-01-10': ['Fan 1'],
        }
    },
    'KUEHNE + NAGEL': {
        lastServiceDate: '2025-02-03',
        nextServiceDate: '2025-05-04',
        serviceDates: {
            '2025-02-03': ['Fan 1', 'Fan 2'],
            '2025-01-08': ['Fan 1'],
            '2024-12-20': ['Fan 2'],
        }
    },
    'LH ELECTRIC & SERVICES': {
        lastServiceDate: '2025-02-04',
        nextServiceDate: '2025-05-05',
        serviceDates: {
            '2025-02-04': ['Fan 1'],
            '2025-01-12': ['Fan 1'],
        }
    },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': {
        lastServiceDate: '2025-02-05',
        nextServiceDate: '2025-05-06',
        serviceDates: {
            '2025-02-05': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2025-01-15': ['Fan 1', 'Fan 2'],
            '2024-12-18': ['Fan 3'],
        }
    },
    'LUXE ACRE SDN BHD': {
        lastServiceDate: '2025-02-06',
        nextServiceDate: '2025-05-07',
        serviceDates: {
            '2025-02-06': ['Fan 1'],
            '2025-01-18': ['Fan 1'],
        }
    },
    'MACRO PERSPECTIVE SDN BHD': {
        lastServiceDate: '2025-02-07',
        nextServiceDate: '2025-05-08',
        serviceDates: {
            '2025-02-07': ['Fan 1', 'Fan 2'],
            '2025-01-20': ['Fan 1'],
            '2024-12-25': ['Fan 2'],
        }
    },
    'MILLENNIUM WELT SDN BHD': {
        lastServiceDate: '2025-02-08',
        nextServiceDate: '2025-05-09',
        serviceDates: {
            '2025-02-08': ['Fan 1'],
            '2025-01-22': ['Fan 1'],
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': {
        lastServiceDate: '2025-02-09',
        nextServiceDate: '2025-05-10',
        serviceDates: {
            '2025-02-09': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2025-01-25': ['Fan 1', 'Fan 2'],
            '2024-12-28': ['Fan 3'],
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': {
        lastServiceDate: '2025-02-10',
        nextServiceDate: '2025-05-11',
        serviceDates: {
            '2025-02-10': ['Fan 1', 'Fan 2'],
            '2025-01-28': ['Fan 1'],
            '2024-12-30': ['Fan 2'],
        }
    },
    'PERCETAKAN TENAGA': {
        lastServiceDate: '2025-02-11',
        nextServiceDate: '2025-05-12',
        serviceDates: {
            '2025-02-11': ['Fan 1'],
            '2025-01-30': ['Fan 1'],
        }
    },
    'PERODUA MANUFACTURING SDN BHD': {
        lastServiceDate: '2025-02-12',
        nextServiceDate: '2025-05-13',
        serviceDates: {
            '2025-02-12': ['Fan 1', 'Fan 2', 'Fan 3'],
            '2025-02-01': ['Fan 1', 'Fan 2'],
            '2025-01-15': ['Fan 3'],
        }
    },
    'REDVEST': {
        lastServiceDate: '2025-02-13',
        nextServiceDate: '2025-05-14',
        serviceDates: {
            '2025-02-13': ['Fan 1'],
            '2025-02-03': ['Fan 1'],
        }
    },
    'SAGA MAKMUR SDN BHD': {
        lastServiceDate: '2025-02-14',
        nextServiceDate: '2025-05-15',
        serviceDates: {
            '2025-02-14': ['Fan 1', 'Fan 2'],
            '2025-02-05': ['Fan 1'],
            '2025-01-20': ['Fan 2'],
        }
    },
    'SEA ASIA SDN BHD': {
        lastServiceDate: '2025-02-15',
        nextServiceDate: '2025-05-16',
        serviceDates: {
            '2025-02-15': ['Fan 1'],
            '2025-02-08': ['Fan 1'],
        }
    },
    'SIN TAI HING': {
        lastServiceDate: '2025-02-16',
        nextServiceDate: '2025-05-17',
        serviceDates: {
            '2025-02-16': ['Fan 1', 'Fan 2'],
            '2025-02-10': ['Fan 1'],
            '2025-01-25': ['Fan 2'],
        }
    },
    'SJK(C) HUA LIAN 3': {
        lastServiceDate: '2025-02-17',
        nextServiceDate: '2025-05-18',
        serviceDates: {
            '2025-02-17': ['Fan 1'],
            '2025-02-12': ['Fan 1'],
        }
    },
    'SJK(C) KEHSENG': {
        lastServiceDate: '2025-02-18',
        nextServiceDate: '2025-05-19',
        serviceDates: {
            '2025-02-18': ['Fan 1'],
            '2025-02-14': ['Fan 1'],
        }
    },
    'SK SAUJANA IMPIAN 2': {
        lastServiceDate: '2025-02-19',
        nextServiceDate: '2025-05-20',
        serviceDates: {
            '2025-02-19': ['Fan 1', 'Fan 2'],
            '2025-02-15': ['Fan 1'],
            '2025-02-05': ['Fan 2'],
        }
    },
    'SMK TELOK DATOK': {
        lastServiceDate: '2025-02-20',
        nextServiceDate: '2025-05-21',
        serviceDates: {
            '2025-02-20': ['Fan 1'],
            '2025-02-16': ['Fan 1'],
        }
    },
    'SUNSET': {
        lastServiceDate: '2025-02-21',
        nextServiceDate: '2025-05-22',
        serviceDates: {
            '2025-02-21': ['Fan 1', 'Fan 2'],
            '2025-02-18': ['Fan 1'],
            '2025-02-10': ['Fan 2'],
        }
    },
    'T7 AERO REPORT': {
        lastServiceDate: '2025-02-22',
        nextServiceDate: '2025-05-23',
        serviceDates: {
            '2025-02-22': ['Fan 1'],
            '2025-02-20': ['Fan 1'],
        }
    },
    'TAYLOR (TEG)': {
        lastServiceDate: '2025-02-23',
        nextServiceDate: '2025-05-24',
        serviceDates: {
            '2025-02-23': ['Fan 1', 'Fan 2'],
            '2025-02-19': ['Fan 1'],
            '2025-02-12': ['Fan 2'],
        }
    },
    'UCSI INTERNATIONAL SCHOOL SB': {
        lastServiceDate: '2025-02-24',
        nextServiceDate: '2025-05-25',
        serviceDates: {
            '2025-02-24': ['Fan 1', 'Fan 2'],
            '2025-02-20': ['Fan 1'],
            '2025-02-15': ['Fan 2'],
        }
    },
    'UPPER HERITAGE SDN BHD': {
        lastServiceDate: '2025-02-25',
        nextServiceDate: '2025-05-26',
        serviceDates: {
            '2025-02-25': ['Fan 1'],
            '2025-02-22': ['Fan 1'],
        }
    }
};

// Format date to readable string
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// Calculate days until next service
function getDaysUntil(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(dateString);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
        return 'Overdue';
    } else if (diffDays === 0) {
        return 'Today';
    } else if (diffDays === 1) {
        return 'Tomorrow';
    } else {
        return `in ${diffDays} days`;
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// Open WhatsApp
function openWhatsApp() {
    const whatsappNumber = '60111876933';
    const message = 'Hello, I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Go back to password page
function goBack() {
    window.location.href = 'password.html';
}

// Select a specific date - saves date and proceeds to fan selection
function selectServiceDate(dateString) {
    const companyName = localStorage.getItem('companyName');
    
    if (!companyName) {
        alert('Company name not found. Please start over.');
        window.location.href = 'index.html';
        return;
    }
    
    // Normalize company name for lookup
    const normalizedCompanyName = companyName.toUpperCase().trim();
    
    // Get company service data
    const companyData = companyServiceData[normalizedCompanyName];
    
    if (!companyData) {
        alert('No service data found for this company.');
        return;
    }
    
    // Get fans serviced on this date
    const fansServiced = companyData.serviceDates[dateString];
    
    if (!fansServiced || fansServiced.length === 0) {
        alert(`No fans were serviced on ${formatDate(dateString)}. Please select another date.`);
        return;
    }
    
    // Store the selected date and fans serviced
    localStorage.setItem('selectedServiceDate', dateString);
    localStorage.setItem('fansServiced', JSON.stringify(fansServiced));
    
    // Redirect to fan selection page
    window.location.href = 'fan-selection.html';
}

// Load company service data and display available dates
window.addEventListener('DOMContentLoaded', function() {
    const companyName = localStorage.getItem('companyName');
    const companyDisplay = document.getElementById('companyDisplay');
    const lastServiceDateEl = document.getElementById('lastServiceDate');
    const nextServiceDateEl = document.getElementById('nextServiceDate');
    const datesListEl = document.getElementById('datesList');
    
    if (!companyName) {
        // If no company name, redirect back to search
        window.location.href = 'index.html';
        return;
    }
    
    companyDisplay.textContent = companyName;
    
    // Normalize company name for lookup
    const normalizedCompanyName = companyName.toUpperCase().trim();
    
    // Get company service data
    const companyData = companyServiceData[normalizedCompanyName];
    
    if (!companyData) {
        lastServiceDateEl.textContent = 'No data available';
        nextServiceDateEl.textContent = 'No data available';
        datesListEl.innerHTML = '<p class="no-dates">No service dates found</p>';
        return;
    }
    
    // Display last service date
    const lastDate = formatDate(companyData.lastServiceDate);
    lastServiceDateEl.innerHTML = `<strong>${lastDate}</strong>`;
    
    // Display next service date with countdown
    const nextDate = formatDate(companyData.nextServiceDate);
    const daysUntil = getDaysUntil(companyData.nextServiceDate);
    nextServiceDateEl.innerHTML = `<strong>${nextDate}</strong><br><span class="days-until">(${daysUntil})</span>`;
    
    // Display available service dates as clickable buttons
    const serviceDates = Object.keys(companyData.serviceDates).sort().reverse();
    
    if (serviceDates.length > 0) {
        datesListEl.innerHTML = '<h3 style="color: #1a73e8; margin-bottom: 15px; text-align: center;">📅 Select Service Date</h3>';
        serviceDates.forEach(date => {
            const fans = companyData.serviceDates[date];
            const dateBtn = document.createElement('button');
            dateBtn.className = 'date-btn';
            dateBtn.onclick = () => selectServiceDate(date);
            dateBtn.innerHTML = `
                <span class="date-btn-date">${formatDate(date)}</span>
                <span class="date-btn-fans">${fans.length} fan(s) serviced: ${fans.join(', ')}</span>
            `;
            datesListEl.appendChild(dateBtn);
        });
    } else {
        datesListEl.innerHTML = '<p class="no-dates">No service dates available</p>';
    }
});
