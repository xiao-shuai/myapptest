import React, {Component} from 'react'
import {View,Text,TouchableOpacity,
    ActivityIndicator,StyleSheet,
    ScrollView,Image} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import { observable } from 'mobx';
import {Metrics} from '../../config/styleconfig'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar,} from 'react-native-scrollable-tab-view'
@inject(["oneStore"])
@observer
class Two extends  Component{
    constructor(props){
        super(props)
       this.state={
           isshow:false
       },
       this.store=this.props.oneStore

       this.testdata=[
           {
           img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
           title:'这是说'
           },
           {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
            title:'这是说明1'
            },
            {
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
                title:'这是说明222'
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
                    title:'这是说明333333'
                    },
                    {
                        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
                        title:'这是说明'
                        },
                        {
                            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
                            title:'这是说明'
                            },
       ]
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
          {
              this.state.isshow?
              <View style={{justifyContent: 'center',height:Metrics.CH*.8}}>
                    <ActivityIndicator size="large" color={Metrics.themeColor} />
               </View>
                    :
         
<ScrollableTabView renderTabBar={()=><ScrollableTabBar/>}  
tabBarTextStyle={{fontSize:18}} 
 tabBarInactiveTextColor={Metrics.themehui2}
 tabBarActiveTextColor={Metrics.themeColor}
 tabBarUnderlineStyle={{backgroundColor:Metrics.themeColor,}}
 
 >

                <ScrollView tabLabel='美食IP' contentContainerStyle ={ys.big_s}>

                {
                    this.testdata.map((item,index)=>{
           return(
           <View style={ys.s_item} key={index}>
         <Image source={{uri:item.img}} 
         style={{width:Metrics.CW*.22,
         height:Metrics.CW*.22,borderRadius:Metrics.CW*.11
         }}/>

         <Text style={{fontSize:16,color:Metrics.themehui2,marginTop:6}}>{
             item.title.length>3?
             item.title.substring(0,4)+'...'
             :
             item.title}</Text>
        
           </View>
           )
                        })
                }
					</ScrollView>
 
					<ScrollView tabLabel='健康IP' contentContainerStyle={ys.big_s}>
                    {
                    this.testdata.map((item,index)=>{
           return(
           <View style={ys.s_item} key={index}>
         <Image source={{uri:item.img}} 
         style={{width:Metrics.CW*.22,
         height:Metrics.CW*.22,borderRadius:Metrics.CW*.11
         }}/>

         <Text style={{fontSize:16,color:Metrics.themehui2,marginTop:6}}>{
             item.title.length>3?
             item.title.substring(0,4)+'...'
             :
             item.title}</Text>
        
           </View>
           )
                        })
                }
					</ScrollView>
 
					<ScrollView tabLabel='亲子IP' contentContainerStyle={ys.big_s}>
                    {
                    this.testdata.map((item,index)=>{
           return(
           <View style={ys.s_item} key={index}>
         <Image source={{uri:item.img}} 
         style={{width:Metrics.CW*.22,
         height:Metrics.CW*.22,borderRadius:Metrics.CW*.11
         }}/>

         <Text style={{fontSize:16,color:Metrics.themehui2,marginTop:6}}>{
             item.title.length>3?
             item.title.substring(0,4)+'...'
             :
             item.title}</Text>
        
           </View>
           )
                        })
                }
					</ScrollView>

</ScrollableTabView>

       

          }
               
            </SafeAreaView>
            
        )
    }
}
const ys=StyleSheet.create({
    big_s:{
        flexDirection:"row",
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    s_item:{
        width:Metrics.CW*.22,
        height:Metrics.CW*.3,
      marginTop:20,
      alignItems:'center',
    },
})
export default Two
