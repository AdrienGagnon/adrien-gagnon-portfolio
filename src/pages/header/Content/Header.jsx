import { useEffect, useRef } from 'react';
import { intersectionObserver } from '../../utils/intersectionObserver';

import styles from './Header.module.css';
import HeaderDescription from './HeaderDescription';
import HeaderTitle from './HeaderTitle';
import HeaderBackground from './HeaderBackground';

function Header() {
    const headerRef = useRef();

    useEffect(() => {
        intersectionObserver(headerRef.current);
    }, []);

    return (
        <header ref={headerRef} className={styles['header']} id="header">
            <div className={styles['header-fixed']}>
                <HeaderTitle />
                <HeaderDescription />
                <HeaderBackground />
            </div>
        </header>
    );
}

export default Header;
