import React from 'react'
import { Nav, Hero, Features,Sponsors, Footer } from "../components"
import { useEffect } from "react"


export const Homepage = () => {
    useEffect(()=>{
        document.title="Vite|Next Generation Frontend Tooling"
      },[])
      

  return (
    <div>
        <Nav/>
        <Hero/>
        <Features/>
        <Sponsors/>
        <Footer/>
    </div>
  )
}
