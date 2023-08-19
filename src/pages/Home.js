import React, { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { BookingForm } from '../components/BookingForm'
import { Support } from '../components/Support'
import { RentalModels } from '../components/RentalModels'
import { Banner } from "../components/Banner"
import { Banner2 } from '../components/Banner2.js'
import { Testimonials } from '../components/Testimonials.js'
import { Footer } from '../components/Footer.js'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { TailSpin } from 'react-loader-spinner'

export function Home() {


    const [isLoading, setIsLoading] = useState(true);
    const [bikeData, setBikeData] = useState([])

    useEffect(() => {
        const getBikeData = async () => {
            try {
                const Data = await getDocs(collection(db, 'bikeData'));
                const filteredData = Data.docs.map((doc) => ({
                    ...doc.data()
                }));
                setBikeData(filteredData);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        }
        getBikeData();
    }, [])

    const TestimonialData = [
        {
            name: "Molon Eusk",
            review: "We rented a bike from this website and had an amazing experience! The booking was easy and the rental rates were very affordable"
        },
        {
            name: "Zark Mukenberg",
            review: "The scooter was in great condition and made our trip even better. Highly recommend for this car rental website!"
        },

    ]
    if (isLoading) {
        return (
            <div className='LoaderBox'>
                <div className="Loader">
                    <TailSpin
                        height="70"
                        width="70"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Hero />
                <BookingForm />
                <Support />
                <RentalModels bikeData={bikeData} />
                <Banner />
                <Testimonials TestimonialData={TestimonialData} />
                <Banner2 />
                <Footer />
            </div>
        )
    }

}

