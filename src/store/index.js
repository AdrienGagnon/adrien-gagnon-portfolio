import { configureStore } from '@reduxjs/toolkit';

import langageReducer from './langage-slice';
import activeSectionReducer from './activeSection-slice';
import sectionTransitionsReducer from './sectionTransitions-slice';

const store = configureStore({
    reducer: {
        langage: langageReducer,
        activeSection: activeSectionReducer,
        sectionTransitions: sectionTransitionsReducer,
    },
});

export default store;
