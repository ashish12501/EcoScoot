import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import './styles/BookingForm.css'
import { db } from '../config/firebase'
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useContext } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { AppContext } from '../App'

export function BookingForm() {
  const { userData } = useContext(AppContext)
  const [errormsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  function switchState() {
    setSubmitButtonDisabled(!submitButtonDisabled)
  }
  const [bookingData, setBookingData] = useState({
    bike: "",
    dropOfDate: "",
    dropOfLocation: "",
    pickUpDate: "",
    pickUpLocation: "",
    useremail: "",
    username: "",
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setBookingData((prevData) => ({
          ...prevData,
          username: user.displayName,
          useremail: user.email,
        }));
      }
    });

  }, []);

  const bookingref = collection(db, "Bookings")

  const handleSubmit = async () => {
    if (userData === null) {
      setErrorMsg("Signin Required !!")
      return
    }
    if (!bookingData.bike || !bookingData.dropOfDate || !bookingData.dropOfLocation || !bookingData.pickUpDate || !bookingData.pickUpLocation) {
      setErrorMsg("All fields mandatory")
      return;
    }
    try {
      switchState();
      setLoading(true);
      const docRef = await addDoc(bookingref, bookingData);
      console.log("Document written with ID: ", docRef.id);
      alert("Booking Successful");
      setBookingData(prevData => ({
        ...prevData,
        bike: "",
        dropOfDate: "",
        dropOfLocation: "",
        pickUpDate: "",
        pickUpLocation: "",
      }));
    } catch (e) {
      switchState();
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
      setSubmitButtonDisabled(false);
    }
  };

  return (

    <div className='Booking'>
      <div className='formBody'>
        <h2>Book a bike:</h2>
        <form className="form">
          <div className='form1'>
            <div className='entry'>
              <label htmlFor="bike">Choose a bike :</label>
              <select name="bike" id="bike" onChange={(e) => setBookingData({ ...bookingData, bike: e.target.value })}>
                <option>Select Your Bike:</option>
                <option value="OLAS1">Ola S1 Pro</option>
                <option value="Revolot RV400">Revolot RV400</option>
                <option value="Simple One">Simple One</option>
                <option value="Tork Kratus">Tork Kratus</option>
              </select>
            </div>

            <div className='entry'>
              <label htmlFor="pickUpLocation">Pick-up :</label>
              <select name="pickUpLocation" id="pickUpLocation" onChange={(e) => setBookingData({ ...bookingData, pickUpLocation: e.target.value })}>
                <option>Select location </option>
                <option value="Lucknow">Lucknow</option>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Uttrakhand">Uttrakhand</option>
              </select>
            </div>

            <div className='entry'>
              <label htmlFor="dropOfLocation">Drop-of :</label>
              <select name="dropOfLocation" id="dropOfLocation" onChange={(e) => setBookingData({ ...bookingData, dropOfLocation: e.target.value })}>
                <option>Select location</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Uttrakhand">Uttrakhand</option>
              </select>
            </div>
          </div>

          <div className='form2'>
            <div className='entry'>
              <label>Pick-up :</label>
              <input type={"date"} onChange={(e) => setBookingData({ ...bookingData, pickUpDate: e.target.value })}></input>
            </div>

            <div className='entry'>
              <label>Drop-of :</label>
              <input type={"date"} onChange={(e) => setBookingData({ ...bookingData, dropOfDate: e.target.value })}></input>
            </div>
            <div className='formbtn'>
              <button className='btn' onClick={handleSubmit} type={'button'} disabled={submitButtonDisabled}>
                {loading ? (
                  <div className='SubmitLoader'>
                    <TailSpin
                      height={20}
                      width={20}
                      color="#ffffff"
                      ariaLabel="loading"
                      radius={5}
                    />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
          <p style={{ color: "red" }} className='errorBooking'>{errormsg}</p>
        </form>

      </div >
    </div >

  )

}

