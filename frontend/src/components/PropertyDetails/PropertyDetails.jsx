import React, { useState } from 'react';
import './PropertyDetails.scss';
import image_1 from '../../assets/images/temp.jpeg';
import Button from '@mui/material/Button';
import { FaQuestionCircle, FaWalking, FaPhone } from 'react-icons/fa';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import AgentDescription from '../Agents/AgentDescription/AgentDescription';
import CustomModal from '../CustomModal/CustomModal';

const PropertyDetails = (props) => {
    const [current, setCurrent] = useState(0);
    const [displayModal, setDisplayModal] = useState("hide");
    const [displayModal2, setDisplayModal2] = useState("hide");

    const images = [
        { image_item: image_1 },
        { image_item: image_1 },
        { image_item: image_1 },
        { image_item: image_1 }
    ]
    const length = images.length;
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // used to control the display of update info Modal form
    const changeDisplayStyle = (str) => {
        if(str == "view") {
        setDisplayModal("display");
        }
        else if(str == "close"){
        setDisplayModal("hide");
        }
    }

    const changeDisplayStyle2 = (str) => {
        if(str == "view") {
        setDisplayModal2("display");
        }
        else if(str == "close"){
        setDisplayModal2("hide");
        }
    }

    const submitQuestion = () => {

    }

    const scheduleTour = () => {
        
    }

    return (
        <div className="property-details">
            <div className="property-details-description">
                <h1 className="header-1">30 Henry St, Medford, MA</h1>
                <h2 className="header-2">$250,000</h2>
            </div>
            <div className="property-info-container">
                <div className="property-details-slider">
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                    {images.map((image, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <img src={image.image_item}></img>
                                )}
                            </div>

                        )
                    })}
                </div>
                <div className="property-side-bar">
                    <h1>Property Details:</h1>
                    <hr />
                    <div className="property-info-box">
                        <div className="property-type">
                            <p2>Property Type: </p2> <p1>Apartment</p1>
                        </div>
                        <div className="property-type">
                            <p2>Offer Type: </p2><p1>Rent</p1>
                        </div>
                        <div className="property-type">
                            <p2>City: </p2> <p1>Medford</p1>
                        </div>
                        <div className="property-type">
                            <p2>Zip Code: </p2> <p1>02145</p1>
                        </div>
                        <div className="property-type">
                            <p2>Bedrooms: </p2> <p1>3</p1>
                        </div>
                        <div className="property-type">
                            <p2>Bathrooms:</p2> <p1>2</p1>
                        </div>
                        <div className="property-type">
                            <p2>Area: </p2> <p1>1200ft<sup>2</sup></p1>
                        </div>
                    </div>
                    <h1>Amnities:</h1>
                    <hr />
                    <div className="property-info-box-2">
                        <div className="amnity-item">
                            Balcony
                        </div>
                        <div className="amnity-item">
                            Dishwasher
                        </div>
                        <div className="amnity-item">
                            Kitchen
                        </div>
                        <div className="amnity-item">
                            Porch
                        </div>
                        <div className="amnity-item">
                            Refrigerator
                        </div>
                        <div className="amnity-item">
                            Patio
                        </div>
                    </div>
                </div>

            </div>
            <div className="property-action-items">
                <Button variant="contained" style={{width: '225px', height: '80px', margin:"5px" }} onClick={() => changeDisplayStyle("view")}>
                    Contact Agent <FaPhone style={{fontSize:'25px', paddingBottom:'4px', paddingLeft:'5px'}}/>
                </Button>
                <Button variant="contained" style={{width: '225px', height: '80px', margin:"5px" }} onClick={() => changeDisplayStyle2("view")}>
                    Schedule a tour <FaWalking style={{fontSize:'25px', paddingBottom:'4px', paddingLeft:'5px'}}/>
                </Button>
            </div>
            <CustomModal icon="comment" modalWidth="w-50percent" displayStyle={displayModal} title="Ask a question about this property." subtitle="Let us know what you need and we'll be right back to you." changeDisplayStyle={changeDisplayStyle}>
                  <div>
                          {/* <form> */}
                              {/* <label for="username">Name: </label> */}
                              <input className="m-bottom20" type="text" id="name" name="name" defaultValue={"Test Name"}></input><br></br>
                              {/* <label for="tagline">Email: </label> */}
                              <input className="m-bottom20" type="text" id="email" name="email" defaultValue={"testemail@gmail.com"}></input><br></br>
                              {/* <label for="desc">Phone: </label> */}
                              <input className="m-bottom20" type="text" id="phone" name="phone" placeholder="Phone (optional)"></input><br></br>
                              <textarea className="m-bottom20" type="text" id="comment" name="comment" placeholder="Comments" rows="2"></textarea><br></br>
                              <div className="center">
                                <button name="send" onClick={submitQuestion} className="p-10 btnHover">SEND</button>
                              </div>
                          {/* </form> */}
                    </div>
            </CustomModal>
            <AgentDescription selectedRealtor={props.selectedRealtor}/>
            <CustomModal icon="calendar" modalWidth="w-50percent" displayStyle={displayModal2} title="Request a tour of this property." subtitle="We can also show other properties that might be a good fit for you." changeDisplayStyle={changeDisplayStyle2}>
                  <div>
                          {/* <form> */}
                              {/* <label for="username">Name: </label> */}
                              <input className="m-bottom20" type="text" id="name" name="name" defaultValue={"Test Name"}></input><br></br>
                              {/* <label for="tagline">Email: </label> */}
                              <input className="m-bottom20" type="text" id="email" name="email" defaultValue={"testemail@gmail.com"}></input><br></br>
                              {/* <label for="desc">Phone: </label> */}
                              <input className="m-bottom20" type="text" id="phone" name="phone" placeholder="Phone (optional)"></input><br></br>
                              <label>Time preference for tour? </label>
                              <div class="checkbox-block-group">
                                <div className="checkbox-block">
                                    {/* <!--checkbox 1--> */}
                                    <input className="checkbox-effect checkbox-effect-2" id="weekday" type="radio" value="weekday" name="day"/>
                                    <label for="weekday">Weekday</label>
                                    {/* <!--checkbox 2--> */}
                                    <input className="checkbox-effect checkbox-effect-2" id="weekend" type="radio" value="weekend" name="day"/>
                                    <label for="weekend">Weekend</label>
                                </div>
                                <div className="checkbox-block">
                                    {/* <!--checkbox 1--> */}
                                    <input className="checkbox-effect checkbox-effect-2" id="mornings" type="radio" value="mornings" name="time"/>
                                    <label for="mornings">Mornings</label>
                                    {/* <!--checkbox 2--> */}
                                    <input className="checkbox-effect checkbox-effect-2" id="afternoons" type="radio" value="afternoons" name="time"/>
                                    <label for="afternoons">Afternoons</label>
                                    {/* <!--checkbox 3--> */}
                                    <input className="checkbox-effect checkbox-effect-2" id="evenings" type="radio" value="evenings" name="time"/>
                                    <label for="evenings">Evenings</label>
                                </div>
                              </div>
                              <textarea className="m-bottom20" type="text" id="comment" name="comment" placeholder="Comments" rows="2"></textarea><br></br>
                              <div className="center">
                                <button name="send" onClick={scheduleTour} className="p-10 btnHover">SEND</button>
                              </div>
                          {/* </form> */}
                    </div>
            </CustomModal>
            {/* <AgentDescription/> */}
        </div>
    )
}

export default PropertyDetails;