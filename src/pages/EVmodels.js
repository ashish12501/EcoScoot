import React from 'react'
import { Footer } from '../components/Footer'
import { RentalModels } from '../components/RentalModels'
import Revolt400 from '../components/images/Revolt400.png'
import TorkKratos from '../components/images/TorkKratos.png'
import OLAS1 from '../components/images/OLA_S1red.png'
import Yulu from '../components/images/Yulu.png'
import SimpleOne from '../components/images/SimpleOne.png'
import { Banner2 } from '../components/Banner2.js'

export function EVmodels() {
    const bikeData = [
        {
            name: 'Ola S1',
            image: OLAS1,
            price: '700',
            range: '181km',
            battery: '4 kWh',
            speed: '116 kmph',
            motorPower: '8500',
            charging: '4.5hr'
        },
        {
            name: 'Revolt 400',
            image: Revolt400,
            price: '800',
            range: '150 km ',
            battery: '3.24 kWh',
            speed: '85 kmph',
            motorPower: '3000',
            charging: '3 hr'
        },
        {
            name: 'Simple One',
            image: SimpleOne,
            price: '700',
            range: '212 km',
            battery: '5 kwh',
            speed: '105 kmph',
            motorPower: '8500',
            charging: '5.54 hr'
        },
        {
            name: 'Yulu Wyne',
            image: Yulu,
            price: '450',
            range: '68',
            battery: '51 V',
            speed: '24.9 kmph',
            motorPower: '250 W',
            charging: '--'
        },
        {
            name: 'Tork Kratos',
            image: TorkKratos,
            price: "850",
            range: '180km',
            battery: '4kWh',
            speed: '105kmph',
            motorPower: 'PMAC',
            charging: '4'
        },
    ]
    return (
        <div>
            <RentalModels bikeData={bikeData} />
            <Banner2 />
            <Footer />
        </div>
    )
}

