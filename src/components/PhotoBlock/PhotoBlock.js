
import styled from 'styled-components'


const RightBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 40%;
position: relative;


h2{
    font-size: 2.5rem;
    color: var(--blue-blue);
  
font-family: usual, sans-serif;

font-weight: 700;

font-style: normal;
}
p{
    font-size: 1.2rem;
    color: var(--white);
   
    font-family: primot, sans-serif;

font-weight: 400;

font-style: normal;
width: 100%;
}

@media only Screen and (max-width: 48rem){
    display: none;
}

`



const PhotoBlock = ({picture, price}) => {
    // const pic = require(`../../assets/${picture}`).default;
    return(
        <RightBlock>
           {/* <img src={pic} alt="picture"/> */}
           
          <p> *starting at
               <h2>{price}</h2>
          
          </p>
        </RightBlock>
    )
}

export default PhotoBlock;