import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './CustomAccordianStyles'
import COLORS from '../../utils/Colors';

const CustomAccordian = (props) => {
  const { title, heading } = props
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (<div className={classes.root}>
    <Accordion expanded={expanded === title} onChange={handleChange(title)} style={{ backgroundColor: COLORS.BLUE }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
        <Typography className={classes.secondaryHeading}>{heading}</Typography>
      </AccordionSummary>
      <div className={classes.childView}>
        {props.children}
      </div>
    </Accordion>
  </div>)
}
export default CustomAccordian;
