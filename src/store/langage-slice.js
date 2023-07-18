import { createSlice } from '@reduxjs/toolkit';

const initialLangage = {
    langage: window.navigator.language ? window.navigator.language : 'fr-CA',
};

const langage = createSlice({
    name: 'switch langage',
    initialState: initialLangage,
    reducers: {
        switchLangage(state, action) {
            state.langage = action.payload;
        },
    },
});

export const langageActions = langage.actions;

export default langage.reducer;
