import React from 'react';
import Header from './components/Header';
import { Content } from "./components/Content";
import Image from "./components/Image";
import Products from './components/GoodCards/Products';


export default function App() {
  return (
      <>
        <Header/>
        <Content/>
        <Image/>
        <Products/>
      </>
  );
}