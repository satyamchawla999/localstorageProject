import { useNavigate, useSearchParams } from "react-router-dom";
import { Layout } from 'antd';
import style from '../../Assets/Styles/Profile.module.css'
import { useState,useEffect } from "react";

const Profile = () => {



    const { Content } = Layout;
    const [searchParams] = useSearchParams();
    const data = searchParams.get("email")

    const navigate = useNavigate();

    if(!data) {
        navigate('/sign_in')
    }

    const [email,setEmail] = useState(data);
    

    const items = JSON.parse(localStorage.getItem("items"));

    
    const [userData,setUserData] = useState({"name":email});

    useEffect(()=>{
        // const size = localStorage.getItem("items");
        const userObject  = items.filter((item)=>(item.email === email));
        setUserData(userObject[0]);
        console.log(userData)
    },[])

    return (
        <>
            <Layout className={style.backGround}>
                <Content className={style.container}>
                    <div className={style.leftBlock}>
                        <img src={require('../../Assets/Images/man (1).png')} alt="#" />
                    </div >

                    <div className={style.rightBlock}>
                        <p className={style.heading}>Profile</p>

                        <form className={style.formInput}>

                            <label for="name" >Name</label>
                            <input type="text" placeholder={userData.name}/>
                            

                            <label for="email" >Email</label>
                            <input type="email" placeholder={data}/>

                            <button className={style.button}>
                                    Update Profile
                            </button>

                        </form>

                    </div>
                </Content>
            </Layout>
        </>
    );
}

export default Profile;