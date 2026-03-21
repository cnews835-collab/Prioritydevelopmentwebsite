// ── Portfolio data ─────────────────────────────────────────
const projects = [
  // GFX
  { title: "Night Scene GFX",    desc: "Atmospheric Roblox night scene with volumetric lighting and dramatic shadows.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-1.png" },
  { title: "UVR Military GFX",  desc: "Military-style Roblox GFX for UVR — soldier character with war zone background.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-uvr-military.png" },
  { title: "UVR Helmet GFX",    desc: "Close-up cinematic pilot helmet GFX for UVR — dramatic battlefield atmosphere.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-uvr-helmet.png" },
  { title: "Spin Wheel UI GFX",  desc: "Stylised in-game spin wheel graphic with bold typography and vibrant color segments.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-2.png" },
  { title: "Ninja Scene GFX",    desc: "Cinematic Roblox GFX of a ninja character in a lush forest — by @DeveloperTifa.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-3.png" },
  { title: "LOTS Character GFX", desc: "Dark anime-style GFX render with cherry blossoms and lightning effects — by @DeveloperTifa.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-4.png" },
  { title: "LOTS Desert Scene",  desc: "Stylised wide-shot desert GFX with cel-shading and ember particles — by @DeveloperTifa.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-5.png" },
  // Modeling
  { title: "Lava Sword Model",   desc: "Roblox 3D modeling showcase — a detailed lava-texture sword with molten rock finish.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-1.png" },
  { title: "Cauldron Model",     desc: "Stylised low-poly cauldron 3D model with handle — ready for Roblox game use.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-cauldron.png" },
  { title: "Anvil Model",        desc: "Clean low-poly anvil model — great for RPG and crafting game environments.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-anvil.png" },
  { title: "Sheep Character",    desc: "Fluffy low-poly sheep character model with rigging — built for Roblox games.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-sheep.png" },
  // Coming soon placeholders
  { title: "Coming Soon", desc: "An open-world map build — details dropping soon.", cat: "Roblox", sub: "Maps", tag: "Maps" },
  { title: "Coming Soon", desc: "Architectural showcase in Roblox Studio.", cat: "Roblox", sub: "Architecture", tag: "Architecture" },
  { title: "Blood Sport — Scripting Showcase", desc: "Roblox Studio scripting showcase for Blood Sport — live gameplay systems demo.", cat: "Roblox", sub: "Scripting", tag: "Scripting", video: "https://media.discordapp.net/attachments/1482860017412603935/1484307125898580078/Blood_Sport_-_Roblox_Studio_2026-03-17_19-39-42.mp4?ex=69bfba7b&is=69be68fb&hm=e999f2618cb614a0adf3a5aa363c02b5847ad060660565fd41d0921a565032b7&" },
  { title: "Blood Sport UI", desc: "Full game menu UI for Blood Sport — dark horror theme with custom typography and moon backdrop.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-bloodsport.png" },
  { title: "Coming Soon", desc: "Core game systems — economy, data stores, etc.", cat: "Roblox", sub: "Game Systems", tag: "Game Systems" },
  { title: "Coming Soon", desc: "A Discord bot project.", cat: "Discord", sub: "Bots", tag: "Bots" },
  { title: "Coming Soon", desc: "Server setup and template work.", cat: "Discord", sub: "Server Setup", tag: "Server Setup" },
  { title: "Coming Soon", desc: "Community building project.", cat: "Discord", sub: "Community", tag: "Community" },
  { title: "Coming Soon", desc: "Web project in the works.", cat: "Web", sub: "Websites", tag: "Websites" },
  { title: "Coming Soon", desc: "Dashboard project — details coming.", cat: "Web", sub: "Dashboards", tag: "Dashboards" },
  { title: "Coming Soon", desc: "Developer tooling or web utility.", cat: "Web", sub: "Tools", tag: "Tools" },
];

const tagClass = {
  "GFX":          "tag-gfx",
  "Modeling":     "tag-modeling",
  "Maps":         "tag-maps",
  "Architecture": "tag-arch",
  "Scripting":    "tag-script",
  "UI Design":    "tag-ui",
  "Game Systems": "tag-systems",
  "Bots":         "tag-bots",
  "Server Setup": "tag-server",
  "Community":    "tag-community",
  "Websites":     "tag-websites",
  "Dashboards":   "tag-dash",
  "Tools":        "tag-tools",
};

const subTabMap = {
  Roblox:  ["All", "GFX", "Modeling", "Maps", "Architecture", "Scripting", "UI Design", "Game Systems"],
  Discord: ["All", "Bots", "Server Setup", "Community"],
  Web:     ["All", "Websites", "Dashboards", "Tools"],
};

let activeMain = "All";
let activeSub  = "All";

function renderTabs() {
  const mainContainer = document.getElementById("main-tabs");
  const subContainer  = document.getElementById("sub-tabs");

  const mains = ["All", "Roblox", "Discord", "Web"];
  mainContainer.innerHTML = mains.map(m =>
    `<button class="tab-btn ${m === activeMain ? "active" : ""}" data-main="${m}">${m}</button>`
  ).join("");

  if (activeMain !== "All" && subTabMap[activeMain]) {
    subContainer.innerHTML = subTabMap[activeMain].map(s =>
      `<button class="sub-tab-btn ${s === activeSub ? "active" : ""}" data-sub="${s}">${s}</button>`
    ).join("");
    subContainer.style.display = "flex";
  } else {
    subContainer.innerHTML = "";
    subContainer.style.display = "none";
  }

  renderGrid();

  mainContainer.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeMain = btn.dataset.main;
      activeSub  = "All";
      renderTabs();
    });
  });

  subContainer.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeSub = btn.dataset.sub;
      renderTabs();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById("portfolio-grid");
  const filtered = projects.filter(p => {
    if (activeMain !== "All" && p.cat !== activeMain) return false;
    if (activeSub  !== "All" && p.sub !== activeSub)  return false;
    return true;
  });

  grid.innerHTML = filtered.map(p => `
    <div class="portfolio-card">
      ${p.video
        ? `<video class="portfolio-img" src="${p.video}" muted loop playsinline controls style="background:#000;"></video>`
        : p.img
          ? `<img class="portfolio-img" src="${p.img}" alt="${p.title}" loading="lazy">`
          : `<div class="portfolio-placeholder">◈</div>`
      }
      <div class="portfolio-body">
        <span class="portfolio-tag ${tagClass[p.tag] || ""}">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    </div>
  `).join("");
}

// ── Contact form ───────────────────────────────────────────
function initForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sent! We'll be in touch.";
    btn.disabled = true;
    btn.style.opacity = "0.7";
  });
}

// ── Mobile menu ────────────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderTabs();
  initForm();
  initNav();
});
