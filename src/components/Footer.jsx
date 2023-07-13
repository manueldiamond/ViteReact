import React from 'react'
import { footerMessage,footerCopywright } from '../constants'

const Footer = () => {
  return (
    <footer className='footer text-center font-[500] py-10'>
        <p>{footerMessage}</p>
        <p>{footerCopywright}</p>
    </footer>
  )
}

export default Footer