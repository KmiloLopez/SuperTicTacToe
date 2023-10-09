import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResetGame } from '../../store/resetSice'

const IsLastSquare = ({bigBoardIndex}) => {
    const dispatch = useDispatch()
    const {reset} = useSelector(state=> state.reset)
    console.log('bigBoardIndex', bigBoardIndex)
    // if(bigBoardIndex ===8&&reset===true){
    //     //dispatch(setResetGame(false))
    //     return console.log("IsLastSc")
    // }
      
  return (
    <></>
  )
}

export default IsLastSquare