import headerLogo from '../images/header_logo.png';

const menuItems = [
    {
        label: 'Home',
        url : '/',
        hasSuheader: false,
    },
    {
        label: 'Properties',
        hasSuheader: true,
        submenu: [{
                id: '1',
                label: 'OUR LISTINGS',
                value: '/ourlistings/'
            },
            {
                id: '2',
                label: 'FEATURED PROPERTIES',
                value: '/featured/'
            },
            {
                id: '3',
                label: 'HOME VALUATION',
                value: '/home-valuation/'
            }]
        
    },
    {
        label: 'About Us',
        hasSuheader: true,
        submenu: [{
                id: '1',
                label: 'ABOUT US',
                value: '/about-us/'
            },
            {
                id: '2',
                label: 'CONTACT',
                value: '/contact/'
        }]
        
    },
    {
        label: 'Submit property',
        hasSuheader: false,
        hasIcon: true,
        iconUrl: '',
        url : '/'
    },
]

const Header = () => {
    return (
        <header>
            <div style={styles.header_wrapper}>
                <div style={styles.header_wrapper_logo}>
                    <a href="/"><img src={headerLogo}/></a>
                </div>
                <div style={styles.header_wrapper_nav}>
                    <ul>
                    {menuItems.map((item)=> (
                        <li key={item.id}>
                           {!item.hasSuheader} {
                               <a href={item.url}><li>{item.label}</li></a>
                           }
                           {item.hasSuheader} {
                               <ul>
                                   {item.submenu?.map((mitem)=> {
                                    <a href={mitem.url}><li>{mitem.label}</li></a>
                                   })}
                               </ul>
                           }
                        </li>
                    ))}
                    </ul>
                </div>
            </div>    
        </header>
    )
}

const styles= {
    header_wrapper:{
        padding: '24px 40px',
        boxShadow: '0 2px 10px 0 rgb(237 237 237 / 60%)',
    }
}

export default Header
