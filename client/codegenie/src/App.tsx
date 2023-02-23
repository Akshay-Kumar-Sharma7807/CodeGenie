import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './Layout';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout></Layout>
    </Router>
  )
}

export default App
