import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CmnStyles from '../../Styles/CmnStyles';
import TextStyles from '../../Styles/TextStyles';

const CalculateButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={CmnStyles.calButton} onPress={onPress}>
      <Text style={TextStyles.white_16_700}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CalculateButton;
