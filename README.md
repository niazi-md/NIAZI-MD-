<h1 align="center">
  <img src="https://i.ibb.co/vV1kC1n/niazi-md-logo.png" width="200"><br>
  ⚡ NIAZI-MD ⚡  
</h1>

<p align="center">
  <b>The Most Powerful & Smart Multi-Device WhatsApp Bot</b><br>
  Developed by <b>Hacker NIAZI</b> 💻  
  <br><br>
  <a href="https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H">
    <img src="https://img.shields.io/badge/WhatsApp%20Channel-Join-green?style=for-the-badge&logo=whatsapp"/>
  </a>
  <a href="https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt">
    <img src="https://img.shields.io/badge/Join%20WhatsApp%20Group-Click%20Here-blue?style=for-the-badge&logo=whatsapp"/>
  </a>
</p>

---

### 🔑 Generate Pair Code
<p align="center">
  <a href="https://niazi-md.herokuapp.com/pair.html" target="_blank">
    <img src="https://img.shields.io/badge/PAIR%20CODE-CLICK%20HERE-green?style=for-the-badge&logo=whatsapp" width="250"/>
  </a>
</p>

> ⚠️ **Important (Urdu):** QR scan karne ke liye doosre phone ka WhatsApp use karo —  
> same device se scan **mat karo** warna code invalid hoga!

---

## 🚀 Deploy NIAZI-MD Bot — Quick Links

| Platform | Deploy |
|-----------|---------|
| 🟣 **Heroku** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Heroku-7056BF?style=for-the-badge&logo=heroku)](https://heroku.com/deploy?template=https://github.com/niazi-md/NIAZI-MD-) |
| 🟢 **Render** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Render-46E3B7?style=for-the-badge&logo=render)](https://render.com/deploy?repo=https://github.com/niazi-md/NIAZI-MD-) |
| 🟡 **Railway** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Railway-F7C42A?style=for-the-badge&logo=railway)](https://railway.app/template?repo=https://github.com/niazi-md/NIAZI-MD-) |
| 🔵 **Koyeb** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Koyeb-2222DD?style=for-the-badge&logo=koyeb)](https://app.koyeb.com/deploy?type=git&repository=niazi-md/NIAZI-MD-) |
| 🧠 **HuggingFace** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20HuggingFace-FFD21E?style=for-the-badge&logo=huggingface)](https://huggingface.co/spaces) |
| 🔥 **Katabum** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20Katabum-F80000?style=for-the-badge)](https://katabum.com/) |
| ☁️ **Google Cloud** | [![Deploy](https://img.shields.io/badge/Deploy%20on%20GCP-4285F4?style=for-the-badge&logo=google-cloud)](https://cloud.google.com/) |
| 🧩 **GitHub Workflow** | [![Deploy](https://img.shields.io/badge/GitHub%20Workflow%20Example-black?style=for-the-badge&logo=github)](https://github.com/niazi-md/NIAZI-MD-/actions) |

---

## 📦 Example GitHub Workflow Deployment

```yml
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
