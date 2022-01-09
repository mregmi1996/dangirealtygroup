import React, { useState } from 'react';
import headerLogo from '../../../assets/images/header_logo.png';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import LoginSignup from '../../LoginSignup/LoginSignup';
import LogoutWithGoogle from '../../LogoutWithGoogle/LogoutWithGoogle';
import { useDispatch, connect } from 'react-redux';
import { actionTypes } from '../../../reducers/user';
import { useEffect } from 'react';


const Header = (props) => {
    const [displaySignUpModal, setDisplaySignUpModal] = useState("close");
    const [displayLogoutButton, setDisplayLogoutButton] = useState("hide");
    const [loginButtonText, setLoginButtonText] = useState("Login/Signup");
    const [loginSignupButtonDisabled, setLoginSignupButtonDisabled] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buyClickHandler = ()=>{
        navigate("/buy");
    }
    const sellClickHandler = ()=>{
        navigate("/sell");
    }
    const agentsClickHandler=()=>{
        navigate("/agents");
    }
    const joinUsHandler=()=>{
        navigate("/join");
    }
    const loginSignupClickHandler=()=>{
        setDisplaySignUpModal("view");
    }
    const resetSignUpModalToHide=()=>{
        setDisplaySignUpModal("close");
    }

    useEffect(() => {
        if(props.userCredentials.loggedIn) {
            setLoginButtonText(`${props.userCredentials.userDetails.firstName} ${props.userCredentials.userDetails.lastName}`);
            setDisplayLogoutButton("display");
            setLoginSignupButtonDisabled(true);
        }
        else {
            setLoginButtonText("Login/Signup");
            setDisplayLogoutButton("hide");
            setLoginSignupButtonDisabled(false);
        }
    }, [props])

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
                <li className="header-li" onClick={()=>joinUsHandler()}><a>Join Us!</a></li>
            </ul>
            </div>
            <div className="login">
                <button disabled={loginSignupButtonDisabled} onClick={()=>loginSignupClickHandler()} className="custom-button">{loginButtonText}</button>
                <div className={displayLogoutButton}>
                    <LogoutWithGoogle/>
                </div>
            </div>
            <div>
                <LoginSignup displaySignUpStyle={`${displaySignUpModal}`} resetSignUpModalToHide={resetSignUpModalToHide}/>
            </div>
        </div>    
    )
}


const mapStateToProps = (state) => {
    const { userReducer} = state
    return userReducer
  }
  
  export default connect(mapStateToProps)(Header)
