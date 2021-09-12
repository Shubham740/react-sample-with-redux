import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../utils/Colors';


const useStyles = makeStyles(() => ({
  paper: {
    width: "400px",
    height: '280px',
    paddingRight: '0px',
    padding: '0px',
    overflow: 'hidden',
    display:'flex',
    flexDirection:'column',
  },
  title:{
    marginRight:'20px',
    marginTop:'20px',
    fontSize:'25px',
    color:COLORS.PRIMARY,
    fontWeight:'bold',
    marginLeft:'20px'
  },
  inputBoxBorder:{
    borderWidth:'1px',
    borderColor:COLORS.BLACK,
    marginLeft:'20px',
    marginRight:'20px',
    fontSize:'20px',
    padding:'5px',
    borderRadius:'10px',
    color:COLORS.BLACK,
    marginTop:'30px'
  }
}));

export default useStyles;
