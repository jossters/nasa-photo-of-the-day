import React from 'react';
import NasaPhoto from './nasaPhoto'
  const Title = props => {
   
    const {title} = props;
    if (!title.title) return <h3>Loading...</h3>;
    return (
      <div>
        <h3>{title.title}</h3>
        <NasaPhoto nasaphoto={title}/>
      </div>
    );
  }
  export default Title;