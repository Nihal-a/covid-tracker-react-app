import React from 'react'
import Header from './componenets/header/Header'
import './App.css'
import Today from './componenets/today/Today'
import Total from './componenets/total/Total'
import Footer from './componenets/footer/Footer'
export default function App() {
  return (
    <div className='app'>
      <Header />
      <Today/>
      <Total/>
      <Footer/>
    </div>
  )
}
