import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Portfolio.module.css';
import { projectList } from '../../constants/constants';

import { intersectionObserver } from '../utils/intersectionObserver';
import PortfolioItem from './Item/PortfolioItem';
import SectionTitle from '../components/Title/SectionTitle';
import PortfolioDescription from './Description/PortfolioDescription';
import BackgroundLinesItem1 from './BackgroundLines/BackgroundLinesItem1';
import BackgroundLinesItem2 from './BackgroundLines/BackgroundLinesItem2';
import BackgroundLinesItem3 from './BackgroundLines/BackgroundLinesItem3';

function Portfolio() {
    const [active, setActive] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
    });
    const langage = useSelector(state => {
        return state.langage.langage;
    });
    const activeSection = useSelector(state => {
        return state.activeSection.activeSection;
    });

    const portfolio1Ref = useRef();
    const portfolio2Ref = useRef();
    const portfolio3Ref = useRef();
    const portfolio4Ref = useRef();

    useEffect(() => {
        intersectionObserver(portfolio1Ref.current);
        intersectionObserver(portfolio2Ref.current);
        intersectionObserver(portfolio3Ref.current);
        intersectionObserver(portfolio4Ref.current);
    }, []);

    useEffect(() => {
        // TODO: refactor this ugly code
        activeSection === 'portfolio-item-1' &&
            !active.item1 &&
            setActive({
                ...active,
                item1: true,
            });
        activeSection === 'portfolio-item-2' &&
            !active.item2 &&
            setActive({
                ...active,
                item2: true,
            });
        activeSection === 'portfolio-item-3' &&
            !active.item3 &&
            setActive({
                ...active,
                item3: true,
            });
        activeSection === 'portfolio-item-4' &&
            !active.item4 &&
            setActive({
                ...active,
                item4: true,
            });
    }, [activeSection]);

    return (
        <div className={styles['portfolio-container']}>
            <div ref={portfolio1Ref} id="portfolio-item-1">
                <BackgroundLinesItem1 />
                <SectionTitle
                    titleFr={'Mes projets'}
                    titleEn={'My latest work'}
                    transition={active.item1}
                />
                <div className={styles['portfolio-item-container-title']}>
                    <div className={styles['item-wrapper']}>
                        <PortfolioItem
                            project={projectList[0]}
                            layout={'normal'}
                            transition={active.item1}
                        />
                        <PortfolioDescription
                            project={projectList[0]}
                            layout={'normal'}
                            transition={active.item1}
                        />
                    </div>
                </div>
            </div>
            <div
                ref={portfolio2Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-2"
            >
                <BackgroundLinesItem2 />
                <div className={styles['item-wrapper']}>
                    <PortfolioDescription
                        project={projectList[1]}
                        layout={'inverse'}
                        transition={active.item2}
                    />
                    <PortfolioItem
                        project={projectList[1]}
                        layout={'inverse'}
                        transition={active.item2}
                    />
                </div>
            </div>
            <div
                ref={portfolio3Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-3"
            >
                <BackgroundLinesItem3 />
                <div className={styles['item-wrapper']}>
                    <PortfolioItem
                        project={projectList[2]}
                        layout={'normal'}
                        transition={active.item3}
                    />
                    <PortfolioDescription
                        project={projectList[2]}
                        layout={'normal'}
                        transition={active.item3}
                    />
                </div>
            </div>
            <div
                ref={portfolio4Ref}
                className={styles['portfolio-item-container']}
                id="portfolio-item-4"
            >
                <BackgroundLinesItem2 />
                <div className={styles['item-wrapper']}>
                    <PortfolioDescription
                        project={projectList[3]}
                        layout={'inverse'}
                        title={
                            langage === 'fr'
                                ? 'Site personnel'
                                : 'Personel Website'
                        }
                        transition={active.item4}
                    />
                    <PortfolioItem
                        project={projectList[3]}
                        layout={'inverse'}
                        transition={active.item4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
