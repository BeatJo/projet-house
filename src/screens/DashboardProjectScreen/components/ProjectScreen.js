import React, { useState } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { AiOutlineEdit } from "react-icons/ai";
import { Container } from "../../../components";
import image1 from "../../../assets/img/allgreen.png";
import { DashContainer, RightSide } from "./"
import { projectsData } from '../../../data/homeData';

const ProjectScreen = ({match}) => {
    const {params: {id}} = match;
    const item = projectsData[id];

    const [rightSide, setRightSide] = useState("/yourProject");

    function SetRightSide(page) {
        setRightSide(page)
    }

    const SideMenu = () => {
        return(
            <div>
                <Navigation
                    // you can use your own router's api to get pathname
                    activeItemId={rightSide}
                    onSelect={({itemId}) => {
                        if (itemId !== '/info')
                        SetRightSide(itemId)
                    }}
                    
                    items={[
                    {
                        title: 'Informations sur le projet',
                        itemId: '/info',
                        subNav: [
                            {
                                title: 'Infornations personnelles',
                                itemId: '/personal',
                            },
                            {
                                title: 'Votre projet',
                                itemId: '/yourProject',
                            },
                            {
                                title: 'Vos documents',
                                itemId: '/documents'
                            }
                        ]
                    },
                    {
                        title: 'News',
                        itemId: '/news',
                    },
                    {
                        title: 'Mes investissements',
                        itemId: '/invest',
                    },
                    ]}
                />
            </div>
        )
    }
    return (
        <Container sideBar active="Projects">
            <div className="projects-top" style={{backgroundImage: `url(${item.image})`}}>
                <AiOutlineEdit fill="white" style={{cursor: 'pointer', position: 'absolute', right: 10, top: 10, zIndex: 2}} size={30} />
                <div className="search-bar-container" >
                <h1 style={{zIndex:1, color: 'white', fontFamily: "building", fontSize:60}}>{item.title}</h1>
                </div>
                <img src={image1} className="logo-top-project" />
            </div>
            <DashContainer leftSide={<SideMenu />} rightSide={<RightSide form={rightSide} item={item} />} />
        </Container>
    )
}

export default ProjectScreen;