# NARUTOK — Naruto Universe Showcase

**Alternate Live Preview:** https://narutokr.netlify.app/

Live demos of a *Naruto* fan-themed info site built with modern web technologies.

---

## 📌 About

**NARUTOK** is a web application that presents key information from the *Naruto* anime world.  
It includes:

✔ Sections for **Home, Characters, Story, Villages**  
✔ Visually engaging character cards and series timeline  
✔ Fully responsive layout for web and mobile screens  
✔ Built using React / Next.js

Live projects hosted on Netlify:
- 🌐 https://narutokr.netlify.app/

---

## 🚀 LiveLinks
👉 **Alternate:** https://narutokr.netlify.app/

Use either link to explore the live site in your browser.

---

## 🧠 Features

- **Home Page** with introduction to the Naruto world  
- **Character Grid** with major characters  
- **Story Timeline** showing significant events  
- **Villages Section** with summaries of ninja countries  
- Fully responsive UI for desktop and mobile  
- Modular component structure

---

## 🛠️ Stack Used

| Layer                 | Technology       |
|----------------------|------------------|
| Frontend Framework   | React / Next.js  |
| Styling              | CSS / Tailwind / SCSS (optional) |
| Deployment           | Netlify          |

---

## 🏁 Getting Started (Local Development)

To run this project locally, follow these steps:

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/narutok.git
cd narutok
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Local Dev Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview locally.

---

## 🗂️ Project Structure

```
narutok/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── CharacterCard.js
│   │   └── TimelineSection.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── characters.js
│   │   ├── story.js
│   │   └── villages.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── home.module.css
│   └── utils/
│       └── data.js
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

---

## 🧩 Example Component (CharacterCard.js)

```jsx
import React from "react";

const CharacterCard = ({ character }) => (
  <div className="card">
    <img src={character.image} alt={character.name} />
    <h3>{character.name}</h3>
    <p>{character.role}</p>
  </div>
);

export default CharacterCard;
```

---

## 🎨 Styles Snapshot (`globals.css`)

```css
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #fff;
  color: #333;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  background: #000;
  color: #fff;
}

.card img {
  width: 100%;
  border-radius: 8px;
}
```

---

## 📦 Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start local dev server   |
| `npm run build` | Build production bundle  |
| `npm run start` | Serve production locally |
| `npm run lint`  | Lint project code        |

---

## 📜 License

This project is open-source under the **MIT License**.

---

## ❤️ Acknowledgements

Thanks to the original creator and Netlify for hosting.

Explore the site live:
🔗 [https://narutokr.netlify.app/](https://narutokr.netlify.app/)

```

---
```
