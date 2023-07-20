import styles from './HeaderBackground.module.css';

function HeaderBackground() {
    return (
        <div className={styles['background-container']}>
            {/* <svg className={styles.square} id={styles['one']}>
                <rect></rect>
            </svg>
            <svg className={styles.square} id={styles['two']}>
                <rect></rect>
            </svg> */}
            {/* <pattern id="losange">
                <rect></rect>
            </pattern>
            <rect fill="url(#losange)"></rect> */}
        </div>
    );
}

export default HeaderBackground;
