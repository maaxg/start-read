
//"#0F88AE"
//"#F2C230"

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: '5%',
        width: '90%',
        height: '80%',
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: '#0F88AE',
        justifyContent: "center",
        alignItems: 'center'
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: "#000000",
    },
    viewMessage: {
        width: '90%',
        height: 60,
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#F2C230",
        marginBottom: '10%',
    },
    inputMessage: {
        width: '85%',
        height: 50,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        alignSelf: "center",
  
    },
    backButton: {
        margin: "5%",
        flexDirection: "row",
    },
    textBack: {
        fontSize: 22,
        marginLeft: "5%",
        color: "#0F88AE"
    },
    containerChat:{
        flexDirection: 'row',
        marginTop: '120%',
        width: '50%',
        marginLeft: '40%',
        justifyContent: "flex-end",
        alignItems:"center",
   

    },
    userPic:{
        resizeMode: "contain",
        width: 40,
        height: 40,
        borderRadius: 40
    },
    chatMessage:{
        fontSize: 20,
        color: '#000000',
        fontWeight: '500',
        alignSelf: 'center',
        borderRadius: 8,
    },

})