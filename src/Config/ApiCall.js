import axios from 'axios';

export const getCalculatorDetails = id => {
  console.log('id getCalculatorDetails ==>', id);
  return new Promise((resolve, reject) => {
    axios({
      url: 'https://api.nordl.io/api/product/calculator-details/' + id,
      method: 'Get',
    })
      .then(res => {
        resolve(res?.data?.data);
      })
      .catch(err => {
        console.warn('err getCalculatorDetails', err);
      });
  });
};

export const getAllPools = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: 'https://api.nordl.io/api/product/all-pools',
      method: 'Get',
    })
      .then(res => {
        resolve(res?.data?.data);
      })
      .catch(err => {
        console.warn('err getAllPools', err);
      });
  });
};

export const calculatorForPoolCall = body => {
  console.log('body', body);
  return new Promise((resolve, reject) => {
    axios({
      url: 'https://api.nordl.io/api/product/calculator-for-pool',
      method: 'Post',
      data: body,
    })
      .then(res => {
        resolve(res?.data?.data);
      })
      .catch(err => {
        console.warn('err calculatorForPoolCall', err);
        reject(err);
      });
  });
};
