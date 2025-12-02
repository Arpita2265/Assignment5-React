
import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Index from './Components/index'
import { Routes, Route } from 'react-router-dom'
import Description from './Components/Description'
 import {productContext} from './Context/Context'





const App = () => {


const [product, setProduct] = useState(null)


  return (
    <>
      <Header />


<productContext.Provider value={{product,setProduct}}>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/product/:title' element={<Description />} />
        </Routes>
 </productContext.Provider>
    </>
  );
};

export default App;
