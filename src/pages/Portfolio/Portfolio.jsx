import styles from './Portfolio.module.css';
import PortfolioItem from './Item/PortfolioItem';
import SectionTitle from '../components/Title/SectionTitle';
import { useRef, useEffect } from 'react';
import { intersectionObserver } from '../utils/intersectionObserver';
import playlistLogin from './assets/playlist-login.png';
import playlistHome from './assets/playlist-home.png';
import playlistPlaylistView from './assets/playlist-playlistView.png';
import playlistSectionView from './assets/playlist-sectionView.png';
import PortfolioDescription from './Description/PortfolioDescription';

function Portfolio() {
    const portfolio1Ref = useRef();
    const portfolio2Ref = useRef();

    useEffect(() => {
        intersectionObserver(portfolio1Ref.current);
        intersectionObserver(portfolio2Ref.current);
    }, []);

    const projectList = [
        {
            title: 'Project Manager',
            images: [
                { image: playlistLogin, alt: 'playlist-login' },
                { image: playlistHome, alt: 'playlist-home' },
                { image: playlistPlaylistView, alt: 'playlist-playlistView' },
                { image: playlistSectionView, alt: 'playlist-sectionView' },
            ],
            description_fr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit esse ipsum? Impedit laboriosam nobis accusantium saepe rem quae laudantium harum, molestiae esse id amet numquam! Facere nostrum sunt in!',
            description_en:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempora, recusandae quidem, praesentium ut sit provident voluptatibus reprehenderit assumenda, quasi nihil totam aliquid deleniti. Vel atque quod accusantium blanditiis quidem!',
            link: 'https://playlist-manager-ag.netlify.app',
        },
    ];

    return (
        <div className={styles['portfolio-container']}>
            <div ref={portfolio1Ref} id="portfolio-item-1">
                <SectionTitle
                    titleFr={'Mes projets'}
                    titleEn={'My latest work'}
                />
                <div className={styles['portfolio-item-container']}>
                    <PortfolioItem project={projectList[0]} layout={'normal'} />
                    <PortfolioDescription
                        project={projectList[0]}
                        layout={'normal'}
                    />
                </div>
            </div>
            <div
                ref={portfolio2Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-2"
            >
                <PortfolioDescription
                    project={projectList[0]}
                    layout={'inverse'}
                />
                <PortfolioItem project={projectList[0]} layout={'inverse'} />
            </div>
        </div>
    );
}

export default Portfolio;
