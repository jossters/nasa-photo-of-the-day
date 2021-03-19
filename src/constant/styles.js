import styled from "styled-components";
//styling
const StyledApp = styled.div`
  background-color: black;
  color: white;


  h1,h2,h3,h4,p,.photocenter{
   display: flex;
   justify-content: center;  
   flex-direction: column;
   align-items:center;
   align-content:center;
   padding:5px;
  }
  
  h1,h2 {
    font-size: 3rem;
  }
  h3,h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
    padding:10px 10px;
  }
  .nasaphoto {
    height: 420px;
    width: 420px;
  }
  
`;
export default StyledApp;
