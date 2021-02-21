import React from 'react';
import Icon from 'react-native-vector-icons/Octicons'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home/Home';
import FavBooks from '../FavBooks/FavBooks'
import Profile from '../Profile/Profile'
import Read from '../Read/Read'
import CreditCard from '../CreditCard/CreditCard'
import BookView from '../../components/BookView/BookView'
import PurchasedBooks from '../PurchasedBooks/PurchasedBooks'

const AppStack = createStackNavigator();
const Bottom = createBottomTabNavigator()

function StackRoute() {
    return (
        <AppStack.Navigator initialRouteName={"Home"}>
            <AppStack.Screen name="Credit Card" component={CreditCard} options={options} />
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <AppStack.Screen name="BookView" component={BookView} options={{headerShown: false}} />
            <AppStack.Screen name="Livros Comprados" component={PurchasedBooks} options={options} />

        </AppStack.Navigator>
    )
}

function AppRoutes() {
    return (
        <Bottom.Navigator initialRouteName={"Home"} tabBarOptions={{
            tabStyle: {
                backgroundColor: "#0F88AE",
            },
            activeTintColor: "#FFF",
        }}>
            <Bottom.Screen name="Home" component={StackRoute} options={({
                title: 'Início',

                tabBarIcon: ({ tintColor }) =>
                    <Icon name="home" size={30} color="#FFF" />
            })} />
            <Bottom.Screen name="Favorite Books" component={FavBooks} options={({
                title: 'Fav Books',
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="bookmark" size={30} color="#FFF" />
            })} />
            <Bottom.Screen name="Ler" component={Read} options={({
                title: 'Ler',
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="book" size={30} color="#FFF" />
            })} />
            <Bottom.Screen name="Profile" component={Profile} options={({
                title: 'Profile',
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="person" size={30} color="#FFF" />
            })} />
        </Bottom.Navigator>

    );
}
const options = {
    headerTintColor: '#FFF',

    headerStyle: {
        backgroundColor: '#0F88AE',
    },
    headerTitleStyle: {
        fontWeight: '200',
        color: '#FFF'
    }
}



export default AppRoutes;
