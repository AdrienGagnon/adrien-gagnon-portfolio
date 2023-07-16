import styles from './ToTop.module.css';
import { toSection } from '../../utils/toSection';

function ToTop() {
    return (
        <div onClick={() => toSection('header')} className={styles.arrow}>
            <svg viewBox="0 0 128 128">
                <g id="row2_1_">
                    <g id="_x34__3_">
                        <path d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zM38.4 58.9V66c0 2.2 1.8 3.9 3.9 3.9l15.3-12.2v28.7c0 2.2 2.3 3.2 4.4 3.2h4c2.2 0 3.9-1.8 3.9-3.9V57.2l15.8 12.7c2.2 0 3.9-1.8 3.9-3.9v-7.1L64 32.2 38.4 58.9z" />
                    </g>
                </g>
            </svg>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default ToTop;
