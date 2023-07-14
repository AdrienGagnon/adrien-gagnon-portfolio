import { useEffect, useState } from 'react';

import message from 'bundle-text:./message.txt';

import './Home.css';
import Portfolio from './Portfolio/Portfolio';
import Header from './header/Header';
import NightModeSlider from './header/NightModeSlider';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Home() {
    const [mode, setMode] = useState('light');
    //     useEffect(() => {
    //         const githubAdress =
    //             'https://github.com/AdrienGagnon/adrien-gagnon-portfolio.git';
    //         const emailAdress = 'adrien.gagnon25@outlook.com';
    //         console.log(message);
    //         console.log(`\nHello there, adventurer! ⚓
    // You want to know how this boat floats?

    // If you think it's interesting and want to see the code behind it,
    // you can check it out at ${githubAdress}.

    // You can also contact me at ${emailAdress} for more info about this site, me or just to chitchat!`);
    //     }, []);

    return (
        <main data-theme={mode}>
            <NightModeSlider mode={mode} setMode={setMode} />
            <Header />
            <Portfolio />
            <Contact />
            <Footer />
        </main>
    );
}

export default Home;
