import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCreator from './Components/ProductCreator/ProductCreator'
import Login from './Components/Users/Login'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {


  return (
    <>
      <Header />
      <ProductCreator />
      <Login />
      <Footer />
    </>
  )
}

export default App
