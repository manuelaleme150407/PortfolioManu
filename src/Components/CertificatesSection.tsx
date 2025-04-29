import '../styles/CertificatesSection.css';

const CertificatesSection = () => {
  return (
    <section className="certificates" id="certificates">
      <h1 className="certificates-title">CERTIFICATES</h1>

<div className='certificates-groups'>
      <div className="certificates-group">
        <h2>TECH</h2>
        <ul>
          <li><a href="https://drive.google.com/file/d/1yDuPHS7-Q6BcwKzfwXXVkDelacyNxiDs/view?usp=sharing" target='_blank' rel="noopener noreferrer">Web Responsive Design</a></li>
          <li><a href="https://drive.google.com/file/d/1xomnIMCVgZ5JZ6ixejrX_22hplShM8UY/view?usp=sharing" target='_blank' rel="noopener noreferrer">Java Script</a></li>
        </ul>
      </div>

      <div className="certificates-group">
        <h2>SCHOOL</h2>
        <ul>
          <li><a href="https://drive.google.com/file/d/1ypZejCozRwqGBDN8VESjWH7i2IibFAge/view?usp=sharing" target='_blank' rel="noopener noreferrer">Medalha de Prata 2-ONHB</a></li>
          <li><a href="https://drive.google.com/file/d/1qcQWp9ZfS6Uz5GGd4b3JXK4yiwRrd3_n/view?usp=sharing" target='_blank' rel="noopener noreferrer">Participação 16º ONHB</a></li>
        </ul>
      </div>

      <div className="certificates-group">
        <h2>GENERAL</h2>
        <ul>
          <li><a href=" " target='_blank' rel="noopener noreferrer">English Course - Fisk</a></li>
          <li><a href=" " target='_blank' rel="noopener noreferrer">Volunteering Certificate</a></li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
