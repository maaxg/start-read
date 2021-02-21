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
    },
    btnChat: {
        alignSelf: "flex-end",
        marginTop: "5%",
        marginRight: "5%"

    },
    topIcons: {
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    viewSearchedBook: {
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
        width: 200,
        textAlign: "center",
        color: "#F2C230"
    },
    categoryTitle: {
        marginTop: "5%",
        textAlign: "left",
        marginLeft: "5%",
        fontSize: 22,
        fontWeight: "100"
    },
    flatList:{
        flex:1,
        flexDirection: "row"
    },
})