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
    width: '500px',
    height: '600px',
    alignSelf: 'center',
    backgroundColor: COLORS.CARD_COLOR,
    borderRadius: '10px',
  },
  textBox: {
    width: '90%',
    marginTop: '10px',
    marginLeft: '20px',
    marginRight: '40px'
  },
  title: {
    color: COLORS.BLACK,
    marginLeft: "20px",
    fontSize: "20px",
    fontWeight: 'bold'
  },
  forgotPassword: {
    marginTop: '20px',
    marginLeft: '20px'
  },
  buttonLogin: { 
    backgroundColor: COLORS.PRIMARY,
    marginTop: '10px',
    marginLeft: '20px',
    color:COLORS.WHITE,
    elevation:'10px',
    padding:'8px',
    paddingLeft:'24px',
    paddingRight:'24px'
   },
   buttonSignUp: { 
    backgroundColor: COLORS.SECONDARY,
    marginTop: '10px',
    marginLeft: '20px',
    color:COLORS.WHITE,
    elevation:'10px',
    padding:'8px',
    paddingLeft:'24px',
    paddingRight:'24px',
    textTransform: 'none'
   },
   logo:{
    width:'200px', 
    height:'50px',
    marginTop:'10px',
    marginLeft:'20px'
  },
  buttonView:{
    flexDirection:'row-reverse',
     display:'flex',
      marginTop:'10px', 
      marginRight:'30px'
  }
};