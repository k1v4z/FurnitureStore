import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='bg-yellow-100 py-5'>
        <div className='container mx-auto flex items-center justify-between'>
          <nav>
            <ul className='flex space-x-4'>
              <li><a href="#" className='hover:underline cursor-pointer font-serif'>Home 11</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
