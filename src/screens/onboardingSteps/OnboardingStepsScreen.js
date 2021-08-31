import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import styles from './OnboardingStepsStyles';
import {getSteps} from '../../utils/Utils'
import MakeResume from './makeResume/MakeResume';
import ResumeDetails from './resumeDetails/ResumeDetails';
import UploadFormScreen from './uploadForm/UploadFormScreen';



const  OnboardinSteps =(props)=> {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const steps = getSteps();

 

  

  
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const makeResumeCallback=(resumeName)=>{
console.log('resume Name=>>>>', resumeName)
setActiveStep(1);
  }
  return (
    <div className={styles.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {
          <div>
            <div>

              {activeStep === 0 &&
              <MakeResume
              callback={makeResumeCallback}
              />
              }
              {
                activeStep==2 &&
                <ResumeDetails/>
              }
             {
               activeStep==1 &&
              <UploadFormScreen/>
             }
            </div>
          </div>
        }
      </div>
    </div>
  );

}
export default OnboardinSteps;
