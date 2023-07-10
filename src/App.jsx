import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-xl font-bold underline">
        Hello world!
      </h1>
      
      <button className='rounded-full  px-8 py-3 bg-blue-600  text-white '>Get Started</button>
    </>
  )
}

export default App
