/* =====================================================================
   J FIRE SAFETY SYSTEM · SITE SETTINGS
   Edit THIS file to change links, image paths, contact details and text.
   ===================================================================== */
const SITE = {
  /* Where images and videos load from.
     ""  = from this website (the Media folder in your GitHub repo)  <- recommended
     Or paste your GitHub raw link, e.g. "https://raw.githubusercontent.com/USER/REPO/main/" */
  BASE: "",

  /* Contact form saves to Google Sheets. Paste the Web app URL from Apps Script (see README) */
  SHEET_URL: "https://script.google.com/macros/s/AKfycbyOXKC-p26QWzwLK3PhnpIXjDrJh0yjtg7QBbMpQ380YNE-e2XAMwvrxhP6zGEkaRQ49w/exec",

  /* Two WhatsApp numbers. number = country code + number (no spaces or +); label = how it shows on the site */
  WHATSAPP: [
    { label: "Let,s Talk Safety", number: "+919965159494" },
    { label: "Your Safety Expert", number: "+918300312633" }
  ],
  JUSTDIAL: "https://jsdl.in/DT-21A27MNSYXO",   /* paste your Justdial listing link */
  MAP_URL: "https://maps.app.goo.gl/Sjq5c6mAv6N9NMyc7?g_st=ac",   /* paste your Google Maps share link */
  CONTACT: { email: "j.firesafetysystem@gmail.com", phone: "+918300312633", address: "J Fire Safety system,R.S puram, Mtp Road, Coimbatore 641002 " },
  SOCIAL: {
    instagram: "https://www.instagram.com/_j_fire2021?utm_source=qr&dlrf=bzh6cHBvbmZ0ZHpm", facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com", x: "https://x.com", youtube: "https://youtube.com/@jfiresafetysystem?si=UKAG3Od1PDLT5dlc"
  },

  /* Image paths (relative to BASE). Replace the files in the Media folder, or change the paths here. */
  IMG: {
    logo: "Media/Image/Logo/image1.png",        /* logo + name on black (header, loading screen, footer) */
    logoWhite: "Media/Image/Logo/image2.png",   /* logo + name on white (mobile menu) */
    mark: "Media/Image/Logo/mark.png",          /* shield only (menu rail) */
    hero: "Media/Image/Hero/hero-background.jpg",  /* home page top background photo */
    heroLogo: "Media/Image/Hero/hero-logo.png",    /* logo shown on top of the hero photo (transparent PNG) */
    justdial: "Media/Image/Social/justdial.png",   /* Justdial logo for the footer */
    projectsBg: "Media/Image/Projects/background.jpg",
    productsBg: "Media/Image/Products/background.jpg",
    aboutHero: "Media/Image/About/hero.jpg",
    teamBg: "Media/Image/About/team-background.jpg",
    map: "Media/Image/Footer/map.jpg"           /* screenshot of your Google Map (bottom right of footer) */
  },
  VIDEO: {
    vision: "Media/Video/vision.mp4", numbers: "Media/Video/numbers.mp4",
    aboutVision: "Media/Video/about-vision.mp4", achievements: "Media/Video/achievements.mp4"
  },

  /* Menu: exactly six items. Icons are Lucide names. */
  NAV: [
    { id: "about",    label: "About",    href: "about.html",         icon: "info",      blank: true },
    { id: "vision",   label: "Vision",   href: "index.html#vision",  icon: "eye" },
    { id: "projects", label: "Projects", href: "projects.html",      icon: "briefcase" },
    { id: "clients",  label: "Clients",  href: "clients.html",       icon: "users" },
    { id: "products", label: "Products", href: "products.html",      icon: "package" },
    { id: "contact",  label: "Contact",  href: "#",                  icon: "mail", action: "contact" }
  ],

  /* Vendor logos: [name, file name]. Files live in Media/Image/Vendors/<file>.webp */
  VENDORS: [
    ["Siemens","siemens"],["Honeywell","honeywell"],["Lehry Valve","lehry-valve"],["Fire Fite","fire-fite"],
    ["Larsen & Toubro","larsen-and-toubro"],["Notifier","notifier"],["Jindal Steel and Power","jindal-steel-and-power"],
    ["Tata Pipes","tata-pipes"],["CRI Pumps","cri-pumps"],["3M","3m"],["Minimax","minimax"],["Wagner","wagner"]
  ],

  /* About page team. img = photo path (optional) */
  TEAM: [
    { name: "Name", role: "Founder and managing director", img: "Media/Image/About/team1.jpg" },
    { name: "Name", role: "Technical head",               img: "Media/Image/About/team2.jpg" },
    { name: "Name", role: "Operations manager",           img: "Media/Image/About/team3.jpg" },
    { name: "Name", role: "Safety engineer",              img: "Media/Image/About/team4.jpg" },
    { name: "Name", role: "Service lead",                 img: "Media/Image/About/team5.jpg" }
  ]
};

