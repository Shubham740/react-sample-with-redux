import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../../../utils/Colors';

const useStyles = makeStyles((theme) => ({
    parentView: {
      width: '108%',
    },
    heading:{
        fontSize: '20px',
        color: COLORS.BLUE,
        marginTop: '20px',
        fontWeight: 'bold',
        marginLeft:'10px'
    },
    buttonView:{
        display:'flex',
        flexDirection:'row-reverse',
        marginTop:'20px',
      marginRight:'150px'
    }

  }));
  
export default useStyles;
