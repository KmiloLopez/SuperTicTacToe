import React, { useState } from 'react'
import { SideBarContainer } from './SideBar.styled'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <SideBarContainer>
        <nav>
            {/* <div>Restart Game</div>
            <div>Instructions</div>
            <div>Creator GitHub</div>
            <div>Creator Website</div> */}
        </nav>
    </SideBarContainer>
  )
}

export default SideBar