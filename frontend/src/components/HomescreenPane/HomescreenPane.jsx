import React, { useEffect, useState } from 'react'
import './HomescreenPane.scss';
import img1 from '../../assets/images/realty-image-1.jpeg';
import img2 from '../../assets/images/realty-image-2.jpeg';
import img3 from '../../assets/images/realty-image-3.jpeg';
import Searchbox from '../Searchbox/Searchbox';
import Aboutus from './Aboutus/Aboutus';
import HomepageCards from './HomepageaCards/HomepageCards';
import buyAHouse from '../../assets/images/buy-a-house.jpeg'; 
import sellAHouse from '../../assets/images/sell-a-house.jpeg';
import talkToAgent from '../../assets/images/talk-to-agent.jpeg';
import JoinUs from './JoinUs/JoinUs';
// import { useStateValue } from '../../../Store/StateProvider';


const HomescreenPane = (props) => {

    const [img, setimg] = useState(img1);

    const rollImages = () => {
        setInterval(() => {
            setimg(img2);
        }, 5000);

        setInterval(() => {
            setimg(img3);
        }, 12000);

        setInterval(() => {
            setimg(img1);
        }, 10000);
    }

    const buyAProperty="Buying a home is one of the most important decisions you will make, and our local experts at eXp Realty are here to make the process as easy as possible.";
    const sellAProperty="Selling your home can feel like a big project, but our agents are ready to make every step of the journey as smooth as possible. Let an eXp agent be your guide to selling your home like a pro.";
    const talkToARealtor="Whether you are looking to buy, sell or rent, our experienced and passionate agents are on hand to help make it happen. Find the perfect agent for your needs below.";
    const cardStyle = {
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '45vw'
    }

    useEffect(() => {

        rollImages();

    }, [])

    return (
        <div>
            <div className="main-body-layout">
                <div className="htitle">
                    <div className="subtitle">
                        Search For A Property:
                    </div>
                    <Searchbox address={props.address} />
                </div>
                <div>
                    <div className="main-container-hero" style={{ backgroundImage: `url(${img})` }} />
                </div>

            </div>
            <Aboutus className="aboutus" />
            <div className="options">
                <HomepageCards image={buyAHouse} title="Buy A Property" typography={buyAProperty} className="options-card"/>
                <HomepageCards image={sellAHouse} title="Sell A Property" typography={sellAProperty} className="options-card"/>
                <HomepageCards image={talkToAgent} title="Talk To A Realtor" typography={talkToARealtor} className="options-card"/>
            </div>
            <div className="join-us-today">
                <JoinUs />
            </div>

        </div>
    )
}

export default HomescreenPane;
