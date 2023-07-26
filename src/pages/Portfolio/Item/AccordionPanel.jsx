import { useEffect } from 'react';
import styles from './AccordionPanel.module.css';
import { lazyLoading } from '../../utils/lazyLoading';
import { useRef } from 'react';

function AccordionPanel({
    image,
    imageSmall,
    alt,
    number,
    ariaExpanded,
    transition,
}) {
    const imgRef = useRef();

    useEffect(() => {
        lazyLoading(imgRef.current);
    }, []);

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
                    src={imageSmall}
                    alt={`${alt}`}
                />
                <img
                    ref={imgRef}
                    className={styles['accordion-image']}
                    src={image}
                    alt={`${alt}`}
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default AccordionPanel;
