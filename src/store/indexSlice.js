import { createSlice } from "@reduxjs/toolkit";
//TODO   verificar si lo podemos hacer con un solo slice para el estore o si necesitamos mas
export const indexSlice = createSlice({
    name: "index",
    initialState: {bigBoard: 1,
    miniBoard: 11,
    turnPlayer:"x"
},
    reducers: {
        setIndexBigBoard:(state, action) =>{
            state.bigBoard = action.payload;
            
        },
        setIndexMiniBoard:(state, action) =>{
            state.miniBoard = action.payload;
        },
        setTurnforPlayer:(state, action) =>{
            state.turnPlayer = state.turnPlayer=="x"? "o":"x";
        },
        clearIndexMiniBoard:(state, action) =>{
            state.miniBoard = action.payload;
        }

    },
})

export const {setIndexBigBoard,setIndexMiniBoard,setTurnforPlayer,clearIndexMiniBoard} = indexSlice.actions