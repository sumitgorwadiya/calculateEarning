import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';
import TextStyles from '../../Styles/TextStyles';
import SpStyles from '../../Styles/SpStyles';

const SelectButton = ({text, isActive, setValue}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? Colors.blue : Colors.gray,
        height: 28,
        width: 66,
        ...SpStyles.ALC_JCS,
        borderRadius: 16,
      }}
      onPress={() => {
        setValue(text);
      }}>
      <Text style={isActive ? TextStyles.white_8_700 : TextStyles.black_8_700}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectButton;
