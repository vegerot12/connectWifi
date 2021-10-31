import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import Styles from './globalStyleSheet';
import RoundComp from './atoms/roundComp';
import Constant from './atoms/constants.json';
const WifiPassword = ({route, navigation, props}) => {
  const [pwd, setPwd] = useState();
  const onChangeText = txt => {
    setPwd(txt);
  };
  const connect = () => {
    if (pwd) {
      WifiManager.connectToProtectedSSID(route.params.wifi, pwd, false)
        .then(() => {
          navigation.navigate('WifiSuccess',{ntwk:route.params.wifi});
        })
        .catch(() => {
          alert('Please enter the correct password');
        });
    }
    else{
      alert('Please enter the correct password');
    }
  };
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
      
      <View style={[Styles.jc_center, Styles.ai_center, Styles.pt_10]}>
        <Text style={[Styles.txt_B, Styles.txtS_24, Styles.ta_center]}>
         {Constant.enterPass}'{route.params.wifi}'{Constant.wifi} 
        </Text>
      </View>
      <View style={[Styles.jc_center, Styles.ai_center, Styles.pt_10]}>
        <TextInput
          style={[Styles.as_stretch, Styles.br_10, Styles.bw_1]}
          onChangeText={onChangeText}
          value={pwd}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>
      <View style={[Styles.pt_20, Styles.jc_end]}>
        <TouchableOpacity
          onPress={() => connect()}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  rowFlex: {
    flexDirection: 'row',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
  },
  roundBg: {
    borderRadius: 50,
    height: 40,
    width: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textBlue: {
    color: 'blue',
    fontWeight: 'bold',
  },
  textGrey: {
    color: 'grey',
    fontWeight: 'bold',
  },
  centering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRed: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
  },
  flex100: {
    flex: 1,
  },
});
export default WifiPassword;
