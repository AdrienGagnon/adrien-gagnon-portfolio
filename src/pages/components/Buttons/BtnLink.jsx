import styles from './BtnLink.module.css';

function BtnLink({ type = 'link', link, options = undefined, text }) {
    const content = (
        <>
            <span className={styles['circle']}></span>
            <span className={styles['circle']}></span>
            <span className={styles['circle']}></span>
            <span className={styles['text']}>{text}</span>
        </>
    );

    return (
        <>
            {type === 'link' ? (
                <a
                    className={styles['description-link']}
                    id={options?.absolute ? styles['absolute'] : ''}
                    href={link}
                >
                    {content}
                </a>
            ) : (
                <button
                    className={styles['description-link']}
                    href={link}
                    type={options.type}
                >
                    {content}
                </button>
            )}
        </>
    );
}

export default BtnLink;
