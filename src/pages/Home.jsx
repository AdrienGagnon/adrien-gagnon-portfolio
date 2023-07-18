import { useEffect, useState } from 'react';

import message from 'bundle-text:./message.txt';

import './Home.css';
import Portfolio from './Portfolio/Portfolio';
import Header from './header/Header';
import Contact from './Contact/Contact';
import Nav from './UI/Nav';
import SectionSelector from './UI/SectionSelector';
import Socials from './Socials/Socials';
import OptionsBtn from './UI/OptionsBtn';

function Home() {
    const [mode, setMode] = useState('light');
    useEffect(() => {
        //         const githubAdress =
        //             'https://github.com/AdrienGagnon/adrien-gagnon-portfolio.git';
        //         const emailAdress = 'adrien.gagnon25@outlook.com';
        //         console.log(message);
        //         console.log(`\nHello there, adventurer! ⚓
        // You want to know how this boat floats?
        // If you think it's interesting and want to see the code behind it,
        // you can check it out at ${githubAdress}.
        // You can also contact me at ${emailAdress} for more info about this site, me or just to chitchat!`);

        const isDarkMode = () =>
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        runColorMode(isDarkMode => {
            if (isDarkMode) {
                return setMode('dark');
            } else if (mode === 'dark') {
                return setMode('light');
            }
        });
    }, []);

    const runColorMode = fn => {
        if (!window.matchMedia) {
            return;
        }

        const query = window.matchMedia('(prefers-color-scheme: dark)');

        fn(query.matches);

        query.addEventListener('change', event => fn(event.matches));
    };

    return (
        <main data-theme={mode}>
            <Nav />
            <OptionsBtn mode={mode} setMode={setMode} />
            <Socials />
            <SectionSelector />
            <Header />
            <Portfolio />
            <Contact />
        </main>
    );
}

export default Home;
