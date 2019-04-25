import React from 'react'
import { NavLink} from 'react-router-dom';

const Navigation = () => {
  return  (
    <div>
      <NavLink to="/"><button type="button" className="btn btn-info">Home</button></NavLink>
      <NavLink to="/book"><button type="button" className="btn btn-info">Book</button></NavLink>
    </div>

  );
};


export default Navigation;
