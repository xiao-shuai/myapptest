import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,Dimensions,ScrollView,StyleSheet,FlatList} from 'react-native'
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
 constructor(props){
    super(props);
    this.state = {
        ms:'这是描述描述没什么没事没事',
        data2:["http://h.hiphotos.baidu.com/image/pic/item/58ee3d6d55fbb2fbbc6b4796424a20a44723dcf6.jpg",
        "http://a.hiphotos.baidu.com/image/pic/item/728da9773912b31b38b68ca38b18367adbb4e166.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547396620181&di=3ce36cbdd2b6b6a13f7ee2f21ba8b06f&imgtype=0&src=http%3A%2F%2Fimage.xcar.com.cn%2Fattachments%2Fa%2Fday_140319%2F2014031916_1bd6ffb9d5553620f870beYW9d0Nxj0n.jpg"]
    };

    this.store=this.props.oneStore
    
 }
 componentWillMount(){
     fetch('http://apis.juhe.cn/cook/category?key=74d4b33458ab0649914dab32390eaab4').then(res=>{
            return res.json()
     }
 
     )
     .then(res=>{
         console.log("res.result",res.result)
         this.store.data=res.result
         console.log("shuju",this.store.data)
     }).catch(err=>{
         console.log("err",err)
     })
 }
 _renderItem ({item, index}) {
        
     return (
        <View style={{width:"100%",height:200}}>
    
        <Image source={{uri:item}} style={{width:'100%',height:'100%'}}></Image>
       
        </View>
    );
}

    render(){
        
        const{text,data}=this.store
        console.log("有数据吗？",data)
        return(
            <SafeAreaView>
            <View style={ys.big} >
            <View style={ys.top}>
            <TouchableOpacity onPress={()=>{

            }}>
            <Ionicons name={'ios-add'} size={30}/>
            </TouchableOpacity>
              
               <View style={ys.top_find}>
                   <Ionicons name={'ios-search'} size={20} style={{marginLeft:'5%'}}/>
                   <Text style={{marginLeft:'5%',color:'#A9A9A9',}}>请输入搜索内容</Text>
             </View> 
             <TouchableOpacity onPress={()=>{

             }}>
             <Ionicons name={'ios-cart'} size={25} />
             </TouchableOpacity>
            
            </View>
            <ScrollView style={{flex:1,}}>
           <Carousel layout={'default'} 
           data={this.state.data2} 
           renderItem={this._renderItem}
           sliderWidth={Metrics.CW}
            itemWidth={Metrics.CW*.8}
            loop={true}
              autoplay={true}
              
              /> 
              <View style={ys.zj_tab}>
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-alarm'} size={25} />
                   <Text>精良厨具</Text>
               </View>
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-gift'} size={25}/>
                   <Text>发现新菜</Text>
               </View>
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-bookmark'} size={25}/>
                   <Text>厨艺宝典</Text>
               </View>
               <View style={[ys.zj_tab_con]}>
                   <Ionicons name={'ios-book'} size={25}/>
                   <Text>菜谱分类</Text>
               </View>
              </View>
            {/*每日新菜  */}
              <View style={{width:Metrics.CW*.95,marginLeft:'2.5%',
              backgroundColor:'#FFEBCD',marginTop:10,borderRadius:8}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,alignItems:'center'}}>
                <Text style={{fontSize:16}}>每日新菜</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:Metrics.themehui2,marginRight:5,marginTop:2}}>
                        查看全部
                    </Text>
                    <Ionicons name={'ios-arrow-forward'} size={18} color={Metrics.themehui2}/>
                </View>
               </View>
 
 {/* content */}
              <ScrollView style={{width:'100%'}} horizontal={true}>
                  {
                      this.state.data2.map((item,index)=>{
                          return(
                              <TouchableOpacity onPress={()=>{

                              }} style={{}}>
                              <View style={{width:Metrics.CW*.35,margin:10}}>
                              <Image source={{uri:item}} style={{width:'100%',height:100}}></Image>
                              <Text style={{marginTop:5,letterSpacing:1,marginBottom:3,}}>{this.state.ms.length>10?this.state.ms.substr(0,10)+'...':this.state.ms}</Text>
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
                     <Divider style={{width:Metrics.CW*.2,backgroundColor:'#DAA520'}}/>
                     <Text style={{padding:10}}>热门专区</Text>
                     <Divider style={{width:Metrics.CW*.2,backgroundColor:'#DAA520'}}/>
                 </View>
                    {/*  */}
                 <View style={{width:Metrics.CW*.95,marginLeft:'2.5%',}}>
                    {
                        this.state.data2.map((item,index)=>{
                  return(
                      <View style={{width:'100%',marginTop:10,backgroundColor:'#FFEBCD',borderRadius:8}}>
                          <Text style={{fontSize:15,padding:8}}>这是标题</Text>
                          <Image source={{uri:item}} style={{width:'100%',height:200}}/>
                          <Text style={{fontSize:15,padding:8}}>这是底部内容</Text>
                      </View>
                  )
                    })

                    }
                 </View>
              </View>
            
              </ScrollView>

           
            </View>
            </SafeAreaView>
        )
    }
}
const ys=StyleSheet.create({
 big:{
    width:"100%",height:"100%",backgroundColor:Metrics.themeColor
    },
 top:{
    width:Metrics.CW*.95,height:Metrics.CH*.05,
    marginLeft:'2.5%',justifyContent:'space-between',
    flexDirection:'row',alignItems:'center'
    },
top_find:{
    display:"flex",width:'80%',alignItems:"center",
    justifyContent:"center",flexDirection:'row',height:'80%',
    borderRadius:15,borderColor:'#808080',borderWidth:1,borderStyle:'solid'
  },
  zj_tab:{
    width:Metrics.CW*.9,marginLeft:'5%',
    backgroundColor:'#FFEBCD',marginTop:20,flexDirection:'row',
    justifyContent:'space-around',padding:15,borderRadius:8
  },
  zj_tab_con:{
    alignItems:'center'
  },

})

export default One
