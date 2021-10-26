import { blockStatement } from '@babel/types'
import React, {Component} from 'react'
import {View, Text, Image, Dimensions, StatusBar, StyleSheet} from 'react-native'
import imgBanner from './source/asset/images/awan.jpg'

import OvoComponen from './source/Component/OvoComponent'
import FiturUtama from './source/Component/FiturUtama'

const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
  imageBanner:{
    height:140,width:width,
  },
  greetingText:{
    fontSize:17,
    fontWeight:'bold',
    position:'absolute',
    alignSelf:'center',
    top:30,
    color:'#383838'
  },
  wrapperOvo:{
    marginHorizontal:18,
    height:150,
    marginTop:-60,
    backgroundColor:'white',
    elevation:4,
    borderRadius:10
  },
  textOvo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:12,
    marginTop:10
     
  },
  garisOvo:{
    height:.8,
    backgroundColor:'#adadad',
    marginTop:10,
    marginHorizontal:10
  }
})

class Home extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
        <Image style={styles.imageBanner} source={imgBanner}/>
        <Text style={styles.greetingText}>Selamat Datang Di Kedol</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.textOvo}>
            <Text style={{fontSize:17, fontWeight:'bold', color:'#383838'}}>Ovo Balance</Text>
            <Text style={{fontSize:17, fontWeight:'bold', color:'#383838'}}>Rp 1.000.000</Text>
          </View>
          <View style={styles.garisOvo}></View>
          <OvoComponen/>
          </View>
          
             <View style={{marginHorizontal:18}}>
               <FiturUtama/>
             </View>
             
        
      </View>
    )
  }
}

export default Home