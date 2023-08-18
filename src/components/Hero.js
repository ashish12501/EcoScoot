import React from 'react';
import './styles/Hero.css';
import OLAgreen from './images/OLAgreen.png'

export function Hero() {
    return (
        <div className='hero'>
            <div className='left'>
                <h2 className='maintext'>Move a step <span>greener</span> with our EcoScoot</h2>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className='buttons'>
                    <button className='button1'> <a href="#BookingPage">Book Ride</a></button>
                    <button className='button2'>Know More</button>
                </div>
            </div>

            <div className='right'>
                <img src={OLAgreen} alt=""></img>
            </div>
        </div>
    )
}

