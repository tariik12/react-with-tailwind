import { useState } from 'react'
import './App.css'
import Nav from './components/Navbar/Nav'
import PriceList from './components/PriceList/PriceList'
import DashBoard from './components/DashBoard/DashBoard'
import PhoneBer from './components/PhoneBer/PhoneBer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Nav />
    <h1 className='text-7x1 text-purple-600'>Hello from tailwind</h1>
    <PriceList />
    <DashBoard />
    <PhoneBer />
    </div>
  )
}

export default App
