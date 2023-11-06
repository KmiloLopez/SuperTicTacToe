import React, { useState } from 'react'
import {
    GreenBackContainer,
    SingleGreenBox,
} from './GreenBackgroundHint.styled'

const GreenBackgroundHint = ({ finalBoard, miniBoardIndex }) => {
    const [greenBoxes, setGreenBoxes] = useState(new Array(9).fill(null))
    return (
        <GreenBackContainer>
            {greenBoxes.map((_, index) => {
                let restrictThis = null

                if (finalBoard[miniBoardIndex]) {
                    //si ya hay algo en la posicion no me deja marcar en esa pos pero si en cualquier otro lugar
                    restrictThis = false
                    if (index === miniBoardIndex || finalBoard[index]) {
                        //finalBoard[index] verifica que en esa casilla ya no haya un ganador//habilita casillas en la posicion correspondiente comparando el indice de los tableros pequenos con los grandes
                        restrictThis = true
                    }
                } else {
                    restrictThis = true
                    if (index === miniBoardIndex || miniBoardIndex === 11) {
                        //habilita casillas en la posicion correspondiente comparando el indice de los tableros pequenos con los grandes
                        restrictThis = false
                    }
                }
                const classToAdd =()=>{
                    if(restrictThis===true){
                      return '';
                    }else{
                      return ('restricted')
                    }
                    
                  }
                return (
                    <SingleGreenBox key={index}  className={classToAdd()} />
                )
            })}
        </GreenBackContainer>
    )
}

export default GreenBackgroundHint
