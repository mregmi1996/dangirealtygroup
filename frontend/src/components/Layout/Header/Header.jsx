import React, { useState } from 'react';
import headerLogo from '../../../assets/images/header_logo.png';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import LoginSignup from '../../LoginSignup/LoginSignup';


const Header = () => {
    const [displaySignUpModal, setDisplaySignUpModal] = useState("hide");

    const navigate = useNavigate();
    const buyClickHandler = ()=>{
        navigate("/buy");
    }
    const sellClickHandler = ()=>{
        navigate("/sell");
    }
    const agentsClickHandler=()=>{
        navigate("/agents");
    }
    const loginSignupClickHandler=()=>{
        setDisplaySignUpModal("view");
    }
    const resetSignUpModalToHide=()=>{
        setDisplaySignUpModal("hide");
    }

    const createAccount=()=>{

    }

    const logIn=()=>{

    }

    return (
        <div className="header">
            <div className="header-logo">
                <a href="/"><img src={headerLogo}/></a>
            </div>
            <div>
            <ul>
                <li className="header-li" onClick={()=>buyClickHandler()}><a>Buy</a></li>
                <li className="header-li" onClick={()=>sellClickHandler()}><a>Sell</a></li>
                <li className="header-li" onClick={()=>agentsClickHandler()}><a>Agents</a></li>
                <li className="header-li"><a>Join Us!</a></li>
            </ul>
            </div>
            <div className="login">
                <button onClick={()=>loginSignupClickHandler()} className="custom-button">LogIn/SignUp</button>
            </div>
            <div>
                <LoginSignup displaySignUpStyle={`${displaySignUpModal}`} resetSignUpModalToHide={resetSignUpModalToHide}/>
            </div>
        </div>    
    )
}

export default Header
