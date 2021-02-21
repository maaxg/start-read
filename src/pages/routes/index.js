import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth'
import {View,ActivityIndicator} from 'react-native'
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
    const {signed,loading,logged} = useContext(AuthContext)
   
    if(loading){
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color='#144F66'/>
      </View>

    }

    return(
      
      logged  ?  <AppRoutes/> : <AuthRoutes/> 
      
     )
 
}

export default Routes;