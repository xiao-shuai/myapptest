import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider } from 'react-native-elements'

import Steps from '@ant-design/react-native/lib/steps';
const Step = Steps.Step;
  class Sign extends Component{
      constructor(props){
          super(props)
          this.state={
           current:0
          }
      }

      render(){
          return(
              <SafeAreaView>
          <View style={{marginTop:200,alignItems:'center'}}>
              <TouchableOpacity onPress={()=>{
                  this.setState({current:this.state.current+1})
              }}>
            <Text>签到</Text>
              </TouchableOpacity>
           <Steps direction={"horizontal"} current={this.state.current}>
       <Step />
       <Step />
       <Step />
         </Steps>
          </View>
          </SafeAreaView>
          )
      }
  } 
export default Sign