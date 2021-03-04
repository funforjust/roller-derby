import React, { useState} from 'react';
import {Link} from 'react-router-dom'



export default function BurgerButton({open, setOpen }){
    const burgerButtonStyle = {
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '3rem',
        height: '2rem',
        marginLeft: '0.25rem',
        marginTop: '0.25rem',
        background: 'rgb(27, 35, 31)',
        border: 'none'
    }
    
    return (
        <button style={burgerButtonStyle} open={open} onClick={() => { setOpen(!open) }}>
            <div style={{width: '100%', height: '0.25rem', background: 'white'}}/>
            <div style={{width: '100%', height: '0.25rem', background: 'white'}}/>
            <div style={{width: '100%', height: '0.25rem', background: 'white'}}/>
        </button>


    )
}