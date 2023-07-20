import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { toSection } from '../utils/toSection';
import { sections } from '../../constants/constants';
import styles from './SectionSelector.module.css';

function SectionSelector() {
    const [activeIndex, setActiveIndex] = useState();
    const activeIcon = useSelector(state => {
        return state.activeSection.activeSection;
    });

    useEffect(() => {
        if (!activeIcon) return;
        setActiveIndex(sections.findIndex(el => el === activeIcon));
    }, [activeIcon]);

    return (
        <div className={styles['svg-container']}>
            {sections.map((section, index) => {
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
                                strokeWidth="3"
                            />
                        </svg>
                        {index !== 4 && (
                            <div
                                className={[
                                    styles.courbe,
                                    [1, 3].includes(index) && styles.right,
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
