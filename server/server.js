const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

const certificates = [];

function generateCertificateId() {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `AMN${num}`;
}

// POST /certificates
app.post('/certificates', (req, res) => {
  const { name, role, event, date } = req.body;

  if (!name || !role || !event || !date) {
    return res.status(400).json({ error: 'All fields are required: name, role, event, date' });
  }

  const certificate = {
    id: generateCertificateId(),
    name: name.trim(),
    role: role.trim(),
    event: event.trim(),
    date,
    issuedAt: new Date().toISOString()
  };

  certificates.push(certificate);
  res.status(201).json(certificate);
});

// GET /certificates
app.get('/certificates', (req, res) => {
  res.json(certificates);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/admin.html'));
});

app.listen(PORT, () => {
  console.log(`Amaanitvam Certificate Generator running on http://localhost:${PORT}`);
});
