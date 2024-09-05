import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCreator from './Components/ProductCreator/ProductCreator'
import Login from './Components/Users/Login'
import Register from './Components/Users/Register'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {


  return (
    <>
      <Header />
      <ProductCreator />
      <Login />
      <Register />
      <Footer />
    </>
  )
}

export default App
