import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const PersonalInfosScreen = () => {
    const country = [
        {
            label: 'Pays de residence',
            value: 'none',
        },
        {
          label: 'France',
          value: 'fr',
        },
        {
          label: 'USA',
          value: 'usa',
        },
        {
          label: 'Cameroun',
          value: 'cmr',
        },
      ];

    const [picProfile, setPicProfile] = React.useState(null)
    const [fullScreen, setFullscreen] = React.useState(false)
    const [loadingPicProfile, setLoadingPicProfile] = React.useState(false)

    function handleFileChange(event) {
      const {target} = event;
      const {files} = target;
  
      if (files && files[0]) {
        var reader = new FileReader();
        
        reader.onloadstart = () => setLoadingPicProfile(true);
  
        reader.onload = event => {
          setPicProfile(event.target.result)
          setLoadingPicProfile(false)
        };
     
        reader.readAsDataURL(files[0]);
      }
    }
    
    function handleClearClick() {
      setPicProfile(null)
      setFullscreen(false)
    }
    
    function handlePreviewClick() {
   
      if (!picProfile) {
        return;
      }
      
      setFullscreen(!fullScreen);
    }
    const backgroundImage = picProfile ? {backgroundImage: `url(${imgData})`} : null;
    const previewClasses = ['preview', fullScreen ? 'preview--fullscreen' : ''].join(' ');    

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    country: 'none',
    date: new Date()
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <FormControl sx={{ m: 1, width: '100%' }}>
      <TextField fullWidth id="name" label="Votre nom" variant="standard" />
      </FormControl>
      <FormControl sx={{ m: 1, width: '100%' }}>
      <TextField fullWidth en id="number" label="Numéro de téléphone" type="number" variant="standard" />
      </FormControl>
      <FormControl sx={{ m: 3, mx:1, width: '100%' }}>
      <TextField
          id="country"
          select
          fullWidth
          value={values.country}
          onChange={handleChange('country')}
          variant="standard"
        >
          {country.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
        <FormControl sx={{mx:1, width: '100%' }}>
        <TextField fullWidth id="name" label="Ville de résidence" variant="standard" />
        </FormControl>
        <h3>Date de naissance</h3>
        <FormControl sx={{ m: 1, width: '100%' }}>
        <TextField fullWidth en id="profession" label="Profession" variant="standard" />
        </FormControl>
        <div>
          <input
            id="car"
            type="file"
            accept="image/*"
            capture="camera"
            onChange={handleFileChange}
          />
          <div
            className={previewClasses}
            style={backgroundImage}
            onClick={handlePreviewClick}
          >
            {!picProfile && !loadingPicProfile &&
              <label htmlFor="car">
                Click to capture
              </label>
            }
            {loadingPicProfile &&
              <span>Loading...</span>
            }
          </div>
          <button type='button' onClick={handleClearClick}>
            Clear Image
          </button>
        </div>
        <FormControl sx={{ m: 1, width: '100%' }}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
  </Box>

   );
}
 
export default PersonalInfosScreen;