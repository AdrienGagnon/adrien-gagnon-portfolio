import { useRef, useEffect } from 'react';

import styles from './Portfolio.module.css';

import { intersectionObserver } from '../utils/intersectionObserver';
import PortfolioItem from './Item/PortfolioItem';
import SectionTitle from '../components/Title/SectionTitle';
import PortfolioDescription from './Description/PortfolioDescription';
import BtnLink from '../components/Buttons/BtnLink';

import playlistLogin from './assets/playlist-login.png';
import playlistHome from './assets/playlist-home.png';
import playlistPlaylistView from './assets/playlist-playlistView.png';
import playlistSectionView from './assets/playlist-sectionView.png';

import natoursAllTours from './assets/natours-all-tours.png';
import natoursTour from './assets/natours-tour.png';
import natoursTourReviews from './assets/natours-tour-reviews.png';
import natoursProfile from './assets/natours-profile.png';

import adrienMenu from './assets/adrien-menu.png';
import adrienCompetences from './assets/adrien-competences.png';
import adrienPhotos from './assets/adrien-photos.png';
import adrienQuiz from './assets/adrien-quiz.png';

function Portfolio() {
    const portfolio1Ref = useRef();
    const portfolio2Ref = useRef();
    const portfolio3Ref = useRef();

    useEffect(() => {
        intersectionObserver(portfolio1Ref.current);
        intersectionObserver(portfolio2Ref.current);
        intersectionObserver(portfolio3Ref.current);
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
            tools: [
                'React',
                'JavaScript',
                'HTML',
                'CSS',
                'Redux',
                'SpotifyAPI',
                'Netlify',
            ],
        },
        {
            title: 'Natours',
            images: [
                { image: natoursAllTours, alt: 'natours-all-tours' },
                { image: natoursTour, alt: 'natours-tour' },
                { image: natoursTourReviews, alt: 'natours-tour-reviews' },
                { image: natoursProfile, alt: 'natours-profile' },
            ],
            description_fr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit esse ipsum? Impedit laboriosam nobis accusantium saepe rem quae laudantium harum, molestiae esse id amet numquam! Facere nostrum sunt in!',
            description_en:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempora, recusandae quidem, praesentium ut sit provident voluptatibus reprehenderit assumenda, quasi nihil totam aliquid deleniti. Vel atque quod accusantium blanditiis quidem!',
            link: 'https://natours-y70o.onrender.com',
            tools: [
                'Node.js',
                'MongoDB',
                'Express',
                'Pug',
                'CSS',
                'Stripe',
                'Render',
            ],
        },
        {
            title: 'Personal website',
            images: [
                { image: adrienMenu, alt: 'adrien-menu' },
                { image: adrienCompetences, alt: 'adrien-competences' },
                { image: adrienPhotos, alt: 'adrien-photos' },
                { image: adrienQuiz, alt: 'adrien-quiz' },
            ],
            description_fr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit esse ipsum? Impedit laboriosam nobis accusantium saepe rem quae laudantium harum, molestiae esse id amet numquam! Facere nostrum sunt in!',
            description_en:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempora, recusandae quidem, praesentium ut sit provident voluptatibus reprehenderit assumenda, quasi nihil totam aliquid deleniti. Vel atque quod accusantium blanditiis quidem!',
            link: 'https://adriengagnon.netlify.app',
            tools: [
                'React',
                'JavaScript',
                'HTML',
                'CSS',
                'Redux',
                'Three.js',
                'Netlify',
            ],
        },
    ];

    return (
        <div className={styles['portfolio-container']}>
            <div ref={portfolio1Ref} id="portfolio-item-1">
                <SectionTitle
                    titleFr={'Mes projets'}
                    titleEn={'My latest work'}
                />
                <div className={styles['portfolio-item-container-title']}>
                    <PortfolioItem project={projectList[0]} layout={'normal'} />
                    <PortfolioDescription
                        project={projectList[0]}
                        layout={'normal'}
                    />
                    <BtnLink
                        link={projectList[0].link}
                        fr={'Visiter /'}
                        en={'/ Visit'}
                        options={{ absolute: true }}
                    />
                </div>
            </div>
            <div
                ref={portfolio2Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-2"
            >
                <PortfolioDescription
                    project={projectList[1]}
                    layout={'inverse'}
                />
                <PortfolioItem project={projectList[1]} layout={'inverse'} />
                <BtnLink
                    link={projectList[1].link}
                    fr={'Visiter /'}
                    en={'/ Visit'}
                    options={{ absolute: true }}
                />
            </div>
            <div
                ref={portfolio3Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-3"
            >
                <PortfolioItem project={projectList[2]} layout={'normal'} />
                <PortfolioDescription
                    project={projectList[2]}
                    layout={'normal'}
                />
                <BtnLink
                    link={projectList[2].link}
                    fr={'Visiter /'}
                    en={'/ Visit'}
                    options={{ absolute: true }}
                />
            </div>
        </div>
    );
}

export default Portfolio;
