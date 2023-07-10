import { useEffect } from "react"
import { Nav } from "./components"

function App() {
    useEffect(()=>{
      document.title="Vite|Next Generation Frontend Tooling"
    },[])
    
  return (
    <div className="app bg-gray-950">
      <Nav/>
    </div>
  )
}

export default App
