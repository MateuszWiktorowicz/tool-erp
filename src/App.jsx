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
      <BrowserRouter>
      <Header token={token} />
      <Routes>
      {(!token) ? (
            <Route path="*" element={<Login setToken={setToken} />} />
          ) : (
              <Route path="/" element={<ProductCreator />} />
             
          )}
          <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
