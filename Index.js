// index.js - minimal server & bootstrap for NIAZI-MD
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const SESSION_ID = process.env.SESSION_ID || '';

app.get('/', (req, res) => {
  res.send('🚀 NIAZI-MD WhatsApp Bot — Server is running!');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    sessionConfigured: !!SESSION_ID
  });
});

app.listen(PORT, () => {
  console.log(`NIAZI-MD running on port ${PORT}`);
  console.log('SESSION_ID present:', !!SESSION_ID);
});

/**
 * NOTE:
 * - This index.js provides a minimal express server so Heroku recognizes the Node app.
 * - Replace / extend this file with your actual bot bootstrap (baileys connection etc.)
 * - Keep "main": "index.js" and "start": "node index.js" in package.json so Heroku detects Node.
 */
