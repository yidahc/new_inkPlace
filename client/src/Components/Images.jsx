import React from 'react';
import Img from 'react-image';
import Image from 'react-image-resizer';
const style = {
  img: {
    background: '#fefefe',
    position: 'absolute', left: '30%', top: '40%',
    display: 'inline'
  },
};

const style1 = {
  img: {
    background: '#fefefe',
    position: 'absolute', left: '40%', top: '40%',
    display: 'inline'
  },
};

const style2 = {
  img: {
    background: '#fefefe',
    position: 'absolute', left: '50%', top: '40%',
    display: 'inline'
  },
};

const style3 = {
  img: {
    background: '#fefefe',
    position: 'absolute', left: '60%', top: '40%',
    display: 'inline'
  },
};
class Images extends React.Component {
    render() {
       return(
        <div >
        Hola estamos dentro del componente
          <div style={style.img}>
            <h4 >BlackWork</h4>
        <img height={ 100 }
          width={ 100} src={
      require('../blackwork/body.jpg')
    }></img>
          </div>

          <div style={style1.img}>
        <h4>OldSchool</h4>
        <img height={ 100 }
          width={ 100}  src={[
      require('../oldSchool/one.jpg'),
    ]}></img>
          </div>

          <div style={style2.img}>
        <h4>Tribal</h4>
        <img>
    </img>
          </div>

          <div style={style3.img}>
        <h4>Japanese</h4>
        <img src='../images/back.jpg'>
    </img>
          </div>
        </div>
       );

    }

 };

  export default Images;
