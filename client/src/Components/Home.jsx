import React from 'react'



const Home = (props) => (
  <div>
      <h1 align="center">InkPlace</h1>
      <div align="center">
      <select id="dropdown" name="Estilos" onChange={(e) => props.selectStyles(e.target.value)}>
      {props.data.map((style)=>
      (  <option value={style.id}>{style.style}</option>
        )
      )}
      </select>
        </div>

    <div>
      <p>{props.style.info}</p>
    </div>
      </div>
  );

export default Home;
