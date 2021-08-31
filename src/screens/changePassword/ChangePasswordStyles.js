import COLORS from '../../utils/Colors'
export const styles = {
  container: {
    width: '100%',
    height: '700px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardStyle: {
    width: '400px',
    height: '430px',
    alignSelf: 'center',
    backgroundColor: COLORS.CARD_COLOR,
    borderRadius: '10px',
  },
  buttonView:{
      display:'flex',
      flexDirection:'row-reverse',
      marginTop:'20px',
    marginRight:'30px'
  }
};