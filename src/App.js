import React from 'react';
import Layout from './components/Layout/Layout';
import CardBuilder from './containers/CardBuilder/CardBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <CardBuilder />
      </Layout>
    </div>
  );
}

export default App;
