import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../Constants/Colors';
import CmnStyles from '../Styles/CmnStyles';
import {Slider} from '@miblanchard/react-native-slider';
import TextStyles from '../Styles/TextStyles';
import SpStyles from '../Styles/SpStyles';

const InvestedCard = ({activeInvest, investedAmount, setInvestedAmount}) => {
  const [slideValue, setSlideValue] = useState(0);

  useEffect(() => {
    const value = slideValue * 3;
    const fixedValue = value.toFixed(0) * 1000;
    setInvestedAmount(fixedValue);
  }, [slideValue]);

  return (
    <View style={CmnStyles.investedCardCont}>
      <View style={SpStyles.FDR_ALC_JCS}>
        <Text style={TextStyles.lightBlue_14_500}>Invested Amount</Text>
        <View style={SpStyles.FDR_ALC}>
          <View style={CmnStyles.investedCardAmountBox}>
            <Text style={TextStyles.black_11_700}>{investedAmount}</Text>
          </View>
          <View style={CmnStyles.investedCardAmountBox}>
            <Text style={TextStyles.black_11_700}>
              {activeInvest ? activeInvest?.underlyingAsset?.symbol : 'USDT'}
            </Text>
          </View>
        </View>
      </View>
      <Slider
        containerStyle={CmnStyles.slider}
        trackMarks={[0, 1, 2, 3, 4, 5, 6, 7]}
        minimumValue={0}
        maximumValue={7}
        minimumTrackTintColor={Colors.blue}
        maximumTrackTintColor={Colors.lightBlue}
        thumbTintColor={Colors.blue}
        value={slideValue}
        onValueChange={value => {
          setSlideValue(value);
        }}
        thumbStyle={CmnStyles.sliderThumb}
        renderTrackMarkComponent={index => {
          return (
            <Text
              style={[
                index == 7 ? CmnStyles.sliderMark3 : CmnStyles.sliderMark,
              ]}>
              {index * 3}K
            </Text>
          );
        }}
      />
    </View>
  );
};

export default InvestedCard;
