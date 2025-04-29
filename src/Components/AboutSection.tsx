import '../styles/AboutSection.css';
import aboutImg from '../assets/aboutImg.png';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h1>ABOUT ME</h1>
        <img src={aboutImg} alt="Profile" />
        <p>Hii, I'm Manuela! I'm 18 years old, I like reading, hanging out with my family and friends and, through <b>technology,</b> I try to make the world a better place!</p>
      </div>

      <div className="about-right">
        <div className="section">
          <h2>EDUCATION</h2>
          <ul>
            <li>1º ao 5º - E. E. Amélia César Machado de Araújo</li>
            <li>6º - E. E. Aggeo Pereira do Amaral</li>
            <li>6º ao 8º - E. E. Escolástica Rosa de Almeida</li>
            <li>8º ao 3º EM - Sesi Mangal 123</li>
          </ul>
        </div>

        <div className="section">
          <h2>PERSONAL SKILLS</h2>
          <ul>
          <li>Leadership</li>
          <li>Determination</li>
          <li>Organization</li>
          <li>Responsibility</li>
          <li>Sociability</li>
          </ul>
        </div>
        <div className="section">
          <h2>MISSION</h2>
          <p>I strive to be a <b>light in people's lives</b>, offering help, kindness, and inspiration wherever I go. My mission is to make a positive impact every day by using my actions and work to lift others up and contribute to a better world. I believe that even small gestures can create meaningful change, and I commit to living with purpose and compassion, following the call to be "the salt of the earth" Matthew 5,13.</p>
        </div>

        <div className="section">
          <h2>VISION</h2>
          <p>I envision a world where every person recognizes their ability to <b>promote positive change.</b> I aspire to work in areas that generate real change, helping others to have a better life and making the world a brighter and more hopeful place. <b>Every day is a new opportunity to grow, serve and leave a legacy of kindness and light.</b></p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
