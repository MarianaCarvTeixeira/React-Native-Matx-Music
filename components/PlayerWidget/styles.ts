import { StyleSheet } from "react-native";
import NotFoundScreen from "../../screens/NotFoundScreen";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 49,
        width: '100%',
        backgroundColor: "#131313",
        borderWidth: 1,
        borderColor: '#111111',
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 3,
        backgroundColor: "darkorange",
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 75,
        height: 75,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    dot: {
        marginTop: 5,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        justifyContent: 'space-between',
        margin: 10
    },
});
export default styles
