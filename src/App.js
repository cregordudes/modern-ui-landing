import React from 'react';
import './App.css'


import Brand from './components/brand/brand';
import CTA from './components/cta/cta';
import Navbar from './components/navbar/navbar';


import Header from './container/header/header';
import Footer from './container/footer/footer';
import Blog from './container/blog/blog';
import Features from './container/features/features';
import Possibility from './container/possibility/possibility';
import GPT3 from './container/whatGPT3/gpt3';


const App = () => {
  return (
  <div className='App'>
      <div className='gradient__bg'>
         <Navbar/>
         <Header/>
      </div>
      <Brand/>
      <GPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
  </div>
  );
};

export default App;
