import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Divider ,Rating,} from 'react-native-elements'

class Detail extends Component{
   constructor(props){
       super(props)
       this.state={
         clo:Metrics.themehui2
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
    
     
   }
   ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
   render(){
    
    const { navigation } = this.props;
    const info = navigation.getParam('info');
    // const info=navigation.state.params.info
    console.log('info---now???!',info)
       return(
       <SafeAreaView style={{width:Metrics.CW,alignItems:'center',flex:1,}}>
       <ScrollView style={{width:Metrics.CW*.9,flex:1,}} showsVerticalScrollIndicator={false}>
       <Image style={{width:'100%',height:200,marginTop:5}} source={{uri:info.item.cover}}/>
       <View style={{
       alignItems:'center',
      paddingTop:10,
      paddingBottom:10,
      //  backgroundColor:'red',
       justifyContent:'center'
       }}>
       <Text style={{fontSize:20,fontWeight:'600',color:Metrics.themehui2}}>{info.item.name}</Text>
       </View>
       {/* pl  zan  */}
       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
         {
           this.iocn.map((item,index)=>{
             
              return(
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{
                  this.setState({
                    // clo:this.state.clo,
                    in:index
                   })
                }}>
                  <Ionicons name={item.nm} size={25} color={
                    this.state.in==index&&this.state.clo==Metrics.themehui2?
                    Metrics.themeColor
                    :
                    Metrics.themehui2
                     }/>
                  {
                    index==0?
                    <Text style={ys.see_font}>{info.item.see_count}</Text>
                    :
                    index==1?
                    <Text style={ys.see_font}>{info.item.appreciate==null?3:info.item.appreciate}</Text>
                    :
                    <Text style={ys.see_font}>{info.item.score_grade}</Text>
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
        source={{uri:info.item.user.avatar}}/>
       <View style={{marginLeft:10,justifyContent:'space-between'}}>
        <Text style={{fontSize:20,fontWeight:'500'}}>{info.item.user.nickname}</Text>
        <Text style={{fontSize:16,color:Metrics.themehui2}}>2019-1-3 08:28:03</Text>
       </View>
     </View>
     {/* 签名  description*/}
      <Text style={{fontSize:20,marginTop:10,color:Metrics.themehui2,}}>{info.item.description}</Text>
      {/* 用料  */}
      <View style={{width:'100%',height:Metrics.CH*.06,alignItems:'center',justifyContent:'center',marginTop:10}}>
        <Text style={{fontSize:25,color:Metrics.themehui2,fontWeight:'600'}}>
        The materials list
        </Text>
      </View>
      <View style={{justifyContent:'space-between',width:'100%',marginTop:10}}>
      {
         info.item.ingredientscontent.length!==0?
        info.item.ingredientscontent.map((item,index)=>{
           return(
             <View style={{marginTop:10}}>
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
        info.item.macksteps.length!==0?
        info.item.macksteps.map((item,index)=>{
        return(
          <View style={{marginTop:20,}}>
            <Text style={{fontSize:20,}}>{item.description}</Text>
            <Image source={{uri:item.image}} style={{width:'100%',height:200,marginTop:Metrics.CH*.01}} />
            
          </View>
        )
        })
        :
        info.item.materials.map((item,index)=>{
          return(
            <View style={{marginTop:20,}}>
              <Text style={{fontSize:20,}}>{item.name}</Text>
              <Image source={{uri:item.image}} style={{width:'100%',height:200,marginTop:Metrics.CH*.01}} />
              
            </View>
          )
        })
      }

      
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
export default Detail