import styles from './ScrollIcon.module.css';

function ScrollIcon({ headerTransition }) {
    return (
        <svg
            className={[
                styles['scroll-svg'],
                headerTransition ? styles['transition'] : '',
            ].join(' ')}
            viewBox="0 0 50 50"
            width={'70px'}
        >
            <g>
                <path
                    d="M25 45a14 14 0 0 0 14-14V19a14 14 0 0 0-28 0v12a14 14 0 0 0 14 14zM13 19a12 12 0 0 1 24 0v12a12 12 0 0 1-24 0z"
                    fill="#000000"
                ></path>
                <path
                    d="M24 24.5h.09l.2.21a1 1 0 0 0 1.42 0l.2-.21H26v-.09l5.71-5.7-1.42-1.42-4.29 4.3V11h-2v10.59l-4.29-4.3-1.42 1.42 5.71 5.7z"
                    fill="#000000"
                ></path>
            </g>
        </svg>
    );
}

export default ScrollIcon;
