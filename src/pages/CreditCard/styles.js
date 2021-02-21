import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginTop: "20%",
        fontSize: 22,
        fontWeight: "600",
        color: "#0F88AE"
    },
    secondTitlePart: {
        color: "#F2C230"
    },
    input: {
        marginTop: '2%',
        width: '90%',
        paddingLeft: 10,
        borderColor: "gray",
        borderRadius: 8,
        borderWidth: 0.5,

    },
    monthYear: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center"
    },
    button:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '5%'
    },
    buttonBall:{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#F2C230"

    },
    buttonBallSelected:{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#F2C230",
        borderWidth: 1,
        borderColor: "#F2C230"

    },
    buttonText:{
        marginRight: '2%',
        fontSize: 16,
        fontWeight: '700'
    },
    containerPrice:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
    },
    buyButton:{
        width: '90%',
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F88AE",
        marginTop: '5%',
        borderRadius: 8,
    },
    disabledButton:{
        width: '90%',
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
        marginTop: '5%',
        borderRadius: 8,
    },
    buttonTextBuy:{
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        marginRight: '4%'

    },
})

