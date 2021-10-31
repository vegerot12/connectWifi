import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import {  } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import Styles from './globalStyleSheet';
import RadioForm from 'react-native-simple-radio-button';
import RoundComp from './atoms/roundComp';
import Constant from './atoms/constants.json';
const WifiList = props => {
  const [wifiList, setWifiList] = useState([]);

  const [selected, setSelected] = useState();
  const [ssid, setSsid] = useState('');

  const initWifi = async () => {
    try {
      const ssid = await WifiManager.getCurrentWifiSSID();
      setSsid(ssid);
      console.log('Your current connected wifi SSID is ' + ssid);
    } catch (error) {
      setSsid('Cannot get current SSID!' + error.message);
      console.log('Cannot get current SSID!', {error});
    }
  };
  const onContinue = () => {
    if (selected) props.navigation.navigate('WifiPassword', {wifi: selected});
    else alert('Please select a network');
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'React Native Wifi Reborn App Permission',
          message:
            'Location permission is required to connect with or scan for Wifi networks. ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        initWifi();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
    findWifi();
  }, []);
  const findWifi = async () => {
    try {
      const listOfNetworks = await WifiManager.loadWifiList();

      let options = [];

      listOfNetworks.map(obj => {
        options.push({label: obj.SSID, value: obj.SSID});
      });
      setWifiList(options);
    } catch (error) {
      console.log(error);
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

      <View style={[Styles.pt_10, Styles.jc_center, Styles.ai_center]}>
        <Text style={[Styles.txt_B, Styles.txtS_24, Styles.ta_center]}>
          {Constant.wifiList}
        </Text>
      </View>
      <View style={[Styles.jc_center, Styles.ai_center, Styles.pt_20]}>
        <Text
          style={[
            Styles.txt_B,
            Styles.txtS_20,
            Styles.txtC_grey,
            Styles.ta_center,
          ]}>
          {Constant.selectWifi}
        </Text>
      </View>
      <View style={[Styles.ai_center, Styles.pt_20]}>
        <RadioForm
          radio_props={wifiList}
          initial={-1}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          animation={true}
          onPress={label => {
            setSelected(label);
          }}
        />
      </View>
      <View style={[Styles.pt_20, Styles.jc_end]}>
        <TouchableOpacity
          onPress={() => onContinue()}
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

export default WifiList;
