import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import './Header.css';

const Header = ({ items, className = '', ease = 'power3.out', baseColor = '#fff', menuColor, theme, onThemeToggle }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 0;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const contentEl = navEl.querySelector('.card-nav-content');
    if (!contentEl) return 0;

    // Temporarily expand to measure true content height
    const original = {
      visibility: contentEl.style.visibility,
      position: contentEl.style.position,
      height: contentEl.style.height,
    };
    Object.assign(contentEl.style, {
      visibility: 'visible',
      position: 'static',
      height: 'auto',
    });

    const measuredHeight = contentEl.scrollHeight + 60; // header = 60px

    // Restore original styles
    Object.assign(contentEl.style, original);

    return measuredHeight + 8; // tiny buffer (prevents clipping)
  };


  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease })
      .to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => tl?.kill();
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      const newTl = createTimeline();
      if (isExpanded) newTl?.progress(1);
      tlRef.current = newTl;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  // Modern gradient colors for cards
  const cardGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple gradient
    'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)', // Cyan to Blue
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'  // Pink gradient
  ];

  return (
    <div className={`card-nav-container ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="header-brand-minimal">
            <span className="brand-name-minimal">Mohit Chamyal</span>
            <span className="brand-separator">·</span>
            <span className="brand-role">CS Student</span>
          </div>

          <button
            onClick={onThemeToggle}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {items.map((item, idx) => (
            <div
              key={item.label}
              className="nav-card"
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{ background: cardGradients[idx] }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links.map((lnk) => (
                  <a
                    key={lnk.label}
                    className="nav-card-link"
                    href={lnk.href || '#'}
                    aria-label={lnk.ariaLabel}
                    onClick={(e) => {
                      if (lnk.onClick) {
                        e.preventDefault();
                        lnk.onClick();
                        if (isExpanded) toggleMenu();
                      }
                    }}
                    target={lnk.external ? "_blank" : undefined}
                    rel={lnk.external ? "noopener noreferrer" : undefined}
                  >
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
