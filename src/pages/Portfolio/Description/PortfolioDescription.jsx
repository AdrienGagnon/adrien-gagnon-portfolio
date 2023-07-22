import { useSelector } from 'react-redux';

import styles from './PortfolioDescription.module.css';
import Tools from './Tools';
import BtnLink from '../../components/Buttons/BtnLink';

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
                <div className={styles['note-container']}>
                    <p>
                        <span>Note:</span>
                        {langage === 'fr' ? project.note_fr : project.note_en}
                    </p>
                </div>
            ) : (
                <></>
            )}
            <Tools tools={project.tools} />
            <BtnLink
                link={project.link}
                text={langage === 'fr' ? 'Visiter' : 'Visit'}
            />
        </div>
    );
}

export default PortfolioDescription;
