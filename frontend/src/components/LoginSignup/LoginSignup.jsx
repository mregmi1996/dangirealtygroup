import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validate from 'validator';
import './LoginSignup.scss';
import CustomModal from '../CustomModal/CustomModal';
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle';
import { actionTypes } from '../../reducers/user';
import { useDispatch } from 'react-redux';
import configuration from '../../config';


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
    const dispatch = useDispatch();
    const createAccount=()=>{

      if (email.trim().length > 0 && firstName.trim().length > 0 && lastName.trim().length > 0
             && password.length > 0 && phoneNumber.trim().length > 0) {

            if (emailError === "" && passwordError === "" && firstNameError === "" && lastNameError === "" && phoneNumberError === "") {

                sendData();
            } else {
                alert("You have an invalid field!");
                // setvariant('danger');
                // alertUser();
            }

        } else {
            alert("Oops! Please fill all fields!");
            // setvariant('danger');
            // alertUser();
        }

    }

    const sendData = () => {
          let formData = {
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName,
              phoneNumber: phoneNumber
          }
          // call user post
          fetch(`${configuration.URL}/users`, {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(formData)
          }).then((response) => response.json())
              .then((data) => {
                console.log("check2 "+JSON.stringify(data))
                  dispatch({
                      type: actionTypes.SET_LOGIN,
                      email: data.data.email,
                      sessionToken: data.data.token,
                      userData: data.data
                  });
                  changeDisplaySignUpStyle("close");
              }).catch((err) => {
                  console.log(err);
                  alert("Oops! Something went wrong!");
                  // setvariant('danger');
                  // alertUser();
              })
    }

    const loginUser = (userProfile) => {
      let formData = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
      }
      // call user post
      fetch(`${configuration.URL}/login`, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      }).then((response) => response.json())
          .then((data) => {
              dispatch({
                  type: actionTypes.SET_LOGIN,
                  email: data.data.email,
                  sessionToken: data.data.token,
                  userData: data.data
              });
              changeDisplayLogInStyle("close");
          }).catch((err) => {
              console.log(err);
              alert("Oops! Something went wrong!");
              // setvariant('danger');
              // alertUser();
          })
    }

    const changeDisplaySignUpStyle = (str) => {
        if(str == "view") {
            setDisplayLogInModal("hide");
            setDisplaySignUpModal("display");
        }
        else if(str == "close"){
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmailError('');
            setPasswordError('');
            setFirstNameError('');
            setLastNameError('');
            setPhoneNumberError('');
            setDisplaySignUpModal("hide");
            props.resetSignUpModalToHide("close");
        }
    }
    const changeDisplayLogInStyle = (str) => {
        if(str == "view") {
            setDisplaySignUpModal("hide");
            setDisplayLogInModal("display");
        }
        else if(str == "close"){
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmailError('');
            setPasswordError('');
            setFirstNameError('');
            setLastNameError('');
            setPhoneNumberError('');
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
              fetch(`${configuration.URL}/validate/${e.target.value}`, {
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
                      setEmail(e.target.value);
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

    const validateUserEmailForLogin = (e) => {
      // check if the email exists in the DB
      if (!validate.isEmail(e.target.value)) {
        setEmailError('Invalid Email Address :(');
      } 
      else {
        setEmail(e.target.value);
        if (e.target.value.trim().length !== 0) {
            fetch(`${configuration.URL}/validate/${e.target.value}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) =>
                response.json()
            ).then((data) => {
                console.log(data);
                if (data.message === "success") {
                    setEmailError("");
                    setEmail(e.target.value);
                } else {
                    setEmailError("This email is not registered with us!");
                    setTimeout(() => {
                        setEmailError("");
                        setEmail("");
                    }, 3000);
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
            setPassword(e.target.value);
        }
    }

    // validate the First Name field
    const validateFirstName = (e) => {
      if (e.target.value.trim().length == 0 || validate.isAlpha(e.target.value) === false) {
          setFirstNameError('Please provide a valid first name :(');
      }
      else {
          setFirstNameError('');
          setFirstName(e.target.value);
      }
    }

    // validate the Last Name field
    const validateLastName = (e) => {
      if (e.target.value.trim().length == 0 || validate.isAlpha(e.target.value) === false) {
          setLastNameError('Please provide a valid last name :(');
      }
      else {
          setLastNameError('');
          setLastName(e.target.value);
      }
    }

    const validatePhoneNumber = (e) => {
      if (!validate.isMobilePhone(e.target.value)) {
        setPhoneNumberError('Please provide a valid phone number :(');
      }
      else {
        setPhoneNumberError('');
        setPhoneNumber(e.target.value);
      }
    }

    // handle first name change
    const handleFirstName = (e) => {
      setFirstName(e.target.value);
    }

    // handle last name change
    const handleLastName = (e) => {
      setLastName(e.target.value);
    }

    // handle email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
    }

    // handle password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
    }

    // handle phone number change
    const handlePhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
    }

    useEffect(() => {
        changeDisplaySignUpStyle(props.displaySignUpStyle);
    }, [props])

    return (
        <div>
            <CustomModal icon="signin" modalWidth="w-40percent" displayStyle={displaySignUpModal} title="Sign Up Using" subtitle="" changeDisplayStyle={changeDisplaySignUpStyle}>
                  <div className="login-signup-container">
                              <div className="center w-100percent">
                                <LoginWithGoogle changeDisplaySignUpStyle={changeDisplaySignUpStyle}/>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text1">Or</p>
                              </div>
                              <div className="w-49percent">
                                <input type="text" id="firstName" name="firstName" placeholder="Enter Your First Name" onBlur={validateFirstName} onChange={handleFirstName} value={firstName}></input>
                                <p className="modal-error-text">{firstNameError}</p>
                              </div>
                              <div className="w-49percent">
                                <input type="text" id="lastName" name="lastName" placeholder="Enter Your Last Name" onBlur={validateLastName} onChange={handleLastName} value={lastName}></input>
                                <p className="modal-error-text">{lastNameError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="text" id="email" name="email" placeholder="Your Email" onBlur={validateUserEmail} onChange={handleEmail} value={email}></input>
                                <p className="modal-error-text">{emailError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="text" id="phone" name="phone" placeholder="Your Phone" onBlur={validatePhoneNumber} onChange={handlePhoneNumber} value={phoneNumber}></input>
                                <p className="modal-error-text">{phoneNumberError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="password" id="password" name="password" placeholder="Create a Password" onBlur={validatePassword} onChange={handlePassword} value={password}></input>
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
                                <LoginWithGoogle changeDisplaySignUpStyle={changeDisplaySignUpStyle}/>
                              </div>
                              <div className="center w-100percent">
                                <p className="modal-text1">Or</p>
                              </div>
                              <div className="w-100percent">
                                <input type="text" id="loginEmail" name="email" placeholder="Your Email" onBlur={validateUserEmailForLogin} onChange={handleEmail} value={email}></input>
                                <p className="modal-error-text">{emailError}</p>
                              </div>
                              <div className="w-100percent">
                                <input type="password" id="loginPassword" name="password" placeholder="Your password" onBlur={validatePassword} onChange={handlePassword} value={password}></input>
                                <p className="modal-error-text">{passwordError}</p>
                              </div>
                              <div className="center w-100percent">
                                <button name="logIn" onClick={loginUser} className="p-10 btnHover">LOG IN</button>
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
