import styles from './SectionTitle.module.css';

function SectionTitle({ titleFr, titleEn }) {
    return (
        <h2 className={styles['section-title']}>
            <p>{titleFr}</p>
            <span className={styles['section-separator']}></span>
            <p className={styles['anglais']}>{titleEn}</p>
        </h2>
    );
}

export default SectionTitle;
