import '../styles/HeroSection.css';
import HeroImg from '../assets/heroImg.png';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
      <h1>MY PORTFOLIO</h1>
        <h2>Hi, I'm <span>Manu</span></h2>
        <p>“You are the salt of the earth; you are the light of the world” <br />Mt 5, 13</p>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Profile" />
      </div>
    </section>
  );
};

export default HeroSection;
