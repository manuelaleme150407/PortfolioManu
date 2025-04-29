import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Site desenvolvido por Manuela Leme | © 2025</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/manuela-leme-morais-almeida-4765a6346/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/manuelaleme150407" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:manuelaleme1504@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
