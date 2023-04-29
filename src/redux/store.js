import { configureStore } from "@reduxjs/toolkit";
import areaReducer from "./slices/area-slice";

export default configureStore({
    reducer: {
        area: areaReducer,
    }
})