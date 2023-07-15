import styles from './Nav.module.css';
import { toSection } from '../../utils/toSection';

function Nav() {
    return (
        <nav className={styles.nav}>
            <a onClick={() => toSection('header')}>Menu</a>
            <a onClick={() => toSection('portfolio-item-1')}>Portfolio</a>
            <a onClick={() => toSection('contact')}>Contact</a>
        </nav>
    );
}

export default Nav;
