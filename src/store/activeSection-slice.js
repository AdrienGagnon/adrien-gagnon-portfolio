import { createSlice } from '@reduxjs/toolkit';

const initialActiveSction = {
    activeSection: 'header',
};

const activeSction = createSlice({
    name: 'active section',
    initialState: initialActiveSction,
    reducers: {
        newActiveSection(state, action) {
            state.activeSection = action.payload;
        },
    },
});

export const activeSectionActions = activeSction.actions;

export default activeSction.reducer;
