import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCreator from './Components/ProductCreator/ProductCreator'

function App() {


  return (
    <>
      <Header />
      <ProductCreator />
      <Footer />
    </>
  )
}

export default App
