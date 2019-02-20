import React, {Component} from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject,observer} from 'mobx-react'
import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import {Metrics} from '../config/styleconfig'
import { Button,Divider ,SearchBar} from 'react-native-elements'

class Detail extends Component{
   constructor(props){
       super(props)
       this.state={
        search: '',
       }

   }
   updateSearch = search => {
    this.setState({ search });
  };
   render(){
    const { search } = this.state;
       return(
       <SafeAreaView>
       <View style={{}}>
      <SearchBar  placeholder="Type Here..." 
      onChangeText={this.updateSearch}
      value={search} 
     lightTheme={true}
     cancelButtonTitle={'3'}
     />
   
       </View>
       </SafeAreaView>
       )
   }
}
export default Detail