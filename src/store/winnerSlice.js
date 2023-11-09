import { createSlice } from "@reduxjs/toolkit";

export const winnerSlice = createSlice({
    name: "winner",
    initialState: {finalBoard:new Array(9).fill(null)
       // ['x','x','o','x',null,null,null,null,null]
        //new Array(9).fill(null)
    },
    reducers: {
        setfinalBoardPosition: (state, action)=>{//MODIFICA ARRAY POR FUERA Y LUEGO SI LO GUARDAS
            state.finalBoard=action.payload;
        },
        clearFinalBoard:(state,action)=>{//MODIFICA ARRAY POR FUERA Y
            state.finalBoard=action.payload;
        }
    },
})

export const {setfinalBoardPosition,clearFinalBoard} = winnerSlice.actions;