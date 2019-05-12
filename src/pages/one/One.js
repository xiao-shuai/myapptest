import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,AsyncStorage
    ,ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../../config/styleconfig'
import { Button,Divider } from 'react-native-elements'

@inject(["oneStore"])
@observer // 监听当前组件

class One extends  Component{
    static navigationOptions = {
        tabBarLabel: 'Find',
      };
 constructor(props){
    super(props);
    
    this.state = {
        isshow:true,
        data:[],
        ms:'这是描述描述没什么没事没事',
       
    };

    
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
             data:res.results
            })
         
     }).catch(err=>{
         console.log("err",err)
     })
   
     
 }
  

    render(){
        console.log('this.state.data---!',this.state.data)
        return(
            <SafeAreaView>
                {
                    this.state.isshow?
                    <View style={{justifyContent: 'center',height:Metrics.CH*.8}}>
                    <ActivityIndicator size="large" color={Metrics.themeColor} />
                    </View>
                    :
               
            <View style={ys.big} >
            <View style={{backgroundColor:Metrics.themeColor,padding:6}}>
            <View style={ys.top}>
            <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('Fabu')
            }}>
            <Ionicons name={'ios-add'} size={30} color={'white'}/>
            </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Search')
              }} style={ys.top_find} >
               
                   <Ionicons name={'ios-search'} size={20} style={{marginLeft:'5%',color:'white'}}/>
                   <Text style={{marginLeft:'5%',color:'white',}}>Please enter content</Text>
   
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Notice')
             }}>
             <Ionicons name={'ios-notifications-outline'} size={25} color={'white'}/>
             </TouchableOpacity>
            
            </View>
            </View>
            <ScrollView style={{flex:1,marginTop:10}}>
           <Carousel layout={'default'} 
           data={this.state.data} 
           navigation={this.props.navigation} 
           renderItem={(item,index)=>{
            //    console.log('item---!',item)
              return (
                  <TouchableOpacity style={{width:"100%",height:200}} onPress={()=>{
                      this.props.navigation.navigate("Detail",{info:item})
                  }}>
                      <Image source={{uri:item.item.cover}} style={{width:'100%',height:200}}></Image>
                  </TouchableOpacity>
              )
           }     
               }
           sliderWidth={Metrics.CW}
            itemWidth={Metrics.CW*.8}
            // navigation={this.props.navigation} 
            loop={true}
              autoplay={true}
              
              /> 
              {/* <View style={ys.zj_tab}>
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-paper'} size={25} style={{color:Metrics.themehui2}}/>
                   <Text style={{color:Metrics.themehui2}}>Best</Text>
               </View>
               
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-ribbon'} size={25} style={{color:Metrics.themehui2}}/>
                   <Text style={{color:Metrics.themehui2}}>Culinary</Text>
               </View>
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-book'} size={25} style={{color:Metrics.themehui2}}/>
                   <Text style={{color:Metrics.themehui2}}>Menu</Text>
               </View>
              </View> */}
            {/*每日新菜  */}
              <View style={{width:Metrics.CW*.95,
              marginLeft:'2.5%',
             marginTop:10,borderRadius:8,
             borderWidth:1,
             borderColor:Metrics.themehui3,
             }}>
               <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,alignItems:'center'}}>
                <Text style={{fontSize:16}}>Daily new dish</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    {/* <Text style={{color:Metrics.themehui2,marginRight:5,marginTop:2}}>
                    Look at all
                    </Text>
                    <Ionicons name={'ios-arrow-forward'} size={18} color={Metrics.themehui2}/> */}
                </View>
               </View>
 
 {/* content */}
              <ScrollView style={{width:'100%'}} horizontal={true}>
                  {
                      this.state.data.reverse().slice(5,12).map((item,index)=>{
                          return(
                              <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate("Detail2",{info:item})
                              }} style={{}} key={index}>
                              <View style={{width:Metrics.CW*.35,margin:10}}>
                              <Image source={{uri:item.cover}} style={{width:'100%',height:100}}></Image>
                              <Text style={{marginTop:5,letterSpacing:1,marginBottom:3,}}>{item.name.length>10?item.name.substr(0,10)+'...':item.name}</Text>
                              </View>
                            
                             </TouchableOpacity>
                          )
                      })
                  }
              </ScrollView>
              {/* 每日新菜 end */}
              
              </View>
              {/* 热门专区 */}
              <View>
                 <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
                 marginTop:5,}}>
                     <Divider style={{width:Metrics.CW*.2,backgroundColor:Metrics.themehui2}}/>
                     <Text style={{padding:10}}>Hot zone</Text>
                     <Divider style={{width:Metrics.CW*.2,backgroundColor:Metrics.themehui2}}/>
                 </View>
                    {/*  */}
                 <View style={{width:Metrics.CW*.95,marginLeft:'2.5%',}}  >
                    {
                        this.state.data.reverse().slice(3,14).map((item,index)=>{
                  return(
                      <TouchableOpacity 
                      style={ys.hot} key={index}  onPress={()=>{
                          this.props.navigation.navigate('Detail2',{info:item})
                      }}>
                      
                          <Text style={{fontSize:15,padding:8}}>{item.name}</Text>
                          <Image source={{uri:item.cover}} style={{width:'100%',height:200}}/>
                          <Text style={{fontSize:15,padding:8}}>{
                              item.description.length>10?
                              item.description.substr(0,50)+'..'
                              :
                              item.description
                            }</Text>
                     
                      </TouchableOpacity>
                  )
                    })

                    }
                 </View>
              </View>
              {/* line botm */}
       <Divider style={{backgroundColor:Metrics.themehui3,height:1,marginTop:15}} />
       <Text style={{color:Metrics.themehui3,textAlign:'center',marginTop:8}}>The bottom</Text>
            
              </ScrollView>

           
            </View> 
        }
            </SafeAreaView>
        )
    }
}
const ys=StyleSheet.create({
    hot:{
        width:'100%',
        marginTop:10,
        borderRadius:8,
        borderColor:Metrics.themehui3,
        borderWidth:1,
    },
 big:{
    width:"100%",height:"100%",
    },
 top:{
    width:Metrics.CW*.95,height:Metrics.CH*.05,
    marginLeft:'2.5%',justifyContent:'space-between',
    flexDirection:'row',alignItems:'center'
    },
top_find:{
    display:"flex",width:'80%',alignItems:"center",
    justifyContent:"center",flexDirection:'row',height:'80%',
    borderRadius:15,borderColor:'white',borderWidth:1,borderStyle:'solid'
  },
  zj_tab:{
    width:Metrics.CW*.9,marginLeft:'5%',
     borderWidth:1,borderColor:Metrics.themehui3,
    marginTop:20,flexDirection:'row',
    justifyContent:'space-around',padding:15,borderRadius:8
  },
  zj_tab_con:{
    alignItems:'center'
  },

})

export default One
