import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Nav = () => {
    const [open,setOpen] = useState(false) 
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'Products',
          path: '/products'
        },
        {
          id: 3,
          name: 'About Us',
          path: '/about'
        },
        {
          id: 4,
          name: 'Contact Us',
          path: '/contact'
        },
        {
          id: 5,
          name: 'Shopping Cart',
          path: '/cart'
        }
      ];
      
    return (
        
        <nav className='bg-purple-400 px-4 '>
            <div onClick={() => setOpen(!open) }
            className='md:hidden'>
                <span>{open === true ? < XMarkIcon className="h-6 w-6 text-purple-500" /> :< Bars3Icon className="h-6 w-6 text-purple-500" /> }</span>
            
            
            </div>
            <ul className={`md:flex md:static bg-purple-400 pl-8 py-2 absolute duration-500 ${open ? 'top-6' :'-top-36'}`}>
                {
                    routes.map(route => <Link
                         route = {route}
                         key={route.id}  />)
                }
            </ul>
        </nav>
    );
};

export default Nav;