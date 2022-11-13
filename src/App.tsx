import './App.css'
import { useState } from 'react'
import Table from './components/Table'
import DButton from './components/DButton'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main className='relative w-min m-auto'>
      <DButton />
      <Table />
    </main>
  )
}
