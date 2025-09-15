import './Experience.css';
import useTexts from '../../../hooks/useTexts';

import imageAioros from '../../../assets/img/experience/aioros-studios.png';
import imageConstrusite from '../../../assets/img/experience/construsite-brasil.png';
import imageDefault from '../../../assets/img/experience/default.png';

import skillsExperience from '../../../assets/icon/skills.svg';

const Experience = () => {
    const texts = useTexts();

    const experienceData = [
        {
            id: 1,
            title: texts.Title_01_Experience,
            company: texts.Company_01_Experience,
            type: texts.Type_01_Experience,
            dates: texts.Dates_01_Experience,
            location: texts.Location_01_Experience,
            skills: ['Unity Develope', 'Game Developer', 'Game Design', 'Mobile', 'Web', 'PC', 'Augmented Reality(AR)'],
            image: imageAioros
        },
        {
            id: 2,
            title: texts.Title_02_Experience,
            company: texts.Company_02_Experience,
            type: texts.Type_02_Experience,
            dates: texts.Dates_02_Experience,
            location: texts.Location_02_Experience,
            skills: ['Game Developer', 'Game Design', 'Educational Games'],
            image: imageDefault
        },
        {
            id: 3,
            title: texts.Title_03_Experience,
            company: texts.Company_03_Experience,
            type: texts.Type_03_Experience,
            dates: texts.Dates_03_Experience,
            location: texts.Location_03_Experience,
            skills: ['Technical Support'],
            image: imageConstrusite
        }
    ];

    return (
        <section id="experience">
            <div className="section-experience">
                <div className="header-experience">
                    <h1 className="header-title-experience">{texts.Section_Experience}</h1>
                    <div className="header-divider-experience"/>
                </div>
                <div className="panel-experience">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="experience-item">
                            <div className="experience-logo">
                                <img src={exp.image} alt={`${exp.company} logo`} />
                            </div>
                            <div className="experience-details">
                                <h3 className="experience-title">{exp.title}</h3>
                                <p className="experience-company">{exp.company} · {exp.type}</p>
                                <p className="experience-subtext">{exp.dates}</p>
                                <p className="experience-subtext">{exp.location}</p>
                                <div className="experience-skills">
                                    <img className="skill-icon" src={skillsExperience} alt="icone de habilidade"/>
                                    <p>
                                        {exp.skills.join(' · ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;