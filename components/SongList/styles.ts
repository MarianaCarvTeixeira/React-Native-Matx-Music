import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin:10,
    },
    insideContainer:{
        flexDirection: 'row',
    },
    rightContainer:{
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    image:{
        width: 70,
        height: 70,
    },
    title:{
        color: 'white',
        fontSize: 18,
    },
    artist:{
        color: 'lightgray',
        fontSize: 13,
    },
});
export default styles
