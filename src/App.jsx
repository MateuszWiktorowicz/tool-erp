import { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCreator from './Components/ProductCreator/ProductCreator'
import Login from './Components/Users/Login'
import Register from './Components/Users/Register'
import '@fortawesome/fontawesome-free/css/all.min.css';
import  useToken  from './useToken';



function App() {
  const [token, setToken] = useToken();

  return (
    <>
      <Header token={token}/>
      <BrowserRouter>
      <Routes>
      {!token ? (
            <Route path="*" element={<Login setToken={setToken} />} />
          ) : (
              <Route path="/" element={<ProductCreator />} />
             
          )}
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
