import React from 'react';
import {
    Text,
    View,
   
  } from 'react-native';
  import Styles from '../globalStyleSheet';
  import Constant from '../atoms/constants.json'

export default function RoundComp()
{
    return (
        <View
        style={[
          Styles.jc_center,
          Styles.ai_center,
          Styles.pv_20,
          Styles.fd_row,
        ]}>
       
       
          <View
            style={[
              Styles.bg_red,
              Styles.br_50,
              Styles.jc_center,
              Styles.ai_center,
              Styles.fd_row,
              {width: 90, height: 90},
              Styles.pb_10,
            ]}>
            <Text style={[Styles.txt_B, Styles.txtC_blue, {fontSize: 45}]}>
              {Constant.a}
            </Text>
          </View>
        
      </View>
    )
}