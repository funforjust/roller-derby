import React, { useState} from 'react';
import {Link} from 'react-router-dom'
import './NavBar.scss'

export default function NavBar() {
    const [statusMenu, setStatusMenu] = useState(false);
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    return (
        <div className="NavBar">
            <Link to='/' className="NavBar_element">INICIO</Link>
            <Link to='/equipos' className="NavBar_element">EQUIPOS</Link>
            <Link to='contacto' className="NavBar_element">CONTACTO</Link>
        </div>
    )
}
