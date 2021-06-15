import React from 'react'
import Header from './componenets/header/header'
import './App.css'
import Today from './componenets/today/today'


export default function App() {
  return (
    <div className='app'>
      <Header />
      <Today/>
    </div>
  )
}
