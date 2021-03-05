import React from 'react'
import './Footer.scss'
import arde from '../../assets/images/arde.png'
import csd from '../../assets/images/csd.png'
import fmp from '../../assets/images/fmp.png'
import mrda from '../../assets/images/mrda.png'
import rfep from '../../assets/images/rfep.png'
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className='footer'>
            <div className = 'footer-top'>
                <a href="http://arderollerderby.es/"><img className="footer-logo" src={arde} alt="ARDE" /></a>
                <a href="https://www.csd.gob.es/es"><img className="footer-logo" src={csd} alt="ARDE" /></a>
                <a href="http://www.fmp.es/"><img className="footer-logo" src={fmp} alt="ARDE" /></a>
                <a href="https://mrda.org/"><img className="footer-logo" src={mrda} alt="ARDE" /></a>
                <a href="https://fep.es/website/index.asp"><img className="footer-logo" src={rfep} alt="ARDE" /></a>
            </div>

            <div className = 'footer-botom'>
                <p style={{color: 'white', textAlign: 'right', fontSize:'11px', marginRight:'10px'}}>
                    <p>Developed by&nbsp;
                    <LinkedinOutlined /><a className='a-footer' href='https://www.linkedin.com/in/adriano-osses/'> adrianoosses - </a>
                    <GithubOutlined /><a className='a-footer' href="https://github.com/funforjust"> funforjust </a>
                    </p>
                </p>
            </div>
        </div>
    )
}
