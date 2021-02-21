import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from '../../components/Search/Search'
import Books from '../Books/Books'
import BookView from '../../components/BookView/BookView'
import { styles } from './styles'
import { searchByname } from '../../call_apis/books'
import Chat from '../Chat/Chat'
import {useNavigation} from '@react-navigation/native'
const Home = ({}) => {
    const navigation = useNavigation()
    const [book, setBook] = useState("")
    const [visible, setVisible] = useState(false)
    const [resultBook, setResultBook] = useState(null)
    const [itemBook, setItemBook] = useState(null)
    const [showChat, setShowChat] = useState(false)
    console.log(book === "" ? "oi" : "opa")
    useEffect(() => {
        searchBook()
    }, [book])
    async function searchBook() {
        if (book !== "") {
            setTimeout(async function () {
                setResultBook(await searchByname(book))
            }, 800)
        }
    }
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.topIcons}>
                    <TouchableOpacity onPress={() => { setShowChat(true) }} style={styles.btnChat}>
                        <Icon name="wechat" size={30} color={'#0F88AE'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("Livros Comprados") }} style={styles.btnChat}>
                        <Icon name="shopping-cart" size={30} color={'#0F88AE'} />
                    </TouchableOpacity>
                </View>
                <Search value={book} setValue={setBook} />
                {
                    book !== "" && resultBook !== null && resultBook !== undefined
                        ?
                        <FlatList
                            data={resultBook}
                            keyExtractor={item => item.id}
                            numColumns={1}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => { setVisible(true); setItemBook(item) }}>
                                        <View style={styles.viewSearchedBook}>
                                            <Image source={{ uri: item.imageLinks !== undefined ? item.imageLinks.smallThumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fislandpress.org%2Fbooks%2Fprairie-conservation&psig=AOvVaw1L4JH16Ple_SSCVnUT6M1j&ust=1606675974580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDw4cj0pe0CFQAAAAAdAAAAABAD" }}
                                                style={styles.imageResult} />
                                            <Text style={styles.textResult}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                        :
                        <Books />
                }
                {
                    visible
                        ?
                        <BookView
                    
                            visible={visible}
                            setVisible={setVisible}
                            id={itemBook.id}
                            name={itemBook.name}
                            publisher={itemBook.publisher}
                            thumbnail={itemBook.imageLinks}
                            description={itemBook.description}
                            stars={itemBook.stars}
                            language={itemBook.language}
                            author={itemBook.author} 
                            price={itemBook.price}
                            />

                        :
                        null
                }
                <Chat 
                    showChat={showChat}
                    setShowChat={setShowChat}/>
                
            </View>

        </ScrollView>
    )
}

export default Home