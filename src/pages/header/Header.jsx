import styles from './Header.module.css';
import HeaderDescription from './HeaderDescription';
import HeaderTitle from './HeaderTitle';

function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles['header-fixed']}>
                <HeaderTitle />
                <HeaderDescription />
            </div>
        </header>
    );
}

export default Header;
