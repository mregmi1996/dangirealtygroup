import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validate from 'validator';
import './LoginSignup.scss';
import CustomModal from '../CustomModal/CustomModal';
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle';


const LoginSignup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [displaySignUpModal, setDisplaySignUpModal] = useState("hide");
    const [displayLogInModal, setDisplayLogInModal] = useState("hide");

    const navigate = useNavigate();
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
            props.resetSignUpModalToHide("hide");
        }
    }
    const changeDisplayLogInStyle = (str) => {
        if(str == "view") {
            setDisplaySignUpModal("hide");
            setDisplayLogInModal("display");
        }
        else if(str == "close"){
            setDisplayLogInModal("hide");
            props.resetSignUpModalToHide("hide");
        }
    }

    const validateUserEmail = (e) => {
        // check if the email exists in the DB
        if (!validate.isEmail(e.target.value)) {
          setEmailError('Invalid Email Address :(');
        } 
        else {
          setEmail(e.target.value);
          if (e.target.value.trim().length !== 0) {
              fetch(`http://localhost:4000/validate/${e.target.value}`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json'
                  }
              }).then((response) =>
                  response.json()
              ).then((data) => {
                  console.log(data);
                  if (data.message === "success") {
                      setEmailError("This username is taken! Please pick another one!");
                      setTimeout(() => {
                          setEmailError("");
                          setEmail("");
                      }, 3000);

                  } else {
                      setEmailError("");
                  }
              }).catch((err) => {
                  // setvariant('danger');
                  alert('Oops! Something went wrong x(');
                  // alertUser();
                })
          } 
          else {
              setEmailError('Please fill this field!');
          }
        }
    }

    const validatePassword = (e) => {
        if (e.target.value.length === 0 || e.target.value.includes(' ')) {
            setPasswordError('Invalid password!');
        } else if (!validate.isStrongPassword(e.target.value)) {
            setPasswordError('Your password is weak');
        } else {
            setPasswordError('');
        }
    }

    // validate the First Name field
    const validateFirstName = (e) => {
      if (e.target.value.trim().length == 0 || validate.isAlpha(e.target.value) === false) {
          setFirstNameError('Please provide a valid first name :(');
      }
      else {
          setFirstNameError('');
      }
    }

    // validate the Last Name field
    const validateLastName = (e) => {
      if (e.target.value.trim().length == 0 || validate.isAlpha(e.target.value) === false) {
          setLastNameError('Please provide a valid last name :(');
      }
      else {
          setLastNameError('');
      }
    }

    const validatePhoneNumber = (e) => {
      if (!validate.isMobilePhone(e.target.value)) {
        setPhoneNumberError('Please provide a valid phone number :(');
      }
      else {
        setPhoneNumberError('');
      }
    }

    useEffect(() => {
        changeDisplaySignUpStyle(props.displaySignUpStyle);
    }, [props])

    return (
        <div>
            <CustomModal icon="signin" modalWidth="w-40percent" displayStyle={displaySignUpModal} title="Sign Up Using" subtitle="" changeDisplayStyle={changeDisplaySignUpStyle}>
                  <div className="login-signup-container">
                              <div className="center w-100percent">
                                <LoginWithGoogle/>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text1">Or</p>
                              </div>
                              <div className="w-49percent">
                                <input type="text" id="firstName" name="firstName" placeholder="Enter Your First Name" onBlur={validateFirstName}></input>
                                <p className="modal-error-text">{firstNameError}</p>
                              </div>
                              <div className="w-49percent">
                                <input type="text" id="lastName" name="lastName" placeholder="Enter Your Last Name" onBlur={validateLastName}></input>
                                <p className="modal-error-text">{lastNameError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="text" id="email" name="email" placeholder="Your Email" onBlur={validateUserEmail}></input>
                                <p className="modal-error-text">{emailError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="text" id="phone" name="phone" placeholder="Your Phone" onBlur={validatePhoneNumber}></input>
                                <p className="modal-error-text">{phoneNumberError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="password" id="password" name="password" placeholder="Create a Password" onBlur={validatePassword}></input>
                                <p className="modal-error-text">{passwordError}</p>
                              </div>
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

export default LoginSignup
