# 🚀 Satya Pujith - Portfolio

A modern, minimalist portfolio showcasing my work as a Full Stack Developer & AI Automation Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)

---

## ✨ Features

### 🎨 **Modern Design**
- Minimalist black & white aesthetic
- Smooth animations and transitions
- Fully responsive across all devices
- Custom cursor interactions

### 🔥 **Interactive Sections**

#### **Home**
- Hero section with profile image
- Dynamic manifesto
- 3D keyboard-style skills visualization with floating animations

#### **Projects**
- Click project titles to preview live sites in a modal
- Direct links to live demos and GitHub repositories
- Hover effects and smooth transitions

#### **Profile/Resume**
- Detailed experience timeline
- Achievement cards
- Education history
- Image carousel for awards & certificates (grayscale with hover effects)
- Downloadable PDF resume

#### **Satya.AI**
- AI-powered chat assistant
- Powered by Gemini AI
- Learn about my projects, skills, and experience through conversation

#### **Contact**
- Integrated contact form with Formspree
- Real-time submission status
- Form validation
- Direct email alternative

### 🎯 **Advanced Features**
- Full-screen navigation menu with staggered animations
- Live project preview in iframe modal
- Image carousel with navigation controls
- Smooth page transitions
- Mix-blend-mode effects

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling

### **Integrations**
- **Gemini AI** - AI chat assistant
- **Formspree** - Contact form handling
- **Lucide React** - Icon library

### **Advanced Skills Showcased**
- Next.js 15, Laravel, RAG
- Vector DB, Gemini AI, WebSocket
- Elastic Search, Socket.IO, Mongoose
- Google Cloud, Random Forest, D3.js
- And more...

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SatyaPujith/Satya.dev.git
cd Satya.dev
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Add your assets**
- Place your profile image as `image.png` in the `public` folder
- Add award/certificate images in `public/profile/` folder (1.png, 2.png, 3.png, etc.)
- Add your resume PDF as `Satya Pujith Resume.pdf` in the `public` folder

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to `http://localhost:5173`

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── image.png              # Profile image
│   ├── profile/               # Awards & certificates
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── 3.png
│   └── Satya Pujith Resume.pdf
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx  # AI chat component
│   │   ├── Sidebar.tsx        # Navigation menu
│   │   └── SkillsChart.tsx    # 3D keyboard skills
│   ├── services/
│   │   └── geminiService.ts   # AI integration
│   ├── App.tsx                # Main app component
│   ├── constants.ts           # Profile data & content
│   ├── types.ts               # TypeScript types
│   └── index.tsx              # Entry point
├── .env.local                 # Environment variables
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Customization

### Update Your Information

Edit `src/constants.ts` to customize:

```typescript
export const PROFILE = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  about: "Your bio...",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    leetcode: "https://leetcode.com/yourusername",
    geeksforgeeks: "https://geeksforgeeks.org/user/yourusername"
  }
};

// Update PROJECTS, EXPERIENCE, EDUCATION, ACHIEVEMENTS arrays
```

### Update Contact Form

Replace the Formspree endpoint in `App.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
});
```

### Customize Skills

Edit the keyboard layout in `src/components/SkillsChart.tsx`:
```typescript
const keyboardRows = [
  [
    { key: 'Your Skill', level: 95 },
    // Add more skills...
  ],
];
```

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📸 Screenshots

### Home Page
Clean, minimalist hero section with profile image and dynamic skills visualization.

### Projects
Interactive project showcase with live preview functionality.

### AI Chat
Conversational AI assistant powered by Gemini AI.

### Contact
Beautiful contact form with real-time validation and submission status.

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and customize it for your own use!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Satya Pujith Botuku**

- 📧 Email: satyapoojith2@gmail.com
- 💼 LinkedIn: [linkedin.com/in/botukusatyapujith](https://www.linkedin.com/in/botukusatyapujith/)
- 🐙 GitHub: [github.com/SatyaPujith](https://github.com/SatyaPujith)
- 💻 LeetCode: [leetcode.com/u/SatyaPujith](https://leetcode.com/u/SatyaPujith/)
- 📚 GeeksforGeeks: [geeksforgeeks.org/user/23951a5k85](https://www.geeksforgeeks.org/user/23951a5k85/)

---

<div align="center">

**Built with ❤️ by Satya Pujith**

⭐ Star this repo if you like it!

</div>
