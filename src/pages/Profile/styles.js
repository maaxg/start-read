import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    scrollContainer:{
        flex: 1,
        backgroundColor: "#FFF",
    },
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        marginTop: "5%",
        marginBottom: "5%",
        fontSize: 22,
        fontWeight: "600",
        color: "#0F88AE"
    },
    secondTitlePart:{
        color: "#F2C230"
    },
    profileView:{
        padding: 5,
        width: "90%",
        height: 200,
        borderWidth: 0.5,
        borderColor: "#0F88AE",
        borderRadius: 8,

    },
    infoLabel:{
        fontSize: 22,
        margin: "5%",
        color: "#0F88AE",
    },
    infoView:{
        flexDirection: "row",
        alignItems: "center",

    },
    logoutBtn:{
        marginTop: "5%",
        width: "90%",
        height: 50,
        flexDirection: "row",
        backgroundColor: "#0F88AE",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,

    },
    labelLogout:{
        color: "#FFF",
        fontSize: 22,
        fontWeight: "700",
        alignSelf: "center",
        marginLeft: "2%",
    },
    profPic:{
        width: 150,
        height: 150,
        marginBottom: "10%",
    }
})