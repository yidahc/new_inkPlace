import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

 const Book = () => {
   return (
   <div>
    <form>
   <div class="form-group margin-right-5 col-md-4">
     <label for="exampleFormControlInput1">Email address</label>
     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
     </input>
   </div>
   <div class="form-group margin-right-5 col-md-4">
     <label for="exampleFormControlTextarea1">Where you want your Tattoo?</label>
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   </div>

   <div class="form-group margin-right-5 col-md-3">
    <label for="exampleFormControlSelect1">Whats the size?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Small</option>
      <option>Medium</option>
      <option>Big</option>

    </select>
  </div>

   <div class="form-group margin-right-5 col-md-4">
     <label for="exampleFormControlTextarea1">Any extra Comments ? </label>
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   </div>


 </form>

  </div>)

};
 export default Book;
