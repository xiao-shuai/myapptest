import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet,TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
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
     
  }
  this.option={
    title: '选择图片',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'图库',
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

   } 

    render(){
        return(
        <SafeAreaView style={{flex:1,}}>
        <ScrollView>
        <Divider style={{backgroundColor:Metrics.themehui3,height:20}}/>
          <TouchableOpacity onPress={()=>{
           this.choosePicker()
          }}>
          <View style={[ys.option,]}>
          
          <Text style={{fontSize:18}}>头像</Text>
         <Image source={{uri:this.props.oneStore.tx}}
         style={{width:Metrics.CW*.12,
            height:Metrics.CW*.12,
            borderRadius:Metrics.CW*.06,
            marginLeft:Metrics.CW*.6
         }}/>
         <Ionicons name={'ios-arrow-forward'} size={20} 
         style={{marginLeft:Metrics.CW*.06}}/>  
          </View>
          </TouchableOpacity>
          <Divider style={{backgroundColor:Metrics.themehui3,height:20}}/>
          {/* ni cheng  */}
          <TouchableOpacity onPress={()=>{

          }} style={[ys.option,]}>
             <Text style={{fontSize:18}}>昵称 </Text>
             <View style={{
                 width:Metrics.CW*.4,
             marginLeft:Metrics.CW*.4}}>
                 <TextInput onChangeText={(nc)=>{
                      this.setState({nc})
                 }}  defaultValue={this.props.oneStore.text}  
                 style={{height:Metrics.CW*.1,padding:10,textAlign:'center',marginLeft:Metrics.CW*.1}}/>
             </View>
          </TouchableOpacity>
          <Divider style={{height:2}}/>
           {/* gexing qm  */}
           <TouchableOpacity onPress={()=>{

}} style={[ys.option,]}>
   <Text style={{fontSize:18}}>签名 </Text>
   <View style={{
       width:Metrics.CW*.7,
   marginLeft:Metrics.CW*.1,
//    backgroundColor:'red',
   justifyContent:'flex-end',
   

   }}>
       <TextInput onChangeText={(qm)=>{
            this.setState({qm})
       }}  defaultValue={this.props.oneStore.qm}  
       style={{height:Metrics.CW*.1,padding:10,textAlign:"right",}}/>
   </View>
</TouchableOpacity>
<Divider style={{height:2,}}/>
{/* button */}
<TouchableOpacity onPress={()=>{
    console.log("nc----!",this.state.nc)
   if(this.state.nc==undefined&&this.state.qm==undefined){
        return  this.refs.toast.show('请输入修改的信息')
   }else if(this.state.nc==undefined&&this.state.qm!==undefined){
         this.refs.toast.show('修改签名成功')
       return  this.props.oneStore.change_qm(this.state.qm)
   } else if(this.state.nc!==undefined&&this.state.qm==undefined){
        this.refs.toast.show('修改昵称成功')
       return   this.props.oneStore.change_name(this.state.nc)
   }else if(this.state.nc!==undefined&&this.state.qm!==undefined){
    this.refs.toast.show('修改成功')
        this.props.oneStore.change_name(this.state.nc) 
        this.props.oneStore.change_qm(this.state.qm)
       
   }
   
}} style={ys.btn}>
    <Text style={{color:'white',fontSize:18}}>保存</Text>
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