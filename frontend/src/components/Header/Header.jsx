import headerLogo from '../../assets/images/header_logo.png';
import './Header.scss';


const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <a href="/"><img src={headerLogo}/></a>
            </div>
            <div>
            <ul>
                <li><a>Buy</a></li>
                <li><a>Sell</a></li>
                <li><a>Agents</a></li>
                <li><a>Join Us!</a></li>
            </ul>
            </div>
            <div className="login">
                <button className="custom-button">LogIn/SignUp</button>
            </div>
        </div>    
    )
}

export default Header
