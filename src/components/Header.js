import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import styles from './Header.module.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(sideNavRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
    } else {
      gsap.to(sideNavRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
    }
  }, [isOpen]);

  const getLinkClass = (path) => {
    return location.pathname === path ? styles.activeLink : '';
  };

  return (
    <nav className={styles.navContainerLanding}>
      <a  href="/" className={styles.homeLink}>cdeolive</a>
      <div className={styles.hambuContainer}>
        <a href="/work" className={`${styles.landingHola} ${getLinkClass('/farm')}`}>Farm</a>
        <a href="/about" className={`${styles.landingHola} ${getLinkClass('/location')}`}>Location</a>
        <a href="/contact" className={`${styles.landingHola} ${getLinkClass('/liquid-gold')}`}>Liquid Gold</a>
      </div>



      
      <div className={styles.hambuContainerMobile} onClick={toggleMenu}>
        <div className={styles.landingHola}>• menu</div>
      </div>



      <div className={styles.sideNav} ref={sideNavRef}>
        <div className={styles.closeBtn} onClick={toggleMenu}>close</div>

        <div className={styles.linksPages}>
          <div className={styles.descriptionContent}>
            <p>NAVIGATION</p>
            <hr className={styles.hrClass}></hr>
          </div>
          <a href="/" className={`${styles.sideNavLink} ${getLinkClass('/')}`} onClick={toggleMenu}>Home</a>
          <a href="/work" className={`${styles.sideNavLink} ${getLinkClass('/farm')}`} onClick={toggleMenu}>Farm</a>
          <a href="/about" className={`${styles.sideNavLink} ${getLinkClass('/location')}`} onClick={toggleMenu}>Location</a>
          <a href="/contact" className={`${styles.sideNavLink} ${getLinkClass('/liquid-gold')}`} onClick={toggleMenu}>Liquid Gold</a>
        </div>

        <div className={styles.socialMedia}>
          <div className={styles.descriptionContent}>
            <p>SOCIALS</p>
            <hr className={styles.hrClass}></hr>
          </div>
          <div className={styles.socialMediaLinks}>
            <a href="https://github.com/maragiogliov" target="_blank" className={styles.socialLink} rel="noreferrer">Instagram</a>
            <a href="https://www.behance.net/vmaragioglio" target="_blank" className={styles.socialLink} rel="noreferrer">Youtube</a>
            <a href="https://www.linkedin.com/in/victor-maragioglio-ba3073214/" target="_blank" className={styles.socialLink} rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>



    </nav>
  );
};

export default Header;
