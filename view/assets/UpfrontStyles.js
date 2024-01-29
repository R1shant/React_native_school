import { StyleSheet, Dimensions } from 'react-native';
let winSize = Dimensions.get('window'),
  primary = 'rgba(40, 126, 224, 1.0)',
  primaryshade = 'rgba(12, 75, 148, 1.0)',
  secondary = 'rgba(171, 199, 16, 1.0)',
  secondaryshade = 'rgba(193, 224, 18, 1.0)',
  accent = 'rgba(224, 76, 63, 1.0)',
  compound = 'rgba(127, 75, 228, 1.0)',
  background = 'rgba(238, 238, 238, 1.0)',
  backgroundshade = 'rgba(161, 161, 161, 1.0)',
  dark = 'rgb(0, 0, 0)',
  lite = 'rgb(255, 255, 255)';

const UpfrontStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: secondary,
    flexDirection: 'column',
    padding: 8,
  },
  p: {
    fontSize: 16 / winSize.scale,
    fontWeight: 'normal',
  },
  h1: {
    fontSize: 32 / winSize.scale,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24 / winSize.scale,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 19 / winSize.scale,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16 / winSize.scale,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 14 / winSize.scale,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 11 / winSize.scale,
    fontWeight: 'bold',
  },
  button: {
    // flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
    width: 96,
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    color: lite,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  //   container: {
  //   flexDirection: "row",
  //   shadowColor: 'black',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowRadius: 4,
  //   shadowOpacity: 0.26,
  //   elevation: 4,
  //   backgroundColor: '#fff',
  //   padding: 16,
  //   marginBottom: 16,
  // },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'red',
  },
  profileContainer: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  nameText: {
    bottom: -250,
    fontSize: 24,
    fontWeight: 'bold',
  },
  bornAtText: {
    bottom: -250,
    fontSize: 18,
  },
  idText: {
    bottom: -300,
    right: -150,
    fontSize: 18,
  },
  Image: {
    width: '100%',
    height: '60%',
    overflow: 'hidden',
  },
  updateForm: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  createForm: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textName: {
    borderWidth: 2,
    padding: 5,
    width: '70%',
    borderColor: 'black',
    fontSize: 24,
    marginBottom: 16,
  },
  createName: {
    borderWidth: 2,
    padding: 5,
    width: '70%',
    borderColor: 'black',
    fontSize: 24,
    marginBottom: 16,
  },
  CreateBornAt: {
    borderWidth: 2,
    padding: 5,
    width: '70%',
    fontSize: 24,
    marginBottom: 16,
  },
  textBornAt: {
    borderWidth: 2,
    padding: 5,
    width: '70%',
    fontSize: 24,
    marginBottom: 16,
  },
  updateImageContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  updateImage: {
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginLeft: 250,
  },
  trashButton: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#CBC3E3',
    borderWidth: 1,
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    marginRight: 20,
  },
  pencilButton: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#CBC3E3',
    borderWidth: 1,
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default UpfrontStyles;
