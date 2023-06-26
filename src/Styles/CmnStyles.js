import Responsive from '../Constants/Responsive';
import SpStyles from './SpStyles';
import TextStyles from './TextStyles';

const {StyleSheet} = require('react-native');
const {Colors} = require('../Constants/Colors');

const CmnStyles = StyleSheet.create({
  bgCont: {flex: 1, backgroundColor: Colors.white},
  HomeCont: {
    width: Responsive.widthPx(92),
    alignSelf: 'center',
    paddingTop: Responsive.widthPx(8),
  },
  heading: {
    ...TextStyles.black_24_700,
    textAlign: 'center',
  },
  investedCardCont: {
    marginTop: Responsive.widthPx(6),
  },
  slider: {
    height: 40,
    marginTop: -5,
  },
  sliderThumb: {width: 15, height: 15},
  sliderMark: {
    ...TextStyles.black_10_700,
    marginTop: 40,
  },
  sliderMark2: {
    ...TextStyles.black_10_700,
    marginTop: 40,
    right: 27,
  },
  sliderMark3: {
    ...TextStyles.black_10_700,
    marginTop: 40,
    right: 10,
  },
  dropDownIcon: {
    width: 10,
    left: 4,
  },
  investedCardAmountBox: {
    backgroundColor: Colors.gray,
    width: Responsive.widthPx(20),
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    paddingLeft: Responsive.widthPx(4),
    marginRight: Responsive.widthPx(2),
  },
  calButton: {
    backgroundColor: Colors.blue,
    height: 40,
    borderRadius: 12,
    width: Responsive.widthPx(50),
    ...SpStyles.ALC_JCS,
    alignSelf: 'center',
    marginTop: Responsive.widthPx(14),
  },
  dropButtonCont: {
    ...SpStyles.FDR_ALC,
    // paddingLeft: Responsive.widthPx(2),
  },
  grayIcon: {
    width: Responsive.widthPx(14),
    height: Responsive.widthPx(14),
    marginLeft: Responsive.widthPx(-4),
    marginTop: Responsive.widthPx(1),
    marginRight: Responsive.widthPx(-3),
  },
  errMsg: {
    ...TextStyles.red_15_500,
    textAlign: 'center',
    marginTop: Responsive.widthPx(4),
  },
  loaderCont: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...SpStyles.ALC_JCS,
    width: Responsive.widthPx(100),
    height: Responsive.heightPx(100),
  },
  loadBox: {
    width: Responsive.widthPx(24),
    height: Responsive.widthPx(24),
    borderRadius: Responsive.widthPx(4),
    backgroundColor: Colors.white,
    ...SpStyles.ALC_JCS,
  },
  investedInBtnStl: {
    backgroundColor: Colors.gray,
    width: Responsive.widthPx(60),
    padding: 0,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
  },
  rowStyle: {
    backgroundColor: Colors.gray,
    height: Responsive.widthPx(10),
  },
  dropdownStyle: {
    backgroundColor: Colors.gray,
    borderRadius: 10,
    maxHeight: Responsive.widthPx(60),
    marginTop: Responsive.widthPx(1),
  },
  buttonTextStyle: {
    ...TextStyles.black_11_700,
    textAlign: 'left',
    padding: 0,
    marginRight: 0,
  },
  moneyCardCont: {
    marginTop: Responsive.widthPx(20),
    minWidth: Responsive.widthPx(70),
    alignSelf: 'center',
  },
  moneyCardTitle: {
    ...TextStyles.lightBlue_14_500,
    width: Responsive.widthPx(45),
  },
  profitStatusCont: {
    width: Responsive.widthPx(17),
    borderRadius: Responsive.widthPx(2),
    padding: 5,
    ...SpStyles.FDR_ALC,
    marginTop: Responsive.widthPx(1.5),
  },
});
export default CmnStyles;
