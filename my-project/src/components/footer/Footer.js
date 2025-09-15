import './Footer.css';

import useTexts from '../../hooks/useTexts';
import ButtonSocial from '../buttons/redeSocial/ButtonSocial';

import iconGithub from '../../assets/icon/footer/github-white.svg';
import iconItchio from '../../assets/icon/footer/itchio-white.svg';
import iconLinkedin from '../../assets/icon/footer/linkedin-white.svg';

const Footer = () => {
    const texts = useTexts();

    return (
        <section id="footer">
            <div className="panel-footer">
                <div className="header-footer">
                    <div>
                        <p className="title-footer">{texts.TitlePage_Footer}</p>
                        <p className="subtitle-footer">{texts.SubtitlePage_Footer}</p>
                    </div>
                    <div>
                        <p className="text-footer">{texts.SocialPage_Footer}</p>
                            <div className="social-footer">
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconLinkedin} alt="Botão Linkedin" href="http://linkedin.com/in/marielle-game-dev/"/>
                                <ButtonSocial height={"32px"} width={"32px"} icon={iconGithub} alt="Botão github" href="https://github.com/Miius"/>
                                <ButtonSocial height={"40px"} width={"40px"} icon={iconItchio} alt="Botão Itchi.io" href="https://miius.itch.io/"/>
                            </div>
                    </div>
                </div>
                <div className="divider-footer"/>
                <p className="created-footer">{texts.Created_Footer} <a className="created-link-footer" href="https://matheusfelipe20.github.io/portfolio/">MatheusFelipe20</a></p>
            </div>
        </section>
    );
};

export default Footer;