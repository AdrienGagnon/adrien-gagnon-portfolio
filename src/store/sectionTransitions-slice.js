import { createSlice } from '@reduxjs/toolkit';

const initialSectionTransitions = {
    headerOut: false,
};

const sectionTransitions = createSlice({
    name: 'manage fading in/out for section transitions',
    initialState: initialSectionTransitions,
    reducers: {
        handleHeaderTransition(state) {
            state.headerOut = !state.headerOut;
        },
    },
});

export const sectionTransitionsActions = sectionTransitions.actions;

export default sectionTransitions.reducer;
