import { useEffect, useRef } from 'react';
import { intersectionObserver } from '../utils/intersectionObserver';

import styles from './Header.module.css';
import HeaderDescription from './HeaderDescription';
import HeaderTitle from './HeaderTitle';
import ScrollIcon from './ScrollIcon';
import { useSelector } from 'react-redux';
import HeaderBackground from './HeaderBackground';

function Header() {
    const headerTransition = useSelector(state => {
        return state.sectionTransitions.headerOut;
    });

    const headerRef = useRef();

    useEffect(() => {
        intersectionObserver(headerRef.current);
    }, []);

    return (
        <header
            ref={headerRef}
            className={[
                styles['header'],
                headerTransition ? styles['transition'] : '',
            ].join(' ')}
            id="header"
        >
            <div className={styles['header-fixed']}>
                <HeaderTitle headerTransition={headerTransition} />
                <HeaderDescription headerTransition={headerTransition} />
                <ScrollIcon headerTransition={headerTransition} />
            </div>
            <HeaderBackground headerTransition={headerTransition} />
        </header>
    );
}

export default Header;
