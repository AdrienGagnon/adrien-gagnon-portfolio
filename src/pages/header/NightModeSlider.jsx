import { useDispatch, useSelector } from 'react-redux';
import { modeActions } from '../../store/nightMode-slice';
import styles from './NightModeSlider.module.css';

function NightModeSlider() {
    const dispatch = useDispatch();

    const mode = useSelector(state => {
        return state.mode.mode;
    });

    function switchTheme() {
        dispatch(modeActions.switchMode(mode === 'light' ? 'dark' : 'light'));
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
