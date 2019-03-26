import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,TextInput,
    ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider ,SearchBar,Badge} from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'
import ImagePicker from 'react-native-image-picker'
class Fabu extends Component{
constructor(props){
 super(props)
 this.state={
   isshow:true,
   ys1:Metrics.themeColor,
   ys2:Metrics.themehui2,
   ys3:Metrics.themehui2,
   ys4:Metrics.themehui2,
  
   CoverPhoto:false
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
 this.bq=[
   {
     name:'Chinese style',
     in:0,
     ys:Metrics.themehui2
   },
   {
    name:'French',
    in:1,
    ys:Metrics.themehui2
  },
  {
    name:'Fast food',
    in:1,
    ys:Metrics.themehui2
  },
  {
    name:'Italian',
    in:1,
    ys:Metrics.themehui2
  },
 ] 
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
        // this.props.oneStore.change_tx(source)
        this.setState({
          CoverPhoto: true,
          fmimg:source,
        })
      }
    });
  }
  choosePicker1 = () => {
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
        // this.props.oneStore.change_tx(source)
        this.setState({
          CoverPhoto1: true,
          works1:source,
        })
      }
    });
  }
  choosePicker2 = () => {
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
        // this.props.oneStore.change_tx(source)
        this.setState({
          CoverPhoto2: true,
          works2:source,
        })
      }
    });
  }
  choosePicker3 = () => {
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
        // this.props.oneStore.change_tx(source)
        this.setState({
          CoverPhoto3: true,
          works3:source,
        })
      }
    });
  }
  choosePicker4 = () => {
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
        // this.props.oneStore.change_tx(source)
        this.setState({
          CoverPhoto4: true,
          works4:source,
        })
      }
    });
  }
  choosePicker5 = () => {
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
        // this.props.oneStore.change_tx(source)
        this.setState({
          CoverPhoto5: true,
          works5:source,
        })
      }
    });
  }
  btn=()=>{
   console.log('title',this.state.title,"jie",this.state.jie)
   if(this.state.title==undefined||this.state.jie==undefined){
     this.refs.toast.show('Please enter information')
   }
  }
 componentWillMount(){
    fetch('http://rap2api.taobao.org/app/mock/163155/userinfo').then(res=>{
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
        <SafeAreaView style={{flex:1,width:Metrics.CW,alignItems:'center'}}>
            <ScrollView style={{
                width:Metrics.CW*.9,
                flex:1
                }} showsVerticalScrollIndicator={false}>
             {/* 标题 */}
             <View style={ys.input}>
                 <TextInput style={{height:'80%',paddingLeft:10,}} placeholder="Please enter the title" 
                 onChangeText={(title)=>{
                   this.setState({title})
                   }}/>
                 
             </View>
             {/* 介绍 */}
             <View style={[ys.input,{marginTop:30,height:Metrics.CH*.15}]}>
                 <TextInput style={{height:'80%',paddingLeft:10,}} multiline={true} 
                 placeholder="Please enter details" onChangeText={(jie)=>{
                     this.setState({jie})
                 }}/>           
             </View>
             {/* 标签 */}
             <Text style={{marginTop:Metrics.CH*.02,fontSize:18,color:Metrics.themehui2}}>Please select the label </Text>
             <View style={{marginTop:Metrics.CH*.02,
              justifyContent:'space-between',flexDirection:'row'}}>
               {
                 this.bq.map((item,index)=>{
                   
             return(
               
               <TouchableOpacity key={index} style={{marginTop:10}} onPress={()=>{
              
               }}>
               {
                 index==0?
                 <Badge value={item.name} containerStyle={{
                  width:Metrics.CW*.2,height:Metrics.CW*.08,
                 backgroundColor:this.state.ys1
                 }} onPress={()=>{
                  if(this.state.ys1==Metrics.themeColor){
                   this.setState({
                     ys1:Metrics.themehui2
                    })
                  }else{
                    this.setState({
                      ys1:Metrics.themeColor
                    })
                  }
                  }}/>
                 :
                 index==1?
                 <Badge value={item.name} containerStyle={{
                  width:Metrics.CW*.2,height:Metrics.CW*.08,
                 backgroundColor:this.state.ys2
                 }} onPress={()=>{
                  if(this.state.ys2==Metrics.themeColor){
                   this.setState({
                     ys2:Metrics.themehui2
                    })
                  }else{
                    this.setState({
                      ys2:Metrics.themeColor
                    })
                  }
                  }}/>
                 :
                 index==2?
                 <Badge value={item.name} containerStyle={{
                  width:Metrics.CW*.2,height:Metrics.CW*.08,
                 backgroundColor:this.state.ys3
                 }} onPress={()=>{
                   if(this.state.ys3==Metrics.themeColor){
                    this.setState({
                      ys3:Metrics.themehui2
                     })
                   }else{
                     this.setState({
                       ys3:Metrics.themeColor
                     })
                   }
                   }}/>
                 :
                 <Badge value={item.name} containerStyle={{
                  width:Metrics.CW*.2,height:Metrics.CW*.08,
                 backgroundColor:this.state.ys4
                 }} onPress={()=>{
                  if(this.state.ys4==Metrics.themeColor){
                   this.setState({
                     ys4:Metrics.themehui2
                    })
                  }else{
                    this.setState({
                      ys4:Metrics.themeColor
                    })
                  }
                  }}/>


               }
               </TouchableOpacity>
             )
                 })

               }
             </View>
             {/* 封面 */}
             <Text style={{marginTop:Metrics.CH*.02,fontSize:18,color:Metrics.themehui2}}>Please select the cover </Text>
             <TouchableOpacity style={ys.fm_v} onPress={()=>{
               this.choosePicker()
             }}>
             {
               this.state.CoverPhoto?
               <Image source={{uri:this.state.fmimg}} style={{ 
                 width:Metrics.CW*.5,
                height:Metrics.CW*.5,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:Metrics.CW*.15,color:Metrics.themehui2,}}>+</Text>
             }

             </TouchableOpacity>
             {/* 作品图片 */}
             <Text style={{marginTop:Metrics.CH*.02,fontSize:18,color:Metrics.themehui2}}>Please upload pictures </Text>
             <View style={{justifyContent:'space-between',flexDirection:'row',flexWrap:"wrap"}}>
             <TouchableOpacity style={[ys.fm_v,{width:Metrics.CW*.28,height:Metrics.CW*.28,}]} onPress={()=>{
               this.choosePicker1()
             }}>
             {
               this.state.CoverPhoto1?
               <Image source={{uri:this.state.works1}} style={{ 
                 width:Metrics.CW*.28,
                height:Metrics.CW*.28,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:Metrics.CW*.15,color:Metrics.themehui2}}>+</Text>
             }

             </TouchableOpacity>
             {/* 2 */}
             <TouchableOpacity style={[ys.fm_v,{width:Metrics.CW*.28,height:Metrics.CW*.28,}]} onPress={()=>{
               this.choosePicker2()
             }}>
             {
               this.state.CoverPhoto2?
               <Image source={{uri:this.state.works2}} style={{ 
                 width:Metrics.CW*.28,
                height:Metrics.CW*.28,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:Metrics.CW*.15,color:Metrics.themehui2}}>+</Text>
             }

             </TouchableOpacity>
             {/* 3 */}
             <TouchableOpacity style={[ys.fm_v,{width:Metrics.CW*.28,height:Metrics.CW*.28,}]} onPress={()=>{
               this.choosePicker3()
             }}>
             {
               this.state.CoverPhoto3?
               <Image source={{uri:this.state.works3}} style={{ 
                 width:Metrics.CW*.28,
                height:Metrics.CW*.28,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:Metrics.CW*.15,color:Metrics.themehui2}}>+</Text>
             }

             </TouchableOpacity>
             {/* 4 */}
             <TouchableOpacity style={[ys.fm_v,{width:Metrics.CW*.28,height:Metrics.CW*.28,}]} onPress={()=>{
               this.choosePicker4()
             }}>
             {
               this.state.CoverPhoto4?
               <Image source={{uri:this.state.works4}} style={{ 
                 width:Metrics.CW*.28,
                height:Metrics.CW*.28,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:Metrics.CW*.15,color:Metrics.themehui2}}>+</Text>
             }

             </TouchableOpacity>
             {/*  */}
             <TouchableOpacity style={[ys.fm_v,{width:Metrics.CW*.28,height:Metrics.CW*.28,}]} onPress={()=>{
               this.choosePicker5()
             }}>
             {
               this.state.CoverPhoto5?
               <Image source={{uri:this.state.works5}} style={{ 
                 width:Metrics.CW*.28,
                height:Metrics.CW*.28,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:Metrics.CW*.15,color:Metrics.themehui2}}>+</Text>
             }

             </TouchableOpacity>
             <TouchableOpacity style={[ys.fm_v,{width:Metrics.CW*.28,height:Metrics.CW*.28,}]} onPress={()=>{
              //  this.choosePicker()
             }}>
             {
               this.state.CoverPhoto?
               <Image source={{uri:this.state.fmimg}} style={{ 
                 width:Metrics.CW*.28,
                height:Metrics.CW*.28,
                borderRadius:10,
              }}/>
               :
               <Text style={{fontSize:15,color:Metrics.themehui2}}>Five at most</Text>
             }

             </TouchableOpacity>
            
             </View>
             {/* fabu */}
          <TouchableOpacity onPress={()=>{
 this.btn()
          }} style={ys.btn}>
          <Text style={{fontSize:18,color:'white',fontWeight:"600"}}>submit</Text>
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
const ys=StyleSheet.create({
  btn:{
    width:'100%',height:Metrics.CH*.06,
    backgroundColor:Metrics.themeColor,
  alignItems:'center',justifyContent:'center',
  borderRadius:10,marginTop:15
  },
    input:{
     marginTop:10,
    width:'100%',
    height:Metrics.CH*.05,
    borderWidth:1,
    justifyContent:'center',
    borderColor:Metrics.themehui2,
    borderRadius:5
    },
    fm_v:{
      width:Metrics.CW*.5,
      height:Metrics.CW*.5,
      backgroundColor:Metrics.themehui3,
      borderRadius:10,
      marginTop:Metrics.CH*.02,
      alignItems:'center',
      justifyContent:'center'
    }
})
export default Fabu