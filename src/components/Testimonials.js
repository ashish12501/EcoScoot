import React from 'react'
import './styles/Testimonial.css'

export function Testimonials({ TestimonialData }) {

    return (
        <div className='Testimonial'>
            <div className='TestimonialBox1'>
                <h1>Client's Testimonials</h1>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className='TestimonialBox2'>
                {TestimonialData.map((data, index) => (
                    <div className='TestimonialCard' key={index}>
                        <div className='personName'>
                            <h1>{data.name}</h1>
                        </div>
                        <div className='personReview'>
                            <p>{data.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

