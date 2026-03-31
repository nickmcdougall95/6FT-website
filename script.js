// ----- Mobile Menu (works on every page) -----
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav ul");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

function sayHello() {
    alert("Yo! Welcome to 6FT Interviews 🚀");
}

// ---- Store Products (ONLY used on shop.html) ----
const products = [
    {
        name: "Interview Slot",
        priceText: "Book Interview - $999",
        desc: "Get featured on 6FT Interviews (Limited slots available each week. Book now.)",
        img: "https://placehold.co/300x200/ff4444/fff?text=Interview+Slot",
        paypalButtonId: "LZHN9Y7CA96W8"
    },
    {
        name: "Blog Feature",
        priceText: "Buy Now - $49",
        desc: "Get your story or music featured on our site and socials.",
        img: "https://placehold.co/300x200/111/fff?text=Blog+Feature",
        paypalButtonId: "XA3M7XQ2J4NQE"
    },
    {
        name: "Music Promotion",
        priceText: "Buy Now - $99",
        desc: "We promote your music on Instagram, YouTube, Twitter & TikTok.",
        img: "https://placehold.co/300x200/333/fff?text=Promo+Package",
        paypalButtonId: "XJXK4CJNXREBL"
    },
    {
        name: "Merch Hoodie",
        priceText: "Buy Now - $59",
        desc: "Official 6FT Interviews hoodie.",
        img: "https://placehold.co/300x200/000/fff?text=Hoodie",
        paypalButtonId: "Q5F93CZAH8QWN"
    }
];

function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return; // if we're not on shop.html, do nothing

    grid.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>


            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="${p.paypalButtonId}">
            <input type="submit" value="${p.priceText}" class="buy-btn">
            </form>
        </div>
        `).join("");
}

renderProducts();

// ----- BLOG POSTS -----
const posts = [
    {
        title: "YNG Wavy Talks Miami Scene",
        desc: "We sat down with YNG Wavy to talk about his rise in 2025.",
        img: "https://placehold.co/300x200/ff4444/fff?text=Interview",
        link: "#"
    },
    {
        title: "Luna Flowz Goes Viral",
        desc: "From Tik Tok freestyles to real fans.",
        img: "https://placehold.co/300x200/111/fff?text=Viral",
        link: "#"
    },
    {
        title: "ACE2REAL Street Interview",
        desc: "Raw street energy and real talk.",
        img: "https://placehold.co/300x200/333/fff?text=Street",
        link: "#"
    }
];

function renderPosts() {
    const grid = document.getElementById("blogGrid");
    if (!grid) return;

    grid.innerHTML = posts.map(p => `
        <div class="card">
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.link}" class="buy-btn">Read More</a>
        </div>
        `).join("");
    }

    renderPosts();