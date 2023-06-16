import { Link,useNavigate } from 'react-router-dom';
import { Layout, Checkbox, Radio } from 'antd';
import { useState, useEffect } from 'react';


import style from "../../Assets/Styles/SignUp.module.css"


const SignUp = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [type, setType] = useState("");
    const [info, setInfo] = useState([]);
    const [validate,setValidate] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setValidate(false)

        if(!name || !password || !email || !cpassword) {
            setValidate(true);
            return;
        }

        if(password !== cpassword) {
            setValidate(true);
            return;
        }

        const info  = {
            name,
            email,
            password,
            cpassword,
            type,
        }

        setInfo(info);

        setPassword("")
        setEmail("");
        setName("");
        setCpassword("");
        
        const size = localStorage.getItem("items");

        if(size === null) {
            let data = [];
            data.push(info)
            localStorage.setItem('items', JSON.stringify(data));

        } else {
            let getCurrentItem = localStorage.getItem("items");
            let currentItem = JSON.parse(getCurrentItem);

            currentItem.push(info);
            localStorage.setItem('items', JSON.stringify(currentItem));
        }

        navigate('/sign_in');
    }


    const { Content } = Layout
    return (
        <>
            <Layout className={style.backGround}>

                <Content className={style.container}>

                    <div className={style.leftBlock}>
                        <div className={style.forHide}>

                        </div>
                        <img src={require('../../Assets/Images/main.png')} alt="#" />
                    </div >

                    <div className={style.rightBlock}>

                        <p className={style.heading}>Sign Up</p>

                        <div className={style.formContainer}>
                            <form onSubmit={onSubmitForm} className={style.formInput}>
                                <label for="name" >Name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" />

                                <label for="email" >Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" />

                                <label for="" >Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />

                                <label for="" style={{ marginBottom: "0" }} >Re-enter Password</label>
                                <input onChange={(e) => setCpassword(e.target.value)} value={cpassword} type="password" />

                                <span
                                    style={{
                                        display: "block",
                                        textAlign: "center",
                                        fontWeight: "500"
                                    }}
                                >
                                    <Radio.Group onChange={(e) => setType(e.target.value)} value={type}>
                                        <Radio value={"Admin"}>Admin</Radio>
                                        <Radio value={"User"}>User</Radio>
                                        <Radio value={"Employee"}>Employee</Radio>
                                    </Radio.Group>
                                </span>

                                <Checkbox><br /><p className={style.checkBox} > I've read and agree with Term or Service and over<br /> Privacy Policy</p></Checkbox>

                                <button className={style.button}>
                                    Sign Up
                                </button>

                                <span
                                    style={{
                                        display: "block",
                                        textAlign: "center",
                                        color: "grey",
                                    }}
                                >OR</span>

                                <span className={style.auth}>
                                    <button disabled>
                                        <img src={require("../../Assets/Images/google.png")} alt="#" />
                                        Sign up with Google
                                    </button>

                                    <button disabled>
                                        <img src={require("../../Assets/Images/facebook.png")} alt="#" />
                                        Sign up with Facebook
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
                                        Already have an account? <Link style={{ color: "#8782FD" }} to="/sign_in">Sign In</Link>
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
                                                color:"red"
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

export default SignUp;