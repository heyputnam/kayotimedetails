import styled, { keyframes } from 'styled-components'
import Blue from '../../assets/bmwblueblob.png'
import Red from '../../assets/bmwredblob.png'
import Light from '../../assets/bmwlightblob.png'
import BoxingLogo from '../../assets/whitearrow.png'
import bmwAnimCar from '../../assets/bmw2.png'
import heart from '../../assets/heartlogo.png'




const HeroSection = styled.div`
width: 100vw;
height: 45vw;
background-color: black;
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

const Blobs = styled.div`
width: 100%;
/* if you leave as realitive it messes up the whole page  */
position: absolute;
right: 0;
@media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
  



`;
const BlueBlob = styled.div`
  width: calc(24% + 23vw);
  position: absolute;
  right: 0;
  top: calc(3rem + 5vw);
  z-index: 6;
/* top: calc(5rem + 5vw);
z-index: 6; */

`;
const RedBlob = styled.div`
  width: calc(26% + 20vw);
  position: absolute;
  right: 0;


`;
const LightBlob = styled.div`
   width: calc(23% + 23vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

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

@media only Screen and (max-width: 48em){
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
background-color: var(--bmwblue);
font-weight: 700;
font-size: calc(0.3rem + 0.3vw);
padding: 0.5rem 1rem;
border-radius: 20px;
width: calc(4rem + 4vw);



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




`

const SubText = styled.h5`

font-size: calc(0.5rem + 0.5vw);
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
margin-top: 1rem;
border-radius: 20px;
cursor: pointer;
font-size: calc(0.5rem + 0.5vw);
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--bmwred);
transition: all 0.2s;
  img{
      width: 1.5rem
  }
&:active{
    transform: scale(1.9);
    box-shadow:  0px 1px 15px -3px white;
}
&:hover{
    transform: scale(1.1);
    box-shadow:  0px 1px 15px -3px white;
}

`

const CarImage = styled.img`
max-width: 100%;
width: calc(30% + 30vw);
z-index: 7;
height: auto;
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
opacity: 0.35;
width: calc(30% + 20vw);
}
/* makes disapear compleatly on a phone screen  */

@media only Screen and (max-width: 40em){
    display: none;
}





` 


const Hero = () => {
    return(
        <HeroSection>
            <Blobs>

                <BlueBlob>
                <img src={Red} alt="" width="400" height="400" />

                </BlueBlob>
                <RedBlob>
                <img src={Blue} alt="" width="400" height="400" />

                </RedBlob>
                <LightBlob>
                <img src={Light} alt="" width="400" height="400" />

                </LightBlob>
            </Blobs>
            <MainContent>
            <LeftBlock>
                <Topic>
                    <Circle src={heart} height="5" width="5"/>
           
                    <span>we love cars</span>
                </Topic>
                <Title>Kayo Time Details</Title>
                <SubText>Knocking out expectations daily</SubText>

                <CTA>
                Schedule Today &nbsp;
            <img src={BoxingLogo} alt="cta" width="400" height="400" />
                 </CTA>
            </LeftBlock>
           
          <CarImage src={bmwAnimCar} alt="car" height="400" width="400"/>
        
            </MainContent>
        </HeroSection>
    )
}

export default Hero;