import React, {Component} from 'react'
import {View,Text,ScrollView,TextInput,
    ImageBackground,
    StyleSheet,TouchableOpacity,
    AsyncStorage,
    Image
} from 'react-native'
import { SafeAreaView ,NavigationActions,StackActions} from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'
import { Metrics } from '../../config/styleconfig';
import Allstack from '../../config/navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const  resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'One'})
    ]
})
class Login extends  Component{
  constructor(props){
      super(props)
      this.state={
     
      }
  }
 //设置重置导航

login=()=>{
    console.log('zh--!',this.state.zh,'mm-----?',this.state.mm)
    if(this.state.zh==undefined||this.state.zh==''){
      return  this.refs.toast.show('Please enter the account number.',3000)
    }else if(this.state.mm==undefined||this.state.mm==''){
       return this.refs.toast.show('Please enter the account number.33',3000)
    }else{
    
        fetch('http://food.blitz.work:10040/v1/cookbooks/reviews/').then(res=>{
      return res.json()
    } ).then(res=>{
       
       AsyncStorage.setItem('islogin','loginok')
       this.props.navigation.dispatch(resetAction);
       
    }).catch(err=>{
      console.log('err--!',err)
    })
    }

}
componentWillMount(){
    AsyncStorage.getItem('islogin').then(res=>{
        console.log("res--cookie?",res)
    })

    
}
    render(){
        const info=this.props.navigation.getParam('info')
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
               <Image source={require('../../img/logbg.jpg')} style={{
                        width:Metrics.CW,
                        height:Metrics.CH*.3,
                        resizeMode:"cover"
                    }}/>
                    <View style={{
                        // marginTop:-Metrics.CH*.15,
                        position:'absolute',
                        marginTop:Metrics.CH*.06
                        
                    }}>
                        <Text style={{fontSize:28,color:'white'}}>Welcome to love kitchen</Text>
                    </View>

                    <View style={{
                        marginTop:-Metrics.CH*.15,
                        width:Metrics.CW*.95,
                        backgroundColor:'white',
                        padding:10,
                        shadowOpacity:.8,
                        shadowColor:Metrics.themeColor,
                        shadowRadius:5,
                        shadowOffset:{width:3,height:5},
                        borderRadius:5
                        }}>
                 {/* <Text style={ys.label_t}>Account</Text> */}
                 <TextInput style={[ys.t_input]} onChangeText={(zh)=>{
                  this.setState({zh})
                 }} placeholder="Please enter the account number." />
                 {/* <Text style={[ys.label_t,{marginTop:10,}]}>Password</Text> */}
                 <TextInput style={[ys.t_input]} secureTextEntry={true} onChangeText={(mm)=>{
                 this.setState({mm})
                 }} placeholder="Please enter your password" />
                 {/* btn */}
                 <TouchableOpacity style={[ys.t_input,ys.btn]} onPress={()=>{
 this.login()
                 }}>
                     <Text style={{color:'white',fontSize:20}}>LOGIN</Text>
                 </TouchableOpacity>
                 {/* zc  wjmm */}
                 <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:10}}>
                       <TouchableOpacity onPress={()=>{
                           this.props.navigation.navigate('Register')
                       }}>
                     <Text style={{color:Metrics.themehui2,}}>Registered</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{
                         this.props.navigation.navigate('Forgot')
                     }}>
                     <Text style={{color:Metrics.themehui2}}>Forgot password</Text>
                     </TouchableOpacity>
                 </View>
                 </View>
                 </KeyboardAwareScrollView>
                
                <Toast ref="toast" style={{backgroundColor:Metrics.themehui2}} 
 position='top' 
 opacity={0.5}
 />
            </SafeAreaView>
        )
    }
}
const ys=StyleSheet.create({
    btn:{
        alignItems:'center',justifyContent:'center',backgroundColor:Metrics.themeColor
    },
    
    imgbg:{
        width:Metrics.CW,height:'100%',alignItems:'center'
    },
    t_input:{
        width:Metrics.CW*.9,height:Metrics.CH*.06,
        borderRadius:10,fontSize:18,paddingLeft:'5%',
        marginTop:20,borderWidth:2,borderColor:Metrics.themeColor
    },
    label_t:{
        fontSize:20,fontWeight:'600',color:'white'
    }
})
export default Login