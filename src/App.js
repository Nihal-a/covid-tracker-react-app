import React from 'react'
import Header from './componenets/header/header'
import './App.css'
import Today from './componenets/today/today'
import Total from './componenets/total/total'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Today/>
      <Total/>
    </div>
  )
}
