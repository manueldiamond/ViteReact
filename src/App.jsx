import { useEffect } from "react"
import { Nav, Hero, Features,Sponsors, Footer } from "./components"

function App() {
    useEffect(()=>{
      document.title="Vite|Next Generation Frontend Tooling"
    },[])
    
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <Features/>
      <Sponsors/>
      <Footer/>
    </div>
  )
}

export default App
