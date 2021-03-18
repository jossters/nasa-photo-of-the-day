import React from 'react';
import NasaPhoto from './nasaPhoto'
  const Title = props => {
   
    const {title} = props;
    if (!title.title) return <h3>Loading...</h3>;
    return (
      <div className="title">
        <p>{title.title}</p>
        <NasaPhoto nasaphoto={title}/>
      </div>
    );
  }
  export default Title;