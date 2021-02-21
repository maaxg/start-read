import React, { useState, useContext, useEffect, useCallback } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native'
import { AuthContext } from '../../context/auth'
import AsyncStorage from '@react-native-community/async-storage'
import { styles } from './styles'
import Search from '../../components/Search/Search'
import BookView from '../../components/BookView/BookView'

const FavBooks = ({ }) => {
    const { favBooks, searchBookByName } = useContext(AuthContext)
    const [book, setBook] = useState("")
    const [bookResult, setBookResult] = useState(null)
    const [viewBook, setViewBook] = useState(null)
    const [visible, setVisible] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [favorites, setFavorites] = useState(null)
    console.log(book, bookResult)
    useEffect(() => {
        getBooks()
        if (book !== "") {
            searchFavBook()
        }

    }, [favBooks, book])
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    async function searchFavBook() {
        try {
            if (book !== "" && book.length >= 3) {
                setTimeout(async function () {
                    setBookResult(await searchBookByName(book))
                }, 800)
            }
        } catch (err) {
            console.log(err)
        }
    }

    async function getBooks() {
        try {
            const book = await AsyncStorage.getItem("Fav_books")
            const bookParse = JSON.parse(book)
            setFavorites(bookParse)
        } catch (err) {
            console.log(err)
        }
    }
    const onRefresh = useCallback(() => {
        getBooks()
        wait(300).then(() => setRefreshing(false));
    }, []);
    return (
        <ScrollView style={styles.scrollContainer}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.container}>
                <Text style={styles.title}>Seus livros <Text style={styles.secondTitlePart}>Favoritos :)</Text></Text>
                <Search value={book} setValue={setBook} />
                {
                    favorites !== null && book === "" && (bookResult === undefined || bookResult === null)
                        ?
                        <FlatList
                            data={favorites}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                console.log("hey listen")
                                return (
                                    <TouchableOpacity onPress={() => { setVisible(true); setViewBook(item) }}>
                                        <View style={styles.viewSearchedBook}>
                                            <Image source={{ uri: item.thumbnail.smallThumbnail !== undefined ? item.thumbnail.smallThumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fislandpress.org%2Fbooks%2Fprairie-conservation&psig=AOvVaw1L4JH16Ple_SSCVnUT6M1j&ust=1606675974580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDw4cj0pe0CFQAAAAAdAAAAABAD" }}
                                                style={styles.imageResult} />
                                            <Text style={styles.textResult}>{item.author}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                        :

                        bookResult === undefined || bookResult === null
                            ?
                            <Text>Desculpe, mas não econtramos o seu livro</Text>
                            :

                            <TouchableOpacity onPress={() => { setVisible(true); setViewBook(bookResult) }}>
                                <View style={styles.viewSearchedBook}>
                                    <Image source={{ uri: bookResult.thumbnail.smallThumbnail !== undefined ? bookResult.thumbnail.smallThumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fislandpress.org%2Fbooks%2Fprairie-conservation&psig=AOvVaw1L4JH16Ple_SSCVnUT6M1j&ust=1606675974580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDw4cj0pe0CFQAAAAAdAAAAABAD" }}
                                        style={styles.imageResult} />
                                    <Text style={styles.textResult}>{bookResult.author}</Text>
                                </View>
                            </TouchableOpacity>





                }

                {
                    visible
                        ?
                        <BookView
                            visible={visible}
                            setVisible={setVisible}
                            id={viewBook.id}
                            name={viewBook.name}
                            publisher={viewBook.publisher}
                            thumbnail={viewBook.thumbnail}
                            description={viewBook.description}
                            stars={viewBook.stars}
                            language={viewBook.language}
                            author={viewBook.author} />

                        :
                        null

                }
            </View>

        </ScrollView>
    )
}
export default FavBooks