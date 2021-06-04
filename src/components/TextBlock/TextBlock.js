
import styled from 'styled-components'
import circle from '../../assets/circle.png'

const MainContent = styled.div`
display: flex;
 justify-content: center;
 align-items: center;
 width: 70vw;

 @media only Screen and (max-width: 48em){
     flex-direction: column;
     width: 100vw;
     justify-content: center;
     align-items: center;
 


 }
 
`
const LeftBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 70%;
line-height: 1.5;
color: white;
@media only Screen and (max-width: 48em){
   width: 100%;
   text-align: center;
   align-items: center;
}




`
const Topic = styled.div`

display: flex;
flex-direction: row;
/* justify-content: center;
align-items: center; */
margin-left: -2.7rem;
top: 0;
font-weight: 700;
font-size: calc(0.7rem + 1vw);
padding: 0.5rem 1rem;
color: var(--blue-blue);
width: 40%;

@media only Screen and (max-width: 48em){
font-size: calc(0.4rem + 0.8vw);
}




`

const Circle = styled.img`
height: 1rem;
width: 1rem;
margin-right: 0.3rem;





`

const Title = styled.h1`
font-size: calc(2rem + 1.7vw);
line-height: 1.2;
padding: 0.5rem 0;
font-family: primot, sans-serif;

font-weight: 600;
display: flex;
margin-left: -1.5rem;
font-style: normal;
color: #7187A9;


@media only Screen and (max-width: 48em){
    font-size: calc(1rem + 1.5vw)
}




`

const SubText = styled.h5`

font-size: calc(0.5rem + 0.5vw);
 color: var(--white);

 @media only Screen and (max-width: 48em){
    font-size: calc(0.5rem + 1vw)
}




 
`



const TextBlock = ({topic, title, subText, children}) => {
    return(
        <section>
              <MainContent>
            <LeftBlock>
                <Topic>
                    <Circle src={circle}/>
           
                    <span>{topic}</span>
                </Topic>
                <Title>{title}</Title>
                <SubText>
                    {subText}
                </SubText>

        
            </LeftBlock>
           
            {children}
        
            </MainContent>
        </section>
    )
}

export default TextBlock;