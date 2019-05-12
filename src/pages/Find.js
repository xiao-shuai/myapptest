import React, {Component} from 'react'
import {View,Text,ScrollView,
    TextInput,ImageBackground,Image,
    StyleSheet,TouchableOpacity,ActivityIndicator,
    AsyncStorage} from 'react-native'
import { SafeAreaView ,NavigationActions,} from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { Divider,}  from 'react-native-elements'
import Toast, {DURATION} from 'react-native-easy-toast'
import {Metrics} from '../config/styleconfig'
import {CommentList,InformationList} from 'react-native-ui-modal'
import Gallery from 'react-native-image-gallery';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Find extends Component{
    static navigationOptions = {
        tabBarLabel: 'Home',
      };
    constructor(props){
        super(props)
        this.state={
            show:true,
             data:[
                 {
                    title: 'Durian Pizza and Fru',
                    uimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1209193326,1475830921&fm=26&gp=0.jpg',
                    fengmian: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2455696206,1309039480&fm=26&gp=0.jpg',
                    miaoshu:'Mix the cake material in the square evenly and knead it into dough until the film is out. Put it in the fermentation box or warm place and ferment to twice the size. ',
                    xqimg:[
                        {
                            img:'http://img95.699pic.com/photo/50113/7515.jpg_wh300.jpg!/fh/300/quality/90',
                            ms:'If you are tired of ordering the same old pizza for delivery make your own customized pizza at home. Give yourself enough time to mix together a flavorful dough and let it prove',
                         },
                         {
                            img:'http://img95.699pic.com/photo/50071/6199.jpg_wh300.jpg!/fh/300/quality/90',
                            ms:'Bake it until the cheese melts and the crust becomes golden brown',
                         },
                         {
                            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2451195952,1434338382&fm=26&gp=0.jpg',

                            ms:'instant yeast, put 2 teaspoons (6 g) of active dry yeast into a small bowl. Add a pinch of sugar and 2 tablespoons (30 ml) of the lukewarm water',
                         },
                    ],
                },
                 {
                    title: 'A tribute to my mentor!',
                    uimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555612978982&di=72fb67c2277be87b32e67f69eced7a9e&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129181139_aV58j.thumb.700_0.jpeg',
                    fengmian: 'http://img95.699pic.com/desgin_photo/40032/1268_list.jpg!/fh/300/quality/90',
                    miaoshu:'I do not have a recipe today, as I am mourning the passing of my second Mother! I felt the need to come here today, to grieve, and just to talk. ',
                    xqimg:[
                        {
                            img:'http://img95.699pic.com/photo/50008/2407.jpg_wh300.jpg',
                            ms:'It was on the morning of 4/14/12, when I received an e-mail from my aunt Mona,',
                         },
                         {
                            img:'http://img95.699pic.com/photo/50071/6199.jpg_wh300.jpg!/fh/300/quality/90',
                            ms:' our second mother, the hospital cook, the day-care teacher, and mentor of my love for food and who has also taught my siblings, my cousins, even her siblings and all her friends, ',
                         },
                         {
                            img:'http://img95.699pic.com/photo/50096/7269.jpg_wh300.jpg!/fh/300/quality/90',

                            ms:'As you can denote from this blog, I always try to put into practice, the food lessons learned from her',
                         },
                    ],
                 },
                 {
                    title: 'How to make bread',
                    uimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555612978981&di=da0a3b578b15c168ea258854ad3ed047&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201408%2F25%2F20140825090915_nWazF.thumb.700_0.jpeg',
                    fengmian: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3128032539,51637011&fm=26&gp=0.jpg',
                    miaoshu:'Mix the cake material in the square evenly and knead it into dough until the film is out. Put it in the fermentation box or warm place and ferment to twice the size. ',
                    xqimg:[
                        {
                            img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3751928677,2799605279&fm=26&gp=0.jpg',
                            ms:'It was on the morning of 4/14/12, when I received an e-mail from my aunt Mona,',
                         },
                         {
                            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=305249940,3485620655&fm=26&gp=0.jpg',
                            ms:' our second mother, the hospital cook, the day-care teacher, and mentor of my love for food and who has also taught my siblings, my cousins, even her siblings and all her friends, ',
                         },
                         {
                            img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4221985644,2767818642&fm=26&gp=0.jpg',

                            ms:'As you can denote from this blog, I always try to put into practice, the food lessons learned from her',
                         },
                    ],
                 },
                
             ]
        }
    }

    componentWillMount(){
        fetch('https://easy-mock.com/mock/5cb88e4166cc290c39fea900/food/wz').then(res=>{res.json()})
        .then(res=>{
          this.setState({show:false})  
        })
        .catch(err=>{

        })
        AsyncStorage.getItem('islogin').then(res=>{
            console.log('res_login---one?',res)
            if(res===null){
                // this.props.navigation.navigate('Login')
                this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
            }
        }      
        ).catch(err=>{
         console.log('res_login---?',err)
        }     
        )
    }

  render(){
      if(this.state.show){
          return (
            <View style={{justifyContent: 'center',height:Metrics.CH*.8}}>
            <ActivityIndicator size="large" color={Metrics.themeColor} />
            </View>
          )
      }
      return(
          <SafeAreaView style={{flex:1,alignItems:'center'}}>
          
          <View  style={{
              flexDirection:'row',
              justifyContent:'space-between',
              padding:10,
              width:Metrics.CW,
              backgroundColor:Metrics.themeColor,
              alignItems:'center'
              }}>
              <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Find article</Text>
              <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Search')
              }} style={ys.top_find} >
               
                   <Ionicons name={'ios-search'} size={20} style={{marginLeft:'5%',color:'white'}}/>
                   <Text style={{marginLeft:'5%',color:'white',}}>Please enter content</Text>
   
             </TouchableOpacity>
             
          </View>
          
         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
             width:Metrics.CW*.95,
             alignItems:'center'
            }}>
            {
                this.state.data.map((item,index)=>{
                return(
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Findxq',{info:item})
                    }}>
        <LinearGradient colors={
    index==0?
    ['#00F260','#0575E6']
    :
    index==1?
    ['#8360c3','#2ebf91']
    :
    ['#005AA7','#4e54c8']

} style={{
width:Metrics.CW*.95,
// height:Metrics.CH*.3,
padding:10,
marginTop:10,
borderRadius:8
            }}>
             
                 <View style={{
                  flexDirection:'row',
                 justifyContent:'space-between',
                 alignItems:'center'
                 }}>
                 <Text style={{fontSize:20,color:'white'}}>{item.title}</Text>
                 <Image    source={{uri:item.uimg}}
                 style={{
                     width:Metrics.CW*.16,
                     height:Metrics.CW*.16,
                    borderRadius:Metrics.CW*.08
                    
                 }}
                 />
                 </View>
                 <Divider style={{height:1,marginTop:10}}/>
                 <Image source={{uri:item.fengmian}} style={{width:'100%',height:Metrics.CH*.3,borderRadius:6}}/>
                 <Text style={{fontSize:16,color:'white',marginTop:10}}>
                {item.miaoshu}
                 </Text>
                 
             </LinearGradient>
             </TouchableOpacity>
                )
                })
            }
            
<View style={{width:Metrics.CW,alignItems:'center'}}>
    <Text style={{color:Metrics.themehui,marginTop:10}}>------- No more -------</Text>
</View>

         </ScrollView>
         <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('Fabu')
         }}  style={{position:'absolute',top:Metrics.CH*.76,right:Metrics.CW*.05,opacity:.8}}>
         <Ionicons name='ios-add-circle' size={50} style={{
          color:Metrics.themeColor,
             
       }}/> 
        </TouchableOpacity>
             
         
        
         
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
export default Find