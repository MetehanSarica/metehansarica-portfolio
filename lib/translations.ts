
export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            role: "Junior .NET Developer",
            greeting: "Hi, I'm",
            description_part1: "I build clean and efficient",
            description_highlight1: "desktop applications",
            description_part2: "using",
            description_part3: "and",
            description_part4: "I enjoy creating tools that automate study and work, especially by integrating",
            description_highlight2: "AI-powered workflows",
            description_part5: "into real projects.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
        },
        about: {
            title: "About",
            paragraphs: [
                "I'm a 2nd-year Computer Programming student at Afyon Kocatepe University. My development philosophy is built around reducing dependency on cloud APIs, building offline-capable, performance-first architectures.",
                "I specialize in the Full-Stack .NET ecosystem, C# and modern desktop technologies (WPF, Tauri), building high-performance, efficient tools. Recently, I've been focusing on fully local AI (LLM) integrations and autonomous systems.",
                "Outside of software, I play electric guitar and have interests in sound engineering and hardware routing.",
            ],
            currentFocus: "current_focus",
            focus_list: [
                "Full-Stack .NET & Rust for high-performance desktop apps",
                "Local LLM integration and autonomous systems",
                "Performance-first, offline-capable architecture",
            ],
            quote: "\"Build offline-first. Ship fast. Own the stack.\"",
        },
        skills: {
            title: "Tech Stack",
            core:    { label: "// CORE & BACKEND",       items: ["C#", ".NET 8", "Rust", "Python", "Java"] },
            desktop: { label: "// DESKTOP & FRONTEND",   items: ["WPF", "WinForms", "DevExpress", "Tauri", "Svelte", "Next.js", "Tailwind CSS"] },
            ai:      { label: "// AI & AUTOMATION",      items: ["Ollama", "Llama 3.2", "Local LLM Integration", "Agentic Workflows"] },
            arch:    { label: "// ARCHITECTURE & TOOLS", items: ["Dapr", "SQL Server", "Git", "Playwright"] },
        },
        projects: {
            title: "Featured Projects",
            storiva: {
                title: "Storiva – Smart Inventory & Product Management",
                subtitle: "C# • .NET 8 • DEVEXPRESS • SQL SERVER • AI INTEGRATION",
                desc: "Storiva is a smart inventory and product management system built with .NET 8, DevExpress and SQL Server. It focuses on stock tracking, product management, role-based access and future AI-assisted features to help small businesses manage their operations more efficiently.",
                bullets: [
                    "Designed with a modern DevExpress-based desktop UI",
                    "Uses SQL Server for structured, reliable data storage and queries",
                    "Architected to integrate AI features (Gemini API) for product descriptions and insights"
                ]
            },
            notoid: {
                title: "Notoid – AI-Powered Study Assistant",
                subtitle: "C# • .NET • DEVEXPRESS • GEMINI AI • QUESTPDF",
                desc: "A Windows desktop application that parses PDF, DOCX and PPTX files and generates concise, structured study notes using Gemini AI. It handles file parsing, progress tracking and PDF generation in a single workflow.",
                bullets: [
                    "Built with C# and .NET, using DevExpress for the UI",
                    "Uses PdfPig and OpenXML to parse documents",
                    "Generates clean study PDFs via QuestPDF"
                ],
                link: "View on GitHub"
            },
            portfolio: {
                title: "metehansarica.dev – Personal Portfolio",
                subtitle: "NEXT.JS • TAILWIND CSS • NETLIFY • CUSTOM DOMAIN",
                desc: "A modern, responsive portfolio website to showcase my projects, skills and experience as a Junior .NET Developer. Deployed on Netlify with a custom domain and Google Analytics integration to track visitors and engagement.",
                bullets: [
                    "Built with Next.js and Tailwind CSS",
                    "Deployed via Netlify with CI/CD workflow",
                    "Connected to metehansarica.dev custom domain"
                ],
                link: "Visit site"
            },
            sakuKaze: {
                title: "Saku Kaze – High-Performance Text Editor",
                subtitle: "RUST • SVELTE • TAURI",
                desc: "An offline, ultra-fast text editor with significantly lower memory consumption compared to traditional Electron-based editors. Built for speed and efficiency without sacrificing a modern user experience.",
                bullets: [
                    "Native performance with Rust and Tauri",
                    "Reactive and lightweight UI with Svelte",
                    "Fully offline-first architecture"
                ],
                link: "View on GitHub"
            },
            saku: {
                title: "S.A.K.U. – Local AI Assistant",
                subtitle: "PYTHON • OLLAMA • LLAMA 3.2",
                desc: "A personal AI and automation assistant with a futuristic interface that runs entirely on-device, requiring no internet connection. Designed for privacy-first deep system control and automation workflows.",
                bullets: [
                    "100% local LLM integration via Ollama and Llama 3.2",
                    "Python-based deep system control and automation",
                    "Futuristic cyberpunk/terminal aesthetic UI"
                ]
            }
        },
        contact: {
            title: "Get In Touch",
            text: "I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            email: "Send Email",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        footer_text: "Metehan Sarıca. Built with Next.js & Tailwind CSS.",
        terminal: {
            welcome: "Welcome to Metehan's Terminal. Type 'help' to see available commands.",
            help_header: "Available commands:",
            help_cols: `  help      - Show this help message
  ls        - List sections
  cd [sec]  - Go to section (about, skills, projects, contact)
  cat [sec] - Read usage/content of section
  open [social] - Open links (github, linkedin, email, resume)
  whoami    - Display bio
  date      - Show current date
  clear     - Clear terminal
  repo      - View source code`,
            usage_cd: "Usage: cd [section] (e.g., 'cd projects')",
            navigating: "Navigating to",
            returned_home: "Returned to home.",
            dir_not_found: "Directory not found",
            usage_cat: "Usage: cat [file]",
            cat_about: "Creating reliable software with clean architecture.",
            cat_skills: "C# .NET, SQL Server, DevExpress, AI Integration...",
            cat_projects: "Storiva, Notoid, and this Portfolio.",
            cat_contact: "Email: metehansrc23@gmail.com",
            cat_resume_error: "Error: Binary file not printable. Try 'open resume'.",
            file_not_found: "File not found",
            whoami: "Metehan Sarıca - Junior .NET Developer | Student | Automation Enthusiast",
            opening: "Opening",
            usage_open: "Usage: open [github|linkedin|email]",
            cmd_not_found: "Command not found",
            try_help: "Type 'help' for available commands."
        }
    },
    tr: {
        nav: {
            home: "Anasayfa",
            about: "Hakkımda",
            skills: "Yetenekler",
            projects: "Projeler",
            contact: "İletişim",
        },
        hero: {
            role: "Junior .NET Geliştirici",
            greeting: "Merhaba, Ben",
            description_part1: "Temiz ve verimli",
            description_highlight1: "masaüstü uygulamaları",
            description_part2: "geliştiriyorum. Kullandığım teknolojiler:",
            description_part3: "ve",
            description_part4: "Çalışma ve iş süreçlerini otomatize eden araçlar geliştirmeyi, özellikle",
            description_highlight2: "Yapay Zeka destekli iş akışlarını",
            description_part5: "gerçek projelere entegre etmeyi seviyorum.",
            viewProjects: "Projeleri Görüntüle",
            contactMe: "İletişime Geç",
        },
        about: {
            title: "Hakkımda",
            paragraphs: [
                "Afyon Kocatepe Üniversitesi'nde Bilgisayar Programcılığı 2. sınıf öğrencisiyim. Geliştirme felsefem; bulut API'lerine olan bağımlılığı azaltan, çevrimdışı çalışabilen ve 'performance-first' (performans odaklı) mimariler inşa etmek üzerine kurulu.",
                "Özellikle Full-Stack .NET ekosistemi, C# ve modern masaüstü teknolojileri (WPF, Tauri) ile yüksek performanslı, verimli araçlar geliştiriyorum. Son dönemde tamamen yerel cihazda çalışan yapay zeka (LLM) entegrasyonları ve otonom sistemler üzerine yoğunlaşıyorum.",
                "Yazılım dünyası dışında elektro gitar çalıyor, ses mühendisliği ve donanım yönlendirmeleriyle ilgileniyorum.",
            ],
            currentFocus: "şu_anki_odak",
            focus_list: [
                "Full-Stack .NET & Rust ile yüksek performanslı masaüstü uygulamaları",
                "Yerel LLM entegrasyonu ve otonom sistemler",
                "Performance-first, çevrimdışı mimari prensipleri",
            ],
            quote: "\"Önce çevrimdışı inşa et. Hızlı çalıştır. Stack'e sahip ol.\"",
        },
        skills: {
            title: "Teknoloji Yığını",
            core:    { label: "// CORE & BACKEND",       items: ["C#", ".NET 8", "Rust", "Python", "Java"] },
            desktop: { label: "// DESKTOP & FRONTEND",   items: ["WPF", "WinForms", "DevExpress", "Tauri", "Svelte", "Next.js", "Tailwind CSS"] },
            ai:      { label: "// AI & AUTOMATION",      items: ["Ollama", "Llama 3.2", "Yerel LLM Entegrasyonu", "Otonom İş Akışları"] },
            arch:    { label: "// ARCHITECTURE & TOOLS", items: ["Dapr", "SQL Server", "Git", "Playwright"] },
        },
        projects: {
            title: "Öne Çıkan Projeler",
            storiva: {
                title: "Storiva – Akıllı Stok & Ürün Yönetimi",
                subtitle: "C# • .NET 8 • DEVEXPRESS • SQL SERVER • YAPAY ZEKA ENTEGRASYONU",
                desc: "Storiva, .NET 8, DevExpress ve SQL Server ile geliştirilmiş akıllı bir stok ve ürün yönetim sistemidir. Küçük işletmelerin operasyonlarını daha verimli yönetmelerine yardımcı olmak için stok takibi, ürün yönetimi, rol tabanlı erişim ve gelecekteki yapay zeka destekli özelliklere odaklanır.",
                bullets: [
                    "Modern DevExpress tabanlı masaüstü arayüzü ile tasarlandı",
                    "Yapılandırılmış, güvenilir veri depolama ve sorgular için SQL Server kullanır",
                    "Ürün açıklamaları ve içgörüler için yapay zeka özelliklerini (Gemini API) entegre edecek şekilde tasarlandı"
                ]
            },
            notoid: {
                title: "Notoid – Yapay Zeka Çalışma Asistanı",
                subtitle: "C# • .NET • DEVEXPRESS • GEMINI AI • QUESTPDF",
                desc: "PDF, DOCX ve PPTX dosyalarını ayrıştıran ve Gemini AI kullanarak öz, yapılandırılmış çalışma notları oluşturan bir Windows masaüstü uygulaması. Dosya ayrıştırma, ilerleme takibi ve PDF oluşturma işlemlerini tek bir iş akışında halleder.",
                bullets: [
                    "C# ve .NET ile geliştirildi, arayüz için DevExpress kullanıldı",
                    "Belgeleri ayrıştırmak için PdfPig ve OpenXML kullanır",
                    "QuestPDF aracılığıyla temiz çalışma PDF'leri oluşturur"
                ],
                link: "GitHub'da Görüntüle"
            },
            portfolio: {
                title: "metehansarica.dev – Kişisel Portfolyo",
                subtitle: "NEXT.JS • TAILWIND CSS • NETLIFY • ÖZEL ALAN ADI",
                desc: "Projelerimi, yeteneklerimi ve Junior .NET Geliştirici olarak deneyimlerimi sergilemek için modern, duyarlı bir portfolyo web sitesi. Ziyaretçileri ve etkileşimi takip etmek için Google Analytics entegrasyonu ve özel alan adı ile Netlify üzerinde yayınlandı.",
                bullets: [
                    "Next.js ve Tailwind CSS ile geliştirildi",
                    "CI/CD iş akışı ile Netlify üzerinden dağıtıldı",
                    "metehansarica.dev özel alan adına bağlandı"
                ],
                link: "Siteyi ziyaret et"
            },
            sakuKaze: {
                title: "Saku Kaze – Yüksek Performanslı Metin Editörü",
                subtitle: "RUST • SVELTE • TAURI",
                desc: "Geleneksel Electron tabanlı editörlere kıyasla çok daha düşük bellek tüketimi sunan, çevrimdışı ve ultra hızlı çalışan metin editörü.",
                bullets: [
                    "Rust ve Tauri ile native performans",
                    "Svelte ile reaktif ve hafif kullanıcı arayüzü",
                    "Tamamen çevrimdışı çalışma prensibi"
                ],
                link: "GitHub'da Görüntüle"
            },
            saku: {
                title: "S.A.K.U. – Yerel Yapay Zeka Asistanı",
                subtitle: "PYTHON • OLLAMA • LLAMA 3.2",
                desc: "İnternet bağlantısına ihtiyaç duymadan, cihaz üzerinde çalışan fütüristik arayüzlü kişisel yapay zeka ve otomasyon asistanı.",
                bullets: [
                    "Ollama ve Llama 3.2 ile %100 yerel LLM entegrasyonu",
                    "Python tabanlı derin sistem kontrolü ve otomasyon",
                    "Siberpunk/Terminal estetiğine sahip fütüristik UI"
                ]
            }
        },
        contact: {
            title: "İletişime Geç",
            text: "Yeni projeleri, yaratıcı fikirleri veya vizyonunuzun bir parçası olma fırsatlarını konuşmaya her zaman açığım.",
            email: "E-posta Gönder",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        footer_text: "Metehan Sarıca. Next.js & Tailwind CSS ile geliştirildi.",
        terminal: {
            welcome: "Metehan'ın Terminaline Hoş Geldiniz. Komutları görmek için 'help' yazın.",
            help_header: "Kullanılabilir komutlar:",
            help_cols: `  help      - Bu yardım mesajını göster
  ls        - Bölümleri listele
  cd [sec]  - Bölüme git (about, skills, projects, contact)
  cat [sec] - Bölüm içeriğini/kullanımını oku
  open [social] - Linkleri aç (github, linkedin, email, resume)
  whoami    - Biyografiyi göster
  date      - Tarihi göster
  clear     - Terminali temizle
  repo      - Kaynak kodunu görüntüle`,
            usage_cd: "Kullanım: cd [bölüm] (örn. 'cd projects')",
            navigating: "Gidiliyor:",
            returned_home: "Ana dizine dönüldü.",
            dir_not_found: "Dizin bulunamadı",
            usage_cat: "Kullanım: cat [dosya]",
            cat_about: "Temiz mimari ile güvenilir yazılımlar oluşturmak.",
            cat_skills: "C# .NET, SQL Server, DevExpress, Yapay Zeka Entegrasyonu...",
            cat_projects: "Storiva, Notoid ve bu Portfolyo.",
            cat_contact: "E-posta: metehansrc23@gmail.com",
            cat_resume_error: "Hata: İkili dosya yazdırılamaz. 'open resume' deneyin.",
            file_not_found: "Dosya bulunamadı",
            whoami: "Metehan Sarıca - Junior .NET Geliştirici | Öğrenci | Otomasyon Tutkunu",
            opening: "Açılıyor:",
            usage_open: "Kullanım: open [github|linkedin|email]",
            cmd_not_found: "Komut bulunamadı",
            try_help: "Kullanılabilir komutlar için 'help' yazın."
        }
    }
};
