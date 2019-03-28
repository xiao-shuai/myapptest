import React, {Component} from 'react'
import {View,Text,TouchableOpacity,
    ActivityIndicator,StyleSheet,
    ScrollView,Image} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import { observable } from 'mobx';
import {Metrics} from '../../config/styleconfig'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar,} from 'react-native-scrollable-tab-view'
import { Button,Divider } from 'react-native-elements'

@inject(["oneStore"])
@observer
class Two extends  Component{
    static navigationOptions = {
        tabBarLabel: 'Delicious',
      };
    constructor(props){
        super(props)
       this.state={
           isshow:true
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
    componentWillMount(){
        fetch('http://food.blitz.work:10040/v1/recommendeds/').then(res=>{
            return res.json()
     }
     
     )
     .then(res=>{
         console.log("two---!",res.results)
         this.setState({
             isshow:false,
             data:res.results[0],
             data2:res.results[1],
             data3:res.results[2]
            })
         
     }).catch(err=>{
         console.log("err",err)
     })
    }
    render(){
        console.log('2222--',this.state.data)
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

                <ScrollView tabLabel='Food' contentContainerStyle ={ys.big_s}>

                {
                    this.state.data.cookbooks.map((item,index)=>{
           return(
               <TouchableOpacity style={ys.s_item} key={index} onPress={()=>{
                   this.props.navigation.navigate('Detail2',{info:item})
                   }}>
          
         <Image source={{uri:item.cover}} 
         style={ys.img}/>

         <Text style={ys.tex}>
             {
             item.description.length>3?
             item.description.substring(0,20)+'...'
             :
             item.description
             }
         </Text>
        
           
           </TouchableOpacity>
           )})
                }
              
					</ScrollView>
                    {/* 2222 */}
 
					<ScrollView tabLabel='Health' contentContainerStyle={ys.big_s}>
                    {
                    this.state.data2.cookbooks.map((item,index)=>{
           return(
             <TouchableOpacity style={ys.s_item} key={index} onPress={()=>{
                this.props.navigation.navigate('Detail2',{info:item})
                }}>
           
         <Image source={{uri:item.cover}} 
         style={ys.img}/>

         <Text style={ys.tex}>{
             item.description.length>3?
             item.description.substring(0,20)+'...'
             :
             item.description}
             </Text>
           </TouchableOpacity>
           )
                        })
                }
					</ScrollView>
 
					<ScrollView tabLabel='Couple' contentContainerStyle={ys.big_s}>
                    {
                    this.state.data3.cookbooks.map((item,index)=>{
           return(
               <TouchableOpacity style={ys.s_item} key={index} onPress={()=>{
                this.props.navigation.navigate('Detail2',{info:item})
                }}>
           
         <Image source={{uri:item.cover}} 
         style={ys.img}/>

         <Text style={ys.tex}>{
             item.description.length>3?
             item.description.substring(0,20)+'...'
             :
             item.description}</Text>
           </TouchableOpacity>
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
    tex:{
        fontSize:25,
        color:'white',
        marginTop:"-30%"
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:8
    },
    big_s:{
        // flexDirection:"row",
        // justifyContent:'space-around',
        // flexWrap:'wrap'
        alignItems:'center'
    },
    s_item:{
        // backgroundColor:'red',
        width:Metrics.CW*.95,
        height:Metrics.CH*.26,
      marginTop:20,
      alignItems:'center',
    },
})
export default Two
