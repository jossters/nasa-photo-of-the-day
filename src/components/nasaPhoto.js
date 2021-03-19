import React from "react";
import Copyright from "./copyright";
const NasaPhoto = (props) => {
  const { nasaphoto } = props;
  if (!nasaphoto.hdurl) return <h3>Loading...</h3>;
  return (
    <div>
      <div className='photocenter'>
        <img alt="nasa" 
      className="nasaphoto" 
      src={nasaphoto.hdurl} /></div>
      
      <Copyright copyright={nasaphoto} />
    </div>
  );
};
export default NasaPhoto;
