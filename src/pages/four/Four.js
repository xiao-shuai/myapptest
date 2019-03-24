import React, {Component} from 'react'
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {Metrics} from '../../config/styleconfig'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
class Four extends  Component{
   constructor(props){
      super(props)
      this.state={

      }
   this.some_option=[
       {
        icon:'ios-list-box',
        text:'作品',  
       },
       {
        icon:'ios-pricetags',
        text:'关注',  
       },
       {
        icon:'ios-people',
        text:'粉丝',  
       },
   ]
  this.some_option2=[
      {
          icon:'ios-notifications',
          text:'我的消息',
          iconr:'ios-arrow-forward'
      },
      {
        icon:'ios-star-outline',
        text:'我的收藏',
        iconr:'ios-arrow-forward'
    },
    {
        icon:'ios-heart-empty',
          text:'我的喜欢',
          iconr:'ios-arrow-forward'
    },
    {
        icon:'ios-mail',
          text:'联系我们',
          iconr:'ios-arrow-forward'
    },
  ]  
    
   }
 
    render(){
        
        return(
            <SafeAreaView style={{flex:1}}>
             <ScrollView style={{}}>
              <View style={{alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'500',color:Metrics.th}}>我的</Text>
              </View> 
              <ImageBackground style={{width:Metrics.CW,marginTop:5,
                height:Metrics.CH*.25,}} source={require('../../img/mine_bg.jpeg')} >
            <View style={{
                width:Metrics.CW,
                height:Metrics.CH*.25,
                alignItems:'center',
                justifyContent:'center',
                // backgroundColor:'#F0F8FF',
                
                }}>
               
                <View style={{
                    width:'100%',justifyContent:'space-between',
                    flexDirection:'row',
                    width:Metrics.CW*.95,
                    alignItems:'center'
                   }}>
               
              <View  style={{height:Metrics.CH*.15,}}>

              <Image source={{uri:'http://img3.redocn.com/tupian/20150519/katongmeishituansucai_3916094.jpg'}} 
            style={{width:80,height:80,borderRadius:40}}/>
             <Text style={{marginTop:8,color:Metrics.themehui2}}>每个吃货都是有签名的介绍下自己吧！</Text>
              </View>
             
            <View style={{height:Metrics.CH*.15,alignItems:'center',justifyContent:'space-around'}}>
            <Text style={{fontSize:25,fontWeight:'500',color:Metrics.themehui2}}>美食家</Text>
            <View style={{
                width:Metrics.CW*.2,
            height:Metrics.CW*.08,
               alignItems:'center',
                justifyContent:'center',borderRadius:15,
                borderWidth:1,borderColor:Metrics.themehui2,marginTop:20
                }}>
            <Text style={{fontSize:16,letterSpacing:3,color:Metrics.themehui2,}}>编辑</Text>
            </View>
            </View>
            
                </View>
            
            </View>
            </ImageBackground>
            <View style={{
                width:Metrics.CW*.95,
                marginLeft:'2.5%',height:80,
                backgroundColor:Metrics.themehui3,
                marginTop:-40,
                flexDirection:'row',borderRadius:8,
                opacity:.5,
                justifyContent:'space-around',alignItems:'center'}}>

             {
                this.some_option.map((item,index)=>{
                return(
                    <TouchableOpacity onPress={()=>{

                    }} style={{alignItems:'center'}} key={index}>
                    
               <Ionicons name={item.icon} size={30}  color={Metrics.themehui2}/>
               <Text style={{marginTop:5}}>{item.text}</Text>
                    
                    </TouchableOpacity>
                )
                })
             }
            </View>
         {/* xian */}
            <Divider  style={{backgroundColor:Metrics.themehui3,height:5,marginTop:15}}/>
           
            {/* 下 列表 */}
            <View style={{
                width:Metrics.CW*.95,
                marginLeft:'2.5%',
                marginTop:20
                }}>
                {
                    this.some_option2.map((item,index)=>{
             return(
                 <View key={index}>
                 <TouchableOpacity onPress={()=>{

                 }} style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}} >
             <View style={{flexDirection:'row',alignItems:'center'}}>
             <View style={{width:Metrics.CW*.08}}>
              <Ionicons name={item.icon} size={30} style={{color:Metrics.themehui2,fontSize:30}}/>
              </View>
              <Text style={{marginLeft:Metrics.CW*.05,fontSize:18,color:Metrics.themehui2}}>{item.text}</Text>
                </View>
             <Ionicons name={item.iconr} size={30} style={{fontSize:20,color:Metrics.themehui}}/>

             </TouchableOpacity>
             <Divider style={{backgroundColor:Metrics.themehui3,height:2,marginTop:15}}/>
             </View>
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
  left_qd:{
    width:'25%',
    alignItems:'center',
    flexDirection:'row',justifyContent:'space-between',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  right_bianji:{
    width:'25%',
    alignItems:'center',
    flexDirection:'row',justifyContent:'space-between',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  }
})