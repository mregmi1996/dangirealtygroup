import React, { useEffect, useState } from 'react'
import './HomescreenPane.scss';
import img1 from '../../assets/images/realty-image-1.jpeg';
import img2 from '../../assets/images/realty-image-2.jpeg';
import img3 from '../../assets/images/realty-image-3.jpeg';
import Searchbox from './Searchbox/Searchbox';
// import { useStateValue } from '../../../Store/StateProvider';


const HomescreenPane=(props)=> {

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

    useEffect(() => {

        rollImages();

    }, [])

    return (
        <div className="main-body-layout">
            <div className="htitle">
                    <div className="subtitle">
                        Search For A Property:
                    </div>
                    <Searchbox/>
                </div>
            <div>
                <div className="main-container-hero" style={{ backgroundImage: `url(${img})` }} />
            </div>
        </div>
    )
}

export default HomescreenPane;
