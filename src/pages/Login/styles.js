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
        fontSize: 22,
        fontWeight: "600",
        color: "#0F88AE"
    },
    secondTitlePart:{
        color: "#F2C230"
    },
    logo:{
        marginTop: '5%',
        width: 250,
        height: 250
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
    forgetPassword:{
        marginTop: '5%',
        alignSelf: "center",
    },
    forgetPasswordText:{ 
        fontSize: 18,
        color: "#F2A922",  
    },
    btnLogin:{
        width: "80%",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#0F88AE",
        alignSelf: "center",
        justifyContent: "center"
    },
    loginText:{
        color: "#FFF",
        fontSize: 22,
        alignSelf: "center"
    },
    register:{
        marginTop: '5%',
        alignSelf: "center",
    },
    registerText:{
        fontSize: 22,
        color: "#0F88AE",  
    }
})