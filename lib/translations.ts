
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
            p1_part1: "I am a Computer Programming student and Junior .NET Developer focused on",
            p1_highlight1: "line-of-business desktop applications",
            p1_highlight2: "SQL Server",
            p1_part2: "and",
            p1_highlight3: "DevExpress UI",
            p2: "I like turning ideas into reliable software, with clean architecture, readable code and practical features that people actually use.",
            whoIAm: "Who I am",
            whoIAm_text: "I like combining clean UI with solid application logic behind it. One of my main projects,",
            whoIAm_highlight: "Notoid",
            whoIAm_text2: "is an AI-powered study assistant that summarizes documents into structured notes using Gemini AI.",
            currentWork_text: "I'm also currently working on",
            currentWork_highlight: "Storiva",
            currentWork_text2: "a smart inventory & product management system built with .NET 8, DevExpress and SQL Server. I enjoy experimenting with desktop app architecture, automation workflows and integrating AI into existing tools to make them more useful.",
            whatImLookingFor: "What I'm looking for",
            whatImLookingFor_text: "I'm actively seeking opportunities where I can:",
            lookingFor_list: [
                "Work with C#, .NET, DevExpress and SQL Server in real-world projects",
                "Contribute to desktop or backend applications used by real users",
                "Learn from experienced developers and grow as an engineer",
            ],
            currentFocus: "current_focus",
            focus_list: [
                "Desktop apps with .NET & DevExpress",
                "SQL Server & database-driven applications",
                "AI integration (Gemini API, automation)",
            ],
            quote: "\"Always learning. Always building useful tools.\"",
        },
        skills: {
            title: "Tech Stack",
            stack: "Stack",
            tools: "Tools",
            interests: "Interests",
            stack_list: [
                "C#, .NET Framework & .NET 8",
                "Windows Forms & DevExpress UI",
                "SQL / T-SQL (Queries, CRUD)",
                "HTML, CSS, Basic JavaScript"
            ],
            tools_list: [
                "Visual Studio, VS Code",
                "Git & GitHub",
                "DevExpress (DataGrid, Ribbon)",
                "SQL Server (Relations, Queries)",
                "QuestPDF, OpenXML, PdfPig",
                "AI APIs (Gemini)"
            ],
            interests_list: [
                "Arduino & Simple IoT Projects",
                "Automation Workflows",
                "Desktop App Architecture",
                "Performance & Logging"
            ],
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
            p1_part1: "Bilgisayar Programcılığı öğrencisi ve Junior .NET Geliştiricisiyim. Odaklandığım alanlar:",
            p1_highlight1: "kurumsal masaüstü uygulamaları",
            p1_highlight2: "SQL Server",
            p1_part2: "ve",
            p1_highlight3: "DevExpress Arayüzleri",
            p2: "Fikirleri; temiz mimari, okunabilir kod ve insanların gerçekten kullanacağı pratik özelliklerle güvenilir yazılımlara dönüştürmeyi seviyorum.",
            whoIAm: "Ben Kimim",
            whoIAm_text: "Temiz arayüzleri, arkadaki sağlam uygulama mantığıyla birleştirmeyi seviyorum. Ana projelerimden biri olan",
            whoIAm_highlight: "Notoid",
            whoIAm_text2: "belgeleri özetleyerek Gemini AI kullanarak yapılandırılmış notlar çıkaran yapay zeka destekli bir çalışma asistanıdır.",
            currentWork_text: "Şu anda ayrıca",
            currentWork_highlight: "Storiva",
            currentWork_text2: "üzerinde çalışıyorum; .NET 8, DevExpress ve SQL Server ile geliştirilen akıllı bir stok ve ürün yönetim sistemi. Masaüstü uygulama mimarisi, otomasyon iş akışları ve mevcut araçları daha kullanışlı hale getirmek için yapay zeka entegrasyonu ile deneyler yapmaktan keyif alıyorum.",
            whatImLookingFor: "Ne Arıyorum",
            whatImLookingFor_text: "Şu fırsatları aktif olarak arıyorum:",
            lookingFor_list: [
                "C#, .NET, DevExpress ve SQL Server ile gerçek dünya projelerinde çalışmak",
                "Gerçek kullanıcılar tarafından kullanılan masaüstü veya backend uygulamalarına katkıda bulunmak",
                "Deneyimli geliştiricilerden öğrenmek ve bir mühendis olarak büyümek",
            ],
            currentFocus: "şu_anki_odak",
            focus_list: [
                ".NET & DevExpress ile masaüstü uygulamaları",
                "SQL Server & veritabanı tabanlı uygulamalar",
                "Yapay Zeka entegrasyonu (Gemini API, otomasyon)",
            ],
            quote: "\"Daima öğreniyorum. Daima faydalı araçlar geliştiriyorum.\"",
        },
        skills: {
            title: "Teknoloji Yığını",
            stack: "Yığın",
            tools: "Araçlar",
            interests: "İlgi Alanları",
            stack_list: [
                "C#, .NET Framework & .NET 8",
                "Windows Forms & DevExpress UI",
                "SQL / T-SQL (Sorgular, CRUD)",
                "HTML, CSS, Temel JavaScript"
            ],
            tools_list: [
                "Visual Studio, VS Code",
                "Git & GitHub",
                "DevExpress (DataGrid, Ribbon)",
                "SQL Server (İlişkiler, Sorgular)",
                "QuestPDF, OpenXML, PdfPig",
                "Yapay Zeka API'leri (Gemini)"
            ],
            interests_list: [
                "Arduino & Basit IoT Projeleri",
                "Otomasyon İş Akışları",
                "Masaüstü Uygulama Mimarisi",
                "Performans & Loglama"
            ],
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
