import { useEffect, useState } from 'react';
import './App.css';
import Experience from './components/Experience';
import Education from './components/Education';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CodingProfile from './components/CodingProfile';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Mohit", onClick: () => scrollToSection('hero') },
        { label: "Education", ariaLabel: "About Education", onClick: () => scrollToSection('education') },
        { label: "Experience", ariaLabel: "About Careers", onClick: () => scrollToSection('experience') }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "AI/ML", ariaLabel: "Projects On AI/ML", onClick: () => scrollToSection('projects') },
        { label: "Web Development", ariaLabel: "Project On Web Development", onClick: () => scrollToSection('projects') }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", onClick: () => scrollToSection('contact') },
        { label: "X", ariaLabel: "X", href: "https://x.com/MOHITCHAMYAL58", external: true },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/mohit-chamyal-57254724b/", external: true }
      ]
    }
  ];

  return (
    <>
      <Header
        items={[
          {
            label: "About",
            bgColor: theme === 'dark' ? "#1a1a1a" : "#0D0716",
            textColor: "#fff",
            links: items[0].links
          },
          {
            label: "Projects",
            bgColor: theme === 'dark' ? "#1f1f1f" : "#170D27",
            textColor: "#fff",
            links: items[1].links
          },
          {
            label: "Contact",
            bgColor: theme === 'dark' ? "#242424" : "#271E37",
            textColor: "#fff",
            links: items[2].links
          }
        ]}
        baseColor={theme === 'dark' ? 'hsl(var(--background))' : '#fff'}
        menuColor={theme === 'dark' ? '#fff' : '#000'}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <div id="hero"><Hero /></div>
      <div id="education"><Education /></div>
      <div id='coding-profie'><CodingProfile /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Project /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
