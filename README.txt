J FIRE SAFETY SYSTEM WEBSITE
============================
Pages:   index.html  about.html  products.html  projects.html  clients.html
Style:   css/style.css        (colours, sizes, layout)
Content: js/config.js         (links, image paths, phone, WhatsApp, map, products, projects, clients, team)
Logic:   js/main.js           (menu, scroll, dots, counters, form) - you rarely need to edit this
Form:    Code.gs              (paste into Google Apps Script, not uploaded to the website)

UPLOAD TO GITHUB: upload the whole folder keeping this structure. Vercel redeploys automatically.

IMAGES (put files in these exact folders and names, or change the paths in js/config.js)
  Media/Image/Logo/image1.png            logo + name on black (header, loading screen, footer)
  Media/Image/Logo/image2.png            logo + name on white (mobile menu)
  Media/Image/Logo/mark.png              shield only (menu rail)
  Media/Image/Logo/favicon.png           48x48 or 32x32 PNG (browser tab icon)
  Media/Image/Hero/hero-background.jpg   home page top background photo
  Media/Image/Hero/hero-logo.png         logo shown on top of the hero photo (transparent PNG)
  Media/Image/Social/justdial.png        Justdial logo for the footer
  Media/Image/Clients/client1.png ...    logos or photos for the client cards (clients.html)
  Media/Image/Projects/<project>.jpg     names: fire-hydrant-accessories-installation, fire-extinguishers-in-hospital,
                                         safety-audits-in-industry, hydraulic-pressure-test, fire-alarm-designing-and-projects
  Media/Image/Projects/background.jpg    projects section background
  Media/Image/Products/<id>.jpg          extinguishers, alarms, sprinklers, hydrants, safety-gear
  Media/Image/Products/background.jpg    products background
  Media/Image/Vendors/<name>.png         siemens, honeywell, lehry-valve, fire-fite, larsen-and-toubro, notifier,
                                         jindal-steel-and-power, tata-pipes, cri-pumps, 3m, minimax, wagner
  Media/Image/Footer/map.png             screenshot of your Google Map
  Media/Image/About/hero.jpg, team-background.jpg, team1.jpg to team5.jpg
VIDEOS (MP4, under about 10 MB): Media/Video/vision.mp4, numbers.mp4, about-vision.mp4, achievements.mp4
Any missing file simply shows a plain colour or the name instead, so the site never breaks.

GITHUB LINKS: in js/config.js set BASE to your raw link, e.g. "https://raw.githubusercontent.com/USER/REPO/main/"
(leave it empty to load files from the website itself, which is faster).

CONTACT FORM -> GOOGLE SHEET
 1. Create a Google Sheet. Open Extensions > Apps Script.
 2. Delete the sample code, paste all of Code.gs, click Save.
 3. Click Deploy > New deployment > type: Web app.
    Execute as: Me.  Who has access: Anyone.  Click Deploy and allow access.
 4. Copy the Web app URL and paste it into SHEET_URL in js/config.js. Upload and test the form.
 After you change Code.gs later, use Deploy > Manage deployments > Edit > New version.

TO DO IN js/config.js: WHATSAPP numbers (two), JUSTDIAL link, CLIENT_LIST, MAP_URL, CONTACT (email, phone, address), SOCIAL links.
