import React, { useState} from 'react';
import {Link} from 'react-router-dom'
import './NavBar.scss'

export default function NavBar() {
    const node = React.useRef();

    return (
        <div className="NavBar">
            <Link style={{color:'white'}} to='/' className="NavBar_element">INICIO</Link>
            <Link style={{color:'white'}} to='/equipos' className="NavBar_element">EQUIPOS</Link>
            <Link style={{color:'white'}} to='contacto' className="NavBar_element">CONTACTO</Link>
        </div>
    )
}
