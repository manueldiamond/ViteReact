import { useEffect } from "react"
import { Nav } from "./components"

function App() {
    useEffect(()=>{
      document.title="Vite|Next Generation Frontend Tooling"
    },[])
    
  return (
    <div className="app">
      <Nav/>
    </div>
  )
}

export default App
