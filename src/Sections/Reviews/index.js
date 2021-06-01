import styled from 'styled-components'
import { ElfsightWidget } from 'react-elfsight-widget'

const ReviewsSection = styled.div`

width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 20rem;
position: relative;
color: var(--white);


`

const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 0;
left: 0;
bottom: 0;
width: 100vw;
height: 100%;
background: var(--black);
background-size: auto 100vh;
z-index: -1;



`


const Title = styled.h1`
display: inline-block;
font-size: 2rem;
margin-top: 1rem;
position:relative;

&::before{
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--bmwblue);
    transform: translate(-50%);
}


`

const Reviews = () => {
    return(
        <ReviewsSection>
          <Background>
               <Title>What Others are Saying</Title>
               
           </Background>

             <ElfsightWidget widgetID="0a54b799-c158-4be9-bdd5-a25f73332f30" />
      
        </ReviewsSection>
    )
}

export default Reviews;