import React, { useState } from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Styles from './globalStyleSheet';
import RoundComp from './atoms/roundComp';
import Constant from './atoms/constants.json';
const WifiSuccess = ({navigation,route}) => {
  useState(()=>{
    console.log('sending call')
    
    fetch('https://MYURL', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        connectedNetwork: route.params.ntwk,
        connectionStatus: 'success'
      })
    })
    .then(function(response){
      return response.json();
    })
    
    .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });
    
  
  
  },[])
  return (
    <SafeAreaView
      style={[
        Styles.jc_center,
        Styles.p_10,
        Styles.m_10,
        Styles.bg_white,
        Styles.br_10,
      ]}>
      <RoundComp />
      <View style={[Styles.jc_center, Styles.ai_center, Styles.pt_20]}>
        <Text style={Styles.txt_B}>{Constant.success}</Text>
      </View>
      <View style={[Styles.jc_center, Styles.ai_center, Styles.fd_row]}>
        <Image
          source={require('./assets/wifi.jpg')}
          style={{height: 200, width: 200}}
        />
      </View>

      <View style={[Styles.jc_center, Styles.ai_center]}>
        <Text style={[Styles.ta_center, Styles.txtC_grey]}>
          {Constant.successMsg}
        </Text>
      </View>
      <View style={[Styles.jc_center, Styles.ai_center]}>
        <Text style={[Styles.txtC_grey, Styles.ta_center]}>
          {Constant.connectOtherDevice}
        </Text>
      </View>

      <View style={[Styles.pt_20, Styles.jc_end]}>
        <TouchableOpacity
          style={[
            Styles.jc_center,
            Styles.ai_end,
            Styles.bg_red,
            Styles.br_20,
            Styles.pv_10,
            Styles.fd_row,
          ]}>
          <Text style={Styles.txtC_white}>{Constant.continue}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WifiSuccess;
