import React from 'react'
import { Image} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home/Home'


const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()


export default function homeTabs() {
    return (
        <Tab.Navigator initialRouteName={"Home"} barStyle={{ backgroundColor: '#144F66' }} >
            <Tab.Screen name='Home' component={Home} options={({
                title: 'Início',
                tabBarIcon: ({ tintColor }) =>
                    <Image source={require('../img/imagens_mobile-03.png')} style={{ width: 25, height: 25 }} />
            })} />
            <Tab.Screen name='Home' component={Home} options={{
                title: 'Home',
                tabBarIcon: ({ tintColor }) =>
                    <Image source={require('../img/clipart316163.png')} style={{ width: 25, height: 25 }} />
            }} />
            <Tab.Screen name='Home' component={Home} options={{
                title: 'Home',
                tabBarIcon: ({ tintColor }) =>
                    <Image source={require('../img/imagens_mobile-02.png')} style={{ width: 25, height: 25 }} />
            }} />
            <Tab.Screen name='Home' component={Home} options={{
                title: 'Home',
                tabBarIcon: ({ tintColor }) =>
                    <Image source={require('../img/imagens_mobile-06.png')} style={{ width: 25, height: 25 }} />
            }} />
        </Tab.Navigator>

    )
}


