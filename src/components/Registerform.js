import React from 'react'
import './styles/Registerform.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate, Link } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner';


export function Registerform() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        pass: "",
        confirmpass: ""
    })

    const [errormsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {

        if (!userData.name || !userData.email || !userData.pass || !userData.confirmpass) {
            setErrorMsg("All fields mandatory")
            return;
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true)
        setLoading(true)
        createUserWithEmailAndPassword(auth, userData.email, userData.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false)
                const user = res.user;
                await updateProfile(user, { displayName: userData.name })
                navigate("/")
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                setLoading(false)
                setErrorMsg(err.message)
            })
    }


    return (
        <div className='registerpage'>
            <div className='registerform'>
                <h1>Get Started With EcoScoot</h1>
                <p>Getting started is easy</p>
                <form>
                    <input type="text" placeholder='Full Name' onChange={(event) => setUserData((prev) => ({ ...prev, name: event.target.value }))}></input>
                    <input type="text" placeholder='Enter Email' onChange={(event) => setUserData((prev) => ({ ...prev, email: event.target.value }))}></input>
                    <input type="text" placeholder='Password' onChange={(event) => setUserData((prev) => ({ ...prev, pass: event.target.value }))}></input>
                    <input type="text" placeholder='Confirm Password' onChange={(event) => setUserData((prev) => ({ ...prev, confirmpass: event.target.value }))}></input>
                    <p className='error' style={{ color: "red" }}>{errormsg}</p>
                    <button type='button' className='registerbtn' onClick={handleSubmit} disabled={submitButtonDisabled}>
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
                            "Create Account"
                        )}

                    </button>
                </form>
                <p className='alternate'>Already have an Account ? <Link className='alternateLink' to={"/login"}>Login</Link></p>
            </div>
        </div>
    )
}

