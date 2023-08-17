import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';



export function LoginForm() {
    const navigate = useNavigate();
    const [errormsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false);



    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    });

    const auth = getAuth();

    const handleSubmit = () => {

        if (!userLogin.email || !userLogin.password) {
            setErrorMsg("All fields mandatory")
            return;
        }
        setErrorMsg("")
        setLoading(true)
        setSubmitButtonDisabled(true)


        signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setSubmitButtonDisabled(false)
                setLoading(true)

                if (user.uid === "INJ5RoUppoSluMcrBw9X3GTaOYk2") {
                    navigate("/admin");
                }
                else navigate("/");
            })
            .catch((err) => {
                setLoading(false)
                setSubmitButtonDisabled(false)
                setErrorMsg(err.message)
                console.log("Error-", err.message)
            });
    };

    return (
        <div className="registerpage">
            <div className="registerform">
                <h1>Welcome Back!</h1>
                <p>Login into your account</p>
                <form>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        onChange={(e) =>
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value,
                            })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value,
                            })
                        }
                    />
                    <p style={{ color: "red" }} className='error'>{errormsg}</p>
                    <button type='button' className="registerbtn" onClick={handleSubmit} disabled={submitButtonDisabled}>
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
                            "Login"
                        )}
                    </button>
                </form>
                <p className='alternate'>Did't have an account ?  <Link className='alternateLink' to={"/register"}> Register</Link></p>
            </div>
        </div>
    );
}
