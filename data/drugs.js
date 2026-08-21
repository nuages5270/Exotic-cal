const drugDatabase = {
    "acetylcysteine": {
        "name": "Acetylcysteine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 15,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "NB": {
                        "dose": {
                            "min": null,
                            "max": 50,
                            "unit": "mg"
                        },
                        "frequency": "BID-QID",
                        "note": "調製為2%噴霧溶液"
                    }
                }
            }
        }
    },
    "amikacin": {
        "name": "Amikacin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 2,
                            "max": 5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID",
                        "note": "腎功能"
                    }
                }
            }
        }
    },
    "acepromazine": {
        "name": "Acepromazine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 0.5,
                            "max": 1,
                            "unit": "mg/kg"
                        },
                        "note": "鎮靜"
                    }
                }
            }
        }
    },
    "aminophylline": {
        "name": "Aminophylline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": null,
                            "max": null,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "ampicillin sodium": {
        "name": "Ampicillin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 50,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q6-4H"
                    },
                    "PO": {
                        "dose": {
                            "min": 150,
                            "max": 200,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "amoxicillin": {
        "name": "Amoxicillin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 75,
                            "max": 150,
                            "unit": "mg/kg"
                        },
                        "note": "最高可到225 mg/kg"
                    }
                }
            }
        }
    },
    "amoxicillin_clavulanate": {
        "name": "Amoxicillin/Clavulanate",
        "aliases": [
            "Augmentin"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 125,
                            "max": 125,
                            "unit": "mg/kg"
                        },
                        "note": "最高可到225 mg/kg"
                    }
                }
            }
        }
    },
    "azithromycin": {
        "name": "Azithromycin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 40,
                            "max": 50,
                            "unit": "mg/kg"
                        },
                        "note": "可混合 lactulose 冷藏3-4周"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 15,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "膿瘍/骨髓炎/菌叢失衡（30mg）；Erythromycin造成腸毒血症風險高，不建議"
                    }
                }
            }
        }
    },
    "bromelain": {
        "name": "Bromelain",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "bromhexine": {
        "name": "Bromhexine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 1,
                            "max": 1,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.3,
                            "max": 0.3,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID"
                    }
                }
            }
        }
    },
    "bupivacaine": {
        "name": "Bupivacaine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "buprenorphine": {
        "name": "Buprenorphine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 0.1,
                            "max": 0.6,
                            "unit": "mg/kg"
                        },
                        "note": "此劑量對Cockatiel沒有顯著鎮靜&止痛效果"
                    }
                }
            }
        }
    },
    "butorphanol": {
        "name": "Butorphanol",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 0.5,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "約可持續4hr"
                    },
                    "IV": {
                        "dose": {
                            "min": 0.5,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "鎮靜"
                    }
                }
            }
        }
    },
    "cefadroxil": {
        "name": "Cefadroxil",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 100,
                            "max": 100,
                            "unit": ""
                        }
                    }
                }
            }
        }
    },
    "cefazolin": {
        "name": "Cefazolin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 25,
                            "max": 50,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "cefixime": {
        "name": "Cefixime",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "ceftazidime": {
        "name": "Ceftazidime",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 50,
                            "max": 100,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 50,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID"
                    }
                }
            }
        }
    },
    "albendazole": {
        "name": "albendazole",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "note": "治療E. cuniculi/持續3-14天"
                    }
                }
            }
        }
    },
    "ceftiofur": {
        "name": "Ceftiofur",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "ceftriaxone": {
        "name": "Ceftriaxone",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 30,
                            "max": 50,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "celecoxib": {
        "name": "Celecoxib",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "提升至30–40 mg/kg可穿BBB"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 68,
                            "max": 68,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "cephalexin": {
        "name": "Cephalexin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 75,
                            "max": 150,
                            "unit": "mg/kg"
                        },
                        "note": "BSAVA: 35-100mg(PO, IM)"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 15,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-SID",
                        "note": "菌叢失衡/腸毒血症；可有效抑制呼吸道感染；可結合外用Cephalonium軟膏治療眼部感染"
                    }
                }
            }
        }
    },
    "cetirizine": {
        "name": "Cetirizine",
        "aliases": [
            "Cety"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.1,
                            "max": 0.1,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "ciprofloxacin": {
        "name": "Ciprofloxacin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 15,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "80mg SID"
                    },
                    "IM, IV": {
                        "dose": {
                            "min": 15,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "眼科用藥；可於淚膜維持治療濃度6小時"
                    }
                }
            }
        }
    },
    "benazepril": {
        "name": "Benazepril",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.05,
                            "max": 0.25,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "治療CHF與CRF造成的高血壓"
                    }
                }
            }
        }
    },
    "clarithromycin": {
        "name": "Clarithromycin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 60,
                            "max": 60,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "影響p-糖蛋白功能；若鳥隻同時使用avermectins類驅蟲藥需特別小心"
                    }
                }
            }
        }
    },
    "clindamycin": {
        "name": "Clindamycin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "TID-SID",
                        "note": "注射部位壞死"
                    }
                }
            }
        }
    },
    "colistin": {
        "name": "Colistin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 0.03,
                            "max": 0.05,
                            "unit": "g/kg"
                        }
                    }
                }
            }
        }
    },
    "cyproheptadine": {
        "name": "Cyproheptadine",
        "aliases": [
            "pillian"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 2.5,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "doxycycline": {
        "name": "Doxycycline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 500,
                            "max": 800,
                            "unit": "mg/L"
                        },
                        "frequency": "飲水",
                        "note": "飲水投予"
                    },
                    "IM": {
                        "dose": {
                            "min": 75,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q5D"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2.5,
                            "max": 4,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID"
                    }
                }
            }
        }
    },
    "enrofloxacin": {
        "name": "Enrofloxacin",
        "aliases": [
            "Baytril"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 15,
                            "unit": "mg/kg"
                        }
                    },
                    "IM": {
                        "dose": {
                            "min": 10,
                            "max": 15,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 5,
                            "max": 5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "不應用為第一線"
                    },
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "不應用為第一線"
                    }
                }
            }
        }
    },
    "erythromycin": {
        "name": "Erythromycin",
        "aliases": [
            "紅黴素"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "famotidine": {
        "name": "Famotidine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "chlorpheniramine": {
        "name": "Chlorpheniramine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 200,
                            "max": 400,
                            "unit": "ug/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "fentanyl": {
        "name": "Fentanyl",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "ug/kg"
                        }
                    },
                    "IV-CRI": {
                        "dose": {
                            "min": 0.15,
                            "max": 0.5,
                            "unit": "ug/kg/min"
                        }
                    },
                    "SC": {
                        "dose": {
                            "min": 0.2,
                            "max": 0.2,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "fexofenadine": {
        "name": "Fexofenadine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 3,
                            "max": 5,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "gabapentin": {
        "name": "Gabapentin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 25,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID"
                    }
                }
            }
        }
    },
    "gascon": {
        "name": "Gascon",
        "aliases": [
            "Dimethicone"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 4,
                            "unit": "mg/kg"
                        },
                        "note": "每10kg 0.5–1#"
                    }
                }
            }
        }
    },
    "lidocaine": {
        "name": "Lidocaine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 1,
                            "max": 4,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "IV": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "note": "抗心律不整；疼痛控制"
                    }
                }
            }
        }
    },
    "lincospectin": {
        "name": "Lincospectin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 0.03,
                            "max": 0.03,
                            "unit": "mL/100g"
                        },
                        "note": "稀釋"
                    }
                }
            }
        }
    },
    "cisapride": {
        "name": "Cisapride",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "促蠕動"
                    }
                }
            }
        }
    },
    "meropenem": {
        "name": "Meropenem",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 175,
                            "max": 175,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "鴿子劑量"
                    }
                }
            }
        }
    },
    "maropitant": {
        "name": "Maropitant",
        "aliases": [
            "Cerenia",
            "cerenia"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 1,
                            "max": 3,
                            "unit": "mg/kg"
                        }
                    },
                    "IM": {
                        "dose": {
                            "min": 1,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "50g=0.015ml"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 1,
                            "max": 1,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID"
                    }
                }
            }
        }
    },
    "meloxicam": {
        "name": "Meloxicam",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.2,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID-BID",
                        "note": "玄鳳給予後前胃擴張症狀惡化；灰鸚高劑量可能出現中毒"
                    },
                    "IM": {
                        "dose": {
                            "min": 0.2,
                            "max": 0.5,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.3,
                            "max": 0.6,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID-TID"
                    },
                    "SC": {
                        "dose": {
                            "min": 0.3,
                            "max": 0.6,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID-TID"
                    }
                }
            }
        }
    },
    "metoclopramide": {
        "name": "Metoclopramide",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.1,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    },
                    "IM": {
                        "dose": {
                            "min": 0.1,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    },
                    "SC": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "dexamethasone": {
        "name": "dexamethasone",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 1,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "消炎"
                    }
                }
            },
            "avian": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "metronidazole": {
        "name": "Metronidazole",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "BIS-SID",
                        "note": "Febendazole在玄鳳有毒性"
                    },
                    "IM": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "Febendazole在玄鳳有毒性"
                    }
                }
            },
            "rodent": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 25,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "腸毒血症治療首選"
                    }
                }
            }
        }
    },
    "diazepam": {
        "name": "diazepam",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "note": "鎮靜"
                    }
                }
            }
        }
    },
    "midazolam": {
        "name": "Midazolam",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 0.25,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "反轉 Flumazenil 0.01–0.1 mg/kg"
                    },
                    "IN": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "note": "反轉 Flumazenil 0.02–0.1 mg/kg IM or IN"
                    }
                }
            }
        }
    },
    "minocycline": {
        "name": "Minocycline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "digoxin": {
        "name": "digoxin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.005,
                            "max": 0.1,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID-Q2D",
                        "note": "CHF"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "ug/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "mosapride": {
        "name": "Mosapride",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "diltiazem": {
        "name": "diltiazem",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 1,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "心臟適應症劑量"
                    }
                }
            }
        }
    },
    "ofloxacin": {
        "name": "Ofloxacin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "omeprazole": {
        "name": "Omeprazole",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "潰瘍；Omeprazole 20 mg（1顆）+ 20mL 70mg/mL重曹溶液（1mg/mL）"
                    }
                }
            }
        }
    },
    "diphenhydramine": {
        "name": "diphenhydramine",
        "aliases": [
            "vena"
        ],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID",
                        "note": "用於斜頸"
                    }
                }
            }
        }
    },
    "domperidone": {
        "name": "Domperidone",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "作用與meto相似"
                    }
                }
            }
        }
    },
    "oxytetracycline": {
        "name": "Oxytetracycline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 50,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q2-3D",
                        "note": "50-75mg Macaw"
                    },
                    "PO": {
                        "dose": {
                            "min": 650,
                            "max": 2000,
                            "unit": "mg/L"
                        },
                        "frequency": "5-14day",
                        "note": "飲水投予"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 15,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q3D"
                    },
                    "PO": {
                        "dose": {
                            "min": 50,
                            "max": 50,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q3D"
                    }
                }
            }
        }
    },
    "piroximcam": {
        "name": "Piroxicam",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 1,
                            "unit": "mg/kg"
                        },
                        "note": "慢性退化性關節炎；0.6 mg/kg可能造成腸胃道潰瘍"
                    }
                }
            }
        }
    },
    "piperacillin": {
        "name": "Piperacillin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, IV": {
                        "dose": {
                            "min": 100,
                            "max": 200,
                            "unit": ""
                        }
                    }
                }
            }
        }
    },
    "rifampin": {
        "name": "Rifampin",
        "aliases": [
            "Rifampim"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 45,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-SID",
                        "note": "標準量10-20; 高劑量45"
                    }
                }
            }
        }
    },
    "robenacoxib": {
        "name": "Robenacoxib",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 5,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q5-7d",
                        "note": "3–6 weeks"
                    }
                }
            }
        }
    },
    "shotapen": {
        "name": "Shotapen",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 0.03,
                            "max": 0.03,
                            "unit": "mL/100g"
                        }
                    }
                }
            }
        }
    },
    "sucralfate": {
        "name": "Sucralfate",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 25,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q8h"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 25,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID"
                    }
                }
            }
        }
    },
    "theophylline": {
        "name": "Theophylline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": null,
                            "max": null,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID"
                    }
                }
            },
            "rodent": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID"
                    }
                }
            }
        }
    },
    "thiotic_acid": {
        "name": "Thiotic acid",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "tramadol": {
        "name": "Tramadol",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "note": "劑量太高會抑制腸胃；大型鳥需要較低劑量"
                    },
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q8-12h",
                        "note": "劑量太高會抑制腸胃；大型鳥需要較低的劑量"
                    }
                }
            }
        }
    },
    "tranexamic": {
        "name": "tranexamic acid",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        }
                    },
                    "IM": {
                        "dose": {
                            "min": 20,
                            "max": 50,
                            "unit": "mg/kg"
                        },
                        "note": "0.04 mL/100g；高劑量50 mg/kg（100g/0.1mL）；噁心感、吐"
                    }
                }
            }
        }
    },
    "trimethoprim_sulfa": {
        "name": "Trimethoprim/sulfa",
        "aliases": [],
        "species": {
            "rodent": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 15,
                            "max": 30,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "trimethoprim_sulfadiazine": {
        "name": "Trimethoprim/Sulfadiazine",
        "aliases": [
            "TS"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 50,
                            "max": 50,
                            "unit": "mg/kg"
                        },
                        "note": "金剛對TS敏感；投藥時要注意腎臟"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 30,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "TS類-結晶尿&腎衰竭（兔子尿偏鹼，比較不會發生）"
                    },
                    "SC": {
                        "dose": {
                            "min": 48,
                            "max": 48,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "TS類-結晶尿&腎衰竭（兔子尿偏鹼，比較不會發生）"
                    }
                }
            }
        }
    },
    "enalapril": {
        "name": "enalapril",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.25,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID-Q2D",
                        "note": "治療CHF與CRF造成的高血壓"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 2.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-SID"
                    }
                }
            }
        }
    },
    "tylosin": {
        "name": "Tylosin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 20,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "note": "飲水200–500mg/L 7–10天；霧化10mg/mL"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "誘發腸毒血症的可能性不清楚，暫不推薦使用"
                    }
                }
            }
        }
    },
    "tiamulin": {
        "name": "Tiamulin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 50,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID"
                    }
                }
            }
        }
    },
    "vitamin_c": {
        "name": "Vitamin C",
        "aliases": [
            "Vit C"
        ],
        "species": {
            "rodent": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 30,
                            "max": 50,
                            "unit": "mg/kg"
                        }
                    },
                    "PO": {
                        "dose": {
                            "min": 30,
                            "max": 50,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 50,
                            "max": 100,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "fenbendazole": {
        "name": "fenbendazole",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "治療E.cuniculi"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "once; SID(50mg) x3 days",
                        "note": "腸道線蟲；梨邊；玄鳳有毒性"
                    }
                }
            }
        }
    },
    "fluconazole": {
        "name": "fluconazole",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 15,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "flunixin": {
        "name": "flunixin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 1.1,
                            "max": 1.1,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "低血壓謹慎使用"
                    }
                }
            }
        }
    },
    "furosemide": {
        "name": "furosemide",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "IM, SC, IV": {
                        "dose": {
                            "min": 0.3,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    },
                    "IM": {
                        "dose": {
                            "min": 0.5,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "glycopyrrolate": {
        "name": "glycopyrrolate",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "IM, SC, IV": {
                        "dose": {
                            "min": 0.01,
                            "max": 0.1,
                            "unit": "mg/kg"
                        },
                        "note": "麻醉前投藥"
                    }
                }
            },
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 0.01,
                            "max": 0.01,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "griseofulvin": {
        "name": "griseofulvin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 25,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "錢癬；持續兩周"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "imidacloprid": {
        "name": "imidacloprid",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "外用": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "itraconazole": {
        "name": "Itraconazole",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 5,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "灰鸚鵡敏感"
                    }
                }
            }
        }
    },
    "ivermectin": {
        "name": "Ivermectin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "外用": {
                        "dose": {
                            "min": 400,
                            "max": 400,
                            "unit": "ug/kg"
                        }
                    }
                }
            }
        }
    },
    "ketoprofen": {
        "name": "ketoprofen",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 1,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "levetiracetam": {
        "name": "levetiracetam",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "TID",
                        "note": "抗癲癇"
                    }
                }
            }
        }
    },
    "marbofloxacin": {
        "name": "Marbofloxacin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 5,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "10mg/kg SID用於治療Pasteurellosis"
                    },
                    "SC": {
                        "dose": {
                            "min": 2,
                            "max": 5,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "10mg/kg SID用於治療Pasteurellosis"
                    }
                }
            }
        }
    },
    "meclizine": {
        "name": "meclizine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 12,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID-TID",
                        "note": "用於斜頸"
                    }
                }
            }
        }
    },
    "mirtazapine": {
        "name": "Mirtazapine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "low dose-high dose"
                    }
                }
            }
        }
    },
    "moxidectin": {
        "name": "moxidectin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.2,
                            "max": 0.2,
                            "unit": "mg/kg"
                        },
                        "note": "驅蟲，10天後重複投藥"
                    }
                }
            }
        }
    },
    "nandrolone": {
        "name": "nandrolone",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "SC, IM": {
                        "dose": {
                            "min": 2,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "note": "食慾促進劑"
                    }
                }
            }
        }
    },
    "orbifloxacin": {
        "name": "Orbifloxacin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "劑量未經實證"
                    }
                }
            }
        }
    },
    "oxytocin": {
        "name": "oxytocin",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "SC, IM": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "IU/kg"
                        }
                    }
                }
            },
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 3,
                            "max": 5,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "paracetamol": {
        "name": "paracetamol",
        "aliases": [
            "Acetamenophen"
        ],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 200,
                            "max": 500,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "輕度止痛"
                    }
                }
            }
        }
    },
    "penicillamine": {
        "name": "penicillamine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 30,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "螯合劑；銅鉛中毒"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 55,
                            "max": 55,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "penicillin(procaine)": {
        "name": "penicillin(procaine)",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 40000,
                            "max": 40000,
                            "unit": "IU/kg"
                        },
                        "frequency": "SID",
                        "note": "含1000 IU/mg 5日療程，治療Treponema paraluiscuniculi"
                    }
                }
            }
        }
    },
    "pentoxifylline": {
        "name": "pentoxifylline",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 15,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "文獻實驗數據"
                    }
                }
            }
        }
    },
    "phenobarbital": {
        "name": "phenobarbital",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "phenylpropanolamine": {
        "name": "phenylpropanolamine",
        "aliases": [
            "PPA"
        ],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "pimobendan": {
        "name": "pimobendan",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.25,
                            "max": 0.3,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.15,
                            "max": 0.3,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "ponazuril": {
        "name": "ponazuril",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 50,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "殺球蟲藥(30天)"
                    }
                }
            }
        }
    },
    "praziquantel": {
        "name": "praziquantel",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO, SC, IM": {
                        "dose": {
                            "min": 5,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "note": "絛蟲感染"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "note": "10天後再重複投予"
                    }
                }
            }
        }
    },
    "prednisolone": {
        "name": "prednisolone",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO, SC, IM": {
                        "dose": {
                            "min": 0.5,
                            "max": 2,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "pyrantel pamoate": {
        "name": "pyrantel pamoate",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO, SC": {
                        "dose": {
                            "min": 5,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "note": "驅蟲藥；14天後重複投藥"
                    }
                }
            }
        }
    },
    "ranitidine": {
        "name": "ranitidine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "胃潰瘍使用"
                    },
                    "IV": {
                        "dose": {
                            "min": 2,
                            "max": 2,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "胃潰瘍使用"
                    }
                }
            }
        }
    },
    "selamectin": {
        "name": "selamectin",
        "aliases": [
            "寵愛"
        ],
        "species": {
            "rabbit": {
                "routes": {
                    "外用": {
                        "dose": {
                            "min": 6,
                            "max": 8,
                            "unit": "mg/kg"
                        },
                        "note": "常用10-15mg; 寵愛100g/17-25uL"
                    }
                }
            },
            "avian": {
                "routes": {
                    "外用": {
                        "dose": {
                            "min": 20,
                            "max": 25,
                            "unit": "mg/kg"
                        },
                        "note": "寵愛每100g/ 33-42uL"
                    }
                }
            }
        }
    },
    "sulfadimethoxine": {
        "name": "sulfadimethoxine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 50,
                            "max": null,
                            "unit": "mg/kg"
                        },
                        "note": "球蟲抑制劑；單次50mg，就著每日25mg，最多20天"
                    }
                }
            }
        }
    },
    "terbinafine": {
        "name": "terbinafine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 15,
                            "max": 15,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "trimethoprim_sulfamethoxazole": {
        "name": "Trimethoprim/Sulfamethoxazole",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 40,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "voriconazole": {
        "name": "voriconazole",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2.5,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            },
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 18,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID x 30-60days"
                    }
                }
            }
        }
    },
    "fluid therapy": {
        "name": "fluid therapy",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": null,
                            "max": 10,
                            "unit": "mL/kg"
                        }
                    },
                    "IV": {
                        "dose": {
                            "min": 2,
                            "max": 4,
                            "unit": "mL/kg/h"
                        },
                        "note": "前兩個小時10-15mL/kg/h，後續調整2-4ml/kg/h (100ml/kg/24h)"
                    }
                }
            }
        }
    },
    "amphotericin b": {
        "name": "Amphotericin B",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 100,
                            "max": 300,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-SID",
                        "note": "腎毒性;  0.25–1 mg/mL NB"
                    },
                    "IV": {
                        "dose": {
                            "min": 1.5,
                            "max": 1.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q8h x 3days",
                        "note": "腎毒性"
                    }
                }
            }
        }
    },
    "ketoconazole": {
        "name": "ketoconazole",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 30,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "肝毒性; 嘔吐"
                    }
                }
            }
        }
    },
    "nystatin": {
        "name": "nystatin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 150000,
                            "max": 300000,
                            "unit": "IU/kg"
                        },
                        "frequency": "BID",
                        "note": "胃腸道不吸收"
                    }
                }
            }
        }
    },
    "toltrazuril": {
        "name": "toltrazuril",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 7,
                            "max": 7,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID x 3days",
                        "note": "球蟲症"
                    }
                }
            }
        }
    },
    "levamisole": {
        "name": "levamisole",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "once",
                        "note": "可能致嘔吐"
                    }
                }
            }
        }
    },
    "mebendazole": {
        "name": "mebendazole",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 25,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID x 5 days"
                    }
                }
            }
        }
    },
    "piroxicam": {
        "name": "piroxicam",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.5,
                            "max": 0.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "adrenaline": {
        "name": "adrenaline",
        "aliases": [
            "epinephrine"
        ],
        "species": {
            "avian": {
                "routes": {
                    "IV": {
                        "dose": {
                            "min": 0.1,
                            "max": 0.1,
                            "unit": "g/kg"
                        }
                    }
                }
            }
        }
    },
    "bismuth salts": {
        "name": "bismuth salts",
        "aliases": [
            "bismuth"
        ],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 1,
                            "max": 2,
                            "unit": "ml/kg"
                        },
                        "frequency": "BID"
                    }
                }
            }
        }
    },
    "cabergoline": {
        "name": "cabergoline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "ug/kg"
                        },
                        "frequency": "SID x 7 days",
                        "note": "慢性產蛋"
                    }
                }
            }
        }
    },
    "calcium gluconate": {
        "name": "calcium gluconate",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "colchicine": {
        "name": "colchicine",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.04,
                            "max": 0.04,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "deslorelin": {
        "name": "deslorelin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM, SC": {
                        "dose": {
                            "min": 4.7,
                            "max": 4.7,
                            "unit": "mg"
                        }
                    }
                }
            }
        }
    },
    "kaolin/pectin": {
        "name": "kaolin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 2,
                            "max": 2,
                            "unit": "ml/kg"
                        }
                    }
                }
            }
        }
    },
    "lactulose": {
        "name": "lactulose",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.2,
                            "max": 1,
                            "unit": "ml/kg"
                        },
                        "frequency": "Q8h"
                    }
                }
            }
        }
    },
    "leuprolide acetate": {
        "name": "leuprolide acetate",
        "aliases": [
            "leuprolide"
        ],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 100,
                            "max": 750,
                            "unit": "ug/kg"
                        },
                        "frequency": "兩周一劑; 打三劑",
                        "note": "卵巢囊腫、慢性產蛋"
                    }
                }
            }
        }
    },
    "pralidoxime": {
        "name": "pralidoxime",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IV": {
                        "dose": {
                            "min": 10,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "有機磷中毒"
                    }
                }
            }
        }
    },
    "silymarin": {
        "name": "silymarin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 5,
                            "max": 5,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q8h"
                    }
                }
            }
        }
    },
    "sodium calcium edetate": {
        "name": "sodium calcium edetate",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 35,
                            "max": 40,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "重金屬中毒，起始劑量可給200mg; 慢性鋅中毒100mg每周施打一次"
                    }
                }
            }
        }
    },
    "terbutaline": {
        "name": "terbutaline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 0.01,
                            "max": 0.01,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    },
    "vitamin_b": {
        "name": "Vitamin_B",
        "aliases": [
            "thiamine"
        ],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 3,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "frequency": "weekly"
                    }
                }
            }
        }
    },
    "vitamin_k1": {
        "name": "vitamin_K1",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 0.2,
                            "max": 2.5,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q6-24h",
                        "note": "可IM"
                    }
                }
            }
        }
    }
};