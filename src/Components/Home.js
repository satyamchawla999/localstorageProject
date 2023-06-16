import { Link } from "react-router-dom";

const Home = ()=>{


    return (
        <>
            <Link to="/sign_in">
                SignIn
            </Link>
            <br/>
            <Link to="/sign_up">
                SignUp
            </Link>
            <br/>
            <Link to="/profile">
                Profile
            </Link>
        </>
    );
}

export default Home;