import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

import FiturUtamaSub from './FiturUtamaSub'

const styles = StyleSheet.create({

  wrapperFiturUtama:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    flexWrap:'wrap',
    width:'100%',
    
  }
    
  })

  const FiturUtama = () => {
    return (
        <View style={styles.wrapperFiturUtama}>
              <FiturUtamaSub  image={require('../asset/icon/food.jpg')} title='Food'/>
              <FiturUtamaSub  image={require('../asset/icon/bike.jpg')} title='Bike'/>
              <FiturUtamaSub  image={require('../asset/icon/car.jpg')} title='Car'/>
              <FiturUtamaSub  image={require('../asset/icon/send.jpg')} title='Delivery'/>
              <FiturUtamaSub  image={require('../asset/icon/subscribe.jpg')} title='Subscribe'/>
              <FiturUtamaSub  image={require('../asset/icon/doctor.jpg')} title='Doctor'/>
              <FiturUtamaSub  image={require('../asset/icon/pulsa.jpg')} title='Pulsa'/>
              <FiturUtamaSub  image={require('../asset/icon/more.jpg')} title='More'/>
        </View>

    

      
      
    )
}


export default FiturUtama