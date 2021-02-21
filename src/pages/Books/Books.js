import React, { useState} from "react"
import { View, Text, ActivityIndicator} from "react-native"
import CategoryBooks from '../../components/CategoryBooks/CategoryBooks'
import { styles } from './styles'
const Books = ({ }) => {
    const [loading, setLoading] = useState(false)
    const [itemBook, setItemBook] = useState(null)
    const [visible, setVisible] = useState(false)
    const [resultBooks, setResultBooks] = useState(null)

    return (
        loading
            ?
            <ActivityIndicator size={"large"} animating={true} color={"#F2C230"} />
            :
            <View style={{ flex: 1, width: "100%", height: '30%' }}>
                <Text style={styles.categoryTitle}>Romance</Text>
                <CategoryBooks category={"love"}/>
                <Text style={styles.categoryTitle}>Aventura</Text>
                <CategoryBooks category={"adventure"}/>
                <Text style={styles.categoryTitle}>Ação</Text>
                <CategoryBooks category={"action"}/>
                <Text style={styles.categoryTitle}>Mangá</Text>
                <CategoryBooks category={"manga"}/>
            </View>
    )
}
export default Books