import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,
    ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider ,SearchBar} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

class Search extends Component{
   constructor(props){
       super(props)
       this.state={
        isshow:true
       }

   }
s_btn=()=>{
    
}
  
 componentWillMount(){
    fetch('http://rap2api.taobao.org/app/mock/163155/userinfo').then(res=>{
        return res.json()
      } ).then(res=>{
        this.setState({isshow:false})
      }).catch(err=>{
        console.log('err--!',err)
      })
 }  

   render(){
    if(this.state.isshow){
        return (
         <View style={{justifyContent: 'center',height:Metrics.CH*.8}}>
         <ActivityIndicator size="large" color={Metrics.themeColor} />
         </View>
        )
      }
       return(
       <SafeAreaView style={{flex:1,width:Metrics.CW,alignItems:'center'}}>
       <ScrollView style={{width:Metrics.CW*.9,}}>
       {/*  */}
        <View style={{ justifyContent:'space-between',
        flexDirection:'row',marginTop:8, alignItems:'center',}}>
            <TextInput style={ys.input}/>
            <TouchableOpacity onPress={()=>{
         
            }} style={ys.s_btn}>
                <Text style={{fontSize:16,fontWeight:'500',color:Metrics.themehui2}}>搜索</Text>
            </TouchableOpacity>
        </View>
        <Divider style={{backgroundColor:Metrics.themehui3,marginTop:10,height:2}}/>
        {/*  */}
   
       </ScrollView>
       </SafeAreaView>
       )
   }
}
const ys=StyleSheet.create({
    input:{
        paddingLeft :15,
        height:Metrics.CW*.1,
        width:Metrics.CW*.7,
        borderRadius:Metrics.CW*.06,
        borderColor:Metrics.themehui2,
        borderWidth:1,
    },
    s_btn:{
        width:Metrics.CW*.18,
        borderColor:Metrics.themehui2,
        borderWidth:1,
        height:'100%',alignItems:'center',
        justifyContent:'center',
        borderRadius:18
        }
    })
export default Search;