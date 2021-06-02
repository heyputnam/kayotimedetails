
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
width: 50%;
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
justify-content: center;
align-items: center;
background-color: var(--bmwblue);
font-weight: 700;
font-size: calc(0.3rem + 0.3vw);
padding: 0.5rem 1rem;
border-radius: 20px;
width: calc(4rem + 4vw);

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
font-size: calc(2rem + 1vw);
line-height: 1.2;
padding: 0.5rem 0;


@media only Screen and (max-width: 48em){
    font-size: calc(1rem + 1.5vw)
}




`

const SubText = styled.h5`

font-size: calc(0.5rem + 0.5vw);
 color: var(--bmwblue);

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