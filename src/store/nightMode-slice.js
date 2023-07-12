import { createSlice } from '@reduxjs/toolkit';

const initialMode = {
    mode: 'light',
};

const mode = createSlice({
    name: 'switch mode',
    initialState: initialMode,
    reducers: {
        switchMode(state, action) {
            state.mode = action.payload;
        },
    },
});

export const modeActions = mode.actions;

export default mode.reducer;
