import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider } from 'react-native-elements'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar,} from 'react-native-scrollable-tab-view'
@inject(["oneStore"])
@observer // 监听当前组件

class  NoticeSys extends Component{
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
       if(this.state.isshow){
         return (
          <View style={{justifyContent: 'center',height:Metrics.CH*.8}}>
          <ActivityIndicator size="large" color={Metrics.themeColor} />
          </View>
         )
       }
         return(
             <SafeAreaView style={{flex:1}}>
                 <ScrollView contentContainerStyle={{width:Metrics.CW*.9,marginLeft:Metrics.CW*.05,alignItems:'center'}}>
                   <Text style={{fontSize:20,marginTop:10,color:Metrics.themehui2}}>What food is good for spring</Text>
                   <Image source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1579252190,512856471&fm=26&gp=0.jpg'}} 
                   style={ys.img}/>
                   <Text style={ys.txt}>
                   Spring everything revives, a hundred flowers bloom a hundred schools of thought contend for, modern people more and more know to keep in good health, pay more and more attention to oneself body health, so, what food should eat in spring is better?In spring, the weather is humid and the humidity inside the body is heavy. You can choose to eat some clearing damp food, such as the seed of Job’s tears porridge, kapok stewed spareribs soup and so on. One to the spring, people are more likely to catch a cold, you can choose to eat some high vitamin fruit, such as kiwi, orange and so on, to improve their own immunity, resistance to the virus outside.
                   </Text>
                   <Image source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1913729336,417156153&fm=26&gp=0.jpg'}} 
                   style={ys.img}/>
                   <Text style={ys.txt}>The nutritional value of carrots is very high, suitable for all people to eat. Some people love the United States especially, like to eat a few low adipose food, raw carrot is a kind of right choice, can get the nutrition material that human body place needs already, also can achieve reduce weight at the same time the goal that keep in good health. And carrot is eaten in spring, still can rise to fall the action of irascibility. Do not like the friend that eat raw, can come to bao tang together with pig bone, also can fry carrot to eat directly, the practice of carrot has a lot of, can do according to oneself be fond of</Text>
                 </ScrollView>
             </SafeAreaView>
         )
     }
}
 const ys=StyleSheet.create({
img:{
  width:'100%',height:Metrics.CH*.3,marginTop:15
},
txt:{
  fontSize:17,marginTop:15,letterSpacing:1,lineHeight:20,color:Metrics.themehui2
}

 })
export default NoticeSys