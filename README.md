<div align="center">
  <h1 style="margin-top: 10px;">VisionaryAI | Text-to-Image Generator</h1>
</div>

![App Screenshot](./public/public/Projects/ai-image.avif)

<div align="center">

  [![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![Pollinations.ai](https://img.shields.io/badge/Pollinations.AI-FF4F00?style=for-the-badge&logo=ai&logoColor=white)](https://pollinations.ai/)

  <h3>🚀 <a href="https://ai-image-10.vercel.app/">Try It Live</a></h3>
</div>

---

## 📖 About The Project

**VisionaryAI** is a cutting-edge **AI Image Generation Tool** that turns your text prompts into stunning visual masterpieces instantly. Built with a focus on **User Experience (UX)**, it features a cinematic interface, smooth animations, and high-quality image rendering.

Powered by the **Pollinations.ai API**, this tool requires no API keys or login, making creativity accessible to everyone. It utilizes **Framer Motion** for immersive transitions and a **Glassmorphism** design language for a futuristic feel.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Cyberpunk/Dark Theme)
- **Animations:** `framer-motion` (Page transitions, Hover effects, Modals)
- **Icons:** `lucide-react`
- **AI Engine:** [Pollinations.ai](https://pollinations.ai/) (Stable Diffusion models)
- **Functionality:** Native `fetch` API & Blob handling for downloads.

---

## ✨ Key Features

- **🎨 Text-to-Art Engine:** Generates high-resolution (1024x1024) images based on user prompts.
- **🎲 Unique Seeds:** Uses random seeding logic (`Math.random`) to ensure every generated image is unique, even for the same prompt.
- **📥 One-Click Download:** Features a robust download system that converts the image URL to a `Blob` for instant saving without opening new tabs.
- **🔍 Immersive Fullscreen:** Click on any generated image to view it in a modal with a backdrop blur effect (`AnimatePresence`).
- **⚡ Cinematic UI:** 
  - Ambient background glows.
  - Loading states with custom progress bars and spinner animations.
  - Interactive hover effects on the image card.

---

## 📂 Code Logic Highlights

The core functionality in `Generate.jsx` handles the API integration and user interaction:

1.  **Smart Image Generation:** 
    It constructs a dynamic URL with the user's prompt and a random seed to fetch unique images.
    ```javascript
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${randomSeed}...`;
    ```

2.  **Blob Download Handler:**
    To bypass cross-origin issues and provide a smooth download experience, the app fetches the image as a blob before saving.
    ```javascript
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    // ... triggers download anchor tag
    ```

3.  **Animation Orchestration:**
    `Framer Motion` manages the entrance animations, the loading pulse, and the smooth expansion of the fullscreen modal.

---


## 💻 Getting Started

Follow the instructions below to run this project locally on your machine.

### Prerequisites
Make sure you have **Node.js** installed.

### Installation Steps

**1. Clone the repository**
```bash
https://github.com/NahidAhmed-12/AI-image-Generate.git
```

**2. Navigate to project directory**
```bash
cd your-repo-name
```

**3. Install Dependencies**
```bash
npm install
# or if you use yarn
yarn install
```

**4. Start the Development Server**
```bash
npm start
# or
yarn start
```

The application will open automatically at `http://localhost:3000`.

---

## 📂 Folder Structure

```
src/
├── assets/             # Images (screenshot.avif, Nahid.avif)
├── pages/              # All Components & Pages
│   ├── Hero.jsx        # Main Hero section with 3D animation
│   ├── Navbar.jsx      # Responsive Navigation
│   ├── Footer.jsx      # Footer section
│   └── ...             # Other page components
├── App.js              # Main Component & Routes
└── index.css           # Global Styles & Tailwind Directives
```

---



## 📬 Contact Me

Feel free to reach out if you want to integrate AI into your apps!

- **Email:** [your-email@gmail.com](mailto:your-email@gmail.com)
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)

---

<div align="center">
  <p>Made with ❤️ and 🤖 by <b>Nahid</b></p>
  <p>⭐️ If you love AI art, give this project a star!</p>
</div>
