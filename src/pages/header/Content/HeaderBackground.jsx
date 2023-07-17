import styles from './HeaderBackground.module.css';

function HeaderBackground() {
    return (
        <div className={styles['background-container']}>
            <svg className={styles.square} width="1000px" height="1000px">
                <rect
                    transform="rotate(45, 300, 300), translate(200)"
                    strokeWidth="3"
                ></rect>
            </svg>
        </div>
    );
}

export default HeaderBackground;
