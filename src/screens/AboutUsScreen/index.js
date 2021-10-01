import { ButtonCustom, Container } from '../../components';
import '../../styles/AboutUs.css';
import rebrand from '../../assets/img/rebrand.png';
import engi from '../../assets/img/engi.png';
import expert3 from '../../assets/img/expert3.png';
import expert4 from '../../assets/img/expert4.png';
import image3 from '../../assets/img/imag27.png';
import logo from '../../assets/img/logo.png';
import ButtonRadius from '../../components/ButtonRadius';
import { eventsData } from '../../data/eventsData';
import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, LinearProgress } from '@mui/material';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { TiCalendar } from 'react-icons/ti';

const AboutUsScreen = ({match}) => {
  return ( 
    <Container header footer headerActive active="AboutUs">
      <div style={{
            display: 'flex', 
            marginTop : 120,
          }}>
            <Box style={{flex: 1, padding: 60}}>
              <div style={{ marginBottom: 15, textAlign: 'center', fontFamily: 'building', fontSize: 35}}>Qui sommes-nous?</div>
              <h3 style={{fontSize: 20}}>Une plateforme panafricaine adéquate pour les investissements </h3>
              <p>L’Afrique en général et le Cameroun en particulier sont devenus au fil du temps, et plus encore au cours des trois dernières décennies, des espaces propices aux investissements de toute nature.</p>
              <p>Le cabinet INVEST & PARTNERS (I&P) se positionne désormais au Cameroun comme le conseiller par excellence dans cette démarche de capter les opportunités à capitaliser.</p>
              <p>Grâce au dynamisme et à l’expertise de nos spécialistes, notre connaissance parfaite de l’environnement économique, et notre réseau de partenaires, notamment en Cote d’Ivoire et au Rwanda, nous ne ménageons aucun effort dans  l’optique de répondre à vos différents besoins  en termes d’investissement, d’accompagnement, de diagnostic, de suivi, de gestion et d’implémentation.</p>
            </Box>
            <Box style={{
              flex: 1,
              paddingRight: 60,
              paddingLeft: 40 
              }}>
              <img src={rebrand} width={'100%'} style={{marginBottom:20}} />
            
          </Box>
      </div>
      <Box sx={{}}>
        <Box sx={{display: 'flex'}}>
e
        </Box>
        <Box>

        </Box>
      </Box>
    </Container>
   );
}
 
export default AboutUsScreen;