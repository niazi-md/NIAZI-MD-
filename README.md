# 💫 NIAZI-MD 💫

**The Most Powerful & Smart Multi-Device WhatsApp Bot**  
**Owner / Admin:** `NIAZI-MD` • **Phone:** `+92 344 8166105`  
**Channel:** https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H  
**Group:** https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt  
**Menu image:** https://i.ibb.co/gbbGmx3G/shaban-md.jpg

---

## ⚙️ Quick — How Pair Code works (Urdu + English)

1. Bot jab WhatsApp se pairing maange ga, Baileys library `update.qr` ya `update.pairingCode` emit karegi.  
2. `index.js` us raw pairing text ko `lastPairRaw` me store karta hai.  
3. Web pe `/pairtext` endpoint se woh raw pairing text JSON me mil jayega.  
4. Public pair web page (`public/pair.html`) is endpoint ko fetch karke code dikhaye (ya user manually `/pair` ya `/qr` visit kare).

**Important (Urdu):** Pair code scan karne ke liye **doosra phone** use karo — same device se scan MAT karo.

---

## 🚀 Deploy (buttons)

> Heroku deploy (template):  
> `https://heroku.com/deploy?template=https://github.com/Niaziofficial/NIAZI-HACKER-`

(Other platforms: Render, Railway, Koyeb, Google Cloud, etc. — open their new-app/import UI and point to this repo.)

---

## 🗂 Files in this repo
- `index.js` — main bot + web endpoints (`/qr`, `/pairtext`, `/pair.png`)
- `package.json` — start script & deps
- `Dockerfile` — container image
- `app.json` / `heroku.yml` — Heroku deploy helpers
- `public/` — (optional) place `index.html`, `pair.html`, `pair.png` etc.

---

## ⚙️ Manual (Urdu + English) — steps to run locally / Heroku

### Local (PC or termux)
```bash
git clone https://github.com/Niaziofficial/NIAZI-HACKER-.git
cd NIAZI-HACKER-
npm install
npm start
# Visit http://localhost:3000/qr or http://localhost:3000/pairtext
