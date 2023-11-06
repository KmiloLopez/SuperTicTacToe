import styled from "styled-components";

export const Section = styled.section`
    
    position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`
export const DivText = styled.div`

    color:#eee;
  height: 300px;
  width: 320px;
  border: 2px solid #eee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const SquareWinner = styled.div`
    width: 100px;
  height: 100px;
  border: 2px solid #eee;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 88px;

`
export const ButtonR = styled.button`
     padding: 8px 12px;
  margin: 25px;
  background: transparent;
  border: 2px solid #eee;
  color: #eee;
  width: 100px;
  border-radius: 5px;
  transition: 0.2s;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    background: #eee;
  color: #222;
  }
`
export const WinnerText = styled.h2`
  font-size:65px;
  margin-bottom:0px;
  margin-top:0px;
`