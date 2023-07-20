import { useSelector } from 'react-redux';

import styles from './PortfolioDescription.module.css';
import Tools from './Tools';

function PortfolioDescription({ project, title }) {
    const langage = useSelector(state => {
        return state.langage.langage;
    });

    return (
        <div className={styles['description-container']}>
            <h3>{title ? title : project.title}</h3>
            <p>
                {langage === 'fr'
                    ? project.description_fr
                    : project.description_en}
            </p>
            {project.note_fr ? (
                <p>{langage === 'fr' ? project.note_fr : project.note_en}</p>
            ) : (
                <></>
            )}
            <Tools tools={project.tools} />
        </div>
    );
}

export default PortfolioDescription;
