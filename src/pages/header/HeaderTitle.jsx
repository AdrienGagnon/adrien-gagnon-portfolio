import styles from './HeaderTitle.module.css';
import photoFinissant from './photo-finissant-zoom.png';

function HeaderTitle() {
    return (
        <div className={styles['header-container']}>
            <div>
                <img
                    className={styles['photo-finissant']}
                    src={photoFinissant}
                    alt=""
                />
            </div>
            <div>
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
