<p align="center">
  <img src="https://i.ibb.co/1fN1RkVv/shaban-md.jpg" width="280" />
</p>

<h1 align="center">⚡ NIAZI-MD ⚡</h1>

<p align="center">
The Most Powerful & Smart Multi-Device WhatsApp Bot<br>
Developed by <b>Hacker NIAZI-MD</b>
</p>

---

### 🔗 Join Our Links
<p align="center">
  <a href="https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H" target="_blank">
    <img src="https://img.shields.io/badge/Join_Channel-green?style=for-the-badge&logo=whatsapp"/>
  </a>
  <a href="https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt" target="_blank">
    <img src="https://img.shields.io/badge/Join_Group-blue?style=for-the-badge&logo=whatsapp"/>
  </a>
</p>

---

### 🔑 Generate Pair Code
<p align="center">
  <a href="https://<YOUR-HEROKU-APP-NAME>.herokuapp.com/pair.html">
    <img src="https://img.shields.io/badge/PAIR_CODE-Click_Here-brightgreen?style=for-the-badge"/>
  </a>
</p>

> **Important (Urdu):** QR scan karne ke liye doosre phone ka WhatsApp use karo — same device se scan mat karo warna code invalid hoga!

---

### 🚀 Deploy NIAZI-MD Bot — Quick Links

| Platform | Deploy |
|-----------|---------|
| 🟣 Heroku | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Heroku-79589F?style=for-the-badge&logo=heroku)](https://heroku.com/deploy?template=https://github.com/niazi-md/NIAZI-MD-) |
| 🟢 Render | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Render-46E3B7?style=for-the-badge&logo=render)](https://render.com) |
| 🟡 Railway | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Railway-FFD500?style=for-the-badge&logo=railway)](https://railway.app) |
| 🔵 Koyeb | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Koyeb-1E90FF?style=for-the-badge&logo=koyeb)](https://koyeb.com) |
| 🧠 HuggingFace | [![Deploy](https://img.shields.io/badge/Deploy%20on%20HuggingFace-F2C94C?style=for-the-badge&logo=huggingface)](https://huggingface.co) |
| 🔥 Katabum | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Katabum-FE4A49?style=for-the-badge)](https://katabum.com) |
| ☁️ Google Cloud | [![Deploy](https://img.shields.io/badge/Deploy%20on%20GCP-4285F4?style=for-the-badge&logo=googlecloud)](https://cloud.google.com) |

---

### 🧠 Example GitHub Workflow Deployment

```yaml
name: NIAZI-MD Deploy
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20.x
      - name: Install dependencies
        run: npm install
      - name: Start NIAZI-MD Bot
        run: npm start
