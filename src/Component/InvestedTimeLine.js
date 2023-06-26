import {Text, View} from 'react-native';
import React from 'react';
import TextStyles from '../Styles/TextStyles';
import SpStyles from '../Styles/SpStyles';
import Responsive from '../Constants/Responsive';
import SelectButton from './Buttons/SelectButton';

const InvestedTimeLine = ({setTimeLineType, timeLineType}) => {
  return (
    <View style={[SpStyles.FDR_ALC_JCS, {marginTop: Responsive.widthPx(10)}]}>
      <Text style={TextStyles.lightBlue_14_500}>Investment Timeline</Text>
      <View style={[SpStyles.FDR_ALC, {columnGap: Responsive.widthPx(1)}]}>
        <SelectButton
          isActive={timeLineType == 'Every Month'}
          text={'Every Month'}
          setValue={setTimeLineType}
        />
        <SelectButton
          text={'Every Week'}
          isActive={timeLineType == 'Every Week'}
          setValue={setTimeLineType}
        />
        <SelectButton
          text={'Every Year'}
          isActive={timeLineType == 'Every Year'}
          setValue={setTimeLineType}
        />
      </View>
    </View>
  );
};

export default InvestedTimeLine;
