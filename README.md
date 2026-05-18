# ⚡ InternFinder

A React internship search app with filters, search, and save functionality.

## Project Structure

```
internship-search/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── FilterPanel.jsx
        ├── InternshipCard.jsx
        └── InternshipList.jsx
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```
This creates a `dist/` folder ready to deploy.

---

## Deploy Options

### Option A – Vercel (Recommended, Free)
1. Push this project to a GitHub repo
2. Go to https://vercel.com → New Project → Import your repo
3. Framework preset: **Vite** (auto-detected)
4. Click **Deploy** — done!

### Option B – Netlify (Free)
1. Run `npm run build`
2. Go to https://netlify.com → "Deploy manually"
3. Drag and drop the `dist/` folder
4. Done — you get a live URL instantly

### Option C – GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. In `vite.config.js`, add `base: '/your-repo-name/'`
4. Run: `npm run build && npm run deploy`

---

## Connecting to Real Internshala API

Replace the `MOCK_INTERNSHIPS` array in `src/App.jsx` with a real fetch:

```js
useEffect(() => {
  fetch("https://internshala.com/hiring/search")
    .then(res => res.json())
    .then(data => setInternships(data))
    .catch(err => console.error(err));
}, []);
```

> Note: Internshala's public API may require CORS handling. Use a proxy or their official partner API if available.

---

## Features
- 🔍 Full-text search (title, company, skills)
- 🗂 Filter by profile, location, work type
- 💾 Save/unsave internships
- 📱 Fully responsive design
- ⚡ Fast Vite build
