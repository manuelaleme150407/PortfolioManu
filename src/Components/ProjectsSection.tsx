import '../styles/ProjectsSection.css';
import graduationImage from '../assets/graduation.png';
import baniwaImage from '../assets/baniwa.png';
import volunteerImage from '../assets/volunteer.png';

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-top">
        <div className="tech-section">
          <h2>TECH</h2>
          <ul>
            <li><a href="https://github.com/manuelaleme150407/PetShop" target='_blank' rel="noopener noreferrer">Pet Shop Project</a></li>
            <li><a href="https://github.com/manuelaleme150407/PrjEmpresaAvaliacao" target='_blank' rel="noopener noreferrer">Spring Project</a></li>
            <li><a href="https://github.com/manuelaleme150407/React.js" target='_blank' rel="noopener noreferrer">React Project</a></li>
          </ul>
        </div>

        <div className="project-cards">
          <div className="card">
          <a href="https://formatura-3e.netlify.app/" target="_blank"  rel="noopener noreferrer">
            <img src={graduationImage} alt="3E" />
            <div className="card-title">Graduation</div>
            </a>
          </div>
          <div className="card">
            <a href="https://stalwart-rugelach-82efc0.netlify.app/" target="_blank"  rel="noopener noreferrer">
            <img src={baniwaImage} alt="Baniwa" />
            <div className="card-title">BANIWA</div>
            </a>
          </div>
        </div>

        <h1 className="projects-title">PROJECTS</h1>
      </div>

      <hr className="divider" />

      <div className="projects-bottom">
        <div className="volunteer-text">
          <p>I am part of a youth group at my church, where I actively participate in activities that promote personal and community growth. I have worked in the area of ​​human development, helping people in vulnerable situations. I have also participated in visits to shelters for children waiting for adoption and institutions that care for the elderly. These experiences have taught me the <b>importance of empathy, solidarity and commitment to social transformation.</b></p>
        </div>

        <div className="volunteer-image">
          <img src={volunteerImage} alt="Volunteer Work" />
        </div>

        <h2 className="volunteer-title">VOLUNTEER</h2>
      </div>
    </section>
  );
};

export default ProjectsSection;
