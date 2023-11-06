import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Story from './component/Story';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <Header />
      <Content />

      <Story />
      <hr />
      <Footer />

    </div>





  );
}

export default App;
