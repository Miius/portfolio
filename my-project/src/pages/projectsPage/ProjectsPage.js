import '../../variables/Colors.css';
import './ProjectsPage.css';

import useTexts from '../../hooks/useTexts';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

import imageIntroducion from '../../assets/img/project/introducion.png';

// Imagem dos projetos
import imageHooked from '../../assets/img/project/hooked.png';
import imageBrocolli from '../../assets/img/project/broccoli.png';
import imageBlockar from '../../assets/img/project/blockar.jpg';
import imageChaotic from '../../assets/img/project/chaotic.png';
import imageTooMuch from '../../assets/img/project/toomuch.png';
import imageTransitandoLegal from '../../assets/img/project/legaldigital.png';

const allProjectsData = [
    { id: 1, path: 'https://play.google.com/store/apps/details?id=com.Aioros.TLDigital&hl=pt_BR', title: 'Transitando Legal Digital', category: 'Aioros Studios', image: imageTransitandoLegal, tags: ['Unity', 'Android/iOS', 'Educational'], type: 'professional' },
    { id: 2, path: 'https://mamacabra.itch.io/hooked', title: 'Hooked', category: 'Indie', image: imageHooked, tags: ['Unity', 'Windows', 'Linux'], type: 'professional' },
    { id: 3, path: 'https://mamacabra.itch.io/blockar', title: 'Blockar ', category: 'Indie', image: imageBlockar, tags: ['Unity', 'Windows', 'Linux'], type: 'professional' },
    { id: 4, path: 'https://mamacabra.itch.io/chaoticsea', title: 'Chaotic Sea', category: 'Indie', image: imageChaotic, tags: ['Unity', 'Windows', 'Linux'], type: 'professional' },
    { id: 5, path: 'https://giovana-melo.itch.io/too-much-work-for-only-one-godess', title: 'Too Much Work For Only One Godess', category: 'Game Jam', image: imageTooMuch, tags: ['Construct', 'Windows', 'Linux'], type: 'personal' },
    { id: 6, path: 'https://giovana-melo.itch.io/brocolli', title: 'Brocolli ', category: 'Game Jam', image: imageBrocolli, tags: ['Construct', 'Windows', 'Linux'], type: 'personal' },
];

const ProjectsPage = () => {
    const texts = useTexts();
    const professionalProjects = allProjectsData.filter(p => p.type === 'professional');
    const personalProjects = allProjectsData.filter(p => p.type === 'personal');

    return (
        <>
            <Header />
            <div className="section-projectsAll">
                <div className="image-panel-projectsAll">
                    <div className="projects-bg-image">
                        <img src={imageIntroducion} alt="Background pattern" />
                    </div>
                    <div className="projects-text-content">
                        <h1 className="projects-title">{texts.Game_Projects}</h1>
                        <p className="projects-subtitle">{texts.GameText_Projects}</p>
                    </div>
                </div>

                {/* Seção Profissional */}
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsProfessional}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                <div className="projectsAll-grid">
                    {professionalProjects.map(project => (
                        <a 
                          href={project.path} 
                          key={project.id} 
                          className="projectsAll-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Seção Pessoal */}
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsPersonal}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                <div className="projectsAll-grid">
                    {personalProjects.map(project => (
                        <a 
                          href={project.path} 
                          key={project.id} 
                          className="projectsAll-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProjectsPage;