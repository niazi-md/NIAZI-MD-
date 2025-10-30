![NIAZI-MD MENU](https://i.ibb.co/gbbGmx3G/shaban-md.jpg)

---
 
<h1 align="center">⚡ NIAZI-MD ⚡</h1>
<p align="center">
  <b>The Most Powerful & Smart Multi-Device WhatsApp Bot</b><br>
  Developed by <strong>Hacker Niazi</strong> • Owner: <strong>+92 344 8166105</strong>
</p>

---

<p align="center">
  <a href="https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H" target="_blank">
    <img src="https://img.shields.io/badge/WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Channel"/>
  </a>
  <a href="https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt" target="_blank">
    <img src="https://img.shields.io/badge/Join%20Group-128C7E?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Group"/>
  </a>
</p>

---

## ⚙️ Pair / Session Generate (Fresh link)
<p align="center">
  <a href="https://niazi-md-pair.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/PAIR_CODE-FF0000?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Pair Code"/>
  </a>
</p>

> **Important (Urdu):** QR scan karne ke liye doosre phone ka WhatsApp use karo — same device se scan mat karo.

---

## 🚀 Deploy NIAZI-MD Bot — Quick Links

| Platform | Deploy Link |
|---|---|
| 🟣 **Heroku** | [![Deploy on Heroku](https://img.shields.io/badge/Deploy%20to%20Heroku-79589F?style=for-the-badge&logo=heroku&logoColor=white)](https://heroku.com/deploy?template=https://github.com/Niaziofficial/NIAZI-HACKER-) |
| 🟢 **Render** | [![Deploy on Render](https://img.shields.io/badge/Deploy%20to%20Render-000000?style=for-the-badge&logo=render&logoColor=white)](https://render.com/deploy) |
| 🟡 **Railway** | [![Deploy on Railway](https://img.shields.io/badge/Deploy%20to%20Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/new) |
| 🔵 **Koyeb** | [![Deploy on Koyeb](https://img.shields.io/badge/Deploy%20to%20Koyeb-35495E?style=for-the-badge&logo=koyeb&logoColor=white)](https://app.koyeb.com/) |
| 🧠 **HuggingFace** | [![Deploy on HuggingFace](https://img.shields.io/badge/Deploy%20to%20HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/) |
| 🔥 **Katabum** | [![Deploy on Katabum](https://img.shields.io/badge/Deploy%20to%20Katabum-FF009D?style=for-the-badge&logo=firefox&logoColor=white)](https://katabum.com/) |
| 🌀 **Bot Hosting Net** | [![Deploy on Bot Hosting](https://img.shields.io/badge/Deploy%20to%20BotHosting-0033A0?style=for-the-badge&logo=googlecloud&logoColor=white)](https://bot-hosting.net/) |
| ☁️ **Google Cloud** | [![Deploy on GCP](https://img.shields.io/badge/Deploy%20to%20Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)](https://console.cloud.google.com/) |

---

## 🧩 GitHub Workflow Deployment (example)
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
