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
            'Fan 1': 'https://drive.google.com/drive/folders/1WN_vnj9_st_JSm7GXcPxuuMWGK0ygNsq',
            'Fan 2': 'https://drive.google.com/drive/folders/1lAX-IvouUH2HjTIZZT9_0FUYRHeJS05f',
            'Fan 3': 'https://drive.google.com/drive/folders/1LKWzD-B7QHOzF4MDtmNIN3CXuvHTgXmB',
            'Fan 4': 'https://drive.google.com/drive/folders/1ph1CCmrLstHrgaJG0vmjrxXXqO1kphHv',
            'Fan 5': 'https://drive.google.com/drive/folders/1SipvpGLh_3oGBwSWTlKBABRGozRGxinQ',
            
        },
        '2025-11-16': {
            'Fan 1': 'https://drive.google.com/drive/folders/1NDSWJwiPYw9wRl-jBdxoJXSWwuGKWcra',
            'Fan 2': 'https://drive.google.com/drive/folders/1en6FSGYlh_ESrHV6DFhufsqQTtoE7O4l',
            'Fan 3': 'https://drive.google.com/drive/folders/11RcO0ibVI1n0QOtWGA9d-vTGJ5PzmRaL',
            'Fan 4': 'https://drive.google.com/drive/folders/1ARdZpEQnOTy549qEELMENftKsZ6WxFHu',
            'Fan 5': 'https://drive.google.com/drive/folders/1MlPdqc7tn-kl-0-8yHdrnkxRnZ_hXxJR',
            
        },
        '2024-08-24': {
            'Fan 1': 'https://drive.google.com/drive/folders/1ru7ramSqE-2X5auSbzNZXVXDafrGuf7x',
            'Fan 2': 'https://drive.google.com/drive/folders/17UHC1lTYrs_GGXMMDgbvNRb2RgClFc7T',
            'Fan 3': 'https://drive.google.com/drive/folders/172lfcJSOWkoxCSj5XbYbd7TzrKODv03M',
            'Fan 4': 'https://drive.google.com/drive/folders/10x0zdrKVqSP5_DOWiSgWC3XfzbVvCHn8',
            'Fan 5': 'https://drive.google.com/drive/folders/1Y9W6pQunGcU8nVwo9-YoO83NeFDLizh3',
        }
    },
    'ANSHIN': {
        '2025-01-07': {
            'Fan 1': 'https://drive.google.com/drive/folders/1AyGRJg1Ly4Az_DrrYt2kpIXi9woKfjyE',
            'Fan 2': 'https://drive.google.com/drive/folders/15AOmk2FvTeJ2EaeL5tq7RNk71GoQj9lY',
            'Fan 3': 'https://drive.google.com/drive/folders/13edlKJbHkS1JecLTzVCWvPiLdBS8xEDb',
        }
    },
    'ARATA AUTO CENTRE SDN BHD': {
        '2025-04-22': {
            'Fan 1': 'https://drive.google.com/drive/folders/18de7jhUFgtxLjFMt6BqVoriJmp_puQDc',
        }
    },
    'BBCC DEVELOPMENT': {
        '2025-03-27': {
            'Fan 6': 'https://drive.google.com/drive/folders/1pPVBku9Lbj2rhjqiXp7bDtLHcUMC2EJK',
        }
    },
    'CITY UNIVERSITY': {
        '2024-01-16': {
            'Fan 1': 'https://drive.google.com/drive/folders/1Iy8C-o9PK-zLBF3gBn74HKA3q_abxFbr',
        }
    },
    'CLICKASIA SDN BHD': {
        '2025-06-13': {
            'Fan 1': 'https://drive.google.com/drive/folders/1qejswm4pfKaNPDc2-kiXoOzp2Ha8q5wd',
            'Fan 2': 'https://drive.google.com/drive/folders/1_MjVr77vLsWJnN2nv0FYHXOV7DO7JjZW',
            'Fan 3': 'https://drive.google.com/drive/folders/18qrW0K31BEWF56mIxBUCVHi0QYX74pCF',
        }
    },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': {
        '2022-06-27': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1jLWePjP-2wNNiWqXBvxGOWpw0gYK8EiE',
        },
        '2025-05-20': {
            'Fan 1': 'https://drive.google.com/drive/folders/1KjQNBirf1_JupBTot6JGnJNkqpb8si-U',
        }     
    },
    'DHUB': {
        'Photo': {
            'Fan 1': 'https://drive.google.com/drive/folders/1_hOQXH_EOX_4Xklbh6WWorH51xbYweg4',
        }
    },
    'ECRL': {
        '2025-05-02': {
            'Fan 1': 'https://drive.google.com/drive/folders/1HQ551tl9ZEfAZfXQIrFLtq8rzX8E5EBD',
            'Fan 2': 'https://drive.google.com/drive/folders/127e4eh-GUpvL2XbmY4q1WlV0igvEA1kS',
        },
        2025-05-05': {
            'Fan 1': 'https://drive.google.com/drive/folders/1eomrJGC-bZyBJpVx3cnq8vREZ8vurECq',
        }        
    },
    'EXHIBITION SAMPLE': {
        '2025-04-25': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        },
        '2025-04-25': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-BUKIT JELUTONG': {
        'N/A': {
            'N/A': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'N/A': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-HITECH': {
        '2025-04-29': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 4': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        },
        '2025-08-08': {
            'Fan 4': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-KLIA': {
        '2025-04-16': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FINEGUARD INDUSTRIES': {
        '2025-07-04': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FOODAGON CONNEXION SDN BHD': {
        '2025-05-12': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FURI GLOBAL SDN BHD': {
        '2025-09-08': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'GBB BAKERY': {
        '2024-01-05': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'GOOD TIMING FOOD VILLAGE': {
        '2025-07-30': {
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'HONDA LOGISTICS': {
        '2022-09-29': {
            'C6(BIGASS)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C7(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C8(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C9(BIGASS)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C11(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C14(BIGASS)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'D15(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'E15(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'F14': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        },
        '2023-04-09': {
            'C6(9)(BIGASS)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C7(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C8(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C9(BIGASS)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C10(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C11(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C14(6)(BIGASS)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'D15(8)(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'E15(AIREGARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'F14(AIREGUARD)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        },
        '2023-10-07': {
            'B6': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'B7': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'B8': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'B10': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C6': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C7': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C8': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C9': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C10': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'C11': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view', 
            'C14': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',    
            'D15': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'E15': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'F14': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        },
         '2024-12-07': {
            'AIREGARD(Fan 2)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'AIREGARD(Fan 3)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'AIREGARD(Fan 5)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'AIREGARD(Fan 6)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'AIREGARD(Fan 8)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'AIREGARD(Fan 9)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'BIGASS(Fan 1)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'BIGASS(Fan 4)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'BIGASS(Fan 7)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'UHF-14(Fan 11)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'UHF-14(Fan 12)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'UHF-14(Fan 13)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'UHF-14(Fan 14)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': {
        '2025-08-01': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'ISKANDAR INNOVATIONS SDN BHD': {
        '2024-06-25': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/drive/folders/1-uDQQ_JqhY5J8CTiq2ikuiITVJlr_8DC',
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
            'Fan 5': 'https://drive.google.com/drive/folders/14LbTOfVDkr4H6vSv3nwyokdnkNtNaaqM',
            'Fan 6': 'https://drive.google.com/drive/folders/1F222aStI_HXgnj6O8PBQBivzjB5V8AFa',
            'Fan 7': 'https://drive.google.com/drive/folders/1-uDQQ_JqhY5J8CTiq2ikuiITVJlr_8DC',
        }
    },
    'JOYCAMP PJ SDN BHD': {
        '2024-10-26': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'KOH TIKI OKR SDN BHD': {
        '2025-06-09': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'KUEHNE + NAGEL': {
        '2023-12-19': {
            'Fan 1(Site A)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2(Site A)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3(Site A)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 4(Site A)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 5(Site B)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 6(Site B)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 7(Site B)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 8(D16/D18)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 9(D16/D18)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view'
            'Fan 10(D16/D18)': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view'
        }
    },
    'LH ELECTRIC & SERVICES': {
        '2025-04-25': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': {
        '2025-02-12': {
            'G1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G4': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G5': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G6': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G8': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G9': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G10': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G11': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G12': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G14': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G16': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G17': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'G18': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'LUXE ACRE SDN BHD': {
        '2025-03-07': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'MACRO PERSPECTIVE SDN BHD': {
        '2025-05-14': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'MILLENNIUM WELT SDN BHD': {
        '2025-02-05': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': {
        '2025-02-05': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': {
        '2025-04-04': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
            'Fan 5': 'https://drive.google.com/drive/folders/14LbTOfVDkr4H6vSv3nwyokdnkNtNaaqM',
            'Fan 6': 'https://drive.google.com/drive/folders/1F222aStI_HXgnj6O8PBQBivzjB5V8AFa',
        }
    },
    'PERCETAKAN TENAGA': {
        '2025-03-22': {
            'Fan 3': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'PERODUA MANUFACTURING SDN BHD': {
        '2023-10-28': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        },
        '2025-08-16': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'REDVEST': {
        '2025-06-17': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
        }
    },
    'SAGA MAKMUR SDN BHD': {
        '2025-02-09': {
            'Fan 1': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 2': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
            'Fan 5': 'https://drive.google.com/drive/folders/14LbTOfVDkr4H6vSv3nwyokdnkNtNaaqM',
        },
        '2025-03-25': {
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
        },
         '2025-04-09': {
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
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




