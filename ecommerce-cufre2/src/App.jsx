import {BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import TituloComponente from './components/TituloComponente';
import ItemDetailContainer from "./components/ItemDetailContainer"




function App() {
  
  return (
    <>
       
  <BrowserRouter>
  <TituloComponente />
      <NavBar /> 
      <Routes>
                <Route path="/" element={<ItemListContainer/>} /> 
                <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                <Route path="/producto/:id" element={<ItemDetailContainer />} />
                
      </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
