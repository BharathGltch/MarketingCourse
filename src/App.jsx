import { useState } from 'react'
import './App.css'
import Appbar from './Appbar'
import SignUp from './SignUp'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignIn from './SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Appbar/>
          <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          </Routes>
      </Router>
      
    </>
  )
}

export default App
