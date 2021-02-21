import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Image } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage'
const Chat = ({ showChat, setShowChat }) => {
    const [message, setMessage] = useState('')
    const [pic, setPic] = useState(null)
    console.log(pic)
    useEffect(() => {
        if (pic === null)
            getPic()

    }, [pic])
    async function getPic() {
        const ascUser = await AsyncStorage.getItem("Auth_user")
        const user = JSON.parse(ascUser)
        console.log(user.profilePic)
        setPic(user.profilePic.uri)

    }
    return (
        <Modal visible={showChat} animationType={"slide"}>
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => setShowChat(false)} style={styles.backButton}>
                    <Icon name={"arrowleft"} size={30} color={"#0F88AE"} />
                    <Text style={styles.textBack}>Voltar</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.containerChat}>
                        <Text style={styles.chatMessage}>Oi :)</Text>
                        <Image source={{ uri: pic }} style={styles.userPic} />
                    </View>
                    <View style={styles.viewMessage}>
                        <TextInput style={styles.inputMessage} placeholder={"Digite algo"} value={message} onChangeText={(message) => setMessage(message)} />
                        <TouchableOpacity style={styles.btnSendMessage}>
                            <Icon name={"right"} size={30} color={"#0F88AE"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    )
}
export default Chat