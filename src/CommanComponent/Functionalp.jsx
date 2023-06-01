import React from 'react';

const Functionalp = (props) => {
  // You can access the props inside the component
  // using the props object
  return (
    <div>
   <div className="row">
    <div className="col-3">
      <h1>{props.name}</h1>
    </div>
    <div className="col-3">
      <p className='text-center text-red-400'>{props.message}</p>
    </div>
  
   </div>
    </div>
  );
};

export default Functionalp;