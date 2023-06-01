import React from 'react'
import FunctionUseref from './FunctionUseref';
import FunctionProps from './FunctionProps';
import FunctionUsereducer from './FunctionUsereducer';
import FunctionState from './FunctionState';
import { Route, Routes } from "react-router-dom";
import FunctionEffect from './FunctionEffect';
import FunctionMenu from './FunctionMenu';

const FunctionRouting = () => {
  return (
    <div>

    <Routes>
    <Route path="/" element={<FunctionMenu />} >
                        <Route path="FunctionProps" element={<FunctionProps />} />
                        <Route path="FunctionUsereducer" element={<FunctionUsereducer />} />
                        <Route path="FunctionState" element={<FunctionState />} />
                        <Route path="FunctionEffect" element={<FunctionEffect />} />
                        <Route path="FunctionUseref" element={<FunctionUseref />} />
     </Route>
     </Routes>
    </div>
  )
}

export default FunctionRouting