import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextStyles from '../Styles/TextStyles';
import SpStyles from '../Styles/SpStyles';
import Responsive from '../Constants/Responsive';
import CmnStyles from '../Styles/CmnStyles';
import {Slider} from '@miblanchard/react-native-slider';
import {Colors} from '../Constants/Colors';

const InvestedForm = ({maxTime, timeLineType, duration, setDuration}) => {
  const [slideValue, setSlideValue] = useState();

  useEffect(() => {
    if (maxTime) {
      setDuration(maxTime);
      setSlideValue(maxTime);
    } else {
      setDuration(15);
      setSlideValue(15);
    }
  }, [maxTime]);

  const maxAmount = maxTime ? maxTime : 15;
  const time =
    timeLineType == 'Every Month'
      ? 'mnth'
      : timeLineType == 'Every Week'
      ? 'week'
      : 'yrs';

  useEffect(() => {
    const value = maxAmount - slideValue;
    const value2 = value?.toFixed(0);
    setDuration(value2);
  }, [slideValue]);

  return (
    <View style={{marginTop: Responsive.widthPx(10)}} key={maxAmount}>
      <View style={SpStyles.FDR_ALC_JCS}>
        <Text style={TextStyles.lightBlue_14_500}>Invested From</Text>
        <View style={CmnStyles.investedCardAmountBox}>
          <Text style={TextStyles.black_11_700}>
            {duration} {time}
          </Text>
        </View>
      </View>
      <Slider
        containerStyle={CmnStyles.slider}
        trackMarks={[
          0,
          maxAmount * 0.25,
          maxAmount * 0.5,
          maxAmount * 0.75,
          maxAmount,
        ]}
        minimumValue={0}
        maximumValue={maxAmount}
        minimumTrackTintColor={Colors.blue}
        maximumTrackTintColor={Colors.lightBlue}
        thumbTintColor={Colors.blue}
        value={slideValue}
        onValueChange={value => {
          setSlideValue(value);
        }}
        trackClickable={true}
        thumbStyle={CmnStyles.sliderThumb}
        renderTrackMarkComponent={index => {
          let arr = [
            `${maxAmount?.toFixed(0)} ${time}`,
            `${(maxAmount * 0.75).toFixed(0)} ${time}`,
            `${(maxAmount * 0.5).toFixed(0)} ${time}`,
            `${(maxAmount * 0.25).toFixed(0)} ${time}`,
            `present`,
          ];
          const val = arr[index];
          return (
            <Text
              style={[
                index == 4 ? CmnStyles.sliderMark2 : CmnStyles.sliderMark,
              ]}>
              {val}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default InvestedForm;
