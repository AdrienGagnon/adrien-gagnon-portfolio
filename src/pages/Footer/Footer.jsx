import styles from './Footer.module.css';

import github from '../Socials/assets/github.png';
import linkedin from '../Socials/assets/linkedin.png';
import mail from '../Socials/assets/mail.png';

import { handleClickLink } from '../Socials/handleClickLink';

function Footer() {
    const socials = [
        { name: github, img: github, link: 'https://github.com/AdrienGagnon' },
        {
            name: linkedin,
            img: linkedin,
            link: 'https://linkedin.com/in/adrien-gagnon',
        },
        { name: mail, img: mail, mail: 'mailto: adrien.gagnon25@outlook.com' },
    ];
    return (
        <footer className={styles['footer']}>
            <div className={styles['social-links']}>
                {socials.map(social => {
                    return (
                        <div
                            key={social.name}
                            onClick={() => handleClickLink(social)}
                        >
                            <img src={social.img} alt="social-link" />
                        </div>
                    );
                })}
            </div>
            <div className={styles['copyright']}> ©️ Adrien Gagnon 2023</div>
        </footer>
    );
}

export default Footer;
