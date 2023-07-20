import { useSelector } from 'react-redux';
import styles from './SectionTitle.module.css';

function SectionTitle({ titleFr, titleEn }) {
    const langage = useSelector(state => {
        return state.langage.langage;
    });

    return (
        <h2 className={styles['section-title']}>
            {langage === 'fr' ? titleFr : titleEn}
        </h2>
    );
}

export default SectionTitle;
