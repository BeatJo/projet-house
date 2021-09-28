import { Box, FormControl, RadioGroup, TextField, FormControlLabel, Radio, MenuItem } from "@mui/material";
import { ButtonCustom } from "../../../components";



const YourProjectScreen = () => {

  return ( 
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <FormControl sx={{ m: 1, width: '100%' }}>
      <TextField fullWidth id="name" label="Votre nom" variant="standard" />
      </FormControl>
      <FormControl sx={{ m: 1, width: '100%' }}>
      <TextField fullWidth id="site-web" label="Site web" variant="standard" />
      </FormControl>
        <FormControl sx={{mx:1, width: '100%' }}>
        <TextField fullWidth id="name" label="Ville de résidence" variant="standard" />
        </FormControl>
      <h3 style={{marginLeft: 10}}>Décrivez votre projet en 250 caracteres</h3>
      <FormControl sx={{m: 1}}>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={5}
          defaultValue=""
        />
        </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }}>
      <TextField fullWidth id="montant" label="De Combien avez-vous besoin financierement ?" variant="standard" />
      </FormControl>
      <h3 style={{marginLeft: 10}}>Niveau d'évolution du projet</h3>
      <FormControl sx={{m: 1}} component="fieldset">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="idee" control={<Radio />} label="Idée" />
        <FormControlLabel value="prototype" control={<Radio />} label="Prototype" />
        <FormControlLabel value="Sur le marche" control={<Radio />} label="Sur le marché" />
      </RadioGroup>
      </FormControl>
      <h3 style={{marginLeft: 10}}>Quel est votre role dans le projet ?</h3>
      <FormControl sx={{m: 1}} component="fieldset">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="fondateur" control={<Radio />} label="Fondateur" />
        <FormControlLabel value="co-fondateur" control={<Radio />} label="Co-fondateur" />
        <FormControlLabel value="employe" control={<Radio />} label="Employé" />
      </RadioGroup>
      </FormControl>
      <h3 style={{marginLeft: 10}}>Insérer un logo</h3>

      <h3 style={{marginLeft: 10}}>Inserer quelques medias (au format jpg, png, mp4)</h3>
      <ButtonCustom big primary style={{marginLeft: 10}}>Sélectionner des fichiers</ButtonCustom>
      <h3 style={{marginLeft: 10}}>Telecharger le document de presentation du projet (au format PDF, PPTX)</h3>
      <ButtonCustom big primary style={{marginLeft: 10}}>Sélectionner un  fichier</ButtonCustom>
    </Box>
   );
}
 
export default YourProjectScreen;