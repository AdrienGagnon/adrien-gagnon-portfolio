import { configureStore } from '@reduxjs/toolkit';

import modeReducer from './nightMode-slice';
import activeSectionReducer from './activeSection-slice';

const store = configureStore({
    reducer: {
        mode: modeReducer,
        activeSection: activeSectionReducer,
    },
});

export default store;
