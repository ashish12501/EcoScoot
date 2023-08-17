import React from 'react'
import './styles/Contactpage.css'

export function Contactpage() {
    return (
        <div className='ContactPage'>
            <div className='Contactbox1'>
                <div className='Contactbox1Grp'>
                    <div className='talk'>
                        <h1>Let's talk</h1>
                        <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</p>
                    </div>
                    <div className='email'>
                        <h3>Email</h3>
                        <h4>EcoScoot@gmail.emai.com</h4>
                    </div>
                    <div className='social'>
                        <h2>Socials</h2>
                        <h5>Linkdin</h5>
                        <h5>Instagram</h5>
                        <h5>Facebook</h5>
                        <h5>Twitter</h5>
                    </div>
                </div>

            </div>
            <div className='Contactbox2'>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder='Your name here'></input>
                    <label>Email</label>
                    <input type="email" placeholder='youremail.gmail.com'></input>
                    <label>Tell us about it</label>
                    <textarea placeholder='Write here'></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

