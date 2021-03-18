import React from 'react';
import Copyright from './copyright'
 const NasaPhoto = props => {
   const {nasaphoto} = props;
   if (!nasaphoto.hdurl) return <h3>Loading...</h3>;
    return (
      <div className="nasaphoto">
        <img alt= 'nasa' 
        className='nasa-img'
        src={nasaphoto.hdurl}/>
        <Copyright copyright={nasaphoto}/>
      </div>
    );
  }
  export default NasaPhoto;