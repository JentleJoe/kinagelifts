# KinageLifts - Elevator & Escalator Solutions

A modern, responsive website for KinageLifts - your trusted partner for vertical mobility excellence. We specialize in elevator and escalator solutions, from importation and installation to maintenance and modernization.

## 🌟 Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Product Showcase**: Comprehensive display of elevators, escalators, and accessibility solutions
- **Service Portfolio**: Detailed information about installation, maintenance, and modernization services
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Integration**: WhatsApp, phone, and email contact options
- **Newsletter Subscription**: Stay updated with industry news and tips

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite with HMR (Hot Module Replacement)
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JentleJoe/kinagelifts.git
cd kinagelifts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ContactFormSection.jsx
│   ├── FloatingCTA.jsx
│   ├── Footer.jsx       # Contains spectacular animation
│   ├── Navbar.jsx
│   └── ...
├── pages/               # Main page components
│   ├── Home/           # Landing page with hero, services, testimonials
│   ├── About/          # Company information and story
│   ├── Products/       # Product catalog and features
│   ├── Services/       # Service offerings and procedures
│   └── Contact/        # Contact form and information
├── data/               # Static data and content
├── assets/             # Images and media files
└── layout/             # Layout components
```

## 🎨 Spectacular Footer Animation System

The footer features a cutting-edge animation system for the "Built by peakbrand.agency" section that creates an unforgettable user experience. Here's how it was implemented:

### Animation Architecture

The animation uses a **10-layer system** with precise z-index stacking:

1. **Background Glow** (-z-10): Rainbow gradient with blur and pulse
2. **Floating Sparkles**: 6 sparkles with staggered bounce animations
3. **Main Container**: Border and background effects with heartbeat animation
4. **Text Container**: Glow effects and overflow handling
5. **Sliding Underlines**: Dual gradient lines from opposite directions
6. **Character Animation**: Individual letter bounce with 80ms delays
7. **Animated Arrow**: Multi-transform effects (translate, rotate, scale)
8. **Shooting Stars**: Diagonal streaks across the text
9. **Magic Elements**: Spinning wand and sparkle icons
10. **Pulsing Rings**: Concentric borders with wave effects

### Technical Implementation

```css
/* Key Animations */
@keyframes sparkle-bounce { /* GPU-accelerated bouncing */ }
@keyframes rainbow { /* Continuous hue rotation */ }
@keyframes shimmer { /* Moving highlight effect */ }
@keyframes heartbeat { /* Pulsing scale effect */ }
```

```jsx
// Character-by-character animation
{"peakbrand.agency".split("").map((char, index) => (
  <span 
    key={index}
    className="inline-block group-hover:animate-bounce"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    {char}
  </span>
))
```

### Performance Features

- **GPU Acceleration**: Uses `transform3d()` for smooth animations
- **Hover State Management**: Single `group` class triggers all effects
- **Layered Timing**: Staggered delays from 100ms to 1400ms
- **Click-through Prevention**: `pointer-events-none` on decorative elements
- **Zero JavaScript**: Pure CSS animations with Tailwind utilities

### Visual Effects

✨ **Rainbow background glow** with continuous color cycling  
🎯 **6 floating sparkles** with different colors and bounce timing  
🌟 **Character-by-character text bouncing** with shimmer overlay  
🚀 **Shooting star streaks** that travel diagonally across text  
💫 **Multi-transform arrow** (translate, rotate, scale, pulse)  
🔮 **Spinning magic wand** with sparkle icons  
💍 **Triple pulsing rings** with staggered wave effects  
❤️ **Heartbeat container** scaling for living feel  

## 🏢 About KinageLifts

KinageLifts specializes in providing comprehensive vertical mobility solutions including:

- **Elevators**: Passenger, freight, and home elevators
- **Escalators**: Moving walkways and escalator systems
- **Accessibility**: Wheelchair lifts, stairlifts, and dumbwaiters
- **Services**: Installation, maintenance, and modernization

## 📞 Contact Information

- **WhatsApp**: +234 811 905 1471
- **Phone**: +234 810 366 4912
- **Email**: kinagelifts@gmail.com
- **Website**: Built by [peakbrand.agency](https://peakbrand.agency)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design and development by [peakbrand.agency](https://peakbrand.agency)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Experience vertical mobility excellence with KinageLifts** 🏢⬆️
