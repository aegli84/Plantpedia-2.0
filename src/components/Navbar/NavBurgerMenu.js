import styled from 'styled-components'
import { useState } from "react"
import SideNav from './SideNav';

const BurgerMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <Nav>
                <Burger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </Burger>
            <SideNav open={open} setOpen={setOpen}/>
        </Nav>
    )
};

const Nav = styled.nav`
    display: none;
    
    @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;  
    }
`
const Burger = styled.div`
    display: none;
    
@media (min-width: 320px) and (max-width: 768px) {
    width: 5rem;
    height: 2.5rem;
    position: fixed;
    top: 5vh;
    right: 5vh;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div {
        width: 3.5rem;
        height: 0.35rem;
        background-color: ${({ open }) => open ? 'lightgreen' : 'whitesmoke'};
        opacity: 0.6;
        border-radius: 15px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }}
}
`
export default BurgerMenu;