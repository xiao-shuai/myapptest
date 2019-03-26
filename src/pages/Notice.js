import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,
  ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider, Icon } from 'react-native-elements'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar,} from 'react-native-scrollable-tab-view'
@inject(["oneStore"])
@observer // 监听当前组件
class Notice extends Component{
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
           <ScrollableTabView renderTabBar={()=><ScrollableTabBar/>} 
           tabBarActiveTextColor={Metrics.themeColor}
           tabBarInactiveTextColor={Metrics.themehui2}
           tabBarUnderlineStyle={{backgroundColor:Metrics.themeColor,}}
           tabBarTextStyle={{fontSize:18}} 
           >
       <ScrollView tabLabel='system' style={{}}>
       <TouchableOpacity style={{width:Metrics.CW*.9,
        marginLeft:Metrics.CW*.05,
        marginTop:10
        }} onPress={()=>{
            this.props.navigation.navigate('NoticeSys')
            }}>
          <Text style={{fontSize:16,color:Metrics.themehui2}}>When Spring Festival comes, what kind of food should we eat?</Text>
          <Text style={{fontSize:15,marginTop:5,color:Metrics.themehui2}}>2019-3-3  08:20:10</Text>
         <Divider style={{height:2,marginTop:8,backgroundColor:Metrics.themehui3}}/>
       </TouchableOpacity >
      

       </ScrollView>
       <ScrollView tabLabel='mine' contentContainerStyle={{
         width:Metrics.CW,
        height:Metrics.CH*.6,justifyContent:'center',alignItems:'center'}}>
        <Ionicons name={'ios-happy'} size={60}  color={Metrics.themehui3}/>
          <Text  style={{color:Metrics.themehui}}>No word yet</Text>
       </ScrollView>

           </ScrollableTabView>

          </SafeAreaView>
      )
  }
}
const ys=StyleSheet.create({

})
export default Notice;