import { useState } from 'react';
import styles from './OptionsBtn.module.css';
import Sliders from './Sliders';

function OptionsBtn({ mode, setMode }) {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={[
                styles['sliders-container'],
                visible ? styles['active'] : '',
            ].join(' ')}
        >
            <div
                onClick={() => setVisible(!visible)}
                className={styles['menu-lines']}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Sliders mode={mode} setMode={setMode} />
        </div>
    );
}

export default OptionsBtn;
