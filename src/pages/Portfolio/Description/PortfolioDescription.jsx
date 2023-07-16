import styles from './PortfolioDescription.module.css';
import BtnLink from '../../components/Buttons/BtnLink';
import Tools from './Tools';

function PortfolioDescription({ project }) {
    return (
        <div className={styles['description-container']}>
            <h3>{project.title}</h3>
            <p>{project.description_fr}</p>
            <p className={styles['anglais']}>{project.description_en}</p>
            <Tools tools={project.tools} />
            <BtnLink link={project.link} fr={'Visiter /'} en={'/ Visit'} />
        </div>
    );
}

export default PortfolioDescription;
