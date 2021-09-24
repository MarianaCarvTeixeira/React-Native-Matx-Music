import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin:10,
        width: '100%'
    },
    rightContainer:{
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    image:{
        width: 75,
        height: 75,
        marginHorizontal: 3,
    },
    title:{
        color: 'white',
        fontSize: 21,
    },
    artist:{
        color: 'lightgray',
    },
});
export default styles
