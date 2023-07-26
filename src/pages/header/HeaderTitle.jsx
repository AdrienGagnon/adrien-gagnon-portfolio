import ImgRays from './ImgRays';
import styles from './HeaderTitle.module.css';
import photoFinissant from './assets/photo-finissant-zoom-500.png';
import photoFinissantSmall from './assets/photo-finissant-zoom-small.png';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useEffect } from 'react';
import { lazyLoading } from '../utils/lazyLoading';

function HeaderTitle({ headerTransition }) {
    const imgRef = useRef();
    const langage = useSelector(state => {
        return state.langage.langage;
    });

    useEffect(() => {
        lazyLoading(imgRef.current);
    }, []);

    return (
        <div
            className={[
                styles['header-container'],
                headerTransition ? styles['transition'] : '',
            ].join(' ')}
        >
            <div className={styles['photo-wrapper']}>
                <div className={styles['photo-container']}>
                    <img
                        className={styles['photo-finissant']}
                        src={photoFinissantSmall}
                        alt="photo-finissant-small"
                    />
                    <img
                        ref={imgRef}
                        className={styles['photo-finissant']}
                        src={photoFinissant}
                        alt="photo-finissant"
                        loading="lazy"
                    />
                    <ImgRays />
                </div>
            </div>
            <div className={styles['header-name-container']}>
                <h1 className={styles['header-name']}>Adrien Gagnon</h1>
                <div>
                    <p className={styles['header-profession']}>
                        {langage === 'fr' ? 'Développeur web' : 'Web developer'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeaderTitle;
