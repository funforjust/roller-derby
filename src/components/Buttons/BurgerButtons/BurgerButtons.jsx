import React, { useState} from 'react';
import {Link} from 'react-router-dom'
//import './BurgerButtons.scss'
import styled from 'styled-components';

export default function BurgerButtons() {
    const [statusMenu, setStatusMenu] = useState(false);
    const [open, setOpen] = React.useState(true);
    const node = React.useRef();

    return (
        <>
            <BurgerButton open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />   
        </>
    )
}

    const BurgerButton = ({open, setOpen }) => {
        return (
            <BurgerButtonStyle open={open} onClick={() => setOpen(!open)}>
                <div style={{width: '100%', height: '0.25rem', background: 'white'}}/>
                <div style={{width: '100%', height: '0.25rem', background: 'white'}}/>
                <div style={{width: '100%', height: '0.25rem', background: 'white'}}/>
            </BurgerButtonStyle>


        )
    }

    const Menu = ({ setOpen, open }) => {
        return (
            <MenuS open = {open} onClick={()=>setOpen(!open)}>
                <Link to='/' className="burger-button-element" onClick={()=>setOpen(!open)}>INICIO</Link>
                <Link to='/equipos' className="burger-button-element" onClick={()=>setOpen(!open)}>EQUIPOS</Link>
                <Link to='contacto' className="burger-button-element" onClick={()=>setOpen(!open)}>CONTACTO</Link>
            </MenuS>
        )
    }

    const BurgerButtonStyle = styled.button`
        display: flex;
        cursor: pointer;
        flex-direction: column;
        justify-content: space-around;
        width: 3rem;
        height: 2rem;
        margin-left: 0.25rem;
        margin-top: 0.25rem;
        background: rgb(27, 35, 31); 
        border: none;
        line{
            width: 100%;
            height: 0.25rem;
            background: white;
        }
    `
    const MenuS = styled.nav`
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        background: rgb(27, 35, 31);;
        width: 32em;
        height: 105%;
        top: -3rem;
        background-color: #1b231f;
        position: relative;
        transform: ${ ({ open }) => open ? 'translateX(-100%)' : 'translateX(0%)'};
        transition: transform 0.3s ease;
`
    

  