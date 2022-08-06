import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-neutral-900 flex justify-between py-4 px-20'>

        <Link to="/" className='text-white font-bold'>
          <h1>React MySQL</h1>
        </Link>

        <ul className='flex gap-x-1'>
            <li>
                <Link to="/" className='bg-slate-200 px-2 py-1'>HOME</Link>
            </li>
            <li>
                <Link to="/new" className='bg-teal-200 px-2 py-1'>Create Task</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar