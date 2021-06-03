import styled, { keyframes } from 'styled-components'
import Blue from '../../assets/bmwblueblob.png'
import Red from '../../assets/bmwredblob.png'
import Light from '../../assets/bmwlightblob.png'
import BoxingLogo from '../../assets/whitearrow.png'
import bmwAnimCar from '../../assets/realcar.png'
import heart from '../../assets/heartlogo.png'
import gloves from '../../assets/orange.png'
import water from '../../assets/water.png'


const HeroSection = styled.div`
width: 100vw;
height: 45vw;
background-color: var(--white);
color: white;
display: flex;
justify-content: center;
position: relative;

@media only Screen and (max-width: 48em){
    height: 70vw;
    display: block;
    
}


@media only Screen and (max-width: 420px){
    height: auto;
    padding-bottom: 2rem;
}

`



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
align-items: center;
width: 50%;
line-height: 1.5;
margin-top: -15rem;
right: 0;
/* changed for responsive */
@media only Screen and (max-width: 52em){
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    /* be careful with decimal points it can throw everything off */
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px var(--black));

}




`
const Topic = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
/* background-color: var(--bmwblue); */
font-weight: 700;
font-size: calc(0.6rem + 0.5vw);
padding: 0.5rem;
color: var(--raisin-black);
/* border-radius: 20px;
width: calc(4rem + 4vw); */



`

const Circle = styled.img`
height: 1.5rem;
width: 1.5rem;
margin-right: 0.3rem;





`

const Title = styled.h1`
font-size: calc(1.5rem + 1vw);
line-height: 3rem;
/* padding: 0.5rem 0; */
color: var(--grey-blue);


`

const SubText = styled.h5`

font-size: calc(0.8rem + 0.5vw);
  color: var(--bmwblue);
  @media only Screen and (max-width: 48em){
      color: var(--white);
      background: var(--black);
      box-shadow: 2px 0.3px 20px 0.3px var(--white);
      border-radius: 10px;


  }


`
const CTA = styled.div`

padding: 0.5rem 1rem;
margin-top: 3rem;
border-radius: 20px;
cursor: pointer;
font-size: calc(0.5rem + 0.5vw);
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--blue-black);
transition: all 0.2s;
  img{
      width: 1.5rem;
  }
&:active{
    transform: scale(1.9);
    box-shadow:  5px 4px 16px -3px #5e87ff;
    
}
&:hover{
    transform: scale(1.1);
    box-shadow:  5px 4px 16px -3px #5e87ff;
}

`

const CarImage = styled.img`
display: flex;
max-width: 100%;
width: calc(45% + 45vw);
z-index: 7;
height: auto;
position: absolute;


/* makes the image move up and down and look like its floating */
/* couldnt figure out how to make it a variable outside of the styled component */

animation: move 2.5s ease infinite;
@keyframes move {
    0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
}
/* tablet view dimmed out  */

@media only Screen and (max-width: 48em){
align-items: flex-start;
position: absolute;
bottom: 0;
/* left: 10.8rem; */
align-items: center;

opacity: 0.35;
width: calc(30% + 20vw);
}
/* makes disapear compleatly on a phone screen  */

@media only Screen and (max-width: 40em){
    display: none;
}





` 
const Gloves = styled.div`
display: flex;
position: absolute;
right: 4rem;

@media only Screen and (max-width: 79em){
    margin-top: 6rem;
    height: 75%;
    width: 45%;
    right: 2rem;
}


@media only Screen and (max-width: 48em){
    display: none;
}

`

const Hero = () => {
    return(
        <HeroSection id="home">
            <MainContent>
            <LeftBlock>
                <Topic>
                    <Circle src={heart} height="5" width="5"/>
           
                    <span>we love cars</span>
                </Topic>
                <Title>Kayo Time Details</Title>
                <SubText>Knocking out expectations daily</SubText>

                <CTA>
                Call to Sceduale Today  
            <img src={BoxingLogo} alt="cta" width="400" height="400" />

                 </CTA>
            </LeftBlock>
           
          <CarImage src={bmwAnimCar} alt="car" height="400" width="400"/>
        
            </MainContent>
        </HeroSection>
    )
}

export default Hero;