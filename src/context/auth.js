import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
export const AuthContext = createContext({})


function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [bookToBuy, setBookToBuy] = useState(null)
    const [logged, setLogged] = useState(false)
    const [att, setAtt] = useState(false)
    const [purchasedBook, setPurchasedBook] = useState([])
    var favBooks = []
    const [err, setErr] = useState(false)

    useEffect(() => {
        setStorageToFav()
    }, [])

    async function bookPurchased(book) {
        try {
            var books = purchasedBook
            books.push(book)
            return true && setPurchasedBook(books)
           
        } catch (err) {
            alert("Algo deu errado na compra do seu livro!")
            console.log(err.message)
            return false
        }
    }


    async function searchBookByName(book) {
        try {
            const books = await AsyncStorage.getItem("Fav_books")
            const booksP = JSON.parse(books)
            console.log("booksP")

            var ind;
            booksP.map((item, index) => {
                console.log(item.name.startsWith(book))
                if (item.name.startsWith(book)) {
                    ind = booksP[index]
                }
            })

            const result = booksP.find(el => el.name === book)
            console.log("result")
            console.log(result)
            if (result !== undefined) {
                console.log("listen")
                return result
            }
            return ind

        } catch (err) {
            console.log(err)
        }
    }

    async function setStorageToFav() {
        try {
            const books = await AsyncStorage.getItem("Fav_books")
            const booksP = JSON.parse(books)
            return favBooks = booksP
        } catch (err) {
            console.log(err)
        }
    }
    async function getAuthUser() {
        const userP = await AsyncStorage.getItem("Auth_user")
        const user = JSON.parse(userP)
        return user
    }

    async function setBookToDb(favBooks) {
        try {
            await AsyncStorage.setItem("Fav_books", JSON.stringify(favBooks))
        } catch (err) {
            console.log(err)
        }
    }
    function setBooks(id, author, thumbnail, name, publisher, stars, description, language, like) {
        var notId = false
        if (favBooks == "") {
            return favBooks.push({
                id: id,
                author: author,
                thumbnail: thumbnail,
                name: name,
                publisher: publisher,
                stars: stars,
                description: description,
                language: language,
                like: like
            })
        } else {
            let result = favBooks.find(el => el.id === id)
            if (result === undefined) {
                notId = true
            }
            if (!notId) {
                console.log("present")
                let result = favBooks.find(el => el.id === id)
                if (result === undefined) {
                    return
                } else {
                    if (result.like === true)
                        return result.like = false
                    else
                        return result.like = true
                }
            } else {
                console.log("Not present")
                favBooks.push({
                    id: id,
                    author: author,
                    thumbnail: thumbnail,
                    name: name,
                    publisher: publisher,
                    stars: stars,
                    description: description,
                    language: language,
                    like: like
                })
            }

            setBookToDb(favBooks)

        }

    }

    async function logout(navigation) {
        try {
            setLoading(true)
            await AsyncStorage.removeItem("Auth_user")
            setLogged(false)
            setLoading(false)
            navigation.navigate("Login")


        } catch (err) {
            console.log(err.message)
        }
    }
    function generateId() {
        var min = Math.ceil(1);
        var max = Math.floor(10000);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function login(email, password, navigation) {
        try {
            setLoading(true)
            const users = await AsyncStorage.getItem("User_register")
            const parseUsers = JSON.parse(users)
            console.log(parseUsers)
            parseUsers.map(async item => {
                if (item.email === email && item.password === password) {
                    alert("Usuário conectado com sucesso")
                    await AsyncStorage.setItem("Auth_user", JSON.stringify(item))
                    setLoading(false)
                    setLogged(true)
                    navigation.navigate("Home")
                }
            })

            setLoading(false)
        } catch (err) {
            console.log(err.message)
        }
    }
    //setLoading(false)
    //AsyncStorage.clear()
    async function register(name, email, password, navigation) {
        try {
            setLoading(true)
            var userReg = []
            const id = generateId()
            userReg.push({
                id: id,
                name: name,
                email: email,
                password: password
            })

            await AsyncStorage.setItem("User_register", JSON.stringify(userReg))
            alert("Usuário registrado com sucesso!")
            setLoading(false)
            navigation.goBack()

        } catch (err) {
            alert("Aconteceu um erro ao registrar seu usuário!")
            console.log(err.message)
            setLoading(false)
        }
    }
    return (
        <AuthContext.Provider value={{
            logout, user, logged, loading, register,
            login, setLoading, setLogged,
            getAuthUser, favBooks, setBooks, att, setAtt, searchBookByName,
            bookToBuy, setBookToBuy, bookPurchased, purchasedBook
        }}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthProvider