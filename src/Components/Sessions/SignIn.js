import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { Layout, Checkbox } from 'antd';

import "../../Assets/Styles/SignIn.css"

import { useState } from 'react';


const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState([]);
    const [validate, setValidate] = useState(false);
    const [userId, setUserId] = useState(null);



    const onSubmitForm = (e) => {
        e.preventDefault();

        setValidate(false)

        if (!password || !email) {
            setValidate(true);
            return;
        }

        const items = JSON.parse(localStorage.getItem("items"));
        let result = false;
        for (let item of items) {
            if (item.email === email) {
                result = true;
                break;
            }
        }

        if (result === false) {
            setValidate(true);
            return;
        }

        const info = {
            email,
            password,
        }

        setInfo(info);

        setPassword("")
        setEmail("");

        navigate({
            pathname: '/profile', search: `?${createSearchParams({
                email: email,
            })}`.toString()
        })
    }

    const { Content } = Layout
    return (
        <>
            <Layout className="backGround">

                <Content className="container">

                    <div className='leftBlock'>
                        <div className='forHide'>

                        </div>
                        <img src={require('../../Assets/Images/main1.png')} alt="#" />
                    </div >

                    <div className='rightBlock'>

                        <p className='heading'>Sign In</p>

                        <div className='formContainer'>
                            <form className='formInput' onSubmit={onSubmitForm}>


                                <label for="email" >Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" />

                                <label for="" >Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />

                                <Checkbox><br /><p className='checkBox' > I've read and agree with Term or Service and over<br /> Privacy Policy</p></Checkbox>

                                <button className='button'>
                                    Sign In
                                </button>

                                <span
                                    style={{
                                        display: "block",
                                        textAlign: "center",
                                        color: "grey",
                                    }}
                                >OR</span>

                                <span className='auth'>
                                    <button disabled>
                                        <img src={require("../../Assets/Images/google.png")} alt="#" />
                                        Sign in with Google
                                    </button>

                                    <button disabled>
                                        <img src={require("../../Assets/Images/facebook.png")} alt="#" />
                                        Sign in with Facebook
                                    </button>
                                </span>

                                <span
                                    style={{
                                        display: "block",
                                        textAlign: "center",
                                        fontWeight: "500"
                                    }}
                                >
                                    <p>
                                        Already have an account? <Link style={{ color: "#8782FD" }} to="/sign_up">Sign Up</Link>
                                    </p>
                                </span>

                                {
                                    validate &&
                                    <>
                                        <span
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                fontWeight: "500",
                                                color: "red"
                                            }}
                                        >
                                            <p>
                                                Please Enter All Credentials Or Enter Password Again
                                            </p>
                                        </span>
                                    </>
                                }
                            </form>
                        </div>
                    </div>
                </Content>

            </Layout>
        </>
    );
}

export default SignIn;