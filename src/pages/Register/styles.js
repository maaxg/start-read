import {StyleSheet} from 'react-native'

export const styles =  StyleSheet.create({
    scrollView:{
        flex: 1,
        backgroundColor: "#FFF"
    },
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    logo:{
        marginTop: '5%',
        width: 200,
        height: 200
    },
    form:{
        width: "100%",
        justifyContent: "center",
        
    },
    btnForm:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    btnRegister:{
        width: "80%",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#0F88AE",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: '5%',
    },
    registerText:{
        color: "#FFF",
        fontSize: 22,
        alignSelf: "center"
    },
})