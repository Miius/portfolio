import './Project.css';
import useTexts from '../../../hooks/useTexts';

import imageBlockar from '../../../assets/img/project/blockar.jpg';
import imageLegaldigital from '../../../assets/img/project/legaldigital.png';
import imageHooked from '../../../assets/img/project/hooked.jpeg';
import iconWin from '../../../assets/icon/win.svg';
import iconLinux from '../../../assets/icon/linux.svg';
import iconAndroid from '../../../assets/icon/android.svg';
import iconIOS from '../../../assets/icon/ios.svg';
import iconPlataform from '../../../assets/icon/plataform.svg';

import ButtonSimple from '../../../components/buttons/simpleCustom/ButtonSimple';

const Project = () => {
    const texts = useTexts();

    const tagIcons = {
        Windows: iconWin,
        Linux: iconLinux,
        Android: iconAndroid,
        iOS: iconIOS,
    };

    const projectsData = [
        {
            id: 1,
            title: 'Transitando Legal Digital',
            category: 'Educational',
            description: texts.Description_Legaldigital_Project,
            imageUrl: imageLegaldigital,
            projectUrl: 'https://play.google.com/store/apps/details?id=com.Aioros.TLDigital&hl=pt_BR',
            tags: ['Unity', 'Android', 'iOS']
        },
        {
            id: 2,
            title: 'Hooked',
            category: 'Fighting | PVP Casual',
            description: texts.Description_Hooked_Project,
            imageUrl: imageHooked,
            projectUrl: 'https://mamacabra.itch.io/hooked', 
            tags: ['Unity', 'Linux', 'Windows']
        },
        {
            id: 3,
            title: 'Blockar',
            category: 'Puzzle',
            description: texts.Description_Blockar_Project,
            imageUrl: imageBlockar,
            projectUrl: 'https://mamacabra.itch.io/blockar',
            tags: ['Unity', 'Linux', 'Windows']
        },
    ];

    return (
        <section id="project">
            <div className="section-project">
                <div className="header-project">
                    <h1 className="header-title-project">{texts.Section_Project}</h1>
                    <div className="header-divider-project"/>
                </div>
                <div className="panel-project">
                    {projectsData.map(project => (
                        <a 
                          key={project.id} 
                          href={project.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-card"
                        >
                        <div className="card-inner-wrapper">
                            <div className="project-image-container">
                                <img src={project.imageUrl} alt={project.title} className="project-image" />
                                    
                                <div className="project-header">
                                    <span className="tag-unity">
                                        <img 
                                            src={iconPlataform}
                                            alt={`icon plataform`} 
                                            className="platform-icon"
                                        />
                                        Unity 
                                    </span>
                                    <div className="platform-icons">
                                    {project.tags
                                        .filter(tag => tag !== 'Unity')
                                        .map(tag => (
                                        <img 
                                            key={tag} 
                                            src={tagIcons[tag]}
                                            alt={`${tag} icon`} 
                                            className="platform-icon"
                                        />
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title-container">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-link-icon">↗</span>
                                </div>
                                <p className="project-category">{project.category}</p>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
                <div className="project-button-view">
                    <ButtonSimple height="30px" to={"/projects"} text={texts.Button_View_Project} width="110px" borderRadius="12px" alt="Botão Ver Mais"/>
                </div>
            </div>
        </section>
    );
};

export default Project;