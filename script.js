// Full Products Data from List
const products = [
    // VPS (Gaming & Standard)
    { id: 1, name: "Gaming VPS ProLine", category: "game", price: "۸۹۹,۰۰۰", period: "ماهانه", specs: ["8 Core AMD EPYC", "16 GB RAM DDR4", "آلمان 🇩🇪", "عملکرد فوق‌العاده"], icon: "fa-gamepad", badge: "پرفروش" },
    { id: 2, name: "Respina Cloud VPS XT", category: "vps", price: "۵۹۹,۰۰۰", period: "ماهانه", specs: ["4 Core Intel Xeon", "8 GB RAM DDR4", "ایران 🇮🇷", "اتصال مستقیم"], icon: "fa-server", badge: "" },
    { id: 3, name: "FanAva Hyper VPS", category: "vps", price: "۶۹۹,۰۰۰", period: "ماهانه", specs: ["6 Core", "12 GB RAM DDR4", "ایران 🇮🇷", "منابع تضمینی"], icon: "fa-server", badge: "" },
    { id: 4, name: "Economy Game VPS Plus", category: "game", price: "۱۹۹,۰۰۰", period: "ماهانه", specs: ["2 Core", "4 GB RAM DDR4", "آلمان 🇩🇪", "اقتصادی"], icon: "fa-gamepad", badge: "" },
    { id: 5, name: "Turkey SpeedVPS Turbo", category: "vps", price: "۴۴۹,۰۰۰", period: "ماهانه", specs: ["4 Core AMD Ryzen", "8 GB RAM DDR4", "ترکیه 🇹🇷", "پینگ عالی"], icon: "fa-server", badge: "پرفروش" },
    { id: 6, name: "Asiatech CloudCore VPS", category: "vps", price: "۵۴۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "ایران 🇮🇷", "ابری آسیاتک"], icon: "fa-cloud", badge: "" },
    { id: 7, name: "Shatel UltraVPS Series", category: "vps", price: "۷۴۹,۰۰۰", period: "ماهانه", specs: ["6 Core", "16 GB RAM DDR4", "ایران 🇮🇷", "پهنای باند بالا"], icon: "fa-server", badge: "" },
    { id: 8, name: "Pishgaman HighPower VPS", category: "vps", price: "۱,۲۹۹,۰۰۰", period: "ماهانه", specs: ["8 Core", "32 GB RAM DDR4", "ایران 🇮🇷", "پروژه‌های سنگین"], icon: "fa-server", badge: "" },
    { id: 9, name: "Germany TitanVPS", category: "vps", price: "۸۴۹,۰۰۰", period: "ماهانه", specs: ["6 Core Intel Xeon", "16 GB RAM DDR4", "آلمان 🇩🇪", "قدرتمند"], icon: "fa-server", badge: "پرفروش" },
    { id: 10, name: "Premium Ryzen VPS Boost", category: "vps", price: "۱,۴۹۹,۰۰۰", period: "ماهانه", specs: ["8 Core AMD Ryzen 9", "32 GB RAM DDR5", "هلند 🇳🇱", "نسل جدید"], icon: "fa-rocket", badge: "پرفروش" },
    { id: 11, name: "Europe CloudEdge VPS", category: "vps", price: "۵۹۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "اروپا 🇪🇺", "Edge Server"], icon: "fa-cloud", badge: "" },
    { id: 12, name: "Iran TurboCompute VPS", category: "vps", price: "۴۹۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "ایران 🇮🇷", "توربو داخلی"], icon: "fa-server", badge: "" },
    { id: 13, name: "Global NovaVPS Enterprise", category: "dedicated", price: "۳,۹۹۹,۰۰۰", period: "ماهانه", specs: ["16 Core", "64 GB RAM DDR4", "جهانی 🌐", "سازمانی"], icon: "fa-building", badge: "" },
    { id: 14, name: "GamerX LowLatency VPS", category: "game", price: "۷۹۹,۰۰۰", period: "ماهانه", specs: ["6 Core AMD Ryzen", "16 GB RAM DDR4", "آلمان 🇩🇪", "حداقل لیتنسی"], icon: "fa-gamepad", badge: "پرفروش" },

    // Game Servers
    { id: 15, name: "Minecraft Prime Edition", category: "game", price: "۲۹۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "تا ۱۰۰ پلیر", "آلمان 🇩🇪"], icon: "fa-cube", badge: "پرفروش" },
    { id: 16, name: "RUST Dedicated Forge", category: "game", price: "۵۹۹,۰۰۰", period: "ماهانه", specs: ["6 Core", "16 GB RAM DDR4", "تا ۲۰۰ پلیر", "هلند 🇳🇱"], icon: "fa-hammer", badge: "پرفروش" },
    { id: 17, name: "MTA Reactor", category: "game", price: "۳۴۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "تا ۵۰۰ پلیر", "آلمان 🇩🇪"], icon: "fa-car", badge: "" },
    { id: 18, name: "CS:GO Tactical Pro", category: "game", price: "۲۴۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "128 Tick", "آلمان 🇩🇪"], icon: "fa-crosshairs", badge: "" },
    { id: 19, name: "FiveM Roleplay Core", category: "game", price: "۸۹۹,۰۰۰", period: "ماهانه", specs: ["8 Core", "32 GB RAM DDR4", "تا ۵۰۰ پلیر", "هلند 🇳🇱"], icon: "fa-users", badge: "پرفروش" },
    { id: 20, name: "SAMP Ultimate Pack", category: "game", price: "۱۹۹,۰۰۰", period: "ماهانه", specs: ["2 Core", "4 GB RAM DDR4", "تا ۱۰۰۰ پلیر", "آلمان 🇩🇪"], icon: "fa-user-friends", badge: "" },
    { id: 21, name: "CS 1.6 Classic Edition", category: "game", price: "۹۹,۰۰۰", period: "ماهانه", specs: ["2 Core", "2 GB RAM DDR4", "۳۲ پلیر", "آلمان 🇩🇪"], icon: "fa-crosshairs", badge: "" },
    { id: 22, name: "CS Source Elite", category: "game", price: "۱۴۹,۰۰۰", period: "ماهانه", specs: ["2 Core", "4 GB RAM DDR4", "۶۴ پلیر", "آلمان 🇩🇪"], icon: "fa-crosshairs", badge: "" },
    { id: 23, name: "ARK Survival Nexus", category: "game", price: "۶۹۹,۰۰۰", period: "ماهانه", specs: ["6 Core", "24 GB RAM DDR4", "تا ۱۰۰ پلیر", "هلند 🇳🇱"], icon: "fa-dragon", badge: "" },
    { id: 24, name: "Valheim Viking Shield", category: "game", price: "۱۹۹,۰۰۰", period: "ماهانه", specs: ["4 Core", "8 GB RAM DDR4", "تا ۱۰ پلیر", "آلمان 🇩🇪"], icon: "fa-shield-alt", badge: "" },
    { id: 25, name: "GTA Online Modded", category: "game", price: "۵۹۹,۰۰۰", period: "ماهانه", specs: ["6 Core", "16 GB RAM DDR4", "تا ۲۰۰ پلیر", "هلند 🇳🇱"], icon: "fa-car", badge: "" },
    { id: 26, name: "Minecraft Bedrock Pulse", category: "game", price: "۱۹۹,۰۰۰", period: "ماهانه", specs: ["2 Core", "4 GB RAM DDR4", "تا ۵۰ پلیر", "آلمان 🇩🇪"], icon: "fa-cube", badge: "" },
    { id: 27, name: "Team Fortress 2 Max", category: "game", price: "۱۴۹,۰۰۰", period: "ماهانه", specs: ["2 Core", "4 GB RAM DDR4", "۳۲ پلیر", "آلمان 🇩🇪"], icon: "fa-users", badge: "" },

    // High Performance
    { id: 28, name: "Ryzen VPS UltraCore", category: "dedicated", price: "۲,۴۹۹,۰۰۰", period: "ماهانه", specs: ["12 Core AMD Ryzen", "64 GB RAM DDR5", "هلند 🇳🇱", "اولتراکور"], icon: "fa-microchip", badge: "پرفروش" },

    // Other Services
    { id: 29, name: "IP Rental Pro Service", category: "other", price: "۴۹,۰۰۰", period: "ماهانه", specs: ["اجاره IP اختصاصی", "جهانی 🌐"], icon: "fa-network-wired", badge: "" },
    { id: 30, name: "Teamspeak BotX Automation", category: "other", price: "۹۹,۰۰۰", period: "ماهانه", specs: ["ربات مدیریت Teamspeak", "آلمان 🇩🇪"], icon: "fa-robot", badge: "" },
    { id: 31, name: "Germany Hosting Deluxe", category: "web", price: "۱۹۹,۰۰۰", period: "ماهانه", specs: ["هاست پرسرعت", "آلمان 🇩🇪"], icon: "fa-globe", badge: "پرفروش" },
    { id: 32, name: "Colocation ProRack", category: "dedicated", price: "۹۹۹,۰۰۰", period: "ماهانه", specs: ["کولوکیشن حرفه‌ای", "ایران 🇮🇷"], icon: "fa-server", badge: "" },
    { id: 33, name: "Teamspeak Titan Server", category: "other", price: "۱۴۹,۰۰۰", period: "ماهانه", specs: ["سرور پرظرفیت", "آلمان 🇩🇪"], icon: "fa-headset", badge: "" },
    { id: 34, name: "Teamspeak Reseller Plus", category: "other", price: "۴۹۹,۰۰۰", period: "ماهانه", specs: ["پنل نمایندگی", "آلمان 🇩🇪"], icon: "fa-user-tie", badge: "" },
    { id: 35, name: "Iran Linux Hosting Premium", category: "web", price: "۹۹,۰۰۰", period: "ماهانه", specs: ["هاست لینوکس", "ایران 🇮🇷"], icon: "fa-linux", badge: "" },
    { id: 36, name: "Firewall Protection Shield", category: "other", price: "۱۹۹,۰۰۰", period: "ماهانه", specs: ["فایروال محافظتی", "جهانی 🌐"], icon: "fa-shield-alt", badge: "" },
    { id: 37, name: "Cloud Backup Vault", category: "other", price: "۹۹,۰۰۰", period: "ماهانه", specs: ["فضای بکاپ ابری", "آلمان 🇩🇪"], icon: "fa-cloud-upload-alt", badge: "" },
    { id: 38, name: "Anti-DDoS MaxGuard", category: "other", price: "۲۹۹,۰۰۰", period: "ماهانه", specs: ["محافظت DDoS پیشرفته", "جهانی 🌐"], icon: "fa-shield-virus", badge: "پرفروش" },
    { id: 39, name: "ProMail Email Hosting", category: "web", price: "۷۹,۰۰۰", period: "ماهانه", specs: ["ایمیل حرفه‌ای", "آلمان 🇩🇪"], icon: "fa-envelope", badge: "" },
    { id: 40, name: "Domain Registration Center", category: "other", price: "۴۹,۰۰۰", period: "سالانه", specs: ["ثبت دامنه", "جهانی 🌐"], icon: "fa-globe", badge: "" }
];

// Render Products (Main Page Mini Grid)
function renderMiniProducts() {
    const container = document.querySelector('.products-grid-mini');
    if (!container) return;

    // Select 3 diverse popular products (Reduced from 4 as requested)
    const popularProducts = [products[0], products[9], products[18]].slice(0, 3);

    popularProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card-mini glass';
        card.onclick = () => window.location.href = `product.html?id=${product.id}`;
        card.innerHTML = `
            <div class="mini-icon">
                <i class="fas ${product.icon}"></i>
            </div>
            <div class="mini-info">
                <h4>${product.name}</h4>
                <span class="mini-price">${product.price} تومان</span>
            </div>
            <i class="fas fa-chevron-left" style="margin-right: auto; color: var(--text-muted); font-size: 0.8rem;"></i>
        `;
        container.appendChild(card);
    });
}

// Render Products (Services Page)
function renderProducts(filter = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter || filter === 'all');

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card glass';
        
        // Badge logic
        const badgeHTML = product.badge ? `<div style="position: absolute; top: 10px; left: 10px; background: var(--primary-color); color: #000; padding: 2px 10px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">${product.badge}</div>` : '';

        card.innerHTML = `
            ${badgeHTML}
            <div class="product-header">
                <i class="fas ${product.icon} product-icon"></i>
                <h3>${product.name}</h3>
                <div class="product-price">${product.price} <span style="font-size: 0.8rem;">/ ${product.period}</span></div>
            </div>
            <div class="product-body">
                <ul class="product-specs">
                    ${product.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
                </ul>
                <button class="btn btn-outline" onclick="window.location.href='product.html?id=${product.id}'">مشاهده</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render Single Product Detail
function renderProductDetail() {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        container.innerHTML = '<div style="text-align: center;"><h3>محصول یافت نشد</h3><a href="services.html" class="btn btn-outline">بازگشت به خدمات</a></div>';
        return;
    }

    document.title = `${product.name} | آریا هاست`;

    container.innerHTML = `
        <div class="product-detail-header">
            <div class="product-detail-icon">
                <i class="fas ${product.icon}"></i>
            </div>
            <div>
                <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">${product.name}</h1>
                <div style="color: var(--primary-color); font-size: 1.5rem; font-weight: bold;">${product.price} تومان <span style="font-size: 1rem; color: var(--text-muted);">/ ${product.period}</span></div>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3>مشخصات فنی سرویس</h3>
            <p style="color: var(--text-muted);">این سرویس با استفاده از جدیدترین سخت‌افزارها در دیتاسنترهای معتبر میزبانی می‌شود و دارای گارانتی آپتایم ۹۹.۹٪ است.</p>
            
            <div class="product-detail-specs">
                ${product.specs.map(spec => `
                    <div class="spec-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${spec}</span>
                    </div>
                `).join('')}
                 <div class="spec-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>آنتی دیداس</span>
                </div>
                 <div class="spec-item">
                    <i class="fas fa-headset"></i>
                    <span>پشتیبانی ۲۴/۷</span>
                </div>
            </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; border-top: 1px solid var(--glass-border); padding-top: 2rem;">
            <a href="services.html" class="btn btn-outline">بازگشت</a>
            <button class="btn btn-primary glow-effect">سفارش دهید <i class="fas fa-shopping-cart"></i></button>
        </div>
    `;
}

function filterServices(category) {
    if (!window.location.href.includes('services.html')) {
        window.location.href = `services.html?filter=${category}`;
        return;
    }

    renderProducts(category);
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
}

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    renderMiniProducts();
    renderProductDetail();

    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter') || 'all';
        renderProducts(filter);
        
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${filter}'`)) {
                btn.classList.add('active');
            }
        });
    }


    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
    
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        if (currentPath.includes(href) && href !== '#' && href !== 'index.html') {
            link.classList.add('active');
        } else if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && href === 'index.html') {
             link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
