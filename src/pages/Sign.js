import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,Dimensions,ScrollView,StyleSheet,FlatList} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider } from 'react-native-elements'


  class Sign extends Component{
      constructor(props){
          super(props)
          this.state={

          }
      }

      render(){
          return(
              <SafeAreaView>
          <View>
<Text>44</Text>
          </View>
          </SafeAreaView>
          )
      }
  } 
export default Sign