import { configureStore } from '@reduxjs/toolkit';

import modeReducer from './nightMode-slice';

const store = configureStore({
    reducer: {
        mode: modeReducer,
    },
});

export default store;
