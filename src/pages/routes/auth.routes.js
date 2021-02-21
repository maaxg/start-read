import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}
        />
          <AuthStack.Screen name="Register" component={Register} options={options}/>
          <AuthStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
       
    </AuthStack.Navigator>
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
export default AuthRoutes;
