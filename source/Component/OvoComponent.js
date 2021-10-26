import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


const styles = StyleSheet.create({

    wrapperPay:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    ovoFeatureImage:{
      height:45,
      width:45,
      marginTop:17,
      marginHorizontal:40
    }
  })

const OvoComponent = () => {
    return (
        <View style={styles.wrapperPay}>
            <View>
                <Image style={styles.ovoFeatureImage} source={require('../asset/icon/pay.jpg')}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Pay</Text>
            </View>

            <View>
                <Image style={styles.ovoFeatureImage} source={require('../asset/icon/topup.jpg')}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Topup</Text>
            </View>

            <View>
                <Image style={styles.ovoFeatureImage} source={require('../asset/icon/reward.jpg')}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Reward</Text>
            </View>

      </View>
    )
}

export default OvoComponent