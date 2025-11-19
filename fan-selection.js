// Google Drive report URLs for each company
// FORMAT: company -> date -> fan -> specific Google Drive file URL
// Each fan on each date has its own unique service report URL
const companyReportLinks = {
    'AFN SPORTS EQUIPMENT SDN BHD': {
        '2025-03-28': {
            'Fan 1': 'https://drive.google.com/drive/folders/1uRfh_HV3ly_JvUMurlineU8-H8Ru5gRq',
            'Fan 2': 'https://drive.google.com/drive/folders/13Bx5E8-sdQZDXOp7S_rGW8V8c6MEt-WK',
        }
    },
    'AKER SOLUTIONS': {
        '2025-08-30': {
            'Fan 1': 'https://drive.google.com/drive/folders/1F222aStI_HXgnj6O8PBQBivzjB5V8AFa',
            'Fan 2': 'https://drive.google.com/drive/folders/1-uDQQ_JqhY5J8CTiq2ikuiITVJlr_8DC',
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
            'Fan 5': 'https://drive.google.com/drive/folders/14LbTOfVDkr4H6vSv3nwyokdnkNtNaaqM',

        },
        '2025-08-16': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ANSHIN': {
        '2025-01-20': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 4': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ARATA AUTO CENTRE SDN BHD': {
        '2025-01-12': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'BBCC DEVELOPMENT': {
        '2025-01-18': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'CITY UNIVERSITY': {
        '2025-01-14': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'CLICKASIA SDN BHD': {
        '2025-01-16': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': {
        '2025-01-11': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'DHUB': {
        '2025-01-19': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ECRL': {
        '2025-01-13': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'EXHIBITION SAMPLE': {
        '2025-01-17': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-BUKIT JELUTONG': {
        '2025-01-21': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-HITECH': {
        '2025-01-22': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-KLIA': {
        '2025-01-23': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FINEGUARD INDUSTRIES': {
        '2025-01-24': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FOODAGON CONNEXION SDN BHD': {
        '2025-01-25': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FURI GLOBAL SDN BHD': {
        '2025-01-26': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'GBB BAKERY': {
        '2025-01-27': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'GOOD TIMING FOOD VILLAGE': {
        '2025-01-28': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'HONDA LOGISTICS': {
        '2025-01-29': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': {
        '2025-01-30': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ISKANDAR INNOVATIONS SDN BHD': {
        '2025-01-31': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'JOYCAMP PJ SDN BHD': {
        '2025-02-01': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'KOH TIKI OKR SDN BHD': {
        '2025-02-02': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'KUEHNE + NAGEL': {
        '2025-02-03': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'LH ELECTRIC & SERVICES': {
        '2025-02-04': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': {
        '2025-02-05': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'LUXE ACRE SDN BHD': {
        '2025-02-06': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'MACRO PERSPECTIVE SDN BHD': {
        '2025-02-07': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'MILLENNIUM WELT SDN BHD': {
        '2025-02-08': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': {
        '2025-02-09': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': {
        '2025-02-10': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'PERCETAKAN TENAGA': {
        '2025-02-11': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'PERODUA MANUFACTURING SDN BHD': {
        '2025-02-12': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'REDVEST': {
        '2025-02-13': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SAGA MAKMUR SDN BHD': {
        '2025-02-14': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SEA ASIA SDN BHD': {
        '2025-02-15': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SIN TAI HING': {
        '2025-02-16': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SJK(C) HUA LIAN 3': {
        '2025-02-17': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SJK(C) KEHSENG': {
        '2025-02-18': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SK SAUJANA IMPIAN 2': {
        '2025-02-19': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SMK TELOK DATOK': {
        '2025-02-20': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'SUNSET': {
        '2025-02-21': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'T7 AERO REPORT': {
        '2025-02-22': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'TAYLOR (TEG)': {
        '2025-02-23': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'UCSI INTERNATIONAL SCHOOL SB': {
        '2025-02-24': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'UPPER HERITAGE SDN BHD': {
        '2025-02-25': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    }
};

// Format date to readable string
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
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

// Go back to date selection
function goBack() {
    window.location.href = 'date-selection.html';
}

// View specific fan report for the selected date
function viewReport(fanName) {
    const companyName = localStorage.getItem('companyName');
    const selectedDate = localStorage.getItem('selectedServiceDate');
    
    if (!companyName || !selectedDate) {
        alert('Missing information. Please start over.');
        window.location.href = 'index.html';
        return;
    }
    
    // Normalize company name for lookup
    const normalizedCompanyName = companyName.toUpperCase().trim();
    
    // Get the specific report URL for this company, date, and fan
    const companyReports = companyReportLinks[normalizedCompanyName];
    
    if (!companyReports) {
        alert('No reports found for this company.');
        return;
    }
    
    const dateReports = companyReports[selectedDate];
    
    if (!dateReports) {
        alert(`No reports found for ${formatDate(selectedDate)}.`);
        return;
    }
    
    const reportUrl = dateReports[fanName];
    
    if (!reportUrl || reportUrl.includes('YOUR_FILE_ID_HERE')) {
        alert(`Service report not configured for ${fanName} on ${formatDate(selectedDate)}.\n\nPlease contact support.`);
        return;
    }
    
    // Open the specific Google Drive report in new tab
    window.open(reportUrl, '_blank');
    
    // Log for debugging
    console.log(`Opening report:\nCompany: ${companyName}\nDate: ${selectedDate}\nFan: ${fanName}\nURL: ${reportUrl}`);
}

// Load fan selection data for the selected date
window.addEventListener('DOMContentLoaded', function() {
    const companyName = localStorage.getItem('companyName');
    const selectedDate = localStorage.getItem('selectedServiceDate');
    const fansServicedData = localStorage.getItem('fansServiced');
    
    const companyDisplay = document.getElementById('companyDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
    const fanGridEl = document.getElementById('fanGrid');
    
    // Validate required data
    if (!companyName || !selectedDate || !fansServicedData) {
        alert('Missing required information. Redirecting to start...');
        window.location.href = 'index.html';
        return;
    }
    
    // Parse fans serviced
    let fansServiced;
    try {
        fansServiced = JSON.parse(fansServicedData);
    } catch (e) {
        alert('Error loading fan data. Please try again.');
        window.location.href = 'date-selection.html';
        return;
    }
    
    // Display company and date
    companyDisplay.textContent = companyName;
    dateDisplay.textContent = formatDate(selectedDate);
    
    // Generate fan buttons for this specific date
    if (fansServiced && fansServiced.length > 0) {
        fanGridEl.innerHTML = '';
        fansServiced.forEach(fanName => {
            const fanBtn = document.createElement('button');
            fanBtn.className = 'fan-btn';
            fanBtn.onclick = () => viewReport(fanName);
            fanBtn.innerHTML = `
                <div class="fan-icon"> ⚙ </div>
                <div class="fan-name">${fanName}</div>
                <div class="fan-action">View Report →</div>
            `;
            fanGridEl.appendChild(fanBtn);
        });
    } else {
        fanGridEl.innerHTML = '<p class="no-fans">No fans serviced on this date</p>';
    }

});
