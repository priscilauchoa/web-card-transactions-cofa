import './App.css'
import React from 'react'
import useFetchCards from './hooks/useFetchCards'
import useFetchTransactions from './hooks/useFetchTransaction'

function App() {
  console.log('#### cards', useFetchCards())
  console.log('#### transactions', useFetchTransactions('lkmfkl-mlfkm-dlkfm'))
  return (
    <>
    </>
  )
}

export default App
