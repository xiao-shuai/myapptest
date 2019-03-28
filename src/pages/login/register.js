import React, {Component} from 'react'
import {View,Text,ScrollView,TextInput,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import { Metrics } from '../../config/styleconfig';
import Toast, {DURATION} from 'react-native-easy-toast'
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
                <ImageBackground source={require('../../img/login_bg.png')} 
                style={ys.imgbg} resizeMode="stretch">
                <ScrollView>
                    <View style={{marginTop:Metrics.CH*.1}}>
                 <Text style={ys.label_t}>Account</Text>
                 <TextInput style={[ys.t_input]} onChangeText={()=>{

                 }} placeholder="Account no less than 6 characters" />
                 <Text style={[ys.label_t,{marginTop:10,}]}>Password</Text>
                 <TextInput style={[ys.t_input]} onChangeText={()=>{

                 }} placeholder="Password no less than 6 characters" />
               <Text style={[ys.label_t,{marginTop:10,}]}>Confirm password</Text>
                 <TextInput style={[ys.t_input]} onChangeText={()=>{

                 }} placeholder="Password no less than 6 characters"/>
                 {/* btn */}
                 <TouchableOpacity style={[ys.t_input,ys.zc]} onPress={()=>{
                    this.refs.toast.show("Please enter the correct information")
                 }}>
                     <Text style={{color:'white',fontSize:20}}>Registered</Text>
                 </TouchableOpacity>
                 
                 </View>
                </ScrollView>
                
                </ImageBackground>
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
        alignItems:'center',justifyContent:'center',backgroundColor:Metrics.themeColor
    },
    imgbg:{
        width:Metrics.CW,height:'100%',alignItems:'center'
    },
    t_input:{
        width:Metrics.CW*.9,height:Metrics.CH*.06,
        borderRadius:10,fontSize:18,paddingLeft:'5%',
        marginTop:20,borderWidth:2,borderColor:Metrics.themeColor
    },
    label_t:{
        fontSize:20,fontWeight:'600',color:'white'
    }
})
export default Register