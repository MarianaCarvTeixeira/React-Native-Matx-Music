import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 15,
    },
    image:{
        width:220,
        height: 220,
        margin: 10,
    },
    name:{
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",

    },
    infoContainer:{
        flexDirection: 'row',
    },
    creator:{
        color: 'lightgray',
        fontSize: 15,
        margin: 5,
    },
    likes:{
        color: 'lightgray',
        fontSize: 15,
        margin: 5,
    },
    button:{
        backgroundColor: 'darkorange',
        height: 45,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 15,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default styles