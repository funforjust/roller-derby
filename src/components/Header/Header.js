import React from 'react'
import './Header.scss'
import '../../styles.scss'
import NavBar from '../Buttons/NavBar/NavBar'
import logo from '../../assets/images/logo.png'
import imageHeader from '../../images/cabecera-estatica3.svg';
import frameImage from '../../images/marco-verde.svg';
import backgroundImage from '../../images/imagen-fondo.svg';

export default function Header() {
    return (
        <>
        <header className="header">
            {/*<img className="Header_logo" src={logo} alt="Logo" />*/}
            <div className="header-main-image">
                <img src={imageHeader}></img>
                {/*<img className="frame-image" src={frameImage}></img>
                <img className="background-image" src={backgroundImage} width="500" height="1000"></img>
                {
                <div className="frame-image">
                    <img src={backgroundImage}></img>
                </div>
                */}
            
            {/*<div className='text-header'>Únete a nosotros</div>*/}
                {/*<h1>ÚNETE A NOSOTROS</h1>*/}
            </div>    
        </header>
         
        </>
    )
}
