# Amaanitvam Certificate Generator
### Production-Ready Certificate Automation System

A fully functional web application built to **automate certificate generation at scale** with a premium UI and instant PDF export.

> Designed with a product mindset — not just a college project.

---
## 🌐 Live Demo

🔗 https://certificate-generator-ac67.onrender.com/


## Why This Project Stands Out

- Solves a **real-world problem** — manual certificate generation is slow, error-prone, and unscalable
- Built with **scalable architecture** — API-ready backend, clean separation of concerns
- Focus on **UI/UX + performance** — dark neon admin UI + formal white-gold certificate design
- Generates **production-quality PDFs** — A4 landscape with watermark, seal, and signature zones
- Directly usable by **colleges, NGOs, and events** — zero modification needed

---

## Core Features

**Dynamic Certificate Generation**
User inputs instantly render a live certificate preview with no page reload.

**High-Quality PDF Export**
A4 landscape format with professional typography, gold borders, corner ornaments, and structured layout powered by jsPDF.

**Unique Certificate ID**
Every certificate gets a unique ID (e.g. `CERT-X9A2K1`) enabling future verification and tracking.

**Real-Time Rendering**
Smooth UX with no reloads — form submission triggers instant preview animation.

**Premium Design System**
Two distinct visual modes: dark neon admin interface and a formal white-gold certificate layout.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3 (custom design system), Vanilla JavaScript |
| PDF Engine | jsPDF |
| Backend | Node.js + Express |
| Architecture | REST API — extendable to MongoDB / SQL |

---

## System Architecture

```
client/
  index.html     → Certificate generator UI
  admin.html     → Admin panel (view all issued certificates)

server/
  server.js      → Express API (POST /certificates, GET /certificates)

package.json     → Dependencies
```

Clean separation between UI layer and backend API — the frontend communicates entirely through REST endpoints, making it straightforward to swap or extend the backend.

---

## API Reference

**POST** `/certificates` — Generate a new certificate

Request:
```json
{
  "name": "Lucky Sharma",
  "role": "Participant",
  "event": "Hackathon 2026",
  "date": "2026-05-05"
}
```

Response:
```json
{
  "name": "Lucky Sharma",
  "role": "Participant",
  "event": "Hackathon 2026",
  "date": "2026-05-05",
  "id": "CERT-X9A2K1"
}
```

**GET** `/certificates` — Retrieve all issued certificates

---

## Setup Instructions

**1. Clone the repository**
```bash
git clone https://github.com/luckysharma06102004-stack/certificate-generator.git
cd certificate-generator
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the server**
```bash
node server/server.js
```

**4. Open in browser**
```
http://localhost:8000
```

To use just the frontend without the backend, open `client/index.html` directly in your browser.

---

## Screenshots

### User Interface
![Form UI](./screenshots/form.png)

### Certificate Preview
![Certificate Preview](./screenshots/certificate-preview.png)

### PDF Output
![PDF Output](./screenshots/pdf-output.png)

### Admin Panel
![Admin Panel](./screenshots/admin-panel.png)

---

## Engineering Decisions

**Vanilla JS over frameworks** — Demonstrates core JavaScript fundamentals without abstraction. No build step, no dependencies, instant load.

**Custom CSS design system** — Every style is hand-crafted using CSS variables. No templates or component libraries — full control over the visual output.

**jsPDF for PDF rendering** — Client-side PDF generation means zero server load for exports. The PDF mirrors the on-screen certificate exactly.

**API-first backend design** — Express routes are cleanly separated from static file serving. Plugging in a database (MongoDB, PostgreSQL) requires only adding a persistence layer to the existing routes.

---

## Future Scope

- Certificate verification system via unique ID lookup
- Admin dashboard with search, filters, and export to CSV
- Email automation — send certificates directly to recipients
- Cloud deployment — Vercel (frontend) + Render (backend)
- Database integration for persistent certificate storage
- QR code on each certificate linking to a verification page

---

## What This Project Demonstrates

- Strong frontend fundamentals without relying on frameworks
- Ability to build real-world usable systems end-to-end
- Understanding of REST API architecture and client-server separation
- Attention to clean UI/UX — two distinct design systems in one project
- Problem-solving with a product mindset: built for actual use, not just submission

---

## Author

**Lucky Sharma**
Engineering Student | Aspiring Software Developer
KIIT University

---

*Build things that are actually useful, scalable, and production-ready.*