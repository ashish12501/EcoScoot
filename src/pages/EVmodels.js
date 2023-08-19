import React, { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { RentalModels } from '../components/RentalModels'
import { Banner2 } from '../components/Banner2.js'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { TailSpin } from 'react-loader-spinner'


export function EVmodels() {

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
    return (
        <div>
            <RentalModels bikeData={bikeData} />
            <Banner2 />
            <Footer />
        </div>
    )
}

