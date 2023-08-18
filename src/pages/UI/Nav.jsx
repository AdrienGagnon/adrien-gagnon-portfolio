import { useSelector } from 'react-redux';

import styles from './Nav.module.css';
import { toSection } from '../utils/toSection';
import { useSelector } from 'react-redux';

function Nav() {
    const headerTransition = useSelector(state => {
        return state.sectionTransitions.headerOut;
    });
    const activeSection = useSelector(state => {
        return state.activeSection.activeSection;
    });

    return (
        <nav
            className={[
                styles.nav,
                activeSection === 'header' ? '' : styles.sticky,
                headerTransition ? styles['transition'] : '',
            ].join(' ')}
        >
            <div className={styles.wrapper}>
                {window.innerWidth < 785 ? (
                    <a onClick={() => toSection('header')}>Menu</a>
                ) : (
                    <></>
                )}
                <a onClick={() => toSection('portfolio-item-1')}>Portfolio</a>
                <a onClick={() => toSection('contact')}>Contact</a>
            </div>
        </nav>
    );
}

export default Nav;
