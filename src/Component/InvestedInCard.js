import {Image, Text, View} from 'react-native';
import React from 'react';
import TextStyles from '../Styles/TextStyles';
import SpStyles from '../Styles/SpStyles';
import Responsive from '../Constants/Responsive';
import SelectDropdown from 'react-native-select-dropdown';
import {Images} from '../Constants/Images';
import CmnStyles from '../Styles/CmnStyles';

const InvestedInCard = ({investIn, setActiveInvest, activeInvest}) => {
  return (
    <View style={[SpStyles.FDR_ALC_JCS, {marginTop: Responsive.widthPx(10)}]}>
      <Text style={TextStyles.lightBlue_14_500}>Invested In</Text>
      <SelectDropdown
        data={investIn}
        onSelect={(selectedItem, index) => {
          setActiveInvest(selectedItem);
        }}
        buttonStyle={CmnStyles.investedInBtnStl}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem?.poolName;
        }}
        rowTextForSelection={(item, index) => {
          return item?.poolName;
        }}
        rowStyle={CmnStyles.rowStyle}
        rowTextStyle={TextStyles.black_11_400}
        dropdownStyle={CmnStyles.dropdownStyle}
        renderDropdownIcon={isOpened => {
          return (
            <Image
              source={Images.dropDown}
              style={[
                CmnStyles.dropDownIcon,
                isOpened && {transform: [{rotate: '180deg'}]},
              ]}
              resizeMode="contain"
            />
          );
        }}
        renderCustomizedButtonChild={item => {
          return (
            <View style={CmnStyles.dropButtonCont}>
              <Image
                source={Images.grayIcon}
                style={CmnStyles.grayIcon}
                resizeMode="contain"
              />
              <Text
                style={[
                  TextStyles.black_10_600,
                  {width: Responsive.widthPx(42)},
                ]}
                numberOfLines={1}>
                {activeInvest
                  ? activeInvest?.poolName
                  : 'Grayscale Bitcoin Trust'}
              </Text>
            </View>
          );
        }}
        buttonTextStyle={CmnStyles.buttonTextStyle}
      />
    </View>
  );
};

export default InvestedInCard;
