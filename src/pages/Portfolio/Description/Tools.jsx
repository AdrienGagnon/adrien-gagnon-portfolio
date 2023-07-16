import styles from './Tools.module.css';

function Tools({ tools }) {
    return (
        <div className={styles['tools-container']}>
            {tools.map((tool, index) => {
                return (
                    <div
                        key={tool}
                        className={index !== 0 ? styles['tool--name'] : ''}
                    >
                        {tool}
                    </div>
                );
            })}
        </div>
    );
}

export default Tools;
