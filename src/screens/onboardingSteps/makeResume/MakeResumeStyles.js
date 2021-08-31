import COLORS from '../../../utils/Colors'
export const styles = {
  container: {
    width: '100%',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardStyle: {
    width: '500px',
    height: '300px',
    alignSelf: 'center',
    backgroundColor: COLORS.CARD_COLOR,
    borderRadius: '10px',
  },
  buttonView:{
      display:'flex',
      flexDirection:'row-reverse',
      marginTop:'10px',
    marginRight:'30px'
  }
};