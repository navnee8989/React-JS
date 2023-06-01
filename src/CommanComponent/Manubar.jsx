import React from 'react'
import { Link } from 'react-router-dom'
import FunctionEffect from './FunctionEffect'
import FunctionProps from './FunctionProps'
import FunctionState from './FunctionState'
import FunctionUsereducer from './FunctionUsereducer'
import FunctionUseref from './FunctionUseref'
import { Outlet } from 'react-router-dom'





export default function FunctionMenu() {
  return (
    <>
      <Manubar>
      <div className="">                <ol className=''>
                    <li><Link to='FunctionProps'> FunctionProps</Link></li>
                    <li><Link to='FunctionState'> FunctionState</Link></li>
                    <li><Link to='FunctionEffect'> FunctionEffect</Link></li>
                    <li><Link to='FunctionUseref'> FunctionUseref</Link></li>
                    <li><Link to='FunctionUsereducer'> FunctionUsereducer</Link></li>
                    <Outlet></Outlet>
                </ol>
    
                </div>

                </Manubar>

    </>
  )
}
