import { FormControlLabel, FormLabel, ImageList, ImageListItem, Radio, RadioGroup } from '@mui/material';
import { Box, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';

import logo from '../../../assets/img/logo.png'
import pdfLogo from '../../../assets/img/icons/pdf.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../../styles/Dashboard.css';
import { BiPlusMedical } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { newsData } from '../../../data/projectsData';
import { AiOutlineLike } from 'react-icons/ai';
import { GoFileDirectory } from 'react-icons/go';
import { IoArrowBack } from 'react-icons/io5';

const RightSide = ({form, item, index}) => {
    const InfoPersonal = () => {
        const otherData = [
            {
              img: pdfLogo,
              title: 'Breakfast',
            },
            {
              img: pdfLogo,
              title: 'Burger',
            },
            {
              img: pdfLogo,
              title: 'Camera',
            },
          ];

          const itemData = [
            {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
            },
          ];
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60ch' },
                }}
                noValidate
                autoComplete="on"
                >
                <FormControl component="text">
                    <TextField id="standard-basic" value={item.title} variant="standard" />
                </FormControl>
                <FormControl component="address" sx={{m: 2}}>
                    <TextField id="standard-basic" value={item.url} variant="standard" />
                </FormControl>
                <FormControl component="text">
                    <p style={{fontFamily: 'building', fontSize:25}}>Description de votre projet</p>
                    <TextField
                        label="250 caracteres"
                        multiline
                        rows={4}
                        defaultValue={item.content}
                    />
                </FormControl>
                <FormControl component="fieldset" style={{marginTop: 20}}>
                    <FormLabel component="legend" style={{fontFamily: 'building', fontSize:25, color: 'black'}}>Niveau d'evolution du projet</FormLabel>
                    <RadioGroup row aria-label="niveau d'evolution du projet" value={item.statut} name="row-radio-buttons-group">
                        <FormControlLabel value="idee" control={<Radio />} label="Idée" />
                        <FormControlLabel value="prototype" control={<Radio />} label="Prototype" />
                        <FormControlLabel value="marche" control={<Radio />} label="Sur le marché" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" style={{marginTop: 20}}>
                    <FormLabel component="legend" style={{fontFamily: 'building', fontSize:25, color: 'black'}}>Quel est votre role dans le projet ?</FormLabel>
                    <RadioGroup row aria-label="quel es t votre role dans le projet" name="row-radio-buttons-group">
                        <FormControlLabel value="fondateur" control={<Radio />} label="Fondateur" />
                        <FormControlLabel value="co-fondateur" control={<Radio />} label="Co-fondateur" />
                        <FormControlLabel value="employe" control={<Radio />} label="Employé" />
                    </RadioGroup>
                </FormControl>
                <p style={{fontFamily: 'building', fontSize:25, marginTop: 20}}>Logo</p>
                <img src={logo} style={{width:150, cursor: 'pointer'}}/>
                <p style={{fontFamily: 'building', fontSize:25}}>Medias</p>
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} gap={10}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{width:150, height:'auto', objectFit: 'contain', cursor: 'pointer'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <p style={{fontFamily: 'building', fontSize:25}}>Autres fichiers</p>
                <ImageList sx={{ width: 500, height: 450 }} rowHeight={164} gap={50} cols={8}>
                    {otherData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{width:50, height:'auto', objectFit: 'contain', cursor: 'pointer'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        )
    }

    const News = () => {
        return (
            <div style={{width: "100%"}}>
                <p style={{fontFamily: 'building', fontSize:25}}>Ajouter une actualite pour ce project</p>
                <Link style={{display: 'flex', justifyContent: 'center', borderRadius:30, height:80, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.1'}} className="dash-img-project">
                    <BiPlusMedical size={30} fill='grey' />
                </Link>
                <p style={{fontFamily: 'building', fontSize:25}}>Toute votre actualite</p>
                {newsData.map((item, index) => (
                    <div key={index} className="news-container">
                        <div className="header-news-container">
                            <div style={{width: 35, height: 35, border: 'solid', borderWidth:1, borderRadius:80}}></div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{color: '#c5473b'}}>{item.titleP}</div>
                                <div style={{fontSize:15, color: 'gray'}}>{item.date} | {item.hour}</div>
                            </div>
                        </div>
                        <p style={{fontFamily: 'building', fontSize:18, color: 'gray'}}>{item.title}</p>
                        <p style={{}}>{item.content}</p>
                        <img src={item.image} />
                        <div style={{display: 'flex', alignItems: 'center', color: '#c5473b', marginTop:2, fontSize:10}}><AiOutlineLike fill='#c5473b' size={20} /> <div>{item.like}</div></div>
                    </div>
                ))} 
            </div>
        )
    }

    const Invest = () => {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: "100%"}}>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar 
                        value={60} 
                        text="60%"
                        styles={{
                            // Customize the root svg element
                            root: {},
                            // Customize the path, i.e. the "completed progress"
                            path: {
                              // Path color
                              stroke: '#c5473b',
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'butt',
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                              // Trail color
                              stroke: '#c5463b8a',
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'butt',
                              // Rotate the trail
                              transform: 'rotate(0.25turn)',
                              transformOrigin: 'center center',
                            },
                            // Customize the text
                            text: {
                              // Text color
                              fill: '#c5473b',
                              // Text size
                              fontSize: '16px',
                            },
                            // Customize background - only used when the `background` prop is true
                            background: {
                              fill: 'green',
                            },
                        }}
                    />
                </div>
                <div style={{borderLeft: 'solid', borderLeftWidth: 1, borderLeftColor: 'gray', paddingLeft: 10}}>
                    <div>
                        <p style={{fontFamily: 'building', fontSize:20, color: 'gray', marginBottom: 0}}>Montant cible</p> 
                        <div style={{borderTop: 'solid', borderTopWidth: 1, borderTopColor: 'gray', width:'30%', marginLeft: 3}}></div>
                        <p style={{fontSize:20, color: '#c5473b', marginTop: 5}}>50 000 000 XAF</p> 
                     </div>
                     <div>
                        <p style={{fontFamily: 'building', fontSize:20, color: 'gray', marginBottom: 0}}>Montant investi</p> 
                        <div style={{borderTop: 'solid', borderTopWidth: 1, borderTopColor: 'gray', width:'30%', marginLeft: 3}}></div>
                        <p style={{fontSize:20, color: '#c5473b', marginTop: 5}}>30 000 000 XAF</p> 
                     </div>
                     <div>
                        <p style={{fontFamily: 'building', fontSize:20, color: 'gray', marginBottom: 0}}>Nombre d'investisseurs</p> 
                        <div style={{borderTop: 'solid', borderTopWidth: 1, borderTopColor: 'gray', width:'30%', marginLeft: 3}}></div>
                        <p style={{fontSize:20, color: '#c5473b', marginTop: 5}}>10</p> 
                     </div>
                     <div>
                        <p style={{fontFamily: 'building', fontSize:20, color: 'gray', marginBottom: 0}}>Nombre d'ajout au favoris</p> 
                        <div style={{borderTop: 'solid', borderTopWidth: 1, borderTopColor: 'gray', width:'30%', marginLeft: 3}}></div>
                        <p style={{fontSize:20, color: '#c5473b', marginTop: 5}}>05</p> 
                     </div>

                </div>
            </div>
        )
    }

    const Reports = () => {
        const otherData = [
            {
              title: '22-01-2021',
              content: [
                {
                    img: pdfLogo,
                    title: 'Bilan financier.pdf',
                  },
                  {
                    img: pdfLogo,
                    title: 'Burger',
                  },
                  {
                    img: pdfLogo,
                    title: 'Camera',
                  },
              ]
            },
            {
              title: '22-03-2021',
              content: [
                {
                    img: pdfLogo,
                    title: 'Bilan financier.pdf',
                  },
                  {
                    img: pdfLogo,
                    title: 'Business Model.pdf',
                  },
                  {
                    img: pdfLogo,
                    title: 'Camera',
                  },
              ]
            },
            {
              title: '22-06-2021',
              content: [
                {
                    img: pdfLogo,
                    title: 'Bilan financier.pdf',
                  },
                  {
                    img: pdfLogo,
                    title: 'Business Model.pdf',
                  },
                  {
                    img: pdfLogo,
                    title: 'Camera',
                  },
              ]
            },
            {
              title: '22-09-2021',
              content: [
                {
                    img: pdfLogo,
                    title: 'Breakfast',
                  },
                  {
                    img: pdfLogo,
                    title: 'Business Model.pdf',
                  },
                  {
                    img: pdfLogo,
                    title: 'Camera',
                  },
              ]
            },
          ];

        const [page, setPage] = useState({
            name: "Home",
            content: []
        })

        function NavigatePage(item) {
            setPage({
                name: item.title,
                content: item.content
            });
        }

        function NavigateBack() {
            setPage({
                name: "Home",
                content: []
            });
        }

        return (
            <div style={{width: "100%", display:'flex', flexDirection: 'column',}}>
                {page.name === "Home" ? <><form style={{width: "80%", alignSelf: 'center'}} className="input-footer" action="">
                    <input placeholder="Entrez une date" style={{width: "100%", border: 'solid', borderWidth:1 , borderColor: 'gray'}} className="text-input" type="text" name="date" id="" />
                    <input style={{border: 'solid', borderWidth:1 , borderColor: 'gray'}} className="input-button" type="button" value="OK" />
                </form>
                <ImageList sx={{ width: 500, height: 450 }} rowHeight={164} gap={30} cols={5}>
                    {otherData.map((item, index) => (
                        <ImageListItem key={index}>
                            <div style={{display: 'flex', flexDirection:'column', textDecoration: 'none', alignItems: 'center', width: 'max-content'}}>
                            <div onClick={() => NavigatePage(item)} style={{cursor: 'pointer'}}><GoFileDirectory fill="#c5473b" size={50} /></div>
                                <span style={{color: 'black', textDecoration: 'none', margin: 5}}>{item.title}</span>
                            </div>
                        </ImageListItem>
                    ))}
                </ImageList></> : 
                <div>
                    <div style={{display: 'flex'}}><IoArrowBack onClick={() => NavigateBack()} style={{cursor: 'pointer'}} /><span style={{fontFamily: 'building'}}>Rapport du {page.name}</span></div>
                    <ImageList sx={{ width: 500, height: 450 }} rowHeight={164} gap={50} cols={5}>
                        {page.content.map((item, index) => (
                            <ImageListItem key={index}>
                                <div style={{display: 'flex', flexDirection:'column', textDecoration: 'none', alignItems: 'center', width: 'max-content'}}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{width:50, height:'auto', objectFit: 'contain', cursor: 'pointer'}}
                                />
                                <span style={{margin: 10, color: 'black'}}>{item.title}</span>
                                </div>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>}
            </div>
        )
    }

    return(
        <div>
            {form === "/yourProject" ? 
                <InfoPersonal /> : form === "/news" ? 
                <News /> : form === "/invest" ?
                <Invest /> : form === "/reports" ?
                <Reports /> : null}
        </div>
    )
}

export default RightSide;