import React from 'react'
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';

const Navigation = () => {
  return  (
    <div>
      <div className="text-left">
      <NavLink to="/"><Button outline color="success">Home</Button>{' '}</NavLink>
      </div>
      <div className="text-center">
      <NavLink to="/book"><Button outline color="success">Booking</Button>{' '}</NavLink>
      </div>
      <div>
      <NavLink to="/map"><Button outline color="success">Map</Button>{' '}</NavLink>
      </div>
    </div>

  );
};


export default Navigation;