/* ---------------- CLIENTS PAGE (clients.html) ----------------
   Replace these with your real clients. Logo or photo: Media/Image/Clients/client1.png, client2.png ... */
const CLIENT_LIST = [
  { name: "Tropical Agrosystem Pvt Ltd", sector: "Agr0chemicals", work: "Hydrants & Hoses, Sprinkler System, Fire Alarm, Fire Extinguisher." },
  { name: "SPF India Pvt Ltd", sector: "Pet Food Palatants", work: "Combustible organic powder, Fire Alarm, Fire Extinguisher." },
  { name: "Vilvah stores Pvt ltd", sector: "Natural Skincare & Haircare", work: "TN Fire NOC, Hydrants & Hoses, Sprinkler System, Fire Alarm, Fire Extinguisher." },
  { name: "Hydro Prokav pumps India Pvt Ltd", sector: "Industrial pumps & Precision Machinery", work: "Hydrants & Hoses, Sprinkler System, Fire Alarm, Fire Extinguisher." },
  { name: "Unlimited Store", sector: "Organized Value fashion & Apparel Retail", work: "Hydrants & Hoses, Sprinkler System, Fire Alarm, Fire Extinguisher.." },
  { name: "Profile Products India Pvt Ltd", sector: "Horiculture Substrates & Coir Pith Exports", work: "Hydrants & Hoses, Sprinkler System, Fire Alarm, Fire Extinguisher.." }
];

/* ---------------- PRODUCTS (shown on index and products.html) ----------------
   Photo for each product: Media/Image/Products/<id>.jpg  */
const PRODUCTS=[
{id:"extinguishers",name:"Fire extinguishers",img:"Media/Image/Products/extinguishers.jpg",
 desc:"Portable and trolley-mounted extinguishers for every class of fire, supplied, refilled and serviced by our team.",
 spec:[["Types","ABC dry powder, CO₂, foam, water"],["Capacity","1 kg to 9 kg portable; 25 kg and 50 kg trolley"],["Use","Offices, factories, kitchens, vehicles"],["Service","Refilling and yearly inspection"]],
 feat:["Suitable for Class A, B, C and electrical fires","Easy-to-read pressure gauge","Wall brackets and signage included","Replacement and refill on request"]},
{id:"alarms",name:"Fire alarms",img:"Media/Image/Products/alarms.jpg",
 desc:"Detection and alarm systems that find a fire early and warn everyone in the building.",
 spec:[["Systems","Conventional and addressable"],["Devices","Smoke and heat detectors, call points, sounders"],["Panels","2 to 32 zones or addressable loops"],["Service","Installation, testing and monthly checks"]],
 feat:["Early smoke and heat detection","Zone display shows where the alarm started","Battery backup during power cuts","Optional link to a monitoring station"]},
{id:"sprinklers",name:"Sprinkler systems",img:"Media/Image/Products/sprinklers.jpg",
 desc:"Automatic sprinkler systems designed for your building, installed to approved fire safety standards.",
 spec:[["Systems","Wet pipe and dry pipe"],["Coverage","Designed to your floor plan and risk level"],["Parts","Pipes, sprinkler heads, valves, pumps"],["Service","Design, installation, flow testing"]],
 feat:["Each head operates only where there is heat","Works without anyone present","Planned around ceilings and storage layout","Yearly testing and maintenance plans"]},
{id:"hydrants",name:"Hydrants and hoses",img:"Media/Image/Products/hydrants.jpg",
 desc:"Hydrant valves, hose reels and pump sets that give your fire team water where it is needed.",
 spec:[["Items","Landing valves, hose reels, hose pipes, nozzles"],["Pumps","Electric and diesel fire pump sets"],["Network","Underground and overhead piping"],["Service","Installation and pressure testing"]],
 feat:["Hose cabinets placed along escape routes","Tested for pressure and flow","Replacement hoses and nozzles in stock","Pump room setup and annual servicing"]},
{id:"safety-gear",name:"Safety gear",img:"Media/Image/Products/safety-gear.jpg",
 desc:"Protective equipment, signage and emergency lighting that keep people safe and exits clear.",
 spec:[["Protection","Helmets, gloves, fire suits, safety shoes"],["Signs","Exit, assembly point and hazard signs"],["Lighting","Rechargeable emergency lights"],["Extras","First aid kits, fire blankets, sand buckets"]],
 feat:["Ready-to-use kits for sites and offices","Glow-in-the-dark exit signage","Emergency lights switch on during power failure","Bulk orders for teams and contractors"]}
];

/* ---------------- PROJECTS (shown on index and projects.html) ----------------
   Photo for each project: Media/Image/Projects/<id>.jpg  */
