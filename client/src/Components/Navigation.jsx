import React from 'react'
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';

const Navigation = () => {
  return  (
    <div class="bg-info clearfix">
      <div class="btn  float-left">
      <NavLink to="/"><Button color="danger" >Home</Button></NavLink>
      </div>
      <div class="btn float-right" >
      <NavLink to="/book"><Button color="danger">Booking</Button></NavLink>
      </div>
      <div class="btn float-right">
      <NavLink to="/map"><Button color="danger">Maps</Button></NavLink>
      </div>
    </div>

  );
};


export default Navigation;
