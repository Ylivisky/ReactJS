import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greetings="Bienvenido a CompraPC" />
    </>
  )
}

export default App
