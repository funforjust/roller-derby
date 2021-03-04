import React, { useState} from 'react';
import {Link} from 'react-router-dom'

export default function Menu({ setOpen, open }) {
    const menuStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'rgb(27, 35, 31)',
        width: '100vw',
        height: '105%',
        top: '-3rem',
        backgroundColor: '#1b231f',
        position: 'relative',
        zIndex: '9',
        overflowX: 'auto',
        overflowY: 'auto',
        transform: open ? 'translateX(-100%)' : 'translateX(0%)',
        transition: `transform 0.3s ease`
    }

    return (
        <nav style={menuStyle} open = {open} onClick={()=>{setOpen(!open)}}>
            <Link style={{color:'white'}} to='/' className="burger-button-element" onClick={()=>setOpen(!open)}>INICIO</Link>
            <Link style={{color:'white'}} to='/equipos' className="burger-button-element" onClick={()=>setOpen(!open)}>EQUIPOS</Link>
            <Link style={{color:'white'}} to='contacto' className="burger-button-element" onClick={()=>setOpen(!open)}>CONTACTO</Link>
        </nav>
    )
}