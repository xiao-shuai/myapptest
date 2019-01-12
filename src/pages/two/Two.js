import React, {Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import { observable } from 'mobx';
@inject(["oneStore"])
@observer
class Two extends  Component{
    constructor(props){
        super(props)
       this.state={},
       this.store=this.props.oneStore
    }

    render(){
        return(
            <SafeAreaView>
               <View>
             <Text>this is Two page </Text> 
             <TouchableOpacity  onPress={()=>{
               this.store.OneAc()
               this.props.navigation.goBack()
             }}>
                <Text>返回</Text>
             </TouchableOpacity>
            </View>
            </SafeAreaView>
            
        )
    }
}
export default Two