import React, {Component} from 'react'
import {View,Text,ScrollView,TextInput,ImageBackground,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'


class Start extends Component{
   constructor(props){
       super(props)
       
    //    this.get_login()
   }
    

   render(){
       return(
       <SafeAreaView>

       </SafeAreaView>
       )
   }
}
export default Start