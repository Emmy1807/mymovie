import React, {useState, useEffect} from 'react';
import './main.css';
import Schedule from './Schedule';
import Trend from './Trend';
import Blog from './Blog';
import Footer from './Footer';


const Main = () => {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
      <Footer />
    </main>
  )
}

export default Main
