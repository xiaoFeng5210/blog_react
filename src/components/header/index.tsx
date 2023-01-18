import React from 'react'
import { headerList } from '../../services/header'
import 'styles/header.scss'

function Header() {
  return (
    <nav className='w-full h-90.5px flex items-center justify-between sticky top-0'>
      <div className='w-50px h-50px ml-30px'>
        <img src="https://antfu.me/logo.svg" alt="" className='w-full h-full' />
      </div>
      <ul className='flex h-full items-center text-gray-500 text-19px'>
        {
          headerList.map((item, index) => (
            <li className='list_style' key={index}>{item}</li>
          ))
        }
      </ul>
    </nav>
  )
}
export default Header
