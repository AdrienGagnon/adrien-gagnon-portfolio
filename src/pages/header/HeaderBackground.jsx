import Tubes from '../components/Tubes/Tubes';
import styles from './HeaderBackground.module.css';

function HeaderBackground({ headerTransition }) {
    return (
        <div
            className={[
                styles['background-container'],
                headerTransition ? styles['transition'] : '',
            ].join(' ')}
        >
            <Tubes transition={headerTransition} />
            <svg
                className={styles['arrow']}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z"
                    data-name="Down"
                />
            </svg>
        </div>
    );
}

export default HeaderBackground;
