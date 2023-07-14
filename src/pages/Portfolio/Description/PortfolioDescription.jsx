import styles from './PortfolioDescription.module.css';
import BtnLink from '../../components/Buttons/BtnLink';

function PortfolioDescription({ project }) {
    return (
        <div className={styles['description-container']}>
            <h3>{project.title}</h3>
            <p>{project.description_fr}</p>
            <p className={styles['anglais']}>{project.description_en}</p>
            <BtnLink link={project.link} fr={'Visiter /'} en={'/ Visit'} />
        </div>
    );
}

export default PortfolioDescription;
