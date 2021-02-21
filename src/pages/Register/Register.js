import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../context/auth'
import InputForm from '../../components/InputForm/InputForm'
import { styles } from './styles'
const Register = ({ navigation }) => {
    const { loading, register } = useContext(AuthContext)
    console.log(loading)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {

        if (password.length >= 6 && name.length >= 3 && email.length >= 6 && email.includes('@')) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }

    }, [password, email, name])
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                <Image source={require("../../assets/logo_naldo.png")} style={styles.logo} />
                <Text style={styles.title}>Faça o seu <Text style={styles.secondTitlePart}>Registro :)</Text></Text>
                <View style={styles.form}>
                    <InputForm placeholder={"Nome"} value={name} setValue={setName} />
                    <InputForm keyboardType={"email-address"} placeholder={"Email"} value={email} setValue={setEmail} />
                    <InputForm secureTextEntry={true} placeholder={"Senha"} value={password} setValue={setPassword} />
                    <View stlye={styles.btnForm}>
                        <TouchableOpacity onPress={() => { register(name, email, password, navigation) }}
                            disabled={disabled} style={disabled ?
                                [styles.btnRegister, { backgroundColor: "#EFEFEF" }] : styles.btnRegister}>
                            {
                                loading === true
                                    ?
                                    <ActivityIndicator size="large" color='#F2C230' />
                                    :
                                    <Text style={styles.registerText}>Continuar</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register