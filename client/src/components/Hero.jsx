import { useEffect, useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaPython,
  FaCode,
  FaJava
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiCplusplus, 
  SiJavascript
} from 'react-icons/si';
import './Hero.css';
// Import your profile image
import profileImage from '../assets/profile.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'Competitive Programmer',
    'ML Enthusiast',
    'MERN Stack Developer'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  const techStack = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#68A063' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiExpress />, name: 'Express', color: '#000000' },
    { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiCplusplus />, name: 'C++', color: '#00599C' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaJava />, name: 'Java', color: '#007396' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-glass-card">
          {/* Centered Badge at Top */}
          <div className="hero-badge-wrapper">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for opportunities
            </div>
          </div>

          <div className="hero-intro-layout">
            {/* Left Column - Text Content */}
            <div className="hero-text-column">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Mohit Chamyal</span>
              </h1>

              <div className="hero-role">
                <span className="role-prefix">A passionate</span>
                <span className="typed-text">
                  {typedText}
                  <span className="cursor">|</span>
                </span>
              </div>

              <p className="hero-description">
                Final year CS student specializing in MERN stack development with a strong 
                foundation in competitive programming and machine learning. Building scalable 
                web applications and solving complex algorithmic challenges.
              </p>

              <div className="hero-cta">
                <button 
                  className="cta-button primary"
                  onClick={() => scrollToSection('projects')}
                >
                  <FaCode />
                  View My Work
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  <FaEnvelope />
                  Get In Touch
                </button>
              </div>

              <div className="hero-social">
                <a 
                  href="https://github.com/MohitChamyal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohit-chamyal-57254724b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link twitter"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="mailto:mohit.chamyal@example.com"
                  className="social-link email"
                  aria-label="Send Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="hero-image-column">
              <div className="profile-image-wrapper">
                <div className="profile-image-container">
                  <img 
                    src={profileImage} 
                    alt="Mohit Chamyal - Full Stack Developer"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section - Separate Below */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name} 
                className="tech-item"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--tech-color': tech.color 
                }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
