import { GoogleBookSearch, BookSearch } from 'react-native-google-books';
import axios from 'axios'
const api_key = ""

function generatePrice() {
    var min = 10.00;
    var max = 100.00;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function searchByname(book) {
    try {
        let books = await BookSearch.searchbook(book, api_key);
        // let volumeInfo = books.data.volumeInfo
        let booksArr = []

        books.data.map(item => {
            console.log("-----------------")
            console.log(item)
            booksArr.push({
                id: item.id,
                name: item.volumeInfo.title,
                author: item.volumeInfo.authors,
                publisher: item.volumeInfo.publisher,
                publishDate: item.volumeInfo.publishedDate,
                categories: item.volumeInfo.categories,
                imageLinks: item.volumeInfo.imageLinks,
                description: item.volumeInfo.description,
                stars: item.volumeInfo.averageRating,
                language: item.volumeInfo.language,
                price: generatePrice()
            })
        })
        return booksArr
    } catch (err) {
        console.log(err.message)
    }
}

export async function searchByCategory(category) {
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&orderBy=newest&maxResults=5&key=${api_key}`)
        .then(resp => {
            let booksArr = []
            resp.data.items.map(item => {
                booksArr.push({
                    id: item.id,
                    name: item.volumeInfo.title,
                    author: item.volumeInfo.authors,
                    publisher: item.volumeInfo.publisher,
                    publishDate: item.volumeInfo.publishedDate,
                    categories: item.volumeInfo.categories,
                    imageLinks: item.volumeInfo.imageLinks,
                    description: item.volumeInfo.description,
                    stars: item.volumeInfo.averageRating,
                    language: item.volumeInfo.language,
                    price: generatePrice()
                })
            })
            console.log(booksArr)
            return booksArr
        }).catch(err => {
            console.log(err.message)
        })

}

export async function getBookById(id) {
    try {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${id}&orderBy=newest&maxResults=5&key=${api_key}`)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err.message)
            })
    }catch(err){
        console.log(err)
    }

}