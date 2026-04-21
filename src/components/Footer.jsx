import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-text">
            © {new Date().getFullYear()} Designed & Built by <span>Rohit</span> with ❤️
          </p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              id="back-to-top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'inherit',
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              <FiArrowUp /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
