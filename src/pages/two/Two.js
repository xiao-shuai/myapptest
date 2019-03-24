import React, {Component} from 'react'
import {View,Text,TouchableOpacity,ActivityIndicator,ScrollView,Image} from 'react-native'
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
           title:'这是说明'
           },
           {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
            title:'这是说明'
            },
            {
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
                title:'这是说明'
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553357908937&di=ef21d64f79e9b0b7055275fe6f21cfe0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202da2ec52645fbfbedab641b6e.jpg',
                    title:'这是说明'
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
 tabBarUnderlineStyle={{backgroundColor:Metrics.themeColor}}
 
 >

                <ScrollView tabLabel='美食IP'>

                {
                    this.testdata.map((item,index)=>{
           return(
           <View style={{ }}>
         <Image source={{uri:item.img}} 
         style={{width:Metrics.CW*.25,height:Metrics.CW*.25}}/>
         <Text>{item.title}</Text>
           </View>
           )
                        })
                }
					</ScrollView>
 
					<ScrollView tabLabel='健康IP'>
						<Text>周运动</Text>
					</ScrollView>
 
					<ScrollView tabLabel='亲子IP'>
						<Text>月运动</Text>
					</ScrollView>

</ScrollableTabView>

       

          }
               
            </SafeAreaView>
            
        )
    }
}
export default Two