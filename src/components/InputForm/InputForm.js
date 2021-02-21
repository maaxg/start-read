import React, {useState} from 'react'
import {TextInput, View} from 'react-native'
import {styles} from './styles'
const InputForm = ({placeholder, placeholderTextColor, value, setValue, keyboardType, secureTextEntry}) =>{

    return(
        <View style={styles.container}>
            <TextInput secureTextEntry={secureTextEntry} keyboardType={keyboardType} style={styles.textInput} placeholder={placeholder} placeholderTextColor={placeholderTextColor} value={value} onChangeText={(value) => setValue(value)}/>
        </View>

    )
}

export default InputForm