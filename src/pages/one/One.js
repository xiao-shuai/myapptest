import React, {Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
@inject(["oneStore"])
@observer // 监听当前组件
class One extends  Component{
 constructor(props){
    super(props);
    this.state = {
    };

    this.store=this.props.oneStore
 }
 componentWillMount(){
     fetch('http://apis.juhe.cn/cook/query?key=74d4b33458ab0649914dab32390eaab4&menu=快手菜').then(res=>{
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

    render(){
        const{text,data}=this.store
        console.log("有数据吗？",data)
        return(
            <SafeAreaView>
            <View style={{marginTop:200,marginLeft:200}}>
             <Text>{text} </Text> 
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Two',{info:'6666'})
             }}>
            <Ionicons name='md-stopwatch' size={30}/>
             </TouchableOpacity>
    
            </View>
            </SafeAreaView>
        )
    }
}
export default One