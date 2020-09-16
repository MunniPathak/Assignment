import { StyleSheet, Dimensions } from "react-native";
import AppColors from './AppColors';
import AppFonts from './AppFonts';

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    cardView: {
        backgroundColor: 'white',
               margin: 10,
               borderWidth: 0.3,
               borderColor: 'gray'
    },
    imgView:{
        height: 200,
        width: 300,
        margin: 3,
        top: -10,
        resizeMode: 'contain'
     },
     feview:{
        margin:5,
        justifyContent: 'flex-start',
        padding: 5,
        position: 'absolute',
        left: 0,
        top: -200,
        height: 25,
        width: 25
     }
    
});

export default Styles;