// ── Portfolio data ─────────────────────────────────────────
const projects = [

  // ── GFX ───────────────────────────────────────────────────
  { title: "Night Scene GFX",     desc: "Atmospheric Roblox night scene with volumetric lighting and dramatic shadows.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-1.png" },
  { title: "Spin Wheel UI GFX",   desc: "Stylised in-game spin wheel graphic with bold typography and vibrant color segments.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-2.png" },
  { title: "Ninja Scene GFX",     desc: "Cinematic Roblox GFX of a ninja character in a lush forest — by @DeveloperTifa.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-3.png" },
  { title: "LOTS Character GFX",  desc: "Dark anime-style GFX render with cherry blossoms and lightning effects — by @DeveloperTifa.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-4.png" },
  { title: "LOTS Desert Scene",   desc: "Stylised wide-shot desert GFX with cel-shading and ember particles — by @DeveloperTifa.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-5.png" },
  { title: "UVR Military GFX",    desc: "Military-style Roblox GFX for UVR — soldier character with war zone background.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-uvr-military.png" },
  { title: "UVR Helmet GFX",      desc: "Close-up cinematic pilot helmet GFX for UVR — dramatic battlefield atmosphere.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-uvr-helmet.png" },
  { title: "Pilot Commission GFX", desc: "Pilot-themed GFX commission and game icon — high detail render.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-pilot-commission.jpg" },
  { title: "Soldier GFX",         desc: "Soldier character GFX portfolio piece — cinematic war zone composition.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "images/gfx-soldier.jpg" },

  // ── Modeling / UGC ────────────────────────────────────────
  { title: "Lava Sword",          desc: "Roblox 3D modeling showcase — a detailed lava-texture sword with molten rock finish.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-1.png" },
  { title: "Cauldron Model",      desc: "Stylised low-poly cauldron 3D model with handle — ready for Roblox game use.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-cauldron.png" },
  { title: "Anvil Model",         desc: "Clean low-poly anvil model — great for RPG and crafting game environments.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-anvil.png" },
  { title: "Sheep Character",     desc: "Fluffy low-poly sheep character model with rigging — built for Roblox games.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-sheep.png" },
  { title: "UGC Model — 1",       desc: "UGC/Roblox accessory model showcase — detailed and game-ready.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-ugc-1.webp" },
  { title: "UGC Model — 2",       desc: "Custom Roblox UGC model — clean topology and styled finish.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-ugc-2.webp" },
  { title: "UGC Model — 3",       desc: "Roblox UGC model with detailed texturing — ready for marketplace.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-ugc-3.webp" },
  { title: "UGC Model — 4",       desc: "High-quality Roblox UGC accessory model.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-ugc-4.png" },
  { title: "UGC Model — 5",       desc: "Roblox UGC item model showcase.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-ugc-5.png" },
  { title: "UGC Model — 6",       desc: "Early Roblox UGC concept model — clean and minimal.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-ugc-6.png" },

  // ── UI Design ─────────────────────────────────────────────
  { title: "Blood Sport UI",      desc: "Full game menu UI for Blood Sport — dark horror theme with custom typography and moon backdrop.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-bloodsport.png" },
  { title: "UI Design — 2",       desc: "Custom Roblox UI design showcase.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-2.webp" },
  { title: "UI Design — 3",       desc: "Mobile-style Roblox UI layout — clean and polished.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-3.jpg" },
  { title: "UI Design — 4",       desc: "Cosmic-themed UI design — sci-fi interface with custom icons.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-4.jpg" },
  { title: "UI Design — 5",       desc: "Advanced UI system — panels, HUD elements and inventory design.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-5.webp" },
  { title: "UI Design — 6",       desc: "Detailed Roblox game UI — menus, icons and full interface kit.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-6.jpg" },

  // ── Scripting ─────────────────────────────────────────────
  { title: "Blood Sport — Scripting", desc: "Roblox Studio scripting showcase for Blood Sport — live gameplay systems demo.", cat: "Roblox", sub: "Scripting", tag: "Scripting", video: "https://media.discordapp.net/attachments/1482860017412603935/1484307125898580078/Blood_Sport_-_Roblox_Studio_2026-03-17_19-39-42.mp4?ex=69cce97b&is=69cb97fb&hm=c64b63790421a8ce77bb246143f8a710a60a2ea37c0f12b7d4eeec853c2fa8e5&" },

  // ── Maps / Building / Architecture ────────────────────────
  { title: "Roblox Build — 1",    desc: "Roblox Studio environment build — detailed scene with custom assets.", cat: "Roblox", sub: "Maps", tag: "Maps", img: "images/map-1.png" },
  { title: "Roblox Build — 2",    desc: "Map build with detailed terrain and structural elements.", cat: "Roblox", sub: "Maps", tag: "Maps", img: "images/map-2.png" },
  { title: "Roblox Build — 3",    desc: "Open-world Roblox map build — expansive and atmospheric.", cat: "Roblox", sub: "Maps", tag: "Maps", img: "images/map-3.png" },
  { title: "Architecture — 1",    desc: "Architectural Roblox build — structural detail and layout design.", cat: "Roblox", sub: "Architecture", tag: "Architecture", img: "images/arch-1.png" },
  { title: "Architecture — 2",    desc: "Interior architecture build — room layout and decorative elements.", cat: "Roblox", sub: "Architecture", tag: "Architecture", img: "images/arch-2.png" },
  { title: "Architecture — 3",    desc: "Large-scale Roblox architecture showcase — detailed exterior.", cat: "Roblox", sub: "Architecture", tag: "Architecture", img: "images/arch-3.png" },

  // ── Animations ────────────────────────────────────────────
  { title: "Animation Showcase — 1", desc: "Roblox character animation showcase — smooth movement and custom rig.", cat: "Roblox", sub: "Animations", tag: "Animations", video: "https://media.discordapp.net/attachments/1464786751540170854/1465849385496871247/Roblox-2025-12-26T04_56_04.159Z.mp4?ex=69ccffdf&is=69cbae5f&hm=b1fa03d86d9fd222dc06b1615c1116d28ff6ddc629b93dd6375854d7e2def04a&" },
  { title: "Animation Showcase — 2", desc: "Fluid Roblox animation demo — action sequence with custom keyframes.", cat: "Roblox", sub: "Animations", tag: "Animations", video: "https://media.discordapp.net/attachments/1464786751540170854/1465112269342904535/Roblox-2025-12-28T00_59_05.990Z.mp4?ex=69ccf461&is=69cba2e1&hm=6fe658cf6398ecbb510687ea11cb8574dabb6b2cb0e30efc9dd0a941d54b9797&" },
  { title: "Animation Showcase — 3", desc: "Roblox animation video showcase on YouTube — full sequence demo.", cat: "Roblox", sub: "Animations", tag: "Animations", youtube: "TtXLqbpZDi4" },

  // ── Game Systems ──────────────────────────────────────────
  { title: "Coming Soon", desc: "Core game systems — economy, data stores, etc.", cat: "Roblox", sub: "Game Systems", tag: "Game Systems" },

  // ── Discord ───────────────────────────────────────────────
  { title: "Coming Soon", desc: "A Discord bot project.", cat: "Discord", sub: "Bots", tag: "Bots" },
  { title: "Coming Soon", desc: "Server setup and template work.", cat: "Discord", sub: "Server Setup", tag: "Server Setup" },
  { title: "Coming Soon", desc: "Community building project.", cat: "Discord", sub: "Community", tag: "Community" },

  // ── Web ───────────────────────────────────────────────────
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
  "Animations":   "tag-anim",
  "Bots":         "tag-bots",
  "Server Setup": "tag-server",
  "Community":    "tag-community",
  "Websites":     "tag-websites",
  "Dashboards":   "tag-dash",
  "Tools":        "tag-tools",
};

const subTabMap = {
  Roblox:  ["All", "GFX", "Modeling", "UI Design", "Scripting", "Animations", "Maps", "Architecture", "Game Systems"],
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
      ${p.youtube
        ? `<div class="portfolio-yt"><iframe src="https://www.youtube.com/embed/${p.youtube}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
        : p.video
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
