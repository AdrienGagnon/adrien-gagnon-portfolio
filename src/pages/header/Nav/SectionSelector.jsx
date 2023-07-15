import styles from './SectionSelector.module.css';
import { toSection } from '../../utils/toSection';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function SectionSelector() {
    const [activeIndex, setActiveIndex] = useState();
    const activeIcon = useSelector(state => {
        return state.activeSection.activeSection;
    });

    useEffect(() => {
        if (!activeIcon) return;
        setActiveIndex(sectionsIds.findIndex(el => el === activeIcon));
    }, [activeIcon]);

    const sectionsIds = [
        'header',
        'portfolio-item-1',
        'portfolio-item-2',
        'contact',
    ];

    return (
        <div className={styles['svg-container']}>
            {sectionsIds.map((section, index) => {
                return (
                    <a key={section} onClick={() => toSection(section)}>
                        <svg
                            className={
                                styles[
                                    index === activeIndex
                                        ? 'active'
                                        : 'inactive'
                                ]
                            }
                            viewBox="0 0 30 30"
                            shapeRendering="geometricPrecision"
                        >
                            <rect
                                transform="rotate(45, 15, 15), translate(7,7)"
                                fill="none"
                                stroke="#ff6a05"
                                strokeWidth="3"
                            />
                        </svg>
                        {index !== 3 && (
                            <div
                                className={[
                                    styles.courbe,
                                    index === 1 && styles.right,
                                ].join(' ')}
                            ></div>
                        )}
                    </a>
                );
            })}
        </div>
    );
}

export default SectionSelector;
