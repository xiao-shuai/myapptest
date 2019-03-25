import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native'
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

       }
     }

     render(){
         return(
             <SafeAreaView style={{flex:1}}>
                 <ScrollView contentContainerStyle={{width:Metrics.CW*.9,marginLeft:Metrics.CW*.05,alignItems:'center'}}>
                   <Text style={{fontSize:20,marginTop:10,color:Metrics.themehui2}}>春季适合吃什么食物</Text>
                   <Image source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1579252190,512856471&fm=26&gp=0.jpg'}} 
                   style={ys.img}/>
                   <Text style={ys.txt}>
                   春天万物复苏，百花齐放百家争鸣，现代人越来越懂得养生，越来越关注自己的身体健康，那么，春天应该吃什么食物比较好呢？
                   春天天气比较潮湿，人体内湿气也都比较重，可以选择吃一些能够祛湿的食物，比如薏米粥、木棉花炖排骨汤等等。一到春天，人比较容易感冒，可以选择吃一些维生素高的水果，比如猕猴桃、橙子等等，提高自身的免疫力，抵抗外界的病毒。
                   </Text>
                   <Image source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1913729336,417156153&fm=26&gp=0.jpg'}} 
                   style={ys.img}/>
                   <Text style={ys.txt}>胡萝卜的营养价值非常高，适合所有人群食用。有些人特别爱美，喜欢吃一些低脂肪的食物，生吃胡萝卜是一种不错的选择哦，既可以得到人体所需要的营养物质，同时也可以达到减肥养生的目的。而且胡萝卜在春天吃，还可以起到降肝火的作用。不喜欢生吃的朋友，可以跟猪骨一起来煲汤，也可以直接炒胡萝卜来吃，胡萝卜的做法有很多，可以根据自己的喜好来做</Text>
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