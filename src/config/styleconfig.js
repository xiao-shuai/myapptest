import {View,Text,TouchableOpacity,Image,Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window')
export const Metrics = {
  CW: width < height ? width : height,
  CH: width < height ? height : width,
  themeColor:'#1E90FF',
  themehui:'#A9A9A9',
  themehui2:'#808080',
  themehui3:'#DCDCDC',
}