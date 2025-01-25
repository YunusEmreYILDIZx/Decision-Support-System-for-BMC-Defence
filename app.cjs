const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Statik dosyalar için src klasörünü ayarla
app.use(express.static(path.join(__dirname, 'src')));

// index.html için rota
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// ulkeler.html için rota
app.get('/ulkeler', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'ulkeler.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

