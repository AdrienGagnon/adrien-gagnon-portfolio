import HeaderBackground from './HeaderBackground';
import styles from './HeaderTitle.module.css';
import photoFinissant from './assets/photo-finissant-zoom.png';

function HeaderTitle({ headerTransition }) {
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
                        src={photoFinissant}
                        alt="photo-finissant"
                    />
                    <HeaderBackground />
                </div>
            </div>
            <div className={styles['header-name-container']}>
                <h1 className={styles['header-name']}>Adrien Gagnon</h1>
                <div>
                    <p className={styles['header-profession']}>
                        Développeur web
                    </p>
                    <p
                        className={[
                            styles['header-profession'],
                            styles['anglais'],
                        ].join(' ')}
                    >
                        Web developer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeaderTitle;
