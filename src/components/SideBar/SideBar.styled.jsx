import styled from 'styled-components'

export const SideBarContainer = styled.section`
    position: absolute;
    overflow: hidden;
    width: 100px;
    height: 100vh;
    background-color: var(--green-color);
    transition: width 200ms ease-in-out;
    &:hover {
        width: 300px;
    }
`
