import {Dimensions, StatusBar, Platform} from 'react-native';

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    W_HEIGHT === 780 ||
    W_WIDTH === 780 ||
    W_HEIGHT === 812 ||
    W_WIDTH === 812 ||
    W_HEIGHT === 844 ||
    W_WIDTH === 844 ||
    W_HEIGHT === 896 ||
    W_WIDTH === 896 ||
    W_HEIGHT === 926 ||
    W_WIDTH === 926;
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const {height} = Dimensions.get('screen');

const widthPx = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return (screenWidth * elemWidth) / 100;
};

const heightPx = (heightPercent: number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return ((screenHeight - getStatusBarHeight().toFixed(0)) * elemHeight) / 100;
};
const getStatusBarHeight = () => {
  return Platform.select({
    ios: isIPhoneX ? 78 : 20,
    android: StatusBar.currentHeight > 24 ? 0 : StatusBar.currentHeight,
    default: 0,
  });
};

export default {
  widthPx,
  heightPx,
};
