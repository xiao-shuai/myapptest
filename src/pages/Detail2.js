import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Divider ,Rating,} from 'react-native-elements'

class Detail2 extends Component{
   constructor(props){
       super(props)
       this.state={
         clo:Metrics.themehui2,
         clo1:Metrics.themehui2,
         clo2:Metrics.themehui2,
       }
       this.iocn=[
         {
          nm:'ios-eye'
         },
         {
          nm:'ios-thumbs-up'
         },
         {
          nm:'ios-heart-empty'
         }
       ]

   }
   componentWillMount(){
    const { navigation } = this.props;
    const info = navigation.getParam('info');
    this.setState({
      zannum:info.appreciate,
      shounum:info.score_grade
    })
     
   }
   
   render(){
    
    const { navigation } = this.props;
    const info = navigation.getParam('info');
    // const info=navigation.state.params.info
    console.log('info---now???!',info,this.state.zannum,this.state.shounum)
       return(
       <SafeAreaView style={{width:Metrics.CW,alignItems:'center',flex:1,}}>
       <ScrollView style={{width:Metrics.CW*.9,flex:1,}} showsVerticalScrollIndicator={false}>
       <Image style={{width:'100%',height:200,marginTop:5,borderRadius:8}} source={{uri:info.cover}}/>
       <View style={{
       alignItems:'center',
      paddingTop:10,
      paddingBottom:10,
      //  backgroundColor:'red',
       justifyContent:'center'
       }}>
       <Text style={{fontSize:20,fontWeight:'600',color:Metrics.themehui2}}>{info.name}</Text>
       </View>
       {/* pl  zan  */}
       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
         {
           this.iocn.map((item,index)=>{
             
              return(
                <TouchableOpacity key={index} style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{
                  if(index==1){
                    if(this.state.clo1==Metrics.themehui2){
                      this.setState({
                        clo1:Metrics.themeColor,
                        zannum:this.state.zannum+1
                      })
                    }else{this.setState({clo1:Metrics.themehui2,zannum:this.state.zannum-1})}
                  }else if(index==2) {
                    if(this.state.clo2==Metrics.themehui2){
                      this.setState({
                        clo2:Metrics.themeColor,
                        shounum:this.state.shounum+1
                      })
                    }else{this.setState({clo2:Metrics.themehui2,shounum:this.state.shounum-1})}
                  }
                  
                }}>
                  <Ionicons name={item.nm} size={25} color={
                    index==1?
                    this.state.clo1
                    :index==2?
                    this.state.clo2
                    :
                    this.state.clo
                  } />
                  {
                    index==0?
                    <Text style={ys.see_font}>{info.see_count}</Text>
                    :
                    index==1?
                    <Text style={ys.see_font}>{this.state.zannum==null?3:this.state.zannum}</Text>
                    :
                    <Text style={ys.see_font}>{this.state.shounum}</Text>
                  }
                
                </TouchableOpacity>
              )
           })

         }
       </View>
       <Divider style={{backgroundColor:Metrics.themehui3,height:1,marginTop:8}}/>
       {/* user info */}
     <View style={{flexDirection:'row',marginTop:8}}>
       <Image style={{
         width:Metrics.CW*.16,
        height:Metrics.CW*.16,
        borderRadius:Metrics.CW*.08
      }} 
        source={{uri:info.user.avatar}}/>
       <View style={{marginLeft:10,justifyContent:'space-between'}}>
        <Text style={{fontSize:20,fontWeight:'500'}}>{info.user.nickname}</Text>
        <Text style={{fontSize:16,color:Metrics.themehui2}}>2019-1-3 08:28:03</Text>
       </View>
     </View>
     {/* 签名  description*/}
      <Text style={{fontSize:20,marginTop:10,color:Metrics.themehui2,}}>{info.description}</Text>
      {/* 用料  */}
      <View style={{width:'100%',height:Metrics.CH*.06,alignItems:'center',justifyContent:'center',marginTop:10}}>
        <Text style={{fontSize:25,color:Metrics.themehui2,fontWeight:'600'}}>
        The materials list
        </Text>
      </View>
      <View style={{justifyContent:'space-between',width:'100%',marginTop:10}}>
      {
         info.ingredientscontent.length!==0?
        info.ingredientscontent.map((item,index)=>{
           return(
             <View style={{marginTop:10}} key={index}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{fontSize:20}}>{item.material.name}</Text>
             <Text style={{color:Metrics.themehui2}}>{item.quantity}</Text>
             </View>
             <Divider style={{backgroundColor:Metrics.themehui3,height:1,marginTop:10}}/>
             </View>
           )
        })
        :null
      }
      </View>
      {/* 步骤 */}
      <View style={{width:'100%',height:Metrics.CH*.06,alignItems:'center',justifyContent:'center',marginTop:20}}>
        <Text style={{fontSize:25,color:Metrics.themehui2,fontWeight:'600'}}>
        The steps
        </Text>
      </View>
      {
        info.macksteps.length!==0?
        info.macksteps.map((item,index)=>{
        return(
          <View style={{marginTop:20,}} key={index}>
            <Text style={{fontSize:20,}}>{item.description}</Text>
            <Image source={{uri:item.image}} style={{width:'100%',height:200,marginTop:Metrics.CH*.01,borderRadius:10}} />
            
          </View>
        )
        })
        :
        info.materials.map((item,index)=>{
          return(
            <View style={{marginTop:20,}} key={index}>
              <Text style={{fontSize:20,}}>{item.name}</Text>
              <Image source={{uri:item.image}} style={{width:'100%',height:200,marginTop:Metrics.CH*.01,borderRadius:10}} />
              
            </View>
          )
        })
      }

      {/* line botm */}
      <Divider style={{backgroundColor:Metrics.themehui3,height:1,marginTop:15}} />
       <Text style={{color:Metrics.themehui3,textAlign:'center',marginTop:8}}>The bottom</Text>
       </ScrollView>
       </SafeAreaView>
       )
   }
}
const ys=StyleSheet.create({
  see_font:{
    fontSize:18,color:Metrics.themehui2,marginLeft:5
  }
})
export default Detail2