import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { sectionAct } from '../../data/projectsData';
import { BiPlusMedical } from 'react-icons/bi'
import '../../styles/Dashboard.css';
import { projectsData } from '../../data/homeData';

const DashboardProjectScreen = () => {
    return (
        <Container sideBar active="Projects">
            <div className="dash-projects-grid-container">
                {projectsData.map((item, index) => (
                <article key={index} className="dash-project">
                   <Link to={`/Dashboard/Projects/${index}/${item.title}`} className="dash-project-image">
                    <img src={item.image} className="dash-img-project" />
                   </Link>
                    <p style={{textAlign: 'center'}}>{item.title}</p>
                </article>
                ))}
                <article className="dash-project">
                    <div className="dash-project-image">
                    <Link to={`/Projects/`} style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <BiPlusMedical size={30} fill='grey' style={{alignSelf: 'center'}} />
                    </Link>
                    </div>
                    <Link className="dash-project-title" to={``}>
                        Creer un projet    
                    </Link>
                </article>
            </div>
        </Container>
    )
}

export default DashboardProjectScreen;