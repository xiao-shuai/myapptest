import React, {Component} from 'react'
import {View,Text,StyleSheet,ScrollView,TextInput,
    Image, AsyncStorage,TouchableOpacity,
    ActivityIndicator,
    ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {Metrics} from '../config/styleconfig'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider,Badge } from 'react-native-elements';
import {inject,observer} from 'mobx-react'
import Toast, {DURATION} from 'react-native-easy-toast'

class Feedback extends Component{
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
     console.log("shuju",res.results)
     this.setState({
         isshow:false,
        
        })
     
 }).catch(err=>{
     console.log("err",err)
 })
}
sub=()=>{
   if(this.state.value==undefined){
        this.refs.toast.show('Please enter information')
   }else{
    this.refs.toast.show('Submitted successfully')
   }
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
            <ScrollView contentContainerStyle={{
                width:Metrics.CW*.9,
                marginLeft:Metrics.CW*.05,
                alignItems:'center',
                // backgroundColor:'red'
                }}>
           <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginTop:15}}>
               <View>
                   {/* <Text>1</Text> */}
               </View>
               <Badge value={'Submit'} containerStyle={{height:Metrics.CW*.08,backgroundColor:Metrics.themeColor}} onPress={()=>{
            this.sub()
               }}/>
           </View>
          <TextInput  style={[ys.input,{paddingLeft:15,paddingTop:15,fontSize:18}]} multiline={true} onChangeText={(value)=>{
         this.setState({value})
          }}/>
          <View style={{height:Metrics.CH*.1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:Metrics.themehui2}}>We will contact you 3 working days after we receive the message</Text>
          </View>
            </ScrollView>
            <Toast ref="toast" style={{backgroundColor:Metrics.themehui2}} 
 position='top' 
 opacity={0.5}
 />
        </SafeAreaView>
     )
  }

}
const ys=StyleSheet.create({
    input:{
        width:'100%',
        backgroundColor:Metrics.themehui3,
        height:Metrics.CH*.3,
        marginTop:Metrics.CH*.03,
        borderRadius:8,
        
        
    }
})
export default Feedback 