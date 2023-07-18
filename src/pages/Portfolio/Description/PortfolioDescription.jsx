import styles from './PortfolioDescription.module.css';
import Tools from './Tools';

function PortfolioDescription({ project }) {
    return (
        <div className={styles['description-container']}>
            <h3>{project.title}</h3>
            <div>
                <p>{project.description_fr}</p>
                <p className={styles['anglais']}>{project.description_en}</p>
            </div>
            <Tools tools={project.tools} />
        </div>
    );
}

export default PortfolioDescription;
