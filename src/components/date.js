import React from 'react';
import Title from './title'
const Date = props => {

  const {date} = props;
  if (!date.date) return <h3>Loading...</h3>;
    return (
      <div className="date">
        <p>{date.date}</p>
        <Title title={date}/>
      </div>
    );
  }
export default Date;