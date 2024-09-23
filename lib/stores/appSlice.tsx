import { createSlice } from '@reduxjs/toolkit';

type APPSTATE = {
    activeMenu: number;
    activeLecture: number;
    activeDocument: number;
    activeNew: number;
};

const initialState: APPSTATE = {
    activeMenu: 1,
    activeLecture: 1,
    activeDocument: 1,
    activeNew: 1,
};
export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
        },
        setActiveLecture: (state, action) => {
            state.activeLecture = action.payload;
        },
        setActiveDocument: (state, action) => {
            state.activeDocument = action.payload;
        },
        setActiveNew: (state, action) => {
            state.activeNew = action.payload;
        },
    },
});
export const {
    setActiveMenu,
    setActiveLecture,
    setActiveDocument,
    setActiveNew
} = appSlice.actions;
export default appSlice.reducer;
