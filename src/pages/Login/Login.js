import React, { useState, useEffect, useContext } from 'react'
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native'
import {AuthContext} from '../../context/auth'
import { styles } from './styles'
import InputForm from '../../components/InputForm/InputForm'
import AsyncStorage from '@react-native-community/async-storage'

const Login = ({navigation}) => {
    const { loading, login, setLogged, logged } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function checkUser(){
        const user = await AsyncStorage.getItem("Auth_user")
        console.log(user)
        if(user === undefined || user === null){
            setLogged(false)
        }else{
            console.log(user)
            setLogged(true)
        }
    }
    useEffect(() =>  {
        if(!logged)
            checkUser()
    }, [])

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image source={require("../../assets/logo_naldo.png")} style={styles.logo} />
                <Text style={styles.title}>Faça o seu <Text style={styles.secondTitlePart}>Login :)</Text></Text>
                <View style={styles.form}>
                    <InputForm keyboardType={"email-address"} placeholder={"Email"} value={email} setValue={setEmail} />
                    <InputForm secureTextEntry={true} placeholder={"Senha"} value={password} setValue={setPassword} />
                    <View stlye={styles.btnForm}>

                        <TouchableOpacity onPress={() => { login(email, password, navigation) }} style={styles.btnLogin}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { alert("Recuperei a senha") }} style={styles.forgetPassword}>
                            <Text style={styles.forgetPasswordText}>Esqueceu a senha?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.register} onPress={() => { navigation.navigate("Register") }}>
                            <Text style={styles.registerText}>Registrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login