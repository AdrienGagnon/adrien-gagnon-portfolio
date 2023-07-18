import styles from './HeaderDescription.module.css';
import { color_orange_hex } from '../../constants/constants';

function HeaderDescription() {
    return (
        <div className={styles['header-description-container']}>
            <div className={styles['header-description']}>
                <svg
                    className={[
                        styles['curly-braces'],
                        styles['left-brace'],
                    ].join(' ')}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color_orange_hex}
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M9,3H8A3,3,0,0,0,5,6V9a3,3,0,0,1-3,3H2a3,3,0,0,1,3,3v4a3,3,0,0,0,3,3H9"></path>
                    </g>
                </svg>
                <p>
                    Programmeur Front-End motivé par le développement de sites
                    modernes, élégants et réactifs. Travailleur créatif,
                    autonome et assidu avec un intérêt d'apprendre.
                </p>
                <p className={styles['anglais']}>
                    Front-End programmer motivated by the development of modern,
                    elegant and responsive websites. Creative worker, autonomous
                    and hard working with a lifelong interest in learning.
                </p>
                <svg
                    className={[
                        styles['curly-braces'],
                        styles['right-brace'],
                    ].join(' ')}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M15,3h1a3,3,0,0,1,3,3V9a3,3,0,0,0,3,3h0a3,3,0,0,0-3,3v4a3,3,0,0,1-3,3H15"></path>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default HeaderDescription;
