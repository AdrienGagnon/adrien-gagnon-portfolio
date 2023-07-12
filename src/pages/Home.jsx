import Portfolio from './Portfolio/Portfolio';
import Header from './header/Header';
import NightModeSlider from './header/NightModeSlider';

function Home() {
    return (
        <main>
            <NightModeSlider />
            <Header />
            <Portfolio />
        </main>
    );
}

export default Home;
