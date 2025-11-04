<h1 align="center">⚡ NIAZI-MD ⚡</h1>

<p align="center">
  <img src="https://i.ibb.co/1fN1RkVv/shaban-md.jpg" width="250" />
</p>

<h3 align="center">The Most Powerful & Smart Multi-Device WhatsApp Bot</h3>
<h4 align="center">Developed by Hacker NIAZI 💥</h4>

---

### 🌐 Join Official Links
<p align="center">
  <a href="https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H"><img src="https://img.shields.io/badge/Join-Channel-green?style=for-the-badge"></a>
  <a href="https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt"><img src="https://img.shields.io/badge/Join-Group-blue?style=for-the-badge"></a>
</p>

---

### 🔑 Generate Pair Code
<p align="center">
  <a href="https://niazi-md-pair.onrender.com/">
    <img src="https://img.shields.io/badge/PAIR_CODE-CLICK_HERE-green?style=for-the-badge">
  </a>
</p>

> **Important:** QR scan karne ke liye doosre phone ka WhatsApp use karo —  
> same device se scan mat karo warna code invalid hoga!

---

### 🚀 Deploy NIAZI-MD Bot — Quick Links

| Platform | Deploy |
|:--:|:--:|
| 🟣 **Heroku** | [![Deploy](https://img.shields.io/badge/Deploy%20To%20Heroku-purple?style=for-the-badge)](https://heroku.com/deploy?template=https://github.com/niazi-md/NIAZI-MD-) |
| 🟢 **Render** | [![Deploy](https://img.shields.io/badge/Deploy%20To%20Render-green?style=for-the-badge)](https://render.com/deploy) |
| 🟡 **Railway** | [![Deploy](https://img.shields.io/badge/Deploy%20To%20Railway-yellow?style=for-the-badge)](https://railway.app) |
| 🔵 **Koyeb** | [![Deploy](https://img.shields.io/badge/Deploy%20To%20Koyeb-blue?style=for-the-badge)](https://www.koyeb.com) |
| 🧠 **HuggingFace** | [![Deploy](https://img.shields.io/badge/Deploy%20To%20HuggingFace-orange?style=for-the-badge)](https://huggingface.co) |
| 🔥 **Katabum** | [![Deploy](https://img.shields.io/badge/Deploy%20To%20Katabum-red?style=for-the-badge)](https://katabum.com) |

---

### ⚙️ Example GitHub Workflow
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
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20.x
      - run: npm install
      - run: npm start
