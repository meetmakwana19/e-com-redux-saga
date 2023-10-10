import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addToCart, dummyAction } from "./redux/action";
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const product = {
    name: "iPhone", 
    price: "1L",
    color: "Black",
  }
  return (
    <>
    <div>
      <button type="button" onClick={() => dispatch(addToCart(product))}>Add</button>
      <button type="button" onClick={() => dispatch(dummyAction(product))}>Dummy Action</button>
    </div>
    <summary>(Logs are in console.warn)</summary>
    </>
  )
}

export default App
