import { StyleSheet } from "react-native";

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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        width: '80%'
    },
    dot: {
        marginTop: 5,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
        margin: 10
    },
});
export default styles
