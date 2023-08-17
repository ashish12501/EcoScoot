import React from 'react'
import './styles/Footer.css'
import Logo from './images/Logo.png';


export function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterGrp'>
                <div className='footerbox footerbox1'>
                    <div className='Footerlogo'>
                        <img src={Logo} alt=""></img>
                        <h2>EcoScoot</h2>
                    </div>
                    <p>Travell back with memories not longer bills, EcoScoot the pocket friendky rental.</p>
                </div>
                <div className='FooterLinks'>
                    <div className='footerbox footerbox2'>
                        <h2>Company</h2>
                        <p>EV Rental</p>
                        <p>Lucknow, Uttar Pradesh, India</p>
                        <p>Work at EcoScoot</p>
                    </div>
                    <div className='footerbox footerbox3'>
                        <h2>Legal</h2>
                        <p>Claim</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className='developer'>Developed by ©ashish yadav with love </p>
        </div >
    )
}

