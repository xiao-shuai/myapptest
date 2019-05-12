import React, {Component} from 'react'
import {View,Text,ScrollView,
    TextInput,ImageBackground,Image,
    StyleSheet,TouchableOpacity,ActivityIndicator,
    AsyncStorage} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'
import {Metrics} from '../config/styleconfig'
import LinearGradient from 'react-native-linear-gradient';
class Like extends Component{
   constructor(props){
       super(props)
       this.state={
        isshow:true
    }
   }
    
componentWillMount(){
    fetch('http://food.blitz.work:10040/v1/cookbooks/cores/').then(res=>{
        return res.json()
 }
 
 )
 .then(res=>{
     console.log("shuju conlection",res.results)
     this.setState({
         isshow:false,
         data:res.results
        })
     
 }).catch(err=>{
     console.log("err",err)
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
       <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ScrollView contentContainerStyle={{width:Metrics.CW*.9,}} showsVerticalScrollIndicator={false}>
      {
          this.state.data.slice(2,5).map((item,index)=>{
                 return(
                     <LinearGradient colors={['#c2e59c','#64b3f4']} style={{marginTop:10,borderRadius:8,padding:6}}>
                         <TouchableOpacity onPress={()=>{
                   this.props.navigation.navigate('Detail2',{info:item})
                         }} style={{
                            //  backgroundColor:Metrics.themehui3,
                             marginTop:10,borderRadius:10,marginBottom:20}}>
                         <View  style={{flexDirection:'row',alignItems:'center'}}>
                             <Image source={{uri:item.user.avatar}} style={{width:Metrics.CW*.16,height:Metrics.CW*.16,borderRadius:Metrics.CW*.08,marginTop:10}}/>
                             <Text style={{fontSize:20,
                             color:'white',
                             marginLeft:"10%"}}>{
                                 item.description.length>20?
                                 item.description.substr(0,20)+'..'
                                 :
                                 item.description
                                 }</Text>
                         </View>
                         <Image source={{uri:item.cover}} style={{width:'100%',height:Metrics.CH*.3,marginTop:15,borderRadius:8,marginBottom:10}}/>   

                         </TouchableOpacity>
                         </LinearGradient>

                 )
          })
      }

    </ScrollView>

       </SafeAreaView>
       )
   }
}
export default Like