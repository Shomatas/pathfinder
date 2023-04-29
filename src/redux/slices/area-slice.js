import { createSlice } from "@reduxjs/toolkit";

export const areaSlice = createSlice({
    name: 'area',
    initialState: {
        rows: 3,
        columns: 2,
        len: 3,
        score: 0,
    },
    reducers: {
        changeArea: (store, action) => {
            // debugger
            store.rows = action.rows;
            store.columns = action.columns;
        },

        incrementScore: (store, action) => {
            ++store.score;
        }
    },
});

export const { 
    changeArea,
    incrementScore,
} = areaSlice.actions;

export default areaSlice.reducer;