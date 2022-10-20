import { Suspense } from 'react';
import './App.scss';
import './i18n';

import Layout from './components/Layout';
function App() {
  // price = [5,100,20,66,16]
  // discount = 50
  // offset = 1
  // readLength = 3

  // const price = [5, 100, 20, 66, 16];
  // const discount = 50;
  // const offset = 1;
  // const readLength = 3;
  // const newPrice = [];

  // function discont(price, discount, offset, readLength) {
  //   if (
  //     discount > 0 &&
  //     discount <= 99 &&
  //     price.length > 0 &&
  //     offset >= 0 &&
  //     readLength > 0
  //   ) {
  //     for (let i = 0; i < price.length; i++) {
  //       newPrice.push(Math.floor(price.slice(offset)[i] * (discount / 100)));
  //     }
  //     return newPrice.filter((e) => e !== NaN).slice(0, readLength);
  //   } else return;
  // }

  // console.log(discont(price, discount, offset, readLength));

  return (
    <Suspense fallback={'Loading...'}>
      <Layout />
    </Suspense>
  );
}

export default App;
