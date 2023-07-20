import { useEffect, useRef } from 'react';
import { intersectionObserver } from '../utils/intersectionObserver';

import styles from './Header.module.css';
import HeaderDescription from './HeaderDescription';
import HeaderTitle from './HeaderTitle';
import ScrollIcon from './ScrollIcon';

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
                <ScrollIcon />
            </div>
        </header>
    );
}

export default Header;
