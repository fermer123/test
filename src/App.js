import { Suspense } from 'react';
import './App.scss';
import './i18n';

import Layout from './components/Layout';
function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <div className='App'>
        <Layout />
      </div>
    </Suspense>
  );
}

export default App;
