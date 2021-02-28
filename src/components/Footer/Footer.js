import React from 'react'
import './Footer.scss'
import arde from '../../assets/images/arde.png'
import csd from '../../assets/images/csd.png'
import fmp from '../../assets/images/fmp.png'
import mrda from '../../assets/images/mrda.png'
import rfep from '../../assets/images/rfep.png'

export default function Footer() {
    return (
        <div className="Footer">
            <a href="http://arderollerderby.es/"><img className="Footer-logo" src={arde} alt="ARDE" /></a>
            <a href="https://www.csd.gob.es/es"><img className="Footer-logo" src={csd} alt="ARDE" /></a>
            <a href="http://www.fmp.es/"><img className="Footer-logo" src={fmp} alt="ARDE" /></a>
            <a href="https://mrda.org/"><img className="Footer-logo" src={mrda} alt="ARDE" /></a>
            <a href="https://fep.es/website/index.asp"><img className="Footer-logo" src={rfep} alt="ARDE" /></a>
            <p style={{color: 'white'}}>Developed by: <a href="https://github.com/funforjust">funforjust</a></p>
        </div>
    )
}
