import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import './styles/ShowBookingsDetails.css';
import { TailSpin } from 'react-loader-spinner'
import { AppContext } from '../App'

export function ShowBookingDetails() {

    const [bookingsList, setBookingsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { userData } = useContext(AppContext);

    useEffect(() => {
        const getBookings = async () => {
            try {
                const Data = await getDocs(collection(db, 'Bookings'));
                const filteredData = Data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setBookingsList(filteredData);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        getBookings();
    }, []);


    if (userData === null) {
        return <p>Login as Admin to view this page</p>
    }
    else if (userData.uid === "INJ5RoUppoSluMcrBw9X3GTaOYk2") {
        return (
            <div className="ShowBookingsList">
                <div className="Bookingscontainer">
                    {isLoading ? (
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
                        </div>) : (
                        <table>
                            <caption>Client Bookings</caption>
                            <thead>
                                <tr>
                                    <th> User Name </th>
                                    <th> Email</th>
                                    <th> Bike </th>
                                    <th> Pick-Up </th>
                                    <th> Drop-Of</th>
                                    <th> Pick-Up</th>
                                    <th> Drop-Of</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingsList.map((booking) => (
                                    <tr key={booking.id}>
                                        <td data-cell="name">{booking.username}</td>
                                        <td data-cell="email">{booking.useremail}</td>
                                        <td data-cell="bike">{booking.bike}</td>
                                        <td data-cell="pick-up">{booking.pickUpLocation}</td>
                                        <td data-cell="drop-of">{booking.dropOfLocation}</td>
                                        <td data-cell="pick-up">{booking.pickUpDate}</td>
                                        <td data-cell="drop-of">{booking.dropOfDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>)
                    }

                </div>
            </div>
        );
    }
    else if (userData.uid !== "INJ5RoUppoSluMcrBw9X3GTaOYk2") {
        return <p> Not Authorised as Admin</p>
    }
}
