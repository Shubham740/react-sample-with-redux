import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../../../utils/Colors';

const useStyles = makeStyles((theme) => ({
    parentView: {
      width: '100%',
      height:'100%',
      alignItems:'center',
      display:'flex',
      flexDirection:'column',
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
    },
    uploadVideo:{
        fontSize: '16px',
        color: COLORS.BLACK,
        fontWeight: 'bold',
        marginLeft:'10px'
    },
    iconStyle:{
        height:'30px',
         width:'30px', 
         marginTop:'20px', 
         color:COLORS.BLUE
        },
        iconView:{
            display:'flex', 
            flexDirection:'row'
        }

  }));
  
export default useStyles;
