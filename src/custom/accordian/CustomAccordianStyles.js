import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../utils/Colors';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      marginTop:'10px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      flexBasis: '33.33%',
      flexShrink: 0,
      color:COLORS.WHITE
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: COLORS.WHITE,
    },
    childView:{display:'flex', alignItems:'center', flexDirection:'column'}
  }));

  export default useStyles;
