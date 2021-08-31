import COLORS from '../../utils/Colors'
export const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    logoStyle: {
        height: '20%',
        width: '40%',
        alignSelf: 'center',
        marginTop: '40px'
    },
    makeResume: {
        color: COLORS.GRADIENT_GREEN,
        fontSize: '40px',
        fontWeight: '500',
        wordSpacing: '8px',
        margintTop: '50px'
    },
    welcomeMessage: {
        fontSize: '20px',
        marginTop: '10px',
        color: 'gray',
        wordSpacing: '5px'
    }
};