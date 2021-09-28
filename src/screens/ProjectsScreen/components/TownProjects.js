import { projectsData } from '../../../data/homeData';
import '../../../styles/Projects.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardActionArea } from '@mui/material';
import { AiFillLike, AiOutlineHeart } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { GiHistogram } from 'react-icons/gi';
import { Container } from '../../../components';

const TownProjects = () => {

  const [ville, setVille] = React.useState('');
  const [pays, setPays] = React.useState('');
  const [level, setLevel] = React.useState('');

  const handleChange = (event) => {
    if (event.target.name === "ville") {
      setVille(event.target.value);
    } else if (event.target.name === "pays") {
      setPays(event.target.value);
    } else if (event.target.name === "level") {
      setLevel(event.target.value);
    }
    
  };
  return (  
      <Container header headerActive active="Projects" footer>
      <div className="search-bar-container">
        <div className="search-bar">
          <input placeholder="Rechercher" className="projects-text-input" type="text" name="search" id="" />
          <select className="projects-input-button" type="button" value="OK">
            <option>Categories</option>
          </select>
        </div>
        <div style={{alignSelf: 'flex-start', marginLeft: '15%', marginTop: 20}}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-helper-label"><MdPlace fill="#c5473b" size={19} /> pays</InputLabel>
            <Select
              labelId="select-helper-label"
              id="select-helper"
              value={pays}
              label="___pays"
              name="pays"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-helper-label"><MdPlace fill="#c5473b" size={19} />ville</InputLabel>
            <Select
              labelId="select-helper-label"
              id="select-helper"
              value={ville}
              label="ville"
              name="ville"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120, width: 230 }}>
            <InputLabel id="select-helper-label"><GiHistogram fill="#c5473b" size={19} /> Niveau d'evolution</InputLabel>
            <Select
              labelId="select-helper-label"
              id="select-helper"
              value={level}
              label="Niveau d'evolution"
              name="level"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="projects-cards">
        {projectsData.map((item, index) => (
          <div style={{flex: 1, position: 'relative', marginLeft: 7}}>
          <Card key={index} sx={{ maxWidth: 345, borderTopLeftRadius:50, borderTopRightRadius:50, height: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={item.image}
              alt="green iguana"
            />
            <CardContent sx={{width:310, paddingX:0}}>
              <div className="projects-cards-title-container">
                <h5>{item.title}</h5>
                <AiOutlineHeart fill={"#c5473b"} size={25} />
              </div>
              <p className="projects-cards-content">{item.content}</p>
              <div className="projects-cards-bottom">
                  <div>{item.cash}M XAF Déjà investi</div>
                  <div>{item.contribution} contributions</div>
                  <div><AiFillLike />{item.like}</div>
                </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className="projects-cards-plus">
          <div className="projects-cards-plus-button">
              En savoir plus
          </div>
        </div>
        </div>
        ))}
      </div>
      </Container>
   );
}
 
export default TownProjects;