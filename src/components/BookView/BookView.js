import React, { useState, useContext, useEffect } from "react"
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage'
import { styles } from './styles'
import { AuthContext } from '../../context/auth'
import { useNavigation } from '@react-navigation/native'
const backURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fislandpress.org%2Fbooks%2Fprairie-conservation&psig=AOvVaw1L4JH16Ple_SSCVnUT6M1j&ust=1606675974580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDw4cj0pe0CFQAAAAAdAAAAABAD"
const BookView = ({ id, author, thumbnail, name, price, visible, setVisible, publisher, stars, description, language }) => {
    const { setBooks, favBooks, att, setAtt, setBookToBuy,  } = useContext(AuthContext)
    const navigation = useNavigation()
    const [book, setBook] = useState(null)
    console.log(id, name, thumbnail, publisher)
    useEffect(() => {
        const result = favBooks.find(el => el.id === id)
        if (result !== undefined) {
            if (book === null || result.like !== book.like)
                getBook(id)

        }
        getBook(id)

    }, [favBooks])
    async function getBook(id) {
        console.log("entrei aqui de prima")
        const bookP = await AsyncStorage.getItem("Fav_books")
        const book = JSON.parse(bookP)
        if (book === null) {
            return setBook({ id: id, like: false })
        }
        const result = book.find(el => el.id === id)
        if (result === undefined) {
            return
        } else {
            return setBook(result)
        }
    }

    function goToCredit() {
        setBookToBuy({
            id: id,
            name: name,
            author: author,
            thumbnail: thumbnail,
            publisher: publisher,
            stars: stars,
            description: description,
            language: language,
            price: price,
        })
        setVisible(false)
        navigation.navigate("Credit Card")
    }
    async function markBook(id) {
        if (book === null) {
            setBooks(id, author, thumbnail, name, publisher, stars, description, language, true)
            console.log("key")
            return setBook({
                id: id,
                name: name,
                author: author,
                thumbnail: thumbnail,
                publisher: publisher,
                stars: stars,
                description: description,
                language: language,
                like: true
            })
        } else {
            if (book.id === id && book.like === true) {
                console.log("key2")
                setBooks(id, author, thumbnail, name, publisher, stars, description, language, false)
                return setBook({
                    id: id,
                    name: name,
                    author: author,
                    thumbnail: thumbnail,
                    publisher: publisher,
                    stars: stars,
                    description: description,
                    language: language,
                    like: false
                })
            }
            else if (book.id === id && book.like === false) {
                setBooks(id, author, thumbnail, name, publisher, stars, description, language, true)
                console.log("key3")
                return setBook({
                    id: id,
                    name: name,
                    author: author,
                    thumbnail: thumbnail,
                    publisher: publisher,
                    stars: stars,
                    description: description,
                    language: language,
                    like: true
                })
            }

        }

    }

    return (
        <Modal visible={visible}>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.backButton}>
                <Icon name="arrowleft" size={30} color={"#0F88AE"} />
                <Text style={styles.textBack}>Voltar</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.viewSearchedBook}>
                    <Image source={{
                        uri: thumbnail
                            !== undefined
                            ?
                            thumbnail.thumbnail
                            :
                            backURL
                    }}

                        style={styles.imageResult} />
                </View>
                <TouchableOpacity style={styles.buyButton} onPress={() => {
                    goToCredit()

                }}>
                    <Text style={styles.txtPrice}>Comprar R${price}</Text>
                </TouchableOpacity>
                <View style={styles.favBook}>
                    <Text style={styles.favText}>Marcar como favorito: </Text>
                    <TouchableOpacity onPress={() => markBook(id)}>
                        {
                            book !== null && book !== undefined
                                ?
                                book.id === id && book.like === true
                                    ?
                                    <Icon name={"heart"} size={25} color={"red"} />

                                    :
                                    <Icon name={"heart"} size={25} color={"gray"} />
                                :
                                <Icon name={"heart"} size={25} color={"gray"} />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={styles.textResult}>{author}</Text>
                <Text style={styles.stars}>Classificação: {stars} estrelas</Text>
                <Text style={styles.publisher}>Editora:{publisher}</Text>
                <Text style={styles.lang}>Linguagem: {language === undefined ? "Desconhecida" : language.toUpperCase()}</Text>
                <Text style={styles.description}>{description}</Text>
            </ScrollView>
        </Modal>
    )
}

export default BookView