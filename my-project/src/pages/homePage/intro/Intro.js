import './Intro.css';

import imageDesktop from '../../../assets/img/intro-desktop.png';
import imageMobile from '../../../assets/img/intro-mobile.png';

import iconGithub from '../../../assets/icon/github.svg';
import iconItchio from '../../../assets/icon/itchio.svg';
import iconLinkedin from '../../../assets/icon/linkedin.svg';

import docCurriculum from '../../../assets/doc/Curriculum_MarielleFidelis_EN.pdf';

import useTexts from '../../../hooks/useTexts';
import ButtonSocial from '../../../components/buttons/redeSocial/ButtonSocial';
import ButtonSimple from '../../../components/buttons/simpleCustom/ButtonSimple';
import LanguageSelector from '../../../components/language/LanguageSelector';

const Intro = () => {
    const texts = useTexts();

    return (
        <section id="home">
            <div className="section-home">
                <div className="panel-home">
                    <div className="left-home">
                        <p className="text-profissional-home">{texts.TextProfession_Intro}</p>
                        <p className="text-name-home">{texts.TextPresentation_Intro}</p>
                        <p className="text-profile-home">{texts.TextProfile_Intro}</p>
                        <p className="text-profile-home-extra">{texts.TextProfile_Intro_Extra}</p>
                        <div className="buttons-home">
                            <ButtonSimple height="40px" href={docCurriculum} text={texts.TextButtonCurriculum_Intro} width="150px" borderRadius="12px" target="_blank" rel="noopener noreferrer" alt="Botão de Curriculo"/>
                             <div className="redeSocial-home">
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconLinkedin} alt="Botão Linkedin" href="http://linkedin.com/in/marielle-game-dev/"/>
                                <ButtonSocial height={"32px"} width={"32px"} icon={iconGithub} alt="Botão github" href="https://github.com/Miius"/>
                                <ButtonSocial height={"40px"} width={"40px"} icon={iconItchio} alt="Botão Itchi.io" href="https://miius.itch.io/"/>
                            </div>
                        </div>
                    </div>
                    <div className="right-home">
                        <div className="languageSelector-home">
                            <LanguageSelector/>
                        </div>
                        <div className="image-home">
                            <picture>
                                <source media="(max-width: 768px)" srcSet={imageMobile} />
                                <img className="foreground-image" src={imageDesktop} alt="Descrição da imagem de introdução" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;