import { configureStore } from '@reduxjs/toolkit';

import langageReducer from './langage-slice';
import activeSectionReducer from './activeSection-slice';

const store = configureStore({
    reducer: {
        langage: langageReducer,
        activeSection: activeSectionReducer,
    },
});

export default store;
