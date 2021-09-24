import { Container } from '../../components';
import '../../styles/Projects.css'

import * as React from 'react';
import TitleCustom from '../HomeScreen/components/title';
import { Link } from 'react-router-dom';
import { sectionAct } from '../../data/projectsData';
import backgroundTop from '../../assets/img/ban.png'

const ProjectsScreen = () => {

  return ( 
    <Container header footer headerActive active="Projects"> 
      <div className="projects-top" style={{backgroundImage: `url(${backgroundTop})`}}>
        <div className="search-bar-container" >
          <h1 style={{zIndex:1000, color: 'white', fontFamily: "building", fontSize:60}}>LA MEILLEURE AFFAIRE S'OFFRE A VOUS</h1>
          <div className="search-bar">
            <input placeholder="Rechercher" className="projects-text-input" type="text" name="search" id="" />
            <select className="projects-input-button" type="button" value="OK">
              <option>Categories</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <TitleCustom title="NOS SECTEURS D'ACTIVITE" />
        <div className="grid-container">

          {sectionAct.map((item, index) => (
            <article key={index} className="location-listing">
              <Link className="location-title" to={`/Projects/${index}/${item.name}`}>
                  {item.name}           
              </Link>
              <div className="location-image">
                <Link to={`/Projects/${index}/${item.name}`}>
                  <img className="img-projects" src={item.image} />    
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
   );
}
 
export default ProjectsScreen;