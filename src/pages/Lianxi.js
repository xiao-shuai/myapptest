import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet,TextInput} from 'react-native'
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

      }
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,}}>
                <ScrollView>
                    <View style={{width:Metrics.CW,height:Metrics.CH*.37,
                        justifyContent:'center',alignItems:'center',}}>
                        <Image source={require('../img/logo.png')} style={ys.img}/>
                        <Text style={{fontSize:20,color:Metrics.themeColor,marginTop:10}}>我爱厨房</Text>
                        <Text style={{fontSize:14,color:Metrics.themeColor,marginTop:10}}>版本V1.0.0</Text>
                    </View>
            {/*  */}
            <Divider style={{backgroundColor:Metrics.themehui3,height:3}}/>
            <View style={ys.xia_tan}>
            <Ionicons name={'ios-call'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>服务客服: 4006-921-233 </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/>

{/*  */}
<View style={ys.xia_tan}>
            <Ionicons name={'ios-call'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>招商电话: 4006-342-564 </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/>
{/*  */}
<View style={ys.xia_tan}>
            <Ionicons name={'ios-mail'} size={Metrics.CW*.08} color={Metrics.themehui2}/>
            <Text style={{fontSize:15,color:Metrics.themehui2,marginLeft:Metrics.CW*.06}}>内容合作: wacf@meishi.cc </Text>     
            </View>
            <Divider style={{height:1,backgroundColor:Metrics.themehui3}}/>
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