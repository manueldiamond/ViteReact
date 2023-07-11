import { useEffect } from "react"
import { Nav } from "./components"

function App() {
    useEffect(()=>{
      document.title="Vite|Next Generation Frontend Tooling"
    },[])
    
  return (
    <div className="app">
      <Nav/>
      <Hero/
    </div>
  )
}

export default App
