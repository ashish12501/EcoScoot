import React from 'react'
import supportBox1 from '../components/images/SupportBox1.png'
import supportBox2 from '../components/images/SupportBox2.png'
import supportBox3 from '../components/images/SupportBox3.png'
import './styles/Support.css'



export function Support() {
    return (
        <div className='Support'>
            <div className='SupportGrp'>
                <div className='box1'>
                    <h1>Experince hassel free EV rental</h1>
                </div>
                <div className='box2'>
                    <div className='card cd1'>
                        <img src={supportBox1} alt=""></img>
                        <h3>Find bike of choice</h3>
                        <p>From basic electric scooters to stunning electric motorcycles. On every kind of e-bike, you'll get a great deal.</p>
                    </div>
                    <div className='card cd2'>
                        <img src={supportBox2} alt=""></img>
                        <h3>Find Score</h3>
                        <p>In order to help you make the best decision possible, we grade each deal based on its fuel policy, pickup location, and insurance.</p>
                    </div>
                    <div className='card cd3'>
                        <img src={supportBox3} alt=""></img>
                        <h3>Stay on track</h3>
                        <p>Wherever you're going, we make it simple to browse, compare, and reserve the ideal e-bike.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

