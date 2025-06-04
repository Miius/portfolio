import './Intro.css';

import imageIntro from '../../../assets/img/maskIntro.png';

import githubnIcon from '../../../assets/icon/github.svg';
import itchioIcon from '../../../assets/icon/itchio.svg';
import linkedininIcon from '../../../assets/icon/linkedin.svg';

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
                        <div className="buttons-home">
                            <ButtonSimple height="40px" text={texts.TextButtonCurriculum_Intro} width="150px" borderRadius="12px" alt="Botão de Curriculo"/>
                             <div className="redeSocial-home">
                                <ButtonSocial height={"38px"} width={"38px"} icon={linkedininIcon} alt="Botão Linkedin" href="http://linkedin.com/in/marielle-game-dev/"/>
                                <ButtonSocial height={"32px"} width={"32px"} icon={githubnIcon} alt="Botão github" href="https://github.com/Miius"/>
                                <ButtonSocial height={"40px"} width={"40px"} icon={itchioIcon} alt="Botão Itchi.io" href="https://itch.io/profile/miius"/>
                            </div>
                        </div>
                    </div>
                    <div className="right-home">
                        <div className="languageSelector-home">
                            <LanguageSelector/>
                        </div>
                        <div className="image-home">
                            <img className="foreground-image" src={imageIntro} alt="Imagem de Introdução"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;