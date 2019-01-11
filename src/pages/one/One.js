import React, {Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

class One extends  Component{

    render(){
        return(
            <View style={{marginTop:200,marginLeft:200}}>
             <Text>this is one page </Text> 
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Login',{info:'6666'})
             }}>
            <Ionicons name='md-stopwatch' size={30}/>
             </TouchableOpacity>
    
            </View>
        )
    }
}
export default One