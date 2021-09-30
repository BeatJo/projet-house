import { ButtonCustom, Container } from '../../components';
import '../../styles/Register.css';
import event from '../../assets/img/events.png';
import ene from '../../assets/img/ene.png';
import image1 from '../../assets/img/imag22.png';
import image2 from '../../assets/img/imag28.png';
import image3 from '../../assets/img/imag27.png';
import logo from '../../assets/img/logo.png';
import ButtonRadius from '../../components/ButtonRadius';
import '../../styles/Events.css';
import { eventsData } from '../../data/eventsData';
import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, LinearProgress } from '@mui/material';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { TiCalendar } from 'react-icons/ti';

const EventScreen = () => {
  return ( 
    <Container header active="Events" footer>
      <div 
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          color: 'white',
          backgroundImage: `url(${event})`}}>
          <h1>Title of project or category presentation</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <ButtonRadius title="Voir les evenements" borderColor= '#c5473b' fontColor="white" />
      </div>
      
      <div  style={{
        padding: 50, }}>
          <div  style={{
            display: 'flex', 
            alignItems: 'center', 
            padding: 50,
            border: 'solid',
            borderWidth: 1,
            borderColor: 'grey' }}>
            <div style={{flex: 1}}>
              <p style={{marginBottom:10, fontFamily: 'building', fontSize:50, paddingRight:20}}>
                Creez votre reseau d'affaire en prenant part nos sessions. 
              </p>
              <h3 style={{margin:0, paddingRight:20}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
              </h3>
            </div>
            <div style={{flex: 1}}>
              <img src={ene} width={'100%'} />
            </div>
          </div>
      </div>

      <div>
        <div className="title-events">
          Ce Mois
        </div>
        <div class="container-gallery">
        <div className="gallery">
          <figure className='gallery__item gallery__item--1'>
            <img src={image1} className="gallery__img" alt="Image 1" />
            <div className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
              <Box className="button-price-events-component">0 XAF</Box>
              <Box className="button-free-events-component">Gratuit</Box>
              <Box className="button-bookmark-events-component"><BsBookmarkFill fill='#c5473b' size={20} /></Box>
            </div>        
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={image2} className="gallery__img" alt="Image 2" />
            <div className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
            </div>  
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={image3} className="gallery__img" alt="Image 3" />
            <div style={{fontSize: 12}} className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur 
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
            </div> 
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={image3} className="gallery__img" alt="Image 4" />
            <div style={{fontSize: 12}} className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
            </div> 
          </figure>
        </div>
        </div>
      </div>

      <div>
        <div className="title-events">
          Autres evenements
        </div>
        <div className="events-grid"> 
          {eventsData.map((item, index) => (
            <div key={index} className="events-grid-component">
              <Box sx={{width: '100%', position: 'relative'}}>
                <img src={item.picture} width='100%' style={{borderRadius: 10}} />
                <Box className="button-price-events-component">{item.price} XAF</Box>
                <Box className="button-free-events-component">{item.free ? 'Gratuit' : 'Payant'}</Box>
                <Box className="button-bookmark-events-component">{item.bookmark ? <BsBookmarkFill fill='#c5473b' size={20} /> : <BsBookmark fill='#c5473b' size={20} /> }</Box>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center', fontSize: 12}}>
                <p>par</p>
                <img src={logo} width={50} />
                <p>INVEST AND PARTNERS</p>
              </Box> 
              <Box style={{fontSize: 35, fontFamily: 'building'}}>
                {item.name}
              </Box> 
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 2}}>
                  <GoCalendar fill="grey" size={25} />
                </div>
                <div style={{flex: 6, display: 'flex', flexDirection: 'column'}}>
                  <span>DU</span>
                  <span>{item.debut}</span>
                  08H00-14H00
                </div> 
                <div style={{flex: 6, display: 'flex', flexDirection: 'column'}}>
                  <span>AU</span>
                  <span>{item.fin}</span>
                  08H00-14H00
                </div> 
              </Box> 
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 1}}>
                  <GoLocation fill="grey" size={25} />
                </div>
                <div style={{flex: 6, display: 'flex', flexDirection: 'column'}}>
                  <span>Lieu</span>
                  <span>{item.location}</span>
                </div> 
              </Box> 
              <Box sx={{ mb: 5}}>
                <Box sx={{ my: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey'}}><div>Nombre de places</div><div>{item.places}</div></div>
                  <LinearProgress sx={{width: '100%'}} variant="determinate" value={(item.places * 100)/ item.places} />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey'}}><div>Places restantes</div><div>{item.remaining}</div></div>
                  <LinearProgress sx={{width: '100%'}} variant="determinate" value={100-((item.remaining * 100)/ item.places)} />
                </Box>
              </Box> 
              <div>
                
              </div> 
            </div>
          ))}
        </div>
      </div>
    </Container>
   );
}
 
export default EventScreen;