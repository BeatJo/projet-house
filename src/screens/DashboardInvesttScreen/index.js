import React from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { investData } from '../../data/projectsData';
import '../../styles/Dashboard.css';

const DashboardInvestScreen = () => {
    return (
        <Container sideBar active="Projects">
            <div className="dash-invest-grid-container">
                {investData.map((item, index) => (
                <Link to={`/Dashboard/Invest/${index}/${item.titleP}`} key={index} className="dash-invest">
                    <div className="dash-invest-left">
                        <p style={{fontFamily: 'building', fontSize:25, marginTop: 0, color: 'gray', marginBottom: 5, color: '#c5473b'}}>{item.titleP}</p> 
                        <div style={{borderTop: 'solid', borderTopWidth: 1, borderTopColor: '#c5473b', width:'30%', marginLeft: 3}}></div>
                        <p style={{display: 'flex', fontSize:15, margin: 2, color: 'black', marginTop: 10, fontWeight: 'bold'}}>Categorie: <div style={{color: '#c5473b', marginLeft: 5}}>{item.category}</div></p>
                        <p style={{display: 'flex', fontSize:15, margin: 2, color: 'black', fontWeight: 'bold'}}>Localité: <div style={{color: '#c5473b', marginLeft: 5}}>{item.location}</div></p>
                        <p style={{display: 'flex', fontSize:15, margin: 2, color: 'black', fontWeight: 'bold'}}>Taux de rentabilité: <div style={{color: '#c5473b', marginLeft: 5}}>{item.rentability}</div></p>
                        <p style={{display: 'flex', fontSize:15, margin: 2, color: 'black', fontWeight: 'bold'}}>CA prévisionnel: <div style={{color: '#c5473b', marginLeft: 5}}>{item.ca}</div></p>
                        <p style={{display: 'flex', fontSize:15, margin: 2, color: 'black', fontWeight: 'bold'}}>RSI: <div style={{color: '#c5473b', marginLeft: 5}}>{item.rsi}</div></p> 
                    </div>
                    <div className="dash-invest-right">
                        <AiOutlineBarChart fill='white' size={30} />
                        <p style={{fontSize:15, margin: 0, color: 'white'}}>20M FCFA</p> 
                        <p style={{fontSize:12, margin: 0, color: 'white'}}>Investissement</p> 
                    </div>
                </Link>
                ))}
            </div>
        </Container>
    )
}

export default DashboardInvestScreen;