import { AiOutlineHome, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../../styles/SideBar.css'

import logo from '../../assets/img/logoWhite.png';
import profile from '../../assets/img/profile.png'

const SideBar = ({active}) => {
    return (
        <>
            <div className="side-menu">
                <div className="side-logo">
                <img src={logo} style={{width: "20%"}} />
                <p>INVEST {'&'} PARTNERS</p>
                </div>
                <div className="side-links-menu">
                    <div className={active === 'Projects' ? "side-link side-link-active" : "side-link"}><AiOutlineHome fill="white" size={20} /><Link style={{textDecoration: 'none', color:"white"}} to="/Dashboard/Projects">Mes projets</Link></div>
                    <div className={active === 'Messages' ? "side-link side-link-active" : "side-link"}><AiOutlineMail fill="white" size={20} /><Link style={{textDecoration: 'none', color:"white"}} to="/Dashboard/Projects/Messages">Messagerie</Link></div>
                    <div className={active === 'Settings' ? "side-link side-link-active" : "side-link"}><AiOutlineSetting fill="white" size={20} /><Link style={{textDecoration: 'none', color:"white"}} to="/Dashboard/Projects/Settings">Paramètres</Link></div>
                </div>
            </div>
            <div className="block-connected">
                <div style={{display: 'flex'}}>
                    <img src={profile} style={{}} />
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10, marginRight: 15}}>
                        <p style={{margin: 0}}>Shawn Brooks</p>
                        <select className="select-connected">
                            <option>active</option>
                        </select>
                    </div>
                </div>
                <div style={{display: 'flex', width: "30%", justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <IoIosNotificationsOutline size={25} />
                        <div style={{backgroundColor: '#c5473b', width: 8, height: 8, borderRadius: 10}}></div>
                    </div>
                    <FiLogOut size={25} />
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default SideBar;