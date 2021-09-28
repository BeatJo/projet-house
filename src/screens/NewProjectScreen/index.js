import { useEffect, useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import { ButtonCustom, Container } from '../../components';
import '../../styles/Register.css'
import { YourProjectScreen } from './components';
import PersonalInfosScreen from './components/PersonalInfosScreen';
import YourTeamScreen from './components/YourTeamScreen';

const NewProjectScreen = () => {

  const[index, setIndex] = useState(0)
  const steps = [
    'Informations personnelles',
    'Votre projet',
    'Votre equipe',
  ];
  
  const [form, setForm] = useState(steps[index]);

  useEffect(() =>{
    setForm(steps[index])
  }, [index])

  function nextStep() {
    if(index === steps.length -1) {
      console.log('ok');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setIndex(index + 1)
    }
  }

  function prevStep() {
    if(index === 0) {
      console.log('ok');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setIndex(index - 1)
    }
  }

  return ( 
    <Container header headerActive footer>
      <div style={{marginTop: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <Stepper 
            style={{width: '80%'}}
            activeStep={index} 
            styleConfig={{
              activeBgColor: '#c5473b',
              completedBgColor: '#585b60',
              inactiveBgColor: '#585b60',
              circleFontSize: 25,
              size:40}}>
            {steps.map((label) => (
              <Step color="#c5473b" key={label}>
              </Step>
            ))}
          </Stepper>
          <h1>{form}</h1>
        </div>
        <div className="new-project-container">
            {
              index === 0 ?
                <PersonalInfosScreen /> : 
              index === 1 ?
                <YourProjectScreen /> :
                <YourTeamScreen />
            }
        </div>
        <div style={{display: 'flex', marginBottom: 100, width: "40%", justifyContent: 'space-around'}}>
          <ButtonCustom big onClick={() => prevStep()}>Precedent</ButtonCustom>
          <ButtonCustom big primary onClick={() => nextStep()}>Enregistrer et continuer</ButtonCustom>
        </div>
      </div>
    </Container>
   );
}
 
export default NewProjectScreen;