// index.js - minimal Node.js server (placeholder pair implementation)
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Placeholder pair text (for testing). Replace this logic with real Baileys pairing.
let lastPairRaw = null;

// Example: set a test code (uncomment to test locally)
// lastPairRaw = "TEST-PAIR-CODE-123456";

app.get('/pairtext', (req, res) => {
  if (lastPairRaw) return res.json({ ok: true, pair: lastPairRaw });
  return res.json({ ok: false, pair: null });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`NIAZI-MD web server running on port ${PORT}`));
