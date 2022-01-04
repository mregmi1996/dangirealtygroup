import React, { useState } from 'react';
import headerLogo from '../../../assets/images/header_logo.png';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import CustomModal from '../../CustomModal/CustomModal';
import LoginWithGoogle from '../../LoginWithGoogle/LoginWithGoogle';


const Header = () => {
    const [displaySignUpModal, setDisplaySignUpModal] = useState("hide");
    const [displayLogInModal, setDisplayLogInModal] = useState("hide");

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
    const loginSignupClickHandler=(str)=>{
        if(str == "view") {
            setDisplaySignUpModal("display");
        }
        else if(str == "close"){
            setDisplaySignUpModal("hide");
        }
    }

    const createAccount=()=>{

    }

    const logIn=()=>{

    }

    const changeDisplaySignUpStyle = (str) => {
        if(str == "view") {
            setDisplayLogInModal("hide");
            setDisplaySignUpModal("display");
        }
        else if(str == "close"){
            setDisplaySignUpModal("hide");
        }
    }

    const changeDisplayLogInStyle = (str) => {
        if(str == "view") {
            setDisplaySignUpModal("hide");
            setDisplayLogInModal("display");
        }
        else if(str == "close"){
            setDisplayLogInModal("hide");
        }
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
                <button onClick={()=>loginSignupClickHandler("view")} className="custom-button">LogIn/SignUp</button>
            </div>
            <CustomModal icon="signin" modalWidth="w-40percent" displayStyle={displaySignUpModal} title="Sign Up Using" subtitle="" changeDisplayStyle={changeDisplaySignUpStyle}>
                  <div className="login-signup-container">
                              <div className="center w-100percent">
                                <LoginWithGoogle/>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text1">Or</p>
                              </div>
                              <input className="w-49percent" type="text" id="firstName" name="firstName" placeholder="Enter Your First Name"></input><br></br>
                              <input className="w-49percent" type="text" id="lastName" name="lastName" placeholder="Enter Your Last Name"></input><br></br>
                              <input className="w-100percent" type="text" id="email" name="email" placeholder="Your Email"></input><br></br>
                              <input className="w-100percent" type="text" id="phone" name="phone" placeholder="Your Phone"></input><br></br>
                              <input className="w-100percent" type="password" id="password" name="password" placeholder="Create a Password"></input><br></br>
                              <div className="center w-100percent">
                                <button name="createAccount" onClick={createAccount} className="p-10 btnHover">CREATE ACCOUNT</button>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text2">Already have an account? <a className="modal-link" onClick={() => changeDisplayLogInStyle("view")}>Log In</a></p>
                              </div>
                  </div>
            </CustomModal>
            <CustomModal icon="signin" modalWidth="w-40percent" displayStyle={displayLogInModal} title="Log In Using" subtitle="" changeDisplayStyle={changeDisplayLogInStyle}>
                  <div className="login-signup-container">
                              <div className="center w-100percent">
                                <LoginWithGoogle/>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text1">Or</p>
                              </div>
                              <input className="w-100percent" type="text" id="loginEmail" name="loginEmail" placeholder="Your Email"></input><br></br>
                              <input className="w-100percent" type="password" id="loginPassword" name="loginPassword" placeholder="Your Password"></input><br></br>
                              <div className="center w-100percent">
                                <button name="logIn" onClick={logIn} className="p-10 btnHover">LOG IN</button>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text2">Don't have an account? <a className="modal-link" onClick={() => changeDisplaySignUpStyle("view")}>Sign Up</a></p>
                              </div>
                  </div>
            </CustomModal>
        </div>    
    )
}

export default Header
