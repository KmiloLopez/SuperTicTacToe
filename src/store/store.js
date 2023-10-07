import { configureStore } from "@reduxjs/toolkit";
import { indexSlice } from "./indexSlice";
import { winnerSlice } from "./winnerSlice";
import { resetSlice } from "./resetSice";

export const store = configureStore({
    reducer:{
        index:indexSlice.reducer,
        winner:winnerSlice.reducer,
        reset : resetSlice.reducer
    }
})