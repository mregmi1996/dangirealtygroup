import React from 'react';
import Header from './Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss'

function Layout(props){
    return(
        <div className="main-layout">
            <Header/>
                {props.component}
            <Footer />
        </div>
    )
}
export default Layout