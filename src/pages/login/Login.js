import React, {Component} from 'react'
import {View,Text} from 'react-native'


class Login extends  Component{

    render(){
        const info=this.props.navigation.getParam('info')
        return(
            <View>
             <Text>this is login page {info}</Text> 

            </View>
        )
    }
}
export default Login