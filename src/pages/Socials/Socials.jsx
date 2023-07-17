import { useEffect, useState } from 'react';
import styles from './Socials.module.css';

import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import mail from './assets/mail.png';
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
        <div
            className={[
                styles['social-container'],
                mousePosition < 100 || socialsVisible ? '' : styles['slideOut'],
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
