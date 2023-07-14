import { useEffect, useRef } from 'react';

import { toggleAccordion } from './toggleAccordion';
import styles from './PortfolioItem.module.css';

import AccordionPanel from './AccordionPanel';

function PortfolioItem({ project, layout }) {
    const accordionPanel = useRef();

    useEffect(() => {
        accordionPanel.current.addEventListener('click', e => {
            const activePanel = e.target.closest('.accordion-panel');
            if (!activePanel) return;
            toggleAccordion(activePanel);
        });
    }, []);

    return (
        <div data-layout={layout} className={styles['wrapper']}>
            <div ref={accordionPanel} className={styles['accordion']}>
                {project.images.map((image, index) => {
                    return (
                        <AccordionPanel
                            key={image.image}
                            image={image.image}
                            alt={image.alt}
                            number={index + 1}
                            ariaExpanded={index + 1 === 1 ? true : false}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PortfolioItem;
