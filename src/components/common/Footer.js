import React from 'react'
import { social } from '../data/dummydata'

const Footer = () => {
  return (
    <footer id='footer'>
      <div>
        {
          social.map((socialicon)=>{
              return  <span>{socialicon.icon}</span>
          })
        }
      </div>  
      <p data-aos='zoom-in'>All Right Reserved 2024</p>
    </footer>
  )
}

export default Footer