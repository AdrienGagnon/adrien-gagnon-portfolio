import styles from './Tubes.module.css';

function Tubes({ transition }) {
    return (
        <div className={transition ? styles['transition'] : ''}>
            <span className={styles['rectangle']}></span>
            <span className={styles['rectangle']}></span>
            <span className={styles['rectangle']}></span>
            <span className={styles['cover']}></span>
            <svg
                className={styles.valve}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0"
                y="0"
                viewBox="0 0 512 512"
            >
                <g>
                    <path
                        d="M256 0C115.39 0 0 115.39 0 256s115.39 256 256 256 256-115.39 256-256S396.61 0 256 0zm193.457 226h-93.353A104.724 104.724 0 0 0 286 155.896V62.543C369.611 75.489 436.511 142.389 449.457 226zM211 256c0-24.814 20.186-45 45-45s45 20.186 45 45-20.186 45-45 45-45-20.186-45-45zm15-193.457v93.353A104.724 104.724 0 0 0 155.896 226H62.543C75.489 142.389 142.389 75.489 226 62.543zM62.543 286h93.353A104.724 104.724 0 0 0 226 356.104v93.353C142.389 436.511 75.489 369.611 62.543 286zM286 449.457v-93.353a104.719 104.719 0 0 0 70.104-70.114h93.353C436.511 369.611 369.611 436.511 286 449.457z"
                        fill="#000000"
                        data-original="#000000"
                    ></path>
                </g>
            </svg>
        </div>
    );
}

export default Tubes;
