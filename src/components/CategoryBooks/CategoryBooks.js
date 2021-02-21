import React, { useState, useEffect } from "react"
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from "react-native"
import { searchByCategory } from "../../call_apis/Books"
import BookView from '../BookView/BookView'
import { styles } from './styles'
const CategoryBooks = ({category}) => {
    const [loading, setLoading] = useState(false)
    const [itemBook, setItemBook] = useState(null)
    const [visible, setVisible] = useState(false)
    const [resultBooks, setResultBooks] = useState(null)
    useEffect(() => {
        searchBooks()
    }, [])
    async function searchBooks() {
        try {
            setLoading(true)
            setResultBooks(await searchByCategory(category))
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err.message)
        }
    }
    return (
        loading
            ?
            <ActivityIndicator size={"large"} animating={true} color={"#F2C230"} />
            :
            <View style={{ flex: 1, width: "100%", height: '30%' }}>
                {resultBooks !== undefined && resultBooks !== null
                    ?
                    <FlatList
                        data={resultBooks}
                        extraData={resultBooks}
                        removeClippedSubviews={true}
                        maxToRenderPerBatch={4}
                        horizontal
                        keyExtractor={item => item.id}
                        style={styles.flatList}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.viewSearchedBook} onPress={() => { setVisible(true); setItemBook(item) }}>

                                    <Image source={{ uri: item.imageLinks !== undefined ? item.imageLinks.smallThumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fislandpress.org%2Fbooks%2Fprairie-conservation&psig=AOvVaw1L4JH16Ple_SSCVnUT6M1j&ust=1606675974580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDw4cj0pe0CFQAAAAAdAAAAABAD" }}
                                        style={styles.imageResult} />
                                    <Text style={styles.textResult}>{item.name}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />
                    :
                    <Text style={styles.categoryTitle}>Algo deu errado ao carregar seus livros :(</Text>
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
            </View>
    )
}
export default CategoryBooks