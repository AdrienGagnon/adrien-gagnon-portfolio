import { useEffect, useState } from 'react';
import styles from './OptionsBtn.module.css';
import Sliders from './Sliders';

function OptionsBtn({ mode, setMode }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!visible) return;
        setTimeout(() => {
            window.addEventListener('click', closeOptions);
        }, 200);
    }, [visible]);

    const closeOptions = e => {
        if (e.target.closest('.sliders-container')) return;
        setVisible(false);
        window.removeEventListener('click', closeOptions);
    };

    return (
        <div
            className={[
                styles['sliders-container'],
                visible ? styles['active'] : '',
                'sliders-container',
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
