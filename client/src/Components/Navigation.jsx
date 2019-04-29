import React from 'react'
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
  return  (
    <div>
      <div className="text-left">
      <NavLink to="/"><button type="button" className="btn btn-info">Home</button></NavLink>
      </div>
      <div className="text-center">
      <NavLink to="/book"><button type="button" className="btn btn-info">Book</button></NavLink>
      </div>
    </div>

  );
};


export default Navigation;
