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
                    },
                    "NB": {
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
    "amikacin": {
        "name": "Amikacin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 15,
                            "max": 15,
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
                    },
                    "IM": {
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
                        }
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
    "cefazolin": {
        "name": "Cefazolin",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
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
                            "min": 10,
                            "max": 30,
                            "unit": "mg/kg"
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 50,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID-TID"
                    },
                    "IV": {
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
    "ceftiofur": {
        "name": "Ceftiofur",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "IM": {
                        "dose": {
                            "min": 10,
                            "max": 20,
                            "unit": "mg/kg"
                        }
                    },
                    "SC": {
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
                    "": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "提升至30–40 mg/kg可穿BBB"
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
                        }
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
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
    "doxycycline": {
        "name": "Doxycycline",
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 25,
                            "max": 30,
                            "unit": "mg/kg"
                        }
                    },
                    "IM": {
                        "dose": {
                            "min": 75,
                            "max": 100,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q5D"
                    },
                    "SC": {
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
        "aliases": [],
        "species": {
            "avian": {
                "routes": {
                    "": {
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
                    "": {
                        "dose": {
                            "min": null,
                            "max": null,
                            "unit": ""
                        }
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
                        }
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
            }
        }
    },
    "lincospectin": {
        "name": "Lincospectin",
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
                    },
                    "SC": {
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
    "maropitant": {
        "name": "Maropitant",
        "aliases": [
            "Cerenia"
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
                        }
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
                            "min": 25,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "note": "Febendazole在玄鳳有毒性"
                    }
                }
            },
            "rabbit": {
                "routes": {
                    "PO": {
                        "dose": {
                            "min": 20,
                            "max": 20,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "腸毒血症治療首選"
                    }
                }
            },
            "rodent": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 25,
                            "max": 25,
                            "unit": "mg/kg"
                        }
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
    "mirtazapine": {
        "name": "Mirtazapine",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 3,
                            "max": 3,
                            "unit": "mg/kg"
                        },
                        "note": "high dose"
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
    "oxytetracycline": {
        "name": "Oxytetracycline",
        "aliases": [],
        "species": {
            "rabbit": {
                "routes": {
                    "SC": {
                        "dose": {
                            "min": 30,
                            "max": 30,
                            "unit": "mg/kg"
                        },
                        "frequency": "Q3D"
                    },
                    "IM": {
                        "dose": {
                            "min": 10,
                            "max": 10,
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
                    "": {
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
                            "min": 45,
                            "max": 45,
                            "unit": "mg/kg"
                        },
                        "frequency": "SID",
                        "note": "高劑量"
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
                    "": {
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
                    "SC": {
                        "dose": {
                            "min": 10,
                            "max": 10,
                            "unit": "mg/kg"
                        },
                        "frequency": "BID",
                        "note": "誘發腸毒血症的可能性不清楚，暫不推薦使用"
                    },
                    "IM": {
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
    "vitamin_c": {
        "name": "Vitamin C",
        "aliases": [
            "Vit C"
        ],
        "species": {
            "rodent": {
                "routes": {
                    "": {
                        "dose": {
                            "min": 30,
                            "max": 50,
                            "unit": "mg/kg"
                        }
                    }
                }
            }
        }
    }
};