import styles from './NightModeSlider.module.css';

function NightModeSlider({ mode, setMode }) {
    function switchTheme() {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return (
        <div onClick={switchTheme} className={styles['theme-switch-container']}>
            <label className={styles['theme-slider']} htmlFor="checkbox">
                <div
                    data-theme={mode}
                    className={[styles['slider'], styles['round']].join(' ')}
                ></div>
            </label>
        </div>
    );
}

export default NightModeSlider;
