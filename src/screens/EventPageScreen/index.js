import { Container } from '../../components';
import sora from '../../assets/img/sora.png';
import engi from '../../assets/img/engi.png';
import expert3 from '../../assets/img/expert3.png';
import expert4 from '../../assets/img/expert4.png';
import '../../styles/Events.css';
import { eventsData } from '../../data/eventsData';
import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, FormControl, FormControlLabel, LinearProgress, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { BsBookmarkFill } from 'react-icons/bs';
import Popup from 'reactjs-popup';
import { BiArrowBack } from 'react-icons/bi';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const EventPageScreen = ({match}) => {
  const {params: {id}} = match;
  const item = eventsData[id];

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return ( 
    <Container header headerActive active="Events" footer>
      <div 
        style={{height: '65vh'}}>
            <img src={item.picture} className='event-top-image' />
      </div>
      <Box sx={{
        m: 10,
        border: 'solid',
        borderColor: '#585b60',
        borderWidth: 1,
        mt: -30,
        backgroundColor: 'white',
      }}>
          <Box style={{
            display: 'flex', 
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            zIndex:50
          }}>
            <Box style={{flex: 1, zIndex:50}}>
              <img src={item.picture} />
            </Box>
            <Box style={{
              flex: 1,
              display: 'flex', 
              flexDirection: 'column', 
              padding: 100,
              paddingTop: 70,
              backgroundColor: 'white',
              zIndex:50
              }}>
              <Box style={{display: 'flex', justifyContent: 'space-between', fontSize: 25, fontFamily: 'building'}}>
                <div style={{flex: 2}}>{item.name}</div>
                <div style={{flex: 1, justifyContent: 'flex-end', display: 'flex'}}><BsBookmarkFill fill='#c5473b' size={30} /></div>
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
              <div style={{margin: 0}} onClick={handleClickOpen} className="events-hover-button">
                  Participer
              </div>
                <Dialog
                  fullScreen={fullScreen}
                  fullWidth={true}
                  maxWidth={'lg'}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogContent 
                  sx={{padding: 0}}>
                  <Box style={{
                          display: 'flex', 
                          justifyContent: 'flex-start',
                        }}>
                          <Box style={{display: 'flex', flexDirection: 'column', flex: 5, paddingTop: 25, paddingLeft: 25, paddingRight: 50}}>
                            <BiArrowBack style={{cursor: 'pointer'}} fill="#c5473b" size={25} onClick={handleClose} />
                          <div style={{marginTop : 20, marginBottom: 15, textAlign: 'center', fontFamily: 'building', fontSize: 25}}>Informations personnelles</div>
                          <Box
                              component="form"
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TextField
                                  id="name"
                                  label="Votre nom"
                                  variant="standard"
                              />
                              <TextField
                                  id="tel"
                                  label="Numero de telephone"
                                  variant="standard"
                              />
                              <TextField
                                  id="email"
                                  label="Email"
                                  variant="standard"
                              />
                            </Box>
                          <div style={{marginTop : 20, marginBottom: 15, textAlign: 'center', fontFamily: 'building', fontSize: 25}}>Paiement</div>
                          <FormControl component="fieldset">
                            <RadioGroup row aria-label="payement" name="row-radio-buttons-group" sx={{
                                alignSelf: 'center'
                              }}>
                              <FormControlLabel value="om" control={<Radio />} label="OM" />
                              <FormControlLabel value="momo" control={<Radio />} label="MOMO" />
                              <FormControlLabel value="card" control={<Radio />} label="Visa/ Master Card" />
                            </RadioGroup>
                          </FormControl>
                          <TextField
                              id="numero"
                              label="Numero de telephone"
                          />
                          <div style={{margin: 30, alignSelf: 'center', paddingLeft:40, paddingRight:40,}} className="events-hover-button">
                              OK
                        </div>
                          </Box>
                          <Box style={{
                            flex: 3,
                            display: 'flex', 
                            flexDirection: 'column',
                            }}>
                            <img src={item.picture} width="100%" />
                            <div style={{marginTop : 20, marginBottom: 15, fontFamily: 'building', fontSize: 25}}>{item.name}</div>
                            <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            </p> 
                            <div style={{
                                display: 'flex',
                                alignItems: 'center' ,
                                width: '100%'
                            }}>
                              <Select
                                id="demo-simple-select"
                                value={1}
                              >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                              </Select>
                              <div style={{fontSize: 20, fontWeight: 'bold', marginLeft:10}}>Total: 0XAF</div>
                            </div>
                          </Box>
                      </Box>
                  </DialogContent>
                </Dialog>
              </div>
            </Box>
          </Box>
          <Box style={{
            display: 'flex', 
            justifyContent: 'flex-start'
          }}>
            <Box style={{display: 'flex', flexDirection: 'column', flex: 5, paddingLeft: 25, paddingRight: 25}}>
              <div style={{marginTop : 20, marginBottom: 15, textAlign: 'center', fontFamily: 'building', fontSize: 35}}>A propos</div>
              <p style={{fontSize: 20}}>{item.content}</p>
              <img src={sora} width={'50%'} style={{marginBottom:20}} />
              <img src={engi} width={'50%'} style={{marginBottom:20}} />
            </Box>
            <Box style={{
              flex: 3,
              display: 'flex', 
              flexDirection: 'column',
              paddingRight: 25,
              paddingLeft: 25 
              }}>
              <div style={{marginTop : 20, marginBottom: 15, textAlign: 'center', fontFamily: 'building', fontSize: 25}}>Planning</div>
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 2}}>
                12H00-12H30
                </div>
                <div style={{flex: 4}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                </div> 
              </Box> 
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 2}}>
                12H35-13H00
                </div>
                <div style={{flex: 4}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                </div> 
              </Box> 
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 2}}>
                13H05-14H00
                </div>
                <div style={{flex: 4}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                </div> 
              </Box> 
              <div style={{marginTop : 20, marginBottom: 15, textAlign: 'center', fontFamily: 'building', fontSize: 25}}>Intervenants</div>
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 2}}>
                  <img src={expert4} width={'80%'} style={{marginBottom:20}} />
                </div>
                <div style={{flex: 4}}>
                <div style={{fontFamily: 'building', fontSize: 25}}>Nom et prenom</div>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </div> 
              </Box> 
              <Box sx={{display: 'flex', my: 2}}>
                <div style={{flex: 2}}>
                  <img src={expert3} width={'80%'} style={{marginBottom:20}} />
                </div>
                <div style={{flex: 4}}>
                <div style={{fontFamily: 'building', fontSize: 25}}>Nom et prenom</div>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                </div> 
              </Box>
            </Box>
          </Box>
      </Box>
    </Container>
   );
}
 
export default EventPageScreen;