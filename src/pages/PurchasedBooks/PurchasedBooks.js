import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../../context/auth'

const PurchasedBooks = ({ }) => {
    const { purchasedBook } = useContext(AuthContext)
    const [books, setBooks] = useState(null)
    const navigation = useNavigation()
    useEffect(() => {
        if (books == null) {
            getPurchasedBooks()
        }
    }, [books])
    async function getPurchasedBooks() {
        setBooks(purchasedBook)

     
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Seus livros <Text style={styles.secondTitlePart}>Comprados :)</Text></Text>

                {
                    books !== null
                        ?
                        <FlatList
                            data={books}
                            keyExtractor={item => item.id}
                            numColumns={1}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.viewSearchedBook}>
                                        <Image source={{ uri: item.thumbnail !== undefined ? item.thumbnail.smallThumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fislandpress.org%2Fbooks%2Fprairie-conservation&psig=AOvVaw1L4JH16Ple_SSCVnUT6M1j&ust=1606675974580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDw4cj0pe0CFQAAAAAdAAAAABAD" }}
                                            style={styles.imageResult} />
                                        <Text style={styles.textResult}>{item.name}</Text>
                                        <TouchableOpacity style={styles.buttonRead} onPress={() => { navigation.navigate("Ler") }}>
                                            <Text style={styles.txtRead}>Ler</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />

                        :

                        <Text>Você não possui livros comprados :(</Text>
                }


            </View>


        </ScrollView>
    )
}
export default PurchasedBooks