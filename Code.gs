/* ==========================================================
   J FIRE SAFETY SYSTEM · CONTACT FORM -> GOOGLE SHEET
   Paste this whole file into Apps Script (see README.txt)
   ========================================================== */
const SHEET_NAME = 'Enquiries';   // tab name inside your Google Sheet (created automatically)

function doPost(e) {
  try {
    const p = e.parameter || {};
    if (p.website) return reply({ ok: true });            // spam trap: real people leave this empty
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Date and time', 'Name', 'Phone', 'Email (optional)']);
      sh.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    sh.appendRow([new Date(), clean(p.name), clean(p.phone), clean(p.email)]);
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

function doGet() { return reply({ ok: true, message: 'Contact form is running' }); }

// Trim, shorten, and stop spreadsheet formulas such as =HYPERLINK() from being injected
function clean(v) {
  const s = String(v || '').trim().slice(0, 200);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
