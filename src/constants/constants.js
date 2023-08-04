import playlistLogin from '../assets/playlist-login.png';
import playlistHome from '../assets/playlist-home.png';
import playlistPlaylistView from '../assets/playlist-playlistView.png';
import playlistSectionView from '../assets/playlist-sectionView.png';

import natoursAllTours from '../assets/natours-all-tours.png';
import natoursTour from '../assets/natours-tour.png';
import natoursTourReviews from '../assets/natours-tour-reviews.png';
import natoursProfile from '../assets/natours-profile.png';

import icodethis1 from '../assets/icodethis-1.png';
import icodethis2 from '../assets/icodethis-2.png';
import icodethis3 from '../assets/icodethis-3.png';
import icodethis4 from '../assets/icodethis-4.png';

import adrienMenu from '../assets/adrien-menu.png';
import adrienCompetences from '../assets/adrien-competences.png';
import adrienPhotos from '../assets/adrien-photos.png';
import adrienQuiz from '../assets/adrien-quiz.png';

import playlistLoginSmall from '../assets/playlist-login-small.png';
import playlistHomeSmall from '../assets/playlist-home-small.png';
import playlistPlaylistViewSmall from '../assets/playlist-playlistView-small.png';
import playlistSectionViewSmall from '../assets/playlist-sectionView-small.png';

import natoursAllToursSmall from '../assets/natours-all-tours-small.png';
import natoursTourSmall from '../assets/natours-tour-small.png';
import natoursTourReviewsSmall from '../assets/natours-tour-reviews-small.png';
import natoursProfileSmall from '../assets/natours-profile-small.png';

import icodethis1Small from '../assets/icodethis-1-small.png';
import icodethis2Small from '../assets/icodethis-2-small.png';
import icodethis3Small from '../assets/icodethis-3-small.png';
import icodethis4Small from '../assets/icodethis-4-small.png';

import adrienMenuSmall from '../assets/adrien-menu-small.png';
import adrienCompetencesSmall from '../assets/adrien-competences-small.png';
import adrienPhotosSmall from '../assets/adrien-photos-small.png';
import adrienQuizSmall from '../assets/adrien-quiz-small.png';

const color_red_soft_hex = '#ff0000';
const color_red_bright_hex = '#ff2700';
const color_white_hex = '#fcffff';
const color_orange_hex = '#ff6a05';
const color_grey_hex = '#aaaaaa';

export {
    color_red_soft_hex,
    color_red_bright_hex,
    color_white_hex,
    color_orange_hex,
    color_grey_hex,
};

export const sections = [
    'header',
    'portfolio-item-1',
    'portfolio-item-2',
    'portfolio-item-3',
    'portfolio-item-4',
    'contact',
];

export const projectList = [
    {
        title: 'Natours',
        images: [
            {
                image: natoursAllTours,
                imageSmall: natoursAllToursSmall,
                alt: 'natours-all-tours',
            },
            {
                image: natoursTour,
                imageSmall: natoursTourSmall,
                alt: 'natours-tour',
            },
            {
                image: natoursTourReviews,
                imageSmall: natoursTourReviewsSmall,
                alt: 'natours-tour-reviews',
            },
            {
                image: natoursProfile,
                imageSmall: natoursProfileSmall,
                alt: 'natours-profile',
            },
        ],
        description_fr:
            'Natours permet de se renseigner sur divers visite organisées à travers le monde. En se connectant à votre compte personnel, vous pouvez acheter des visites grâce à Stripe et rédiger des avis sur les visites auxquelles vous avez participé.',
        description_en:
            'Natours allows you to find out about various tours organized around the world. By logging in to your personal account, you can buy tours through Stripe and write reviews on the tours you have taken.',
        note_fr:
            "L'établissement de la connexion avec la base de données peut prendre jusqu'à 1 minute.",
        note_en:
            'It may take up to 1 minute to initiate the connection with the database.',
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
        githubLink: 'https://github.com/AdrienGagnon/Natours',
    },
    {
        title: 'Playlist Manager',
        images: [
            {
                image: playlistLogin,
                imageSmall: playlistLoginSmall,
                alt: 'playlist-login',
            },
            {
                image: playlistHome,
                imageSmall: playlistHomeSmall,
                alt: 'playlist-home',
            },
            {
                image: playlistPlaylistView,
                imageSmall: playlistPlaylistViewSmall,
                alt: 'playlist-playlistView',
            },
            {
                image: playlistSectionView,
                imageSmall: playlistSectionViewSmall,
                alt: 'playlist-sectionView',
            },
        ],
        description_fr:
            "Cette application permet de chercher et faire jouer vos chansons favorites via l'API de Spotify. Vous pouvez vous connectez à votre compte personnel et accéder à vos propres playlist enregistrées.",
        description_en:
            'This application allows you to search and play your favorite songs via the Spotify API. You can log in to your personal account and access your own saved playlists.',
        note_fr: "Project Manager n'est pas encore terminé.",
        note_en: 'Project Manager is not feature complete.',
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
        githubLink: 'https://github.com/AdrienGagnon/PlaylistManager',
    },
    {
        title: 'iCodeThis',
        images: [
            {
                image: icodethis3,
                imageSmall: icodethis3Small,
                alt: 'icodethis3',
            },
            {
                image: icodethis4,
                imageSmall: icodethis4Small,
                alt: 'icodethis2',
            },
            {
                image: icodethis1,
                imageSmall: icodethis1Small,
                alt: 'icodethis1',
            },
            {
                image: icodethis2,
                imageSmall: icodethis2Small,
                alt: 'icodethis4',
            },
        ],
        description_fr:
            "iCodeThis présente des défis de conception quotidiens en utilisant HTML, CSS et JavaScript. Il permet de s'entrainer à créer efficacement des designs modernes et de résoudre des problèmes réels. Vous pouvez voir mes créations quotidiennes sur ce site, témoignant de mon assiduité et de mes compétences en développement web.",
        description_en:
            'iCodeThis presents everyday design challenges using HTML, CSS, and JavaScript. It allows to practice creating modern designs and to solve real problems. You can see my daily creations on this site, testifying to my diligence and my skills in web development.',
        link: 'https://icodethis.com/Adrien_Gagnon',
        tools: ['HTML', 'CSS', 'JavaScript', 'FontAwesome'],
    },
    {
        title: 'Personal Website',
        images: [
            {
                image: adrienMenu,
                imageSmall: adrienMenuSmall,
                alt: 'adrien-menu',
            },
            {
                image: adrienCompetences,
                imageSmall: adrienCompetencesSmall,
                alt: 'adrien-competences',
            },
            {
                image: adrienPhotos,
                imageSmall: adrienPhotosSmall,
                alt: 'adrien-photos',
            },
            {
                image: adrienQuiz,
                imageSmall: adrienQuizSmall,
                alt: 'adrien-quiz',
            },
        ],
        description_fr:
            "Ce site personnel m'a permis d'expérimenter avec différents outils tout en permettant de me présenter et de partager mes intérêts. Il comprend une section sur mes compétences, une section d'album photos prises par moi et une section quiz sur le monde!",
        description_en:
            'This personal site allowed me to experiment with different tools while serving as a presentation site for myself and my interests. It includes a section about my skills, a photo album section of pictures taken by me and a quiz section about the world!',
        link: 'https://adrien-gagnon.netlify.app',
        tools: [
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'Redux',
            'Three.js',
            'Netlify',
        ],
        githubLink: 'https://github.com/AdrienGagnon/mon-application',
    },
];
