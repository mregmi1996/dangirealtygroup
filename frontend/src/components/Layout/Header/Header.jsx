import headerLogo from '../../../assets/images/header_logo.png';
import { useNavigate } from 'react-router-dom';
import './Header.scss';


const Header = () => {
    const navigate = useNavigate();
    const buyClickHandler = ()=>{
        navigate("/buy");
    }
    const sellClickHandler = ()=>{
        navigate("/sell");
    }
    const agentsClickHandler=()=>{
        navigate("/agents");
    }
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
                <li className="header-li"><a>Join Us!</a></li>
            </ul>
            </div>
            <div className="login">
                <button className="custom-button">LogIn/SignUp</button>
            </div>
        </div>    
    )
}

export default Header
