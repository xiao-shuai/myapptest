import React, {Component} from 'react'
import {View,Text,ScrollView,TextInput,
    ImageBackground,StyleSheet,TouchableOpacity,
    Image
} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import { Metrics } from '../../config/styleconfig';
import Toast, {DURATION} from 'react-native-easy-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Register extends  Component{
    constructor(props){
        super(props)
        this.state={
         isshow:true
        }
    }
    componentWillMount(){
        fetch('http://rap2api.taobao.org/app/mock/163155/gaoshilist').then(res=>{
            return res.json()
          } ).then(res=>{
            this.setState({isshow:false})
          }).catch(err=>{
            console.log('err--!',err)
          })
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                
               <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
                    <Image source={require('../../img/logbg.jpg')} style={{
                        width:Metrics.CW,
                        height:Metrics.CH*.3,
                        resizeMode:"cover"
                    }}/>
                    
                    <View style={{
                                  marginTop:-Metrics.CH*.15,
                                  width:Metrics.CW*.95,
                                  backgroundColor:'white',
                                  padding:10,
                                  shadowOpacity:.8,
                                  shadowColor:Metrics.themeColor,
                                  shadowRadius:5,
                                  shadowOffset:{width:3,height:5},
                                  borderRadius:5
                        }}>
                 {/* <Text style={ys.label_t}>Account</Text> */}
                 <TextInput style={[ys.t_input]} onChangeText={()=>{

                 }} placeholder="Account no less than 6 characters" />
                 {/* <Text style={[ys.label_t,{marginTop:0,}]}>Password</Text> */}
                 <TextInput style={[ys.t_input]} onChangeText={()=>{

                 }} placeholder="Password no less than 6 characters" />
               {/* <Text style={[ys.label_t,{marginTop:0,}]}>Confirm password</Text> */}
                 <TextInput style={[ys.t_input]} onChangeText={()=>{

                 }} placeholder="Confirm password"/>
                 {/* btn */}
                 <TouchableOpacity style={[ys.t_input,ys.zc]} onPress={()=>{
                    this.refs.toast.show("Please enter the correct information")
                 }}>
                     <Text style={{color:'white',fontSize:20}}>Registered</Text>
                 </TouchableOpacity>
                 
                 </View>
               
                 </KeyboardAwareScrollView>
               
                <Toast ref="toast" style={{backgroundColor:Metrics.themehui2}} 
                 position='top' 
                opacity={0.5}
                />
            </SafeAreaView>
        )
    }
}
const ys=StyleSheet.create({
    zc:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Metrics.themeColor,
        marginTop:20
    },
    imgbg:{
        width:Metrics.CW,height:'100%',alignItems:'center'
    },
    t_input:{
        width:Metrics.CW*.9,height:Metrics.CH*.06,
        borderRadius:10,
        fontSize:18,
        paddingLeft:'5%',
        marginTop:20,
        borderWidth:2,borderColor:Metrics.themeColor
    },
    label_t:{
        fontSize:20,fontWeight:'600',color:'red'
    }
})
export default Register