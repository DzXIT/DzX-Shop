const CONFIG = {
nama: "DzX Market Shop", // Nama Store
profil: "https://files.catbox.moe/rfvddj.jpg", // Url Profil
banner: "https://files.catbox.moe/3pjrle.jpg", // Url Banner 
tentang: "DzX Market Shop adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2023. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "jl.sumberlawang.sragen, Indonesia",
sosial_media: {
  email: "dzzxiterz99@gmail.com", // Email
  youtube: "https://www.youtube.com/@DzXMD", // YouTube Username 
  tiktok: "dzzxiterz1", // Tiktok Username 
  whatsapp: "62882006164047", // WhatsApp Number 
  telegram: "dzzsett" // Telegram Username
},
payment: {
  dana: "081935928562", // Payment Dana
  gopay: "081935928562", // Payment Gopay 
  ovo: "-", // Payment Ovo 
  qris: "https://files.catbox.moe/annwhw.jpg" // Url Qris
},
telegram_api: {
  bot: "7610484888:AAGh51Ov2TegmGooFbaaP2876k_r7vC7Le0", // Token bot father
  chatid: "6956086216" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 1000 },
                  { "name": "2GB RAM", "price": 2000 },
                  { "name": "3GB RAM", "price": 3000 },
                  { "name": "4GB RAM", "price": 4000 },
                  { "name": "5GB RAM", "price": 5000 },
                  { "name": "6GB RAM", "price": 6000 },
                  { "name": "7GB RAM", "price": 7000 },
                  { "name": "8GB RAM", "price": 8000 },
                  { "name": "9GB RAM", "price": 9000 },
                  { "name": "10GB RAM", "price": 10000 },
                  { "name": "Unlimited RAM", "price": 13000 }
                ]
              },
              {
                "id": 2,
                "name": "VPS Kecil",
                "icon": "fas fa-microchip",
                "description": "Virtual Private Server murah untuk belajar dan project kecil.",
                "variants": [
                  { "name": "1 vCPU / 1GB RAM / 20GB SSD", "price": 25000 },
                  { "name": "2 vCPU / 2GB RAM / 40GB SSD", "price": 45000 }
                ]
              },
              {
                "id": 3,
                "name": "VPS Menengah",
                "icon": "fas fa-hdd",
                "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "2 vCPU / 4GB RAM / 80GB SSD", "price": 75000 },
                  { "name": "4 vCPU / 8GB RAM / 160GB SSD", "price": 135000 }
                ]
              },
              {
                "id": 4,
                "name": "Dedicated Server",
                "icon": "fas fa-database",
                "description": "Server dedicated dengan performa tinggi, cocok untuk skala besar.",
                "variants": [
                  { "name": "8 vCPU / 32GB RAM / 500GB SSD", "price": 450000 },
                  { "name": "16 vCPU / 64GB RAM / 1TB SSD", "price": 800000 }
                ]
              },
              {
                "id": 5,
                "name": "Web Hosting",
                "icon": "fas fa-globe",
                "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
                "variants": [
                  { "name": "Starter (1GB Storage)", "price": 15000 },
                  { "name": "Basic (5GB Storage)", "price": 30000 },
                  { "name": "Pro (10GB Storage)", "price": 50000 }
                ]
              }
            ],
            "Desain": [
                {
                    id: 6,
                    name: "Desain Logo",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Minimalis", price: 2000 },
                        { name: "Logo Typography", price: 2500 },
                        { name: "Logo Mascot", price: 3000 },
                        { name: "Logo Vintage", price: 4000 },
                        { name: "Logo Modern", price: 5000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 7,
                    name: "Desain Banner",
                    icon: "fas fa-image",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 15000 },
                        { name: "Banner Event", price: 25000 },
                        { name: "Banner Promosi", price: 30000 },
                    ]
                },
                {
                    id: 8,
                    name: "App Inject",
                    icon: "fas fa-app",
                    description: "Meningkatkan lock aim dan menstabilkan Fps agar performa bermain mu baik.",
                    variants: [
                        { name: "7Day", price: 10000 },
                        { name: "15Day", price: 15000 },
                        { name: "30Day", price: 25000 },
                        { name: "permanen", price: 50000 },
                    ]
                },
                {
                    id: 9,
                    name: "File DragHs",
                    icon: "fas fa-code",
                    description: "File DragHs berfungsi sebagai file untuk meningkatkan performa bermain mu yg lebih baik dan meningkatkan lock aim.",
                    variants: [
                        { name: "DragHs v1", price: 15000 },
                        { name: "DragHs v2", price: 30000 },
                    ]
                },
                {
                    id: 10,
                    name: "Cracked Apk",
                    icon: "fas fa-crack-apk",
                    description: "Crack APK adalah proses memodifikasi atau membypass proteksi keamanan pada aplikasi Android (APK) untuk menggunakannya secara gratis atau tanpa batasan..",
                    variants: [
                        { name: "Crack Apk", price: 15000 },
                        { name: "Firebase", price: 20000 }
                    ]
                }
            ]
        };