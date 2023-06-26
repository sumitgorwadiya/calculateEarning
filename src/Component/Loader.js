import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CmnStyles from '../Styles/CmnStyles';
import {Colors} from '../Constants/Colors';

const Loader = () => {
  return (
    <View style={CmnStyles.loaderCont}>
      <View style={CmnStyles.loadBox}>
        <ActivityIndicator size={'large'} color={Colors.blue} />
      </View>
    </View>
  );
};

export default Loader;
