import React from 'react';
import './styles/Hero.css';
import OLAgreen from './images/OLAgreen.png'
import { useNavigate } from 'react-router-dom'

export function Hero() {
    const navigate = useNavigate();
    return (
        <div className='hero'>
            <div className='left'>
                <h2 className='maintext'>Move a step <span>greener</span> with our EcoScoot</h2>
                <p>Rent the bike of your choice. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className='buttons'>
                    <button className='button1'> <a href="#BookingPage">Book Ride</a></button>
                    <button className='button2' onClick={() => navigate("/aboutus")}>Know More</button>
                </div>
            </div>

            <div className='right'>
                <img src={OLAgreen} alt=""></img>
            </div>
        </div>
    )
}

