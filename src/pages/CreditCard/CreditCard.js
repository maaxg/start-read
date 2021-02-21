import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { AuthContext } from '../../context/auth'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const CreditCard = ({ }) => {
    var refe = useRef("")
    const navigation = useNavigation()
    const { bookToBuy, bookPurchased, purchasedBook } = useContext(AuthContext)
    const [card_holder, setCardHolder] = useState("")
    const [card_number, setCardNumber] = useState("")
    const [installment, setInstallment] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [expiration_month, setExpirationMonth] = useState("")
    const [expiration_year, setExpirationYear] = useState("")
    const [cvv, setCvv] = useState("")

    useEffect(() => {
        if (card_holder.length >= 3 && card_number.length >= 10 &&
            expiration_month.trim() !== "" && expiration_year.trim() !== "" &&
            cvv.trim() !== "" && installment !== null)
            setDisabled(false)
        else
            setDisabled(true)
    }, [card_holder, card_number, installment, expiration_month, expiration_year, cvv])

    function buyBook() {
        if (bookPurchased(bookToBuy)) {
            navigation.navigate("Home")
            alert("Compra concluida com sucesso!")
        }
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Cartão de <Text style={styles.secondTitlePart}>Crédito :)</Text></Text>
                <TextInput style={[styles.input, { marginTop: '5%' }]} placeholder={'Nome do Titular que consta no cartão'} value={card_holder} onChangeText={card_holder => setCardHolder(card_holder)} />
                <TextInputMask
                    type={'custom'}
                    options={{
                        mask: "9999 9999 9999 9999"
                    }}
                    ref={(ref) => refe = ref}
                    style={styles.input} placeholder={'Número do Cartão de Crédito'}
                    value={card_number} onChangeText={card_number => setCardNumber(card_number)}
                />
                <View style={styles.monthYear}>
                    <TextInputMask
                        type={'custom'}
                        options={{
                            mask: '99'
                        }}
                        style={[styles.input, { width: "43%", marginRight: "4%" }]} value={expiration_month}
                        placeholder={'Mês'} onChangeText={expiration_month => setExpirationMonth(expiration_month)}
                        ref={(ref) => refe = ref}
                    />
                    <TextInputMask
                        type={'custom'}
                        options={{
                            mask: '99'
                        }}
                        style={[styles.input, { width: "43%" }]}
                        value={expiration_year} placeholder={'Ano'} onChangeText={expiration_year => setExpirationYear(expiration_year)}
                        ref={(ref) => refe = ref}
                    />
                </View>
                <TextInputMask
                    type={'custom'}
                    options={{
                        mask: '999'
                    }}
                    style={[styles.input]}
                    placeholder={'CVV'} value={cvv} onChangeText={cvv => setCvv(cvv)}
                />
                <View style={styles.containerPrice}>

                    <TouchableOpacity style={styles.button}
                        onPress={() => { setInstallment(1) }}>
                        <View
                            style=
                            {installment === 2 || installment === 3 ? styles.buttonBall : styles.buttonBallSelected} />
                        <Text
                            style={styles.buttonText}>1x de R${(bookToBuy.price / 1).toFixed(2)}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={() => { setInstallment(2) }}>
                        <View style={
                            installment === 1 || installment === 3 ? styles.buttonBall : styles.buttonBallSelected} />
                        <Text
                            style={styles.buttonText}>2x de R${(bookToBuy.price / 2).toFixed(2)}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { setInstallment(3) }}>
                        <View style=
                            {installment === 1 || installment === 2 ? styles.buttonBall : styles.buttonBallSelected} />
                        <Text
                            style={styles.buttonText}>3x de R${(bookToBuy.price / 3).toFixed(2)}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={
                    disabled ? styles.disabledButton : styles.buyButton
                } disabled={disabled} onPress={() => { buyBook() }}>
                    <Text style={styles.buttonTextBuy}>CONCLUIR</Text>
                    <Icon name="shopping-cart" size={30} color={"#F2C230"} />
                </TouchableOpacity>
            </View>


        </ScrollView>

    )
}

export default CreditCard