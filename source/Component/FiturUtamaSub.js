import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


const styles = StyleSheet.create({

  imageFiturUtama:{
    height:55,
    width:55,
    marginTop:15
  },
  textFeatureUtama:{
    textAlign:'center',
    marginTop:4

  }
    
  })

  class FiturUtamaSub extends React.Component{
    render(){
      return (
          <View style={{width:'25%',alignItems:'center'}}>
            <View>
                <Image style={styles.imageFiturUtama} source={this.props.image}/>
                <Text style={styles.textFeatureUtama}>{this.props.title}</Text>
              </View>
              
          </View>

      )
  }
}

export default FiturUtamaSub