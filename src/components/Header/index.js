import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logoWhite.png';
import '../../styles/Header.css';
import ButtonRadius from '../ButtonRadius';
import flag_uk from '../../assets/img/Flag_uk.png'
import flag_fr from '../../assets/img/Flag_fr.png'

const Header = ({headerActive, active}) => {
  const [color, setColor] = useState(false)
  const [language, setLanguage] = useState("fr")
  const changeBackgroundColor = () => {
    if (headerActive) {
      setColor(true)
    }else if(window.scrollY >= 66){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const location = useLocation();

  useEffect(() => {
    changeBackgroundColor()
    window.addEventListener("scroll", changeBackgroundColor)
  })
  return ( 
    <nav className={color ? "headerActive" : "header"}>
      <div className="nav-menu">
        <div className="logo">
          <img src={logo} className="img-logo"></img>
        </div>
        <div className="head-menu">
          <Link className={active === 'Accueil' ? "header-link header-link-active" : "header-link"} to="/">Accueil</Link>
          <Link className={active === 'AboutUs' ? "header-link header-link-active" : "header-link"} to="/">Qui Sommes Nous?</Link>
          <Link className={active === 'Projects' ? "header-link header-link-active" : "header-link"} to="/Projects">Projets</Link>
          <Link className={active === 'Events' ? "header-link header-link-active" : "header-link"} to="/">Évenements</Link>
          <Link className={active === 'Contact' ? "header-link header-link-active" : "header-link"} to="/">Contact</Link>
          {language === "fr" ? <img className="flag-language" src={flag_fr} /> : <img className="flag-language" src={flag_uk} />}
          <select onChange={(value) => setLanguage(value.target.value)} className="header-link" style={{outline: 'none', backgroundColor: 'transparent', color: 'white', border: 'none', marginTop: -8}}>
            <option className="select-items" value="fr">Fr</option>
            <option className="select-items" value="eng">Eng</option>
          </select>
        </div>
      </div>
      <div className="nav-connect">
        <ButtonRadius title="Lancer mon Projet !" path="/Login" borderColor={color ? "white" : '#c5473b'} fontColor="white" />
        <Link className="header-link" to="/Login">Connexion</Link>
      </div>
    </nav>
   );
}
 
export default Header;