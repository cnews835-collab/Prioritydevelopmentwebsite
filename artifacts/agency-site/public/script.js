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
  { title: "Pilot Commission GFX", desc: "Pilot-themed GFX commission and game icon — high detail render.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "https://media.discordapp.net/attachments/1482860017412603935/1484307122375360613/PilotGFXCommissionGameIcon.jpg?ex=69cce97b&is=69cb97fb&hm=10048d246be9191d0d7891eb702dabc33747dca92513e9cf217ff2d6fa8ff133&=&format=webp&width=772&height=772" },
  { title: "Soldier GFX",         desc: "Soldier character GFX portfolio piece — cinematic war zone composition.", cat: "Roblox", sub: "GFX", tag: "GFX", img: "https://media.discordapp.net/attachments/1482860017412603935/1484307122970824795/SoldierGFXPortfolioCopyrighted-1.jpg?ex=69cce97b&is=69cb97fb&hm=88797c360ca5ad8991ce84033aec2851bfbd6e494703631eef596fd43786cd2e&=&format=webp&width=772&height=772" },

  // ── Modeling / UGC ────────────────────────────────────────
  { title: "Lava Sword",          desc: "Roblox 3D modeling showcase — a detailed lava-texture sword with molten rock finish.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-1.png" },
  { title: "Cauldron Model",      desc: "Stylised low-poly cauldron 3D model with handle — ready for Roblox game use.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-cauldron.png" },
  { title: "Anvil Model",         desc: "Clean low-poly anvil model — great for RPG and crafting game environments.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-anvil.png" },
  { title: "Sheep Character",     desc: "Fluffy low-poly sheep character model with rigging — built for Roblox games.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "images/model-sheep.png" },
  { title: "UGC Model — 1",       desc: "UGC/Roblox accessory model showcase — detailed and game-ready.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "https://media.discordapp.net/attachments/1482860017412603935/1484307123465879612/image-9.webp?ex=69cce97b&is=69cb97fb&hm=66e00496b1df57d303e98d2473bcb389ec35e461e8e0a525605f059a9fef80c3&=&format=webp" },
  { title: "UGC Model — 2",       desc: "Custom Roblox UGC model — clean topology and styled finish.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "https://media.discordapp.net/attachments/1482860017412603935/1484307124292157602/image-7.webp?ex=69cce97b&is=69cb97fb&hm=663a7dfda6faef1d15a1b27260415c0306890ca82faa68c31d299ef983ed6418&=&format=webp" },
  { title: "UGC Model — 3",       desc: "Roblox UGC model with detailed texturing — ready for marketplace.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "https://media.discordapp.net/attachments/1482860017412603935/1484307125348991016/image-21.webp?ex=69cce97b&is=69cb97fb&hm=1fc6133af56d2625a205d4c61089e7cdb5b4cb3961816e2d95e666d9f8c940b0&=&format=webp" },
  { title: "UGC Model — 4",       desc: "High-quality Roblox UGC accessory model.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "https://media.discordapp.net/attachments/1482860017412603935/1484853658372935732/image.png?ex=69ccec3b&is=69cb9abb&hm=08a7983f3496243da1d2c63389043f45ca13cf129ebd74de2c0a308067b20b82&=&format=webp&quality=lossless" },
  { title: "UGC Model — 5",       desc: "Roblox UGC item model showcase.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "https://media.discordapp.net/attachments/1467382023600734360/1485775151852294255/Screenshot_2026-03-21_203642.png?ex=69ccfab0&is=69cba930&hm=7a2c2fcfae71779b442f2436005a4281a4993c1c9cd6a04820b99cd1dc7b926a&=&format=webp&quality=lossless" },
  { title: "UGC Model — 6",       desc: "Early Roblox UGC concept model — clean and minimal.", cat: "Roblox", sub: "Modeling", tag: "Modeling", img: "https://media.discordapp.net/attachments/1467382023600734360/1467382875010891809/Screenshot_2026-01-24_201524.png?ex=69cca54c&is=69cb53cc&hm=70c1be2e7d7955d8228aba0670ace55c7f3003684c7be80cc61af55237be1e00&=&format=webp&quality=lossless" },

  // ── UI Design ─────────────────────────────────────────────
  { title: "Blood Sport UI",      desc: "Full game menu UI for Blood Sport — dark horror theme with custom typography and moon backdrop.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "images/ui-bloodsport.png" },
  { title: "UI Design — 2",       desc: "Custom Roblox UI design showcase.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "https://media.discordapp.net/attachments/1482860017412603935/1484307121800609812/image-4.webp?ex=69cce97a&is=69cb97fa&hm=26896bba39db5f550ad43ecdc8eb8bead86ad1d2c8a1a68ef4ac69cc0c92958d&=&format=webp" },
  { title: "UI Design — 3",       desc: "Mobile-style Roblox UI layout — clean and polished.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "https://media.discordapp.net/attachments/1482860017412603935/1486644723413422191/IMG_20260324_193403.jpg?ex=69ccd8ca&is=69cb874a&hm=e4cf3827e0772f99236c8ebc8adb25c26e079014339d93c55bde14ed7e351fc7&=&format=webp&width=1029&height=772" },
  { title: "UI Design — 4",       desc: "Cosmic-themed UI design — sci-fi interface with custom icons.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "https://cdna.artstation.com/p/assets/images/images/086/190/672/large/cosmic-screenshot-2025-03-21-125906.jpg?1742576343" },
  { title: "UI Design — 5",       desc: "Advanced UI system — panels, HUD elements and inventory design.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "https://cdna.artstation.com/p/assets/images/images/097/399/650/large/cosmic-screenshot-2026-03-20-181908.webp?1774045167" },
  { title: "UI Design — 6",       desc: "Detailed Roblox game UI — menus, icons and full interface kit.", cat: "Roblox", sub: "UI Design", tag: "UI Design", img: "https://cdna.artstation.com/p/assets/images/images/083/173/858/large/cosmic-image-2024-12-23-222030853.jpg?1735010431" },

  // ── Scripting ─────────────────────────────────────────────
  { title: "Blood Sport — Scripting", desc: "Roblox Studio scripting showcase for Blood Sport — live gameplay systems demo.", cat: "Roblox", sub: "Scripting", tag: "Scripting", video: "https://media.discordapp.net/attachments/1482860017412603935/1484307125898580078/Blood_Sport_-_Roblox_Studio_2026-03-17_19-39-42.mp4?ex=69cce97b&is=69cb97fb&hm=c64b63790421a8ce77bb246143f8a710a60a2ea37c0f12b7d4eeec853c2fa8e5&" },

  // ── Maps / Building / Architecture ────────────────────────
  { title: "Roblox Build — 1",    desc: "Roblox Studio environment build — detailed scene with custom assets.", cat: "Roblox", sub: "Maps", tag: "Maps", img: "https://media.discordapp.net/attachments/1467381938808553667/1485775167987777706/Screenshot_2026-03-07_212402.png?ex=69ccfab4&is=69cba934&hm=55118c601433b043a82c94c59b4e2b87af8acd89f19ebe73c35dc1b05caa3b04&=&format=webp&quality=lossless&width=1124&height=772" },
  { title: "Roblox Build — 2",    desc: "Map build with detailed terrain and structural elements.", cat: "Roblox", sub: "Maps", tag: "Maps", img: "https://media.discordapp.net/attachments/1467381938808553667/1485775168855998474/Screenshot_2026-03-14_170932.png?ex=69ccfab4&is=69cba934&hm=3211eaa397345a4876881deadc56810d3c977c404b44d652444f4ec06ff07974&=&format=webp&quality=lossless&width=1253&height=772" },
  { title: "Roblox Build — 3",    desc: "Open-world Roblox map build — expansive and atmospheric.", cat: "Roblox", sub: "Maps", tag: "Maps", img: "https://media.discordapp.net/attachments/1467381938808553667/1485775025666523198/Screenshot_2026-03-23_175801.png?ex=69ccfa92&is=69cba912&hm=6dd61f71de8001246939307ea0cd58a4fe0d7f65ed8f1ff7195c602da408d154&=&format=webp&quality=lossless&width=1138&height=772" },
  { title: "Architecture — 1",    desc: "Architectural Roblox build — structural detail and layout design.", cat: "Roblox", sub: "Architecture", tag: "Architecture", img: "https://media.discordapp.net/attachments/1467381938808553667/1467382490867171358/Screenshot_2025-10-25_195319.png?ex=69cca4f0&is=69cb5370&hm=5210eda39fa50da99ea52a368ff6fb4d4e349ba6864ca7b93b993a906f93229a&=&format=webp&quality=lossless&width=1259&height=772" },
  { title: "Architecture — 2",    desc: "Interior architecture build — room layout and decorative elements.", cat: "Roblox", sub: "Architecture", tag: "Architecture", img: "https://media.discordapp.net/attachments/1467381938808553667/1467382215997390889/Screenshot_2025-12-07_175134.png?ex=69cca4ae&is=69cb532e&hm=ecc808ae8bba117f32f506f8d8791933835b0930d87ac768ec0a288161c05d5a&=&format=webp&quality=lossless&width=1238&height=772" },
  { title: "Architecture — 3",    desc: "Large-scale Roblox architecture showcase — detailed exterior.", cat: "Roblox", sub: "Architecture", tag: "Architecture", img: "https://media.discordapp.net/attachments/1467381938808553667/1467382075576418385/Screenshot_2026-01-23_230659.png?ex=69cca48d&is=69cb530d&hm=92e4f36903a287282cd8660e8b9fa5ac46c0d7a6156cf0d1581ad7ba9af78024&=&format=webp&quality=lossless" },

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
