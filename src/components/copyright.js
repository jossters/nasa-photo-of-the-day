import React from 'react';
import Explanation from './explanation'
const Copyright = props => {
   
  const {copyright} = props;
  if (!copyright.copyright) return <h3>Loading...</h3>;
    return (
      <div>
        <h4>{copyright.copyright}</h4>
        <Explanation explanation={copyright}/>
      </div>
    );
  }
  export default Copyright;