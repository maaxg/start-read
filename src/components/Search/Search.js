import React, {useState} from 'react'
import {View, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import {styles} from './styles'
const Search = ({value, setValue}) =>{
    const [name, setName] = useState(null)
    return(
        <View style={styles.container}>
            <Icon name="search" size={30}/>
            <TextInput style={styles.searchInput} value={value} onChangeText={(value) => {setValue(value)}} placeholder={"Pesquisar livro"}/>
        </View>
    )
}

export default Search