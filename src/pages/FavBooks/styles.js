import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    title: {
        marginTop: "5%",
        fontSize: 22,
        fontWeight: "600",
        color: "#0F88AE"
    },
    secondTitlePart: {
        color: "#F2C230"
    },
    viewSearchedBook: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
    },
    imageResult: {
        resizeMode: "contain",
        width: 200,
        height: 200
    },
    textResult: {
        fontSize: 22,
        textAlign: 'center',
        color: "#F2C230"
    }
})
