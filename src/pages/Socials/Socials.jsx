import { useEffect, useState } from 'react';
import styles from './Socials.module.css';

import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import mail from './assets/mail.png';
import { handleClickLink } from './handleClickLink';

function Socials() {
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
    ];

    useEffect(() => {
        // Initial slideOut
        setTimeout(() => {
            setSocialsVisible(false);
        }, 2000);
    }, []);

    // useEffect(() => {
    //     // After the initial slideOut, listener for when the mouse is near the left of the screen
    //     if (socialsVisible) return;
    //     let timer = Date.now();
    //     window.addEventListener('mousemove', e => handleMouseOver(e, timer));
    //     return () =>
    //         window.removeEventListener('mousemove', e =>
    //             handleMouseOver(e, timer)
    //         );
    // }, [socialsVisible]);

    // function handleMouseOver(e, timer) {
    //     const now = Date.now();
    //     if (now - timer < 150) return;
    //     timer = now;

    //     if (e.clientX < 100 && !socialsVisible) {
    //         setTimeout(() => {
    //             window.addEventListener('mousemove', e => abortListener(e));
    //         }, 2000);
    //         setSocialsVisible(true);
    //     }
    // }

    // function abortListener(e) {
    //     if (e.clientX >= 100) {
    //         setSocialsVisible(false);
    //         window.removeEventListener('mousemove', e => abortListener(e));
    //     }
    // }

    return (
        <div
            className={[
                styles['social-container'],
                socialsVisible ? '' : styles['slideOut'],
            ].join(' ')}
        >
            {socials.map(social => {
                return (
                    <div
                        onClick={() => handleClickLink(social)}
                        key={social.name}
                        style={{ background: social.color }}
                    >
                        <img src={social.logo} alt={social.name} />
                    </div>
                );
            })}
        </div>
    );
}

export default Socials;
