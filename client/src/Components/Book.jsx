import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

 const Book = () => {
   return (
   <div>
    <form>
   <div className="form-group margin-right-5 col-md-4">
     <label htmlFor="emailInput">Email address</label>
     <input type="email" className="form-control" id="email" placeholder="name@example.com">
     </input>
   </div>
   <div className="form-group margin-right-5 col-md-4">
     <label htmlFor="bodypart">Where you want your Tattoo?</label>
     <textarea className="form-control" id="bodyPart" rows="3"></textarea>
   </div>

   <div className="form-group margin-right-5 col-md-3">
    <label htmlFor="size">Whats the size?</label>
    <select className="form-control" id="size">
      <option>Small</option>
      <option>Medium</option>
      <option>Big</option>

    </select>
  </div>

   <div className="form-group margin-right-5 col-md-4">
     <label htmlFor="comments">Any extra Comments ? </label>
     <textarea className="form-control" id="comment" rows="3"></textarea>
   </div>


 </form>

  </div>)

};
 export default Book;
