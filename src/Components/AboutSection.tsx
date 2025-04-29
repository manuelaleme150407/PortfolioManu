import '../styles/AboutSection.css';
import aboutImg from '../assets/aboutImg.png';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h1>ABOUT ME</h1>
        <img src={aboutImg} alt="Profile" />
        <p>Oii, sou a Manuela! Tenho 18 anos, gosto de ler, sair com minha família e meus amigos e, por meio da <b>tecnologia,</b> busco transformar o mundo em um lugar melhor!</p>
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
            <li>Liderança</li>
            <li>Determinação</li>
            <li>Organização</li>
            <li>Responsabilidade</li>
            <li>Sociabilidade</li>
          </ul>
        </div>
        <div className="section">
          <h2>MISSION</h2>
          <p>Busco ser <b>luz na vida das pessoas,</b> oferecendo ajuda, gentileza e inspiração onde quer que eu vá. Minha missão é causar um impacto positivo a cada dia, utilizando minhas ações e meu trabalho para elevar as pessoas e contribuir para um mundo melhor. Acredito que até mesmo pequenos gestos podem gerar mudanças significativas, e me comprometo a viver com propósito e compaixão, seguindo o chamado para ser "o sal da terra" Mateus 5,13.</p>
        </div>

        <div className="section">
          <h2>VISION</h2>
          <p>Visualizo um mundo onde cada pessoa reconheça sua capacidade de <b>promover transformações positivas.</b> Aspiro trabalhar em áreas que gerem mudanças reais, ajudando outros a terem uma vida melhor e tornando o mundo um lugar mais iluminado e cheio de esperança. <b>Cada dia é uma nova oportunidade de crescer, servir e deixar um legado de bondade e luz.</b></p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
