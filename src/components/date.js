import React from 'react';
import Title from './title'
const Date = props => {

  const {date} = props;
  if (!date.date) return <h3>Loading...</h3>;
    return (
      <div>
        <h2>{date.date}</h2>
        <Title title={date}/>
      </div>
    );
  }
export default Date;