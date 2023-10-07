import { createSlice } from "@reduxjs/toolkit";

export const resetSlice = createSlice({
    name: "reset",
    initialState: {reset:false}
    ,
    reducers: {
        setResetGame: (state, action)=>{//MODIFICA ARRAY POR FUERA Y LUEGO SI LO GUARDAS
            state.reset=action.payload;
        },
        resetGameOver: (state, action)=>{//MODIFICA
            state.reset=action.payload;
        }
      
    },
})

export const {setResetGame, resetGameOver} = resetSlice.actions;