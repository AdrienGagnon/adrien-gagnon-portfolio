import styles from './Sliders.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { langageActions } from '../../store/langage-slice';

function Sliders({ mode, setMode }) {
    const langage = useSelector(state => {
        return state.langage.langage;
    });
    const dispatch = useDispatch();

    function switchTheme() {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    function switchLangage() {
        dispatch(
            langageActions.switchLangage(langage.includes('fr') ? 'en' : 'fr')
        );
    }

    return (
        <>
            <div
                onClick={switchTheme}
                className={styles['theme-switch-container']}
            >
                <label className={styles['theme-slider']} htmlFor="checkbox">
                    <div
                        data-theme={mode}
                        className={[
                            styles['slider'],
                            styles['round'],
                            styles['mode-slider'],
                        ].join(' ')}
                    >
                        <svg
                            className={[
                                styles['sun'],
                                mode === 'dark' ? styles['hidden-icon'] : '',
                            ].join(' ')}
                            viewBox="0 0 32 32"
                        >
                            <g>
                                <g data-name="Layer 2">
                                    <g fill="#ffc166">
                                        <path
                                            d="M16 5a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM24.49 8.51a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.41a1 1 0 0 1-.7.29zM30 17h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM25.9 26.9a1 1 0 0 1-.71-.29l-1.41-1.42a1 1 0 1 1 1.41-1.41l1.42 1.41a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29zM16 31a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM6.1 26.9a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l1.42-1.41a1 1 0 1 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-.71.29zM4 17H2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM7.51 8.51a1 1 0 0 1-.7-.29L5.39 6.81a1 1 0 0 1 1.42-1.42l1.41 1.42a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zM25 16a9 9 0 0 1-16.28 5.28c-.14-.19-.27-.39-.39-.59A9 9 0 0 1 20.69 8.33c.2.12.4.25.59.39A8.94 8.94 0 0 1 25 16z"
                                            fill="#ffc166"
                                        ></path>
                                    </g>
                                    <path
                                        fill="#ffd64f"
                                        d="M22 13a9 9 0 0 1-13.67 7.69A9 9 0 0 1 20.69 8.33 8.94 8.94 0 0 1 22 13z"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <svg
                            className={[
                                styles['moon'],
                                mode === 'light' ? styles['hidden-icon'] : '',
                            ].join(' ')}
                            viewBox="0 0 380.84 380.84"
                        >
                            <g>
                                <path
                                    d="M334.237 336.517a5.681 5.681 0 0 0-4.103-2.477h-.76c-98.837.105-179.045-79.933-179.15-178.77a178.958 178.958 0 0 1 73.63-144.87 5.68 5.68 0 0 0-3.2-10.4l.04.04C115.539.029 30.285 85.265 30.274 190.42c-.011 105.155 85.225 190.409 190.38 190.42a190.4 190.4 0 0 0 112.04-36.44 5.68 5.68 0 0 0 1.543-7.883z"
                                    fill="#c2c5cc"
                                ></path>
                                <path
                                    d="M273.123 223.354a5.684 5.684 0 0 0-2.349-1.194l-.04-.08-15.36-3.68-8.24-13.36a5.68 5.68 0 0 0-9.72 0l-8.32 13.36-15.12 3.68a5.68 5.68 0 0 0-3.24 9.28l10.24 12-1.2 15.76a5.68 5.68 0 0 0 8 5.68l14.64-6 14.32 5.88a5.681 5.681 0 0 0 8-5.56l-1.2-15.76 10.24-12a5.68 5.68 0 0 0-.651-8.006zM297.803 78.394a5.684 5.684 0 0 0-2.349-1.194l.08.2-26.24-6.4-14.16-22.92a5.68 5.68 0 0 0-9.72 0l-14.2 23-26 6.36a5.68 5.68 0 0 0-3.32 8.96l17.48 20.6-2.04 26.96a5.68 5.68 0 0 0 8 5.68l25-10.24 24.68 10.12a5.681 5.681 0 0 0 8-5.56l-2.04-26.96 17.48-20.6a5.68 5.68 0 0 0-.651-8.006zM348.563 170.354a5.684 5.684 0 0 0-2.349-1.194l-.16-.08-12-2.88-6.36-10.32a5.68 5.68 0 0 0-9.72 0l-6.28 10.52-11.6 2.84a5.68 5.68 0 0 0-3.28 9.16l8 9.32-.92 12a5.68 5.68 0 0 0 8 5.68l11.28-4.64 10.96 4.48a5.681 5.681 0 0 0 8-5.56l-.92-12 8-9.32a5.68 5.68 0 0 0-.651-8.006z"
                                    fill="#ffc166"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </label>
            </div>
            <div
                onClick={switchLangage}
                className={styles['theme-switch-container']}
            >
                <label className={styles['theme-slider']} htmlFor="checkbox">
                    <div
                        data-langage={langage.includes('fr') ? 'left' : 'right'}
                        className={[
                            styles['slider'],
                            styles['round'],
                            styles['langage-slider'],
                        ].join(' ')}
                    >
                        <p>Fr</p>
                        <p>En</p>
                    </div>
                </label>
            </div>
        </>
    );
}

export default Sliders;
