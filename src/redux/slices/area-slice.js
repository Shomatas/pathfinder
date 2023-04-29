import { createSlice } from "@reduxjs/toolkit";

export const areaSlice = createSlice({
    name: 'area',
    initialState: {
        rows: 3,
        columns: 2,
        len: 5,
    },
    reducers: {
        changeArea: (store, action) => {
            // debugger
            store.rows = action.rows;
            store.columns = action.columns;
        }
    },
});

export const { 
    changeArea,
} = areaSlice.actions;

export default areaSlice.reducer;