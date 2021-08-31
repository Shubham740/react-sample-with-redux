import React from 'react';
import CustomAccordian from '../../../custom/accordian/CustomAccordian';
import STRINGS from '../../../utils/Strings';
import useStyles from './ResumeDetailsStyles'


export default function ResumeDetails() {
 const classes =useStyles();

  return (
    <div className={classes.parentView}>
      
           <CustomAccordian title ={STRINGS.CONTACT_DETAILS}  
           heading={'Enter your Contact details'}
           >
              <div style={{backgroundColor:'pink',width:'300px', height:'50px'}}>
              </div>
               </CustomAccordian>
           <CustomAccordian title ={STRINGS.EDUCATION_DETAILS}
           heading={'Enter your Qualification details'}
           />
           <CustomAccordian title ={STRINGS.EMPLOYEMNT_HISTORY}
           heading={'Enter your Work experience'}
           />
           <CustomAccordian title ={STRINGS.HOBBIES_AND_INTEREST}
           heading={'Describe your hobbies and interest in details'}
           />
           <CustomAccordian title ={STRINGS.PROFESSIONAL_SKILLS}
           heading={'Describe your skills'}
           />
             <CustomAccordian title ={STRINGS.LANGUAGES}
           heading={'Describe your known languages'}
           />
             <CustomAccordian title ={STRINGS.INDUSTRIAL_EXPOSURE_AS_INTERN}
           heading={'Describe about your industrial exposure as an intern'}
           />
             <CustomAccordian title ={STRINGS.AWARD_AND_ACHIEVEMENT}
           heading={'Describe your awards and achievement'}
           />
             <CustomAccordian title ={STRINGS.OBJECTIVES}
           heading={'Describe your objectives'}
           />


    </div>
  );
}