import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { AuthContext } from '../../context/auth'
import AsyncStorage from '@react-native-community/async-storage'
import ImagePicker from 'react-native-image-picker';
import { styles } from './styles'

const Profile = ({ navigation }) => {
    const { logout } = useContext(AuthContext)
    const [user, setUser] = useState("")
    const [loadingHere, setLoading] = useState(false)
    const [image, setImage] = useState(null)
    useEffect(() => {
        if (user === "") {
            console.log("oi")
            getUserInfo()
        }
        if (image !== null) {
            savePicture(image)
        }
    }, [user, image])
    function imagePicked() {
        ImagePicker.showImagePicker({
            title: 'Selecione: ',
            takePhotoButtonTitle: 'Tirar foto',
            chooseFromLibraryButtonTitle: 'Selecionar da Galeria',
            maxHeight: 600,
            maxWidth: 800,
        },
            res => {
                if (!res.didCancel) {
                    setImage(res)
                }
            }
        )
    }
    async function savePicture(image) {
        try {

            await AsyncStorage.mergeItem("Auth_user", JSON.stringify({ profilePic: image }))


        } catch (e) {
            console.log(e.message)
        }
    }
    async function getUserInfo() {
        try {
            setLoading(true)
            const auth = await AsyncStorage.getItem("Auth_user")
            const userHere = JSON.parse(auth)
            if (userHere.profilePic !== undefined) {
                console.log("oioioi")
                console.log(userHere.profilePic)
                setImage(userHere.profilePic)
            }
            setUser(userHere)
            setLoading(false)
        } catch (err) {
            console.log(err.message)
        }
    }
    console.log(user)
    return (
        loadingHere && user === null
            ?
            <ActivityIndicator animating={true} size={"large"} color={"0F88AE"} />
            :
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Informações do <Text style={styles.secondTitlePart}>{user.name}</Text></Text>
                    <TouchableOpacity onPress={() => { imagePicked() }}>
                        {
                            image === undefined || image === null
                                ?
                                <Icon name={"adduser"} size={150} color={"#0F88AE"} />
                                :
                                <Image source={{ uri: image.uri }} style={styles.profPic} />

                        }
                    </TouchableOpacity>
                    <View style={styles.profileView}>
                        <View style={styles.infoView}>
                            <Icon name="book" size={30} color={"#F2C230"} />
                            <Text style={styles.infoLabel}>Id: <Text style={styles.secondTitlePart}>{user.id}</Text></Text>
                        </View>
                        <View style={styles.infoView}>
                            <Icon name="user" size={30} color={"#F2C230"} />
                            <Text style={styles.infoLabel}>Nome: <Text style={styles.secondTitlePart}>{user.name}</Text></Text>
                        </View>
                        <View style={styles.infoView}>
                            <Icon name="mail" size={30} color={"#F2C230"} />
                            <Text style={styles.infoLabel}>Email: <Text style={styles.secondTitlePart}>{user.email}</Text></Text>
                        </View>

                    </View>
                    <TouchableOpacity onPress={() => { logout(navigation) }} style={styles.logoutBtn}>
                        <Icon name="logout" size={30} color={"#F2C230"} />
                        <Text style={styles.labelLogout}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}
export default Profile