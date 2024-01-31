import React from 'react';
import Layout from './components/Layout';
import Content from './components/Content';
// import 'index.css';

const city = 'Obninsk';
const App = () => {
  return (
    <Layout
      headerSlot={<h1>Header</h1>}
      contentSlot={<Content city={city} />}
      footerSlot={<p>Footer</p>}
    />
  );
};

export default App;