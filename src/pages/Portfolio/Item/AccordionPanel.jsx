import styles from './AccordionPanel.module.css';

function AccordionPanel({ image, alt, number, ariaExpanded, transition }) {
    return (
        <div
            className={[
                transition ? styles['transition'] : '',
                styles['accordion-panel'],
                'accordion-panel',
            ].join(' ')}
        >
            <h4 id={`panel${number}-heading`}>
                <button
                    className={styles['accordion-trigger']}
                    aria-controls={`panel${number}-content`}
                    aria-expanded={ariaExpanded}
                >
                    {/* <span
                        className={styles['accordion-title']}
                        id={`panel${number}-title`}
                    >
                        Boating
                    </span> */}
                    <div
                        aria-hidden="true"
                        className={styles['accordion-icon']}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </h4>
            <div
                className={[
                    styles['accordion-content'],
                    'accordion-content',
                ].join(' ')}
                id={`panel${number}-content`}
                aria-labelledby={`panel${number}-heading`}
                aria-hidden={!ariaExpanded}
                role="region"
            >
                <img
                    className={styles['accordion-image']}
                    src={image}
                    alt={`${alt}`}
                />
            </div>
        </div>
    );
}

export default AccordionPanel;
