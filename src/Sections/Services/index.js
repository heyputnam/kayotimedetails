import styled from 'styled-components'

const ServiceSection = styled.div`

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
height: 85vh;
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


const Line = styled.div`
border-left: 4px solid var(--white);
height: 15rem;
margin-top: 2rem;
border-radius: 20px 20px 0 0;



`


const Triangle = styled.div`
width: 0;
height: 0;
border-left: 1.2rem solid transparent;
border-right: 1.2rem solid transparent;
border-top: 2rem solid var(--white);

`

const Content = styled.div`


`


const TextBlock = styled.div`


`

const Services = () => {
    return(
       <ServiceSection>
           <Background>
               <Title>What We Do</Title>
               <Line/>
               <Triangle/>
           </Background>
           <Content>
               <TextBlock>

               </TextBlock>
           </Content>
       </ServiceSection>
    )
}

export default Services;