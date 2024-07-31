import { useEffect, useState } from 'react'
import './App.css'
import ProductList from '../src/components/ProductList';
import { Provider } from 'react-redux';
import {store} from '../src/store';
import { http } from 'msw';
import axios from 'axios';
import { background } from 'storybook/internal/theming';


function App() {
  useEffect(()=>{
    // setTimeout(() => {      
      fetch("/api/products").then((res)=>(
        console.log(res,"respnse")
      ))
    // }, 500);
  },[])
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">E-commerce Store</h1>
        
      </div>
      <div>
      <ProductList style={{backgroundColor:"red"}} />
      </div>
    </Provider>
  )
}

export default App
