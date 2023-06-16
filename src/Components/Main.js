import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { SignIn,SignUp,Profile } from "./Sessions";
import Home from "./Home";


const Main = ()=>{

  return (
    <div className="main">

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign_in" element={<SignIn/>}/>
          <Route path="/sign_up" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    

    </div>
  );
}

export default Main;
