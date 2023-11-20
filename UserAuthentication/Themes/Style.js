import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({

  /*--------- WelcomeScreen ----------*/
  overall: {
    backgroundColor: '#998ED5',
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 320,
    height: 320,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  name: {
    fontSize: 25,
    color: '#998ED5',
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    opacity: 0.6,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginTop: 30,
  },
  btn: {
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: 'black',
  },
  button: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#998ED5',
    width: 250,
  },

  /*------------- Signup -------------*/

  bottomButton: {
    color: 'blue',
    fontWeight: '600',
  },
  signupOverall: {
    backgroundColor: '#998ED5',
    padding: 15,
  },
  details: {
    height: 720,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  signupBox: {
    height: 500,
  },
  page: {
    flexDirection: 'row',
    gap: 3,
  },
  backButton: {
    width: 20,
    height: 20,
    left: 10,
    top: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    top: -60,
    left: 160,
  },
  backImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  /*--------- PostAuthNavigator --------*/

  menuImage: {
    width: 25,
    height: 25,
    top: 3,
  },

  /*--------- HomeScreen --------------*/

  homeContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingLeft: 15,
  },
  contacts: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 10,
    gap: 20,
    justifyContent: 'space-between',
  },
  homePhone: {
    width: 170,
    padding: 5,
    fontSize: 16,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: '600',
    borderColor: '#A9A9A9',
    color: '#333'
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  homeName: {
    color: '#333',
    fontWeight: '400',
    fontSize: 20,
    fontFamily: 'cochin',
  },
  homeLogo: {
    paddingTop: 10,
    width: 50,
    height: 50,
    textAlign: 'center',
    verticalAlign: 'auto',
    backgroundColor: '#87CEEB',
    borderRadius: 100,
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  accounts: {
    borderBottomWidth: 1,
    borderColor: '#A9A9A9',
    paddingLeft: 14,
  },
  total: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    fontWeight: '500',
    letterSpacing: 0.7,
  },
  homeMain: {
    backgroundColor: 'white',
    position: 'relative',

  },

  /*------------ Profile ----------------*/

  top: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    paddingTop: 30,
    width: 120,
    height: 120,
    textAlign: 'center',
    backgroundColor: '#87CEEB',
    marginBottom: 20,
    borderRadius: 100,
    color: '#fff',
    fontSize: 40,
  },
  call: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
    marginBottom: 25,
  },
  profileName: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  email: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 22,
    textAlign: 'center',
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#132257',
  },
  phone: {
    color: '#333',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 15,
  },
  info: {
    width: 365,
    padding: 10,
    backgroundColor: '#e5e6e5',
    margin: 10,
    borderRadius: 15,
  },

  /*------------ Loader -------------*/

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },

});

export default Styles;