import React, {Component} from 'react'
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {Metrics} from '../../config/styleconfig'
import Ionicons from 'react-native-vector-icons/Ionicons';
class Four extends  Component{
   constructor(props){
      super(props)
      this.state={

      }
   this.some_option=[
       {
        icon:'ios-basketball',
        text:'这是一',  
       },
       {
        icon:'ios-basketball',
        text:'这是一',  
       },
       {
        icon:'ios-basketball',
        text:'这是一',  
       },
   ]
  this.some_option2=[
      {
          icon:'ios-basketball',
          text:'选项一',
          iconr:'ios-arrow-forward'
      },
      {
        icon:'ios-basketball',
        text:'选项二',
        iconr:'ios-arrow-forward'
    },
    {
        icon:'ios-basketball',
          text:'选项三',
          iconr:'ios-arrow-forward'
    },
    {
        icon:'ios-basketball',
          text:'选项四',
          iconr:'ios-arrow-forward'
    },
  ]  
    
   }
 
    render(){
        
        return(
            <SafeAreaView>
             <ScrollView style={{}}>
            <View style={{
                width:Metrics.CW,
                height:Metrics.CH*.3,
                backgroundColor:'#00FFFF',
                alignItems:'center',
                justifyContent:'center'

                }}>
                <View style={{width:'100%',}}>
                <TouchableOpacity style={{
width:'25%',backgroundColor:'gold',
alignItems:'center',
flexDirection:'row',justifyContent:'space-between',
borderTopRightRadius:10,
borderBottomRightRadius:10,
                }} onPress={()=>{
                   
                    this.props.navigation.navigate('Sign')
                }}>
                   
                    <Ionicons name={'md-calendar'} size={25} style={{marginLeft:Metrics.CW*.05}}/>
                    <Text style={{fontSize:15,marginRight:10}}>签到</Text>
                   
                </TouchableOpacity>
             
                </View>
            <Image source={{uri:'http://img3.redocn.com/tupian/20150519/katongmeishituansucai_3916094.jpg'}} 
            style={{width:80,height:80,borderRadius:40}}/>
            <Text style={{fontSize:18,fontWeight:'800',marginTop:10}}>我最帅</Text>
            </View>
            <View style={{
                width:Metrics.CW*.95,
                marginLeft:'2.5%',height:80,
                backgroundColor:'gold',marginTop:-40,
                flexDirection:'row',borderRadius:8,
                justifyContent:'space-around',alignItems:'center'}}>

             {
                this.some_option.map((item,index)=>{
                return(
                    <TouchableOpacity onPress={()=>{

                    }} style={{alignItems:'center'}}>
                    
               <Ionicons name={item.icon} size={30}/>
               <Text style={{marginTop:5}}>{item.text}</Text>
                    
                    </TouchableOpacity>
                )
                })
             }
            </View>
            {/* 下 列表 */}
            <View style={{
                width:Metrics.CW*.95,
                marginLeft:'2.5%',
                marginTop:20
                }}>
                {
                    this.some_option2.map((item,index)=>{
             return(
                 <TouchableOpacity onPress={()=>{

                 }} style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <View style={{flexDirection:'row'}}>
              <Ionicons name={item.icon} size={30}/>
              <Text>{item.text}</Text>
                </View>
             <Ionicons name={item.iconr} size={30}/>
             </TouchableOpacity>
             )
                    })
                }
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Four
const ys=StyleSheet.create({

})