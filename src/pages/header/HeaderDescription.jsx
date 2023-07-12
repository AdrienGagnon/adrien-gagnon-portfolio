import styles from './HeaderDescription.module.css';
import { color_orange_hex } from '../../constants/constants';

function HeaderDescription() {
    return (
        <div className={styles['header-description-container']}>
            <svg
                className={[styles['curly-braces'], styles['left-brace']].join(
                    ' '
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color_orange_hex}
                strokeWidth="1"
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
            <div className={styles['header-description']}>
                <p>
                    Programmeur Front-End motivé par le développement de sites
                    modernes, élégants et réactifs. Travailleur créatif,
                    autonome et travaillant avec un intérêt d'apprendre.
                </p>
                <p className={styles['anglais']}>
                    Front-End programmer motivated by the development of modern,
                    elegant and responsive websites. Creative worker, autonomous
                    and hard working with a lifelong interest in learning.
                </p>
            </div>

            <svg
                className={[styles['curly-braces'], styles['right-brace']].join(
                    ' '
                )}
                // width="256px"
                // height="256px"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color_orange_hex}
                strokeWidth="1"
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
    );
}

export default HeaderDescription;
