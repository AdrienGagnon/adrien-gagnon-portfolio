import styles from './HeaderBackground.module.css';

function HeaderBackground() {
    return (
        <div className={styles['background-container']}>
            <svg className={styles.square}>
                <rect></rect>
            </svg>
            {/* <svg className={styles.square}>
                <rect transform="translate(50, 50)" strokeWidth="3"></rect>
            </svg> */}
        </div>
    );
}

export default HeaderBackground;
