import React from 'react';
import {Link,} from 'react-router-dom'
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import logo from '../../assets/loggo.png'
import {useTranslation} from "react-i18next";
// import {GoHome} from 'react-icons/go';
// import LanguageButton from "../LanguageButton";
// import {BsThreeDots} from "react-icons/bs"
import LanguageChangeButtonForDesktop from "../LanguageChangeButtonForDesktop";

function Navbar() {
    // const [sidebar, setSidebar] = useState(false);
    const {t} = useTranslation();

    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <LanguageChangeButtonForDesktop/>
            <Link to='/'>
                <img src={logo} alt="logo" className='logo'/>
            </Link>
            <ul className="containers">
                {SidebarData.map((item, index) => {
                    return <li key={index} className={item.aName}>
                        <Link to={item.path} onClick={() => {
                            document.getElementById('footer_id').style = 'display:none';
                        }}>
                            <span>{t(`${item.title}`)}</span>
                        </Link>
                    </li>
                })}
            </ul>
            <IconContext.Provider value={{color: '#333'}}>
                <ul className="mobile-navigation-bar-list">
                    {SidebarData.map((item, index) => {
                        return <li>
                            <Link to={item.path} key={index} onClick={() => {
                                document.getElementById('footer_id').style = 'display:none';
                            }}>
                                <span className="span-nav-list-icon">{item.icon}</span>
                                <span className="span-nav-list"> {t(`${item.title}`)}</span>
                            </Link>
                        </li>
                    })
                    }
                    {/*<li>*/}
                    {/*    <LanguageButton style={{width: "50px", height: "50px"}}/>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to='/'>*/}
                    {/*        <GoHome style={{width: "60px", height: "70px",}}/>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <Link to='#'>*/}
                    {/*        <BsThreeDots onClick={showSidebar} style={{width: "60px", height: "70px"}}/>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
                {/*<div className={sidebar ? 'blure' : "disabled"} onClick={showSidebar}>*/}
                {/*    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>*/}
                {/*        <ul className='nav-menu-items' onClick={showSidebar}>*/}
                {/*            <ul>*/}
                {/*                {SidebarData.map((item, index) => {*/}
                {/*                    return (*/}
                {/*                        <li key={index} className={item.cName}>*/}
                {/*                            <Link to={item.path}>*/}
                {/*                                <span className="span-nav-list">{item.icon}</span>*/}
                {/*                                <span className="span-nav-list"> {item.title}</span>*/}
                {/*                            </Link>*/}
                {/*                        </li>*/}
                {/*                    );*/}
                {/*                })}*/}
                {/*            </ul>*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</div>*/}
            </IconContext.Provider>
        </>
    );
}

export default Navbar;