import '../../../styles/Projects.css'

import * as React from 'react';
import { ButtonRadius, Container } from '../../../components';
import { sectionAct } from '../../../data/projectsData';

const SectionPage = ({match, location}) => {

  const {params: {sectionId}} = match;
  const item = sectionAct[sectionId];

  const [project, setProject] = React.useState(item.projects[0])

  return ( 
    <Container header footer headerActive active="Projects"> 
      <div className="projects-top" style={{backgroundImage: `url(${item.image})`}}>
        <div className="search-bar-container" >
          <h1 style={{zIndex:1, color: 'white', fontFamily: "building", fontSize:60}}>{item.name}</h1>
        </div>
      </div>
      <div>
        <p style={{marginLeft:40}}>Nos secteurs d'activites -{'>'} {item.name}</p>
        <div className="section-grid-container">
          <div className="grid-project-container">
            {item.projects.map((item, index) => (
              <article key={index} className="location-project-component" onClick={() => setProject(item)}>
                <div className={project.country === item.country ? "location-project-title location-project-title-active" : "location-project-title"} to={`/Projects/${index}/${item.name}`}>
                    {item.country}           
                </div>
                <div className="location-project-image">
                  <div to={`/Projects/${index}/${item.name}`}>
                    <img className="img-project" src={item.image} />    
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="section-right-side">
            <h1 style={{marginTop:0}} >{project.country} :</h1>
            <p>{project.content}</p>
            <h1>Vous pouvez investir dans ces villes :</h1>
            <div>
              {project.towns.map((item, index) => (
                <ButtonRadius title={item.name} path={`${location.pathname}/${index}`} borderColor="grey" fontColor="black" fontSize={24} color='rgb(189, 187, 187)' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default SectionPage;