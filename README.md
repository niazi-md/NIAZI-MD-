<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NIAZI-MD Pair Code</title>
<style>
  body {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background: linear-gradient(135deg, #000000, #202020);
    color: white;
    padding: 50px;
  }
  h1 {
    color: #00ffff;
  }
  button {
    background: #00ffff;
    border: none;
    padding: 12px 25px;
    font-size: 18px;
    color: black;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    background: #00bcd4;
    transform: scale(1.05);
  }
  #result {
    margin-top: 20px;
    font-size: 20px;
  }
</style>
</head>
<body>
  <h1>🤖 NIAZI-MD Pair Code Generator</h1>
  <p>Click below to get your fresh WhatsApp pairing code</p>
  <button onclick="getPair()">🔑 Generate Pair Code</button>
  <div id="result"></div>

  <script>
    async function getPair() {
      document.getElementById('result').innerHTML = "⏳ Generating pair code...";
      try {
        const res = await fetch('/pairtext');
        const data = await res.json();
        document.getElementById('result').innerHTML = `
          ✅ <b>Your Pair Code:</b><br>
          <code>${data.pairing_code}</code><br><br>
          <small>Use this in WhatsApp → Linked Devices → Add Device</small>
        `;
      } catch (err) {
        document.getElementById('result').innerHTML = "❌ Error getting code!";
      }
    }
  </script>
</body>
</html>
