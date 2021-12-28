import React, { useState } from 'react';
import './PropertyDetails.scss';
import image_1 from '../../assets/images/temp.jpeg';
import Button from '@mui/material/Button';
import { FaQuestionCircle, FaWalking, FaPhone } from 'react-icons/fa';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import AgentDescription from '../Agents/AgentDescription/AgentDescription';

const PropertyDetails = (props) => {
    const [current, setCurrent] = useState(0);

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
                <Button variant="contained" style={{width: '225px', height: '80px', margin:"5px" }}>
                    Contact Agent <FaPhone style={{fontSize:'25px', paddingBottom:'4px', paddingLeft:'5px'}}/>
                </Button>
                <Button variant="contained" style={{width: '225px', height: '80px', margin:"5px" }}>
                    Schedule a tour <FaWalking style={{fontSize:'25px', paddingBottom:'4px', paddingLeft:'5px'}}/>
                </Button>
            </div>
            <AgentDescription/>
        </div>
    )
}

export default PropertyDetails;