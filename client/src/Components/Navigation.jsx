import React from 'react'
import { NavLink} from 'react-router-dom';

const Navigation = () => {
  return  (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/book">Book</NavLink>
      <NavLink to="/info">Styles</NavLink>
    </div>

  );
};


export default Navigation;
