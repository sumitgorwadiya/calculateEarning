import {View, Text, Image} from 'react-native';
import React from 'react';
import TextStyles from '../Styles/TextStyles';
import SpStyles from '../Styles/SpStyles';
import Responsive from '../Constants/Responsive';
import {Colors} from '../Constants/Colors';
import {Images} from '../Constants/Images';
import CmnStyles from '../Styles/CmnStyles';

const MoneyCard = ({finalAmount, profitAmount, investedMoney}) => {
  console.log('profitAmount', profitAmount);

  const isProfit = profitAmount > 0 ? true : false;

  return (
    <View style={CmnStyles.moneyCardCont}>
      <View style={SpStyles.FDR_ALC}>
        <Text style={CmnStyles.moneyCardTitle}>Invested Money</Text>
        <Text
          style={{
            ...TextStyles.lightBlue_16_700,
          }}>
          {investedMoney} USDT
        </Text>
      </View>
      <View style={[{flexDirection: 'row', marginTop: Responsive.widthPx(4)}]}>
        <Text style={CmnStyles.moneyCardTitle}>Money you would have</Text>
        <View>
          <Text style={TextStyles.lightBlue_24_700}>{finalAmount} USDT</Text>
          {profitAmount ? (
            <View
              style={{
                backgroundColor: isProfit ? Colors.lightGreen : Colors.lightRed,
                ...CmnStyles.profitStatusCont,
              }}>
              <Image
                source={Images.upFill}
                style={[
                  {width: 7, height: 7, marginRight: 2},
                  !isProfit && {
                    transform: [{rotate: '180deg'}],
                    tintColor: Colors.red,
                  },
                ]}
                resizeMode="contain"
              />
              <Text
                style={
                  isProfit ? TextStyles.green_10_700 : TextStyles.red_10_700
                }>
                {profitAmount} %
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default MoneyCard;
