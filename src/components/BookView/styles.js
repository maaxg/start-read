import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    scrollContainer:{
        flex: 1
    },
    viewSearchedBook: {
        width: "100%",
        alignItems: "center",
        marginTop: "5%",

    },
    backButton:{
        margin: "5%",
        flexDirection: "row",
        
    },
    textBack:{
        fontSize: 22,
        marginLeft: "5%",
        color: "#0F88AE"
    },
    imageResult: {
        marginLeft: "4%",
        resizeMode: "contain",
        width: "50%",
        height: 350
    },
    stars:{
        textAlign: "auto",
        marginLeft: "4%",
        fontSize: 18,
        color: "#F2C230",
        fontWeight: "bold",
        
    },
    textResult: {
        marginLeft: "4%",
        fontSize: 22,
        color: "#000000",
        alignSelf: "flex-start",
    },
    publisher:{
        marginLeft: "4%",
        fontSize: 19,
    },
    description:{
        borderWidth: 1,
        borderColor: "#0F88AE",
        padding: 5,
        fontSize: 16,
        alignSelf: "center",
        
        fontWeight: "400",
        marginBottom: "5%",
    },
    lang:{
        marginLeft: "4%",
        fontSize: 20,
    },
    favBook:{
        marginTop: '5%',
        marginLeft: '4%',
        flexDirection: 'row',
    },
    favText:{
        fontSize: 20,
        
    },
    buyButton:{
        width: '80%',
        height: 50,
        backgroundColor: "#0F88AE",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    txtPrice:{
        fontSize: 22,
        alignSelf: "center",
        color: "#FFF",
        
    }
})