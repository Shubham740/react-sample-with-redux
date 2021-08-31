import COLORS from '../../utils/Colors'
export const styles = {
  container: {
    width: '100%',
    height: '700px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to right bottom, rgb(125,226,97), rgb(66,123,181))'
  },
  cardStyle: {
    width: '30%',
    height: '50%',
    alignSelf: 'center',
    backgroundColor: COLORS.CARD_COLOR,
    borderRadius: '10px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  buttonView:{
      display:'flex',
      flexDirection:'row-reverse',
      marginTop:'10px',
    marginRight:'30px'
  },
  cardIcon:{
      width:'400px',
      height:'100px', 
      color:COLORS.GRADIENT_GREEN,
      marginTop:'20px'
    },
    notVerifiedMesssage:{
        fontSize:'20px',
        color:COLORS.GRADIENT_GREEN,
        fontWeight:'900'
    },
    verifiedMesssage:{
        fontSize:'16px',
        color:COLORS.GRADIENT_GREEN,
        textAlign:'center',
        fontWeight:'500'
    }
};