import React from 'react';
const Explanation = props => {
   
    const {explanation} = props;
    if (!explanation.explanation) return <h3>Loading...</h3>;
    return (
      <div>
        <p>{explanation.explanation}</p>
      </div>
    );
  }
  export default Explanation;