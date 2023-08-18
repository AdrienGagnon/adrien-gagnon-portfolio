import { useEffect, useState } from 'react';
import styles from './Socials.module.css';

import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import mail from './assets/mail.png';
import iCodeThis from './assets/iCodeThis.jpg';
import { handleClickLink } from './handleClickLink';

function Socials() {
    const [mousePosition, setMousePosition] = useState();
    const [socialsVisible, setSocialsVisible] = useState(true);

    const socials = [
        {
            logo: github,
            color: '#6e5494',
            name: 'github',
            link: 'https://github.com/AdrienGagnon',
        },
        {
            logo: linkedin,
            color: '#0077B5',
            name: 'linkedin',
            link: 'https://linkedin.com/in/adrien-gagnon',
        },
        {
            logo: mail,
            color: '#c71610',
            name: 'mail',
            mail: 'mailto: adrien.gagnon25@outlook.com',
        },
        {
            logo: iCodeThis,
            color: '#181028',
            name: 'iCodeThis',
            link: 'https://icodethis.com/Adrien_Gagnon',
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSocialsVisible(false);
        }, 2000);
        let timer = Date.now();
        window.addEventListener('mousemove', e => handleMouseOver(e, timer));
        return window.removeEventListener('mousemove', e =>
            handleMouseOver(e, timer)
        );
    }, []);

    function handleMouseOver(e, timer) {
        const now = Date.now();
        if (now - timer < 200) return;
        timer = now;

        setMousePosition(e.clientX);
    }

    return (
        <>
            <div
                className={[
                    styles['social-container'],
                    mousePosition < 100 || socialsVisible
                        ? ''
                        : styles['slideOut'],
                ].join(' ')}
            >
                {socials.map(social => {
                    if (social.mail) {
                        return (
                            <div
                                onClick={() => handleClickLink(social)}
                                key={social.name}
                                style={{ background: social.color }}
                            >
                                <img src={social.logo} alt={social.name} />
                            </div>
                        );
                    }
                    return (
                        <a
                            href={social.link}
                            key={social.name}
                            style={{ background: social.color }}
                        >
                            <img src={social.logo} alt={social.name} />
                        </a>
                    );
                })}
                <div className={styles.share}>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Socials;
