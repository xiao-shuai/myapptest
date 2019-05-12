import React, {Component} from 'react'
import {View,Text,ScrollView,
    TextInput,ImageBackground,Image,
    StyleSheet,TouchableOpacity,ActivityIndicator,
    AsyncStorage} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'
import {Metrics} from '../config/styleconfig'
import {CommentList,InformationList} from 'react-native-ui-modal'
import Gallery from 'react-native-image-gallery';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Findxq extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }

  render(){
    //   const info=this.props.navigation.getPramas()
      const info = this.props.navigation.getParam('info');
      return(
          <SafeAreaView style={{flex:1,alignItems:'center'}}>
          
          
          
         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
             width:Metrics.CW*.95,
             alignItems:'center'
            }}>
                    <LinearGradient colors={['#7F7FD5','#86A8E7','#91EAE4']} style={{
width:Metrics.CW*.95,
padding:10,
marginTop:10,
borderRadius:8
            }}>
             
                 <View style={{
                  flexDirection:'row',
                 justifyContent:'space-between',
                 alignItems:'center'
                 }}>
                 <Text style={{fontSize:20,color:'white'}}>{info.title}</Text>
                 <Image    source={{uri:info.uimg}}
                 style={{
                     width:Metrics.CW*.16,
                     height:Metrics.CW*.16,
                    borderRadius:Metrics.CW*.08
                    
                 }}
                 />
                 </View>
                 <Divider style={{height:1,marginTop:10}}/>
                 <Image source={{uri:info.fengmian}} style={{width:'100%',height:Metrics.CH*.3,borderRadius:6}}/>
                 <Text style={{fontSize:16,color:'white',marginTop:10}}>
                {info.miaoshu}
                 </Text>
                 {
                    info.xqimg.map((item,index)=>{
                        return(
                            <View>
                                <Text style={{color:'white',fontSize:16,marginTop:10}}>
                                    {item.ms}
                                </Text>
                            <Image source={{uri:item.img}} style={{
                                width:'100%',height:Metrics.CH*.3,
                                marginTop:10
                            }}/>
                            </View>
                        )
                    }) 
                 }
                 
             </LinearGradient>
            
<View style={{width:Metrics.CW,alignItems:'center'}}>
    <Text style={{color:Metrics.themehui,marginTop:10}}>------- No more -------</Text>
</View>
         </ScrollView>    
        
         
          </SafeAreaView>
      )
  }


}
const ys=StyleSheet.create({
    top_find:{
        display:"flex",width:'60%',
        alignItems:"center",
        justifyContent:"center",flexDirection:'row',height:35,
        borderRadius:15,borderColor:'white',borderWidth:1,borderStyle:'solid'
      },
})
export default Findxq