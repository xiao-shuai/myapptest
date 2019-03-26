import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider ,SearchBar} from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'

class Lianxi extends Component {
    constructor(props){
      super(props)
      this.state={
       isshow:true
      }
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
            <SafeAreaView style={{flex:1,}}>
                <ScrollView>
                    <View style={{width:Metrics.CW,height:Metrics.CH*.37,
                        justifyContent:'center',alignItems:'center',}}>
                        <Image source={require('../img/logo.png')} style={ys.img}/>
                        <Text style={{fontSize:20,color:Metrics.themeColor,marginTop:10}}>LoveKitchen</Text>
                        <Text style={{fontSize:14,color:Metrics.themeColor,marginTop:10}}>versionV1.0.0</Text>
                    </View>
            {/*  */}
            <Divider style={{backgroundColor:Metrics.themehui3,height:3}}/>
            {/* <View style={ys.xia_tan}>
            <Ionicons name={'ios-call'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>Customer service telephone: 4006-921-233 </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/> */}

{/*  */}
<View style={ys.xia_tan}>
            <Ionicons name={'ios-call'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>China merchants call: 4006-342-564 </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/>
{/*  */}
{/* <View style={ys.xia_tan}> */}
            {/* <Ionicons name={'ios-mail'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>Content of the cooperation: wacf@meishi.cc </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/> */}
            {/*  */}
            <View style={ys.xia_tan}>
            <Ionicons name={'ios-mail'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>Email: Adsmeishi@meishi.cc </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/>
                </ScrollView>
           
            </SafeAreaView>
        )
    }
}
const ys= StyleSheet.create({
    img:{
        width:Metrics.CW*.3,
       height:Metrics.CW*.3,
       borderRadius:Metrics.CW*.15
    },
    xia_tan:{
        width:Metrics.CW*.9,marginLeft:Metrics.CW*.05,
        height:Metrics.CH*.1,
        alignItems:'center',
        // justifyContent:'space-between',
        flexDirection:'row'
    }
})
export default Lianxi