const PROJECTS = [
{ id:"fire-hydrant-accessories-installation", name:"Fire hydrant accessories installation", tag:"Installation", industry:"Industrial", type:"Hydrant system",
  desc:"We supplied and fitted the accessories that make a hydrant network usable in an emergency: landing valves, hose pipes, branch pipes, nozzles, hose boxes and couplings. Every item was matched to the site's pressure and flow needs and fixed at a reachable height along the hydrant ring.",
  spec:[["Scope","Supply, fitting and commissioning"],["Items","Landing valves, hoses, branch pipes, nozzles, hose boxes"],["Location","Yards, buildings and pump house"],["Checks","Leak, coupling fit and flow check"]],
  lists:[["What we did",["Surveyed the hydrant ring and marked every point that needed accessories","Supplied valves, hoses and nozzles matched to the line pressure","Fitted hose boxes and signage at clear, reachable positions","Tested each hydrant for leaks and smooth valve operation","Handed over a point-by-point checklist"]],["Outcome",["Every hydrant ready to connect a hose without delay","Equipment tagged for easy yearly inspection","A clear layout the site's fire team can follow"]]] },
{ id:"fire-extinguishers-in-hospital", name:"Fire extinguishers in hospital", tag:"Healthcare", industry:"Healthcare", type:"Extinguishers",
  desc:"Hospitals have very different fire risks, from electrical rooms and kitchens to wards and stores, and extinguishers must never block patients or staff. We mapped each area, chose the right extinguisher type and size, and installed them where staff can reach them within a few steps.",
  spec:[["Scope","Survey, supply, installation and training"],["Types","ABC powder, CO₂ and water"],["Areas","Wards, theatres, kitchens, plant rooms, stores"],["Service","Yearly inspection and refilling plan"]],
  lists:[["What we did",["Walked every floor and rated each area by fire risk","Matched extinguisher type and capacity to each risk","Mounted units on brackets with clear signage at the right height","Kept corridors and exits free of obstruction","Trained nurses and support staff to use them safely"]],["Outcome",["Right extinguisher within reach in every area","Staff confident in the first minute of a fire","A service schedule that keeps every unit ready"]]] },
{ id:"safety-audits-in-industry", name:"Safety audits in industry", tag:"Audit", industry:"Industrial", type:"Safety audit",
  desc:"We inspected the plant's fire protection from end to end and reported what works, what has expired and what is missing. The audit covers equipment condition, escape routes, signage, storage and the readiness of the team, ending with a clear list of fixes in order of priority.",
  spec:[["Scope","Site walk-through, checks and written report"],["Covers","Extinguishers, alarms, hydrants, exits, signage"],["Output","Findings ranked by urgency, with photos"],["Follow-up","Re-check after corrections"]],
  lists:[["What we did",["Reviewed drawings and earlier inspection records","Inspected every protection system and recorded its condition","Checked escape routes, exit lighting and assembly points","Interviewed supervisors on drills and emergency roles","Prepared a report with a priority action list"]],["Outcome",["A clear picture of the site's fire readiness","Urgent gaps closed first","A repeatable checklist for future audits"]]] },
{ id:"hydraulic-pressure-test", name:"Hydraulic pressure test", tag:"Testing", industry:"Industrial and commercial", type:"Pressure test",
  desc:"Before a fire water network goes live, it has to prove it can hold pressure. We isolate each section, fill it, raise the pressure to the test value and watch for drops, leaks and weak joints. Every result is recorded, so the system is signed off with evidence.",
  spec:[["Scope","Hydrant, sprinkler and pipe network testing"],["Method","Section-wise filling, pressurising and holding"],["Records","Gauge readings, hold time and leak points"],["Result","Test certificate for each section"]],
  lists:[["What we did",["Isolated the network into test sections","Filled and vented each section to remove trapped air","Raised pressure to the specified test value","Held pressure and watched gauges for drops","Repaired any leaks found and re-tested until the section passed"]],["Outcome",["A network proven to hold pressure","Written records for the client and inspectors","Confidence the system will work when needed"]]] },
{ id:"fire-alarm-designing-and-projects", name:"Fire alarm designing and projects", tag:"Design", industry:"Commercial", type:"Alarm systems",
  desc:"We design fire alarm systems around the building: where people work, where fires could start and how quickly everyone must be warned. From detector layout and panel zoning to cabling, commissioning and handover, we deliver the whole alarm project.",
  spec:[["Scope","Design, supply, installation and commissioning"],["Devices","Smoke and heat detectors, call points, sounders, panels"],["Systems","Conventional and addressable"],["Handover","Zone chart, testing and operator training"]],
  lists:[["What we did",["Studied floor plans and the use of each area","Designed the detector layout and panel zones","Installed devices and cabling with neat, labelled routes","Programmed and tested every device and sounder","Trained the site team and handed over drawings and a zone chart"]],["Outcome",["Early detection across the whole building","Alarms that show exactly where a fire started","A documented system that is simple to maintain"]]] }
];
PROJECTS.forEach(p => { p.img = p.img || "Media/Image/Projects/" + p.id + ".jpg"; });
