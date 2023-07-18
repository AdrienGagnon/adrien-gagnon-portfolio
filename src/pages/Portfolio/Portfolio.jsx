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
                "Cette application permet de chercher et faire jouer vos chansons favorites via l'API de Spotify. Vous pouvez vous connectez à votre compte personnel et accéder à vos propres playlist enregistrées.",
            description_en:
                'This application allows you to search and play your favorite songs via the Spotify API. You can log in to your personal account and access your own saved playlists.',
            note_fr:
                "Note: Project Manager n'est pas encore terminé et peut contenir quelques bugs.",
            note_en:
                'Note: Project Manager is not feature complete and may contain bugs.',
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
                'Natours permet de se renseigner sur divers visite organisées à travers le monde. En se connectant à votre compte personnel, vous pouvez acheter des visites grâce à Stripe et rédiger des avis sur les visites auxquelles vous avez participé.',
            description_en:
                'Natours allows you to find out about various tours organized around the world. By logging in to your personal account, you can buy tours through Stripe and write reviews on the tours you have taken.',
            note_fr:
                "Note: L'établissement de la connexion avec la base de données peut prendre jusqu'à 1 minute.",
            note_en:
                'Note: It may take up to 1 minute to initiate the connection with the database.',
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
                "Ce site personnel m'a permis d'expérimenter avec différents outils tout en servant de site de présentation sur moi et mes intérêts. Il comprend une section sur mes compétences, une section d'album photos prises par moi et une section quiz sur le monde!",
            description_en:
                'This personal site allowed me to experiment with different tools while serving as a presentation site for myself and my interests. It includes a section about my skills, a photo album section of pictures taken by me and a quiz section about the world!',
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
                    <div className={styles['item-wrapper']}>
                        <PortfolioItem
                            project={projectList[0]}
                            layout={'normal'}
                        />
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
            </div>
            <div
                ref={portfolio2Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-2"
            >
                <div className={styles['item-wrapper']}>
                    <PortfolioDescription
                        project={projectList[1]}
                        layout={'inverse'}
                    />
                    <PortfolioItem
                        project={projectList[1]}
                        layout={'inverse'}
                    />
                    <BtnLink
                        link={projectList[1].link}
                        fr={'Visiter /'}
                        en={'/ Visit'}
                        options={{ absolute: true }}
                    />
                </div>
            </div>
            <div
                ref={portfolio3Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-3"
            >
                <div className={styles['item-wrapper']}>
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
        </div>
    );
}

export default Portfolio;
