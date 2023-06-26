import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CmnStyles from '../Styles/CmnStyles';
import InvestedCard from '../Component/InvestedCard';
import InvestedInCard from '../Component/InvestedInCard';
import InvestedTimeLine from '../Component/InvestedTimeLine';
import InvestedForm from '../Component/InvestedForm';
import MoneyCard from '../Component/MoneyCard';
import CalculateButton from '../Component/Buttons/CalculateButton';
import {
  calculatorForPoolCall,
  getAllPools,
  getCalculatorDetails,
} from '../Config/ApiCall';
import Loader from '../Component/Loader';

const HomeScreen = () => {
  const [investIn, setInvestIn] = useState();
  const [activeInvest, setActiveInvest] = useState();
  const [timelineDetail, setTimeLineDetail] = useState();
  const [timeLineType, setTimeLineType] = useState();
  const [maxTime, setMaxTime] = useState();
  const [investedAmount, setInvestedAmount] = useState();
  const [errMsg, setErrMsg] = useState();
  const [duration, setDuration] = useState();
  const [frqInDays, setFrqInDays] = useState();
  const [investedMoney, setInvestedMoney] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllPools().then(res => {
      setInvestIn(res?.pools);
    });
  }, []);

  useEffect(() => {
    if (activeInvest) {
      getCalculatorDetails(activeInvest?.id).then(res => {
        setTimeLineDetail(res);
      });
    }
  }, [activeInvest]);

  useEffect(() => {
    if (timeLineType == 'Every Month') {
      setMaxTime(timelineDetail?.monthlyOptions);
      setFrqInDays(30);
    } else if (timeLineType == 'Every Week') {
      setMaxTime(timelineDetail?.weeklyOptions);
      setFrqInDays(7);
    } else if (timeLineType == 'Every Year') {
      setMaxTime(timelineDetail?.yearlyOptions);
      setFrqInDays(365);
    }
  }, [timelineDetail, timeLineType]);

  const calculateHandler = () => {
    const durationInt = parseInt(duration);
    if (!activeInvest) {
      setErrMsg('Please Select Fund');
    } else if (investedAmount == 0) {
      setErrMsg('Invested Amount Should more then zero');
    } else if (investedAmount == 0) {
      setErrMsg('Invested Amount Should more then zero');
    } else if (!timeLineType) {
      setErrMsg('Please Select time line type');
    } else {
      setErrMsg();
      const body = {
        poolId: activeInvest?.id,
        frqInDays: frqInDays,
        investmentCount: durationInt + 1,
        sipAmount: investedAmount,
      };
      setLoading(true);
      calculatorForPoolCall(body)
        .then(res => {
          console.log('res', res);
          const amount = parseFloat(res?.result?.absoluteReturns);
          const f_amount =
            res?.result?.resultData[res?.result?.resultData?.length - 1];
          setProfitAmount(amount.toFixed(2));
          setInvestedMoney(f_amount?.investedAmount);
          const worthAmount = parseInt(f_amount?.worthNowInUSD);
          setFinalAmount(worthAmount);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          console.log('err', err);
        });
    }
  };

  return (
    <View style={CmnStyles.bgCont}>
      <SafeAreaView style={CmnStyles.bgCont}>
        <View style={CmnStyles.bgCont}>
          <ScrollView style={CmnStyles.HomeCont}>
            <Text style={CmnStyles.heading}>Calculate Earnings</Text>
            <InvestedCard
              activeInvest={activeInvest}
              setInvestedAmount={setInvestedAmount}
              investedAmount={investedAmount}
            />
            <InvestedInCard
              investIn={investIn}
              setActiveInvest={setActiveInvest}
              activeInvest={activeInvest}
            />
            <InvestedTimeLine
              timeLineType={timeLineType}
              setTimeLineType={setTimeLineType}
            />
            <InvestedForm
              maxTime={maxTime}
              timeLineType={timeLineType}
              setDuration={setDuration}
              duration={duration}
            />
            <MoneyCard
              finalAmount={finalAmount}
              profitAmount={profitAmount}
              investedMoney={investedMoney}
            />
            <CalculateButton
              text={'Calculate'}
              onPress={() => {
                calculateHandler();
              }}
            />
            <View key={errMsg}>
              {errMsg && <Text style={CmnStyles.errMsg}>{errMsg}</Text>}
            </View>
          </ScrollView>
          {loading && <Loader />}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
