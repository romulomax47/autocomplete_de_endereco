
import './App.css'
import { Progress } from './components/Progress'
// import { Hiden } from './components/Hiden'
import { useEffect, useState } from 'react'
import { FormAddres } from './pages/FormAddres'
import { Route, Routes } from 'react-router-dom'


// import { api } from './utils/api'


function App() {

  return (

    <div className="App" id='checkout-page'>
      <Routes>
        <Route exact path= '/' element={<FormAddres />}></Route>
      </Routes>
    </div>



  )
}



export default App
