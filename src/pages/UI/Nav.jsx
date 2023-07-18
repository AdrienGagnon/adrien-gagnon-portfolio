import { useSelector } from 'react-redux';

import styles from './Nav.module.css';
import { toSection } from '../utils/toSection';

function Nav() {
    const activeSection = useSelector(state => {
        return state.activeSection.activeSection;
    });

    return (
        <nav
            className={[
                styles.nav,
                activeSection === 'header' ? '' : styles.sticky,
            ].join(' ')}
        >
            <a onClick={() => toSection('header')}>Menu</a>
            <a onClick={() => toSection('portfolio-item-1')}>Portfolio</a>
            <a onClick={() => toSection('contact')}>Contact</a>
        </nav>
    );
}

export default Nav;
