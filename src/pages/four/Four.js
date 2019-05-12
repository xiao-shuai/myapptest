import React, {Component} from 'react'
import {View,Text,StyleSheet,ScrollView,Image, AsyncStorage,TouchableOpacity,ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {Metrics} from '../../config/styleconfig'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import {inject,observer} from 'mobx-react'
@inject(["oneStore"])
@observer // 监听当前组件
class Four extends  Component{
  static navigationOptions = {
    tabBarLabel: 'Me',
  };
   constructor(props){
      super(props)
      this.state={

      }
   this.some_option=[
       {
        icon:'ios-images',
        text:'release',  
        tz:'Fabu'
       },
       {
        icon:'ios-star-outline',
        text:'My collection',  
        tz:'Start'
       },
       {
        icon:'ios-heart-empty',
        text:'I like',  
        tz:'Like'
       },
   ]
  this.some_option2=[
      {
          icon:'ios-notifications',
          text:'My news',
          iconr:'ios-arrow-forward',
          tiao:'Notice'
      },
      {
        icon:'ios-paper',
        text:'Feedback',
        iconr:'ios-arrow-forward',
        tiao:'Feedback'
    },
    {
        icon:'ios-mail',
          text:'Contact us',
          iconr:'ios-arrow-forward',
         tiao:'Lianxi'
    },
  ]  
    
   }
 logout=()=>{
 
  fetch('http://food.blitz.work:10040/v1/cookbooks/reviews/').then(res=>{
    return res.json()
}

)
.then(res=>{
 console.log("remove islogin")
 AsyncStorage.removeItem('islogin')
 this.props.navigation.navigate('Login')
}).catch(err=>{
 console.log("err",err)
})
 }

    render(){
        
        return(
            <SafeAreaView style={{flex:1}}>
             <ScrollView style={{}}>
              {/* <View style={{alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'500',color:Metrics.th}}>Me</Text>
              </View>  */}
              
              <ImageBackground style={{width:Metrics.CW,marginTop:5,
                height:Metrics.CH*.3,}} source={require('../../img/mine_bg.jpeg')} >
            <View style={{
                width:Metrics.CW,
                height:Metrics.CH*.25,
                alignItems:'center',
                justifyContent:'center',
              
                }}>
               
                <View style={{
                    width:'100%',justifyContent:'space-between',
                    flexDirection:'row',
                    width:Metrics.CW*.95,
                    alignItems:'center'
                   }}>
               
              <View  style={{height:Metrics.CH*.15,alignItems:'center',justifyContent:'space-between'}}>
               <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Edite')
               }}>
              <Image source={{uri:this.props.oneStore.tx}} 
            style={{width:Metrics.CW*.2,height:Metrics.CW*.2,borderRadius:Metrics.CW*.1}}/>
            </TouchableOpacity>
             <Text style={{marginTop:8,color:'white'}}>{this.props.oneStore.qm.substring(0,10)+'..'}</Text>
              </View>
             
            <View style={{height:Metrics.CH*.15,alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:25,fontWeight:'500',color:'white'}}>
            {
                this.props.oneStore.text.substring(0,3)+'..'
                
                }</Text>
            <TouchableOpacity style={ys.bj} onPress={()=>{
                this.props.navigation.navigate('Edite')
            }}>
            <Text style={{fontSize:16,letterSpacing:3,color:'white',}}>editor</Text>
            </TouchableOpacity>
            </View>
            
                </View>
            
            </View>
            </ImageBackground>
            <View style={ys.some_option}>

             {
                this.some_option.map((item,index)=>{
                return(
                    <TouchableOpacity onPress={()=>{
                      this.props.navigation.navigate(item.tz)
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
            <View style={ys.out}>
                {
                    this.some_option2.map((item,index)=>{
             return(
                 <View key={index}>
                 <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate(item.tiao)
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
            {/* xian */}
            <Divider  style={{backgroundColor:Metrics.themehui3,height:15,marginTop:10}}/>
            {/* log out */}
            <TouchableOpacity style={[ys.out,ys.out2]} onPress={()=>{
              this.logout()
            }}>
              <Text style={{fontSize:20,color:'white',fontWeight:'600'}}>
             Log out 
              </Text>
            </TouchableOpacity>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Four
const ys=StyleSheet.create({
  out2:{
    marginTop:10,
    backgroundColor:Metrics.themeColor,
    height:Metrics.CH*.05,
    marginBottom:20,borderRadius:10,
    alignItems:'center',justifyContent:'center'
  },
  out:{
    width:Metrics.CW*.95,
     marginLeft:'2.5%',
 marginTop:20
  },
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
  },
  bj:{
    width:Metrics.CW*.2,
    height:Metrics.CW*.08,
       alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        borderWidth:2,
        borderColor:'white',
        marginTop:20
  },
  some_option:{
    width:Metrics.CW*.95,
    marginLeft:'2.5%',height:80,
    backgroundColor:Metrics.themehui3,
    marginTop:-40,
    flexDirection:'row',borderRadius:8,
    opacity:.5,
    justifyContent:'space-around',alignItems:'center'
  }
})