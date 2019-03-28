import React, {Component} from 'react'
import {View,Text,TouchableOpacity,
  Image,ScrollView,StyleSheet,
  TextInput,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'

import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider ,SearchBar} from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'
import ImagePicker from 'react-native-image-picker'
@inject(["oneStore"])
@observer // 监听当前组件

class Edite extends Component {
    constructor(props){
  super(props)
  this.state={
     isshow:true
  }
  this.option={
    title: 'Choose picture',
    cancelButtonTitle: 'cancel',
    takePhotoButtonTitle:'Taking pictures',
    chooseFromLibraryButtonTitle:'gallery',
    allowsEditing:true,
    quality: 0.8,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
      }
  }
    }

    choosePicker = () => {
        ImagePicker.showImagePicker(this.option, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = response.uri;
            this.state.cover1 = response.data
            this.props.oneStore.change_tx(source)
            // this.setState({
            //   CoverPhoto: source
            // })
          }
        });
      }

   componentWillMount(){
    fetch('http://rap2api.taobao.org/app/mock/163155/gaoshilist').then(res=>{
      return res.json()
    } ).then(res=>{
      this.setState({isshow:false})
    }).catch(err=>{
      console.log('err--!',err)
    })
   } 

    render(){
      if(this.state.isshow){
        return (
         <View style={{justifyContent: 'center',height:Metrics.CH*.8}}>
         <ActivityIndicator size="large" color={Metrics.themeColor} />
         </View>
        )
      }
        return(
        <SafeAreaView style={{flex:1,}}>
        <ScrollView>
        <Divider style={{backgroundColor:Metrics.themehui3,height:20}}/>
          <TouchableOpacity onPress={()=>{
           this.choosePicker()
          }}>
          <View style={[ys.option,]}>
          
          <Text style={{fontSize:18}}>Head portrait</Text>
         <Image source={{uri:this.props.oneStore.tx}}
         style={{width:Metrics.CW*.12,
            height:Metrics.CW*.12,
            borderRadius:Metrics.CW*.06,
            marginLeft:Metrics.CW*.4
         }}/>
         <Ionicons name={'ios-arrow-forward'} size={20} 
         style={{marginLeft:Metrics.CW*.06}}/>  
          </View>
          </TouchableOpacity>
          <Divider style={{backgroundColor:Metrics.themehui3,height:20}}/>
          {/* ni cheng  */}
          <TouchableOpacity onPress={()=>{

          }} style={[ys.option,]}>
             <Text style={{fontSize:18}}>nickname </Text>
             <View style={{
                 width:Metrics.CW*.4,
             marginLeft:Metrics.CW*.35}}>
                 <TextInput onChangeText={(nc)=>{
                      this.setState({nc})
                 }}  defaultValue={this.props.oneStore.text}  
                 style={{height:Metrics.CW*.1,padding:10,textAlign:'center',marginLeft:Metrics.CW*.05,color:Metrics.themehui2}}/>
             </View>
          </TouchableOpacity>
          <Divider style={{height:2}}/>
           {/* gexing qm  */}
           <TouchableOpacity onPress={()=>{

}} style={[ys.option,]}>
   <Text style={{fontSize:18}}>The signature </Text>
   <View style={{
       width:Metrics.CW*.7,
  //  marginLeft:Metrics.CW*.06,
  //  backgroundColor:'red',
   justifyContent:'flex-end',
  
   

   }}>
       <TextInput onChangeText={(qm)=>{
            this.setState({qm})
       }}  defaultValue={this.props.oneStore.qm}   multiline={true}
       style={{height:Metrics.CW*.15,padding:10,color:Metrics.themehui2}}/>
   </View>
</TouchableOpacity>
<Divider style={{height:2,}}/>
{/* button */}
<TouchableOpacity onPress={()=>{
    console.log("nc----!",this.state.nc)
   if(this.state.nc==undefined&&this.state.qm==undefined){
        return  this.refs.toast.show('Please enter the modified information')
   }else if(this.state.nc==undefined&&this.state.qm!==undefined){
         this.refs.toast.show('Signature modified successfully')
       return  this.props.oneStore.change_qm(this.state.qm)
   } else if(this.state.nc!==undefined&&this.state.qm==undefined){
        this.refs.toast.show('Modify nickname successfully')
       return   this.props.oneStore.change_name(this.state.nc)
   }else if(this.state.nc!==undefined&&this.state.qm!==undefined){
    this.refs.toast.show('Modify the success')
        this.props.oneStore.change_name(this.state.nc) 
        this.props.oneStore.change_qm(this.state.qm)
       
   }
   
}} style={ys.btn}>
    <Text style={{color:'white',fontSize:18}}>Save</Text>
</TouchableOpacity>

</ScrollView>
 <Toast ref="toast" style={{backgroundColor:Metrics.themehui2}} 
 position='top' 
 opacity={0.5}
 />
        </SafeAreaView>
        )
    }
}
const ys =StyleSheet.create({
  option:{
    flexDirection:'row',
    width:Metrics.CW*9,
    marginLeft:Metrics.CW*.05,
    alignItems:'center',
    height:Metrics.CH*.08,
  },
  btn:{
    width:Metrics.CW*.9,
    marginLeft:Metrics.CW*.05,
    backgroundColor:Metrics.themeColor,
    height:Metrics.CH*.05,
    marginTop:Metrics.CH*.02,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  }
})
export default Edite