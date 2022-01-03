import React from 'react';
import './SellScreen.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import ListCards from '../ListCards/ListCards';
import ActionAreaCard from '../ComponentCard/ComponenetCard';
import Searchbox from '../Searchbox/Searchbox';

const SellScreen = () => {

    const options = ["Yes", "No"];

    const submitSellingInfo = () => {

    }

    return (
        <div>
            <div className="sell-container">
                <div className="searchbox">
                </div>
            </div>
            <div className="sell-form-container">
                <h2>Get a Free Home Valuation Estimate</h2>
                <div className="sell-form">
                    <div className="w-49percent">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName"/>
                    </div>
                    <div className="w-49percent">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName"/>
                    </div>
                    <div className="w-49percent">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber"/>
                    </div>
                    <div className="w-49percent">
                        <label for="emailId">Email</label>
                        <input type="email" id="emailId" name="emailId"/>
                    </div>
                    <div className="w-49percent">
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address"/>
                    </div>
                    <div className="w-49percent">
                        <label for="address2">Address (Line 2)</label>
                        <input type="text" id="address2" name="address2"/>
                    </div>
                    <div className="w-49percent">
                        <label for="city">City</label>
                        <input type="text" id="city" name="city"/>
                    </div>
                    <div className="w-30percent">
                        <label for="zipCode">Zip (Postal code)</label>
                        <input type="text" id="zipCode" name="zipCode"/>
                    </div>
                    <div className="w-19percent">
                        <label for="state">State / Province</label>
                        <input type="text" id="state" name="state"/>
                    </div>
                    <div className="w-100percent">
                        <label for="Country">Country</label>
                        <input type="text" id="country" name="country"/>
                    </div>
                    <div className="w-49percent">
                        <label>Upload Images</label>
                        <input type="file" id="img" name="img" accept="image/*" multiple/>
                    </div>
                    <div className="w-49percent">
                        <label for="sellingTimeframe">Preferred Selling Timeframe</label>
                        <input type="text" id="sellingTimeframe" name="sellingTimeframe"/>
                    </div>
                    <div className="w-100percent">
                        <label for="message">Message / Comments</label>
                        <textarea type="text" id="message" name="message" rows="5"></textarea><br></br>
                    </div>
                    <div className="w-100percent center m-bottom20">
                        <CustomDropdown title="Are you already working with an agent?" datalist={options}
                                    multiple={false}></CustomDropdown>
                    </div>
                    <div className="w-100percent center m-bottom20">
                        <button name="submit" onClick={submitSellingInfo} className="p-10 btnHover">Sumbit</button>
                    </div>
                </div>
            </div>
            {/* <ListCards text="Our Listings:"/> */}
        </div>
    )
}

export default SellScreen;