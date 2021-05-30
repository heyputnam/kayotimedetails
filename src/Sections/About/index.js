import styled from 'styled-components'

import cglogo from '../../assets/chemicalguyslogo.png'
import mlogo from '../../assets/meguiarslogo.png'
import logo from '../../assets/wave.png'
import logo2 from '../../assets/wave2.png'
import bmwside from '../../assets/bmwside.png'
import kayologo from '../../assets/kayo-logo.png'
import blob from '../../assets/aboutblob.png'


const AboutSection = styled.div`
width: 100vw;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: var(--white);
`
const Waves = styled.img`
width: 100%;
position: absolute;
top: -1rem;


`

const CgLogo = styled.img`
position: absolute;
bottom: -12rem;
right: 8rem;
height: calc(10rem + 10w);
width: calc(10rem + 10vw);
padding: 4rem;

`
const MLogo = styled.img`
position: absolute;
right: 30rem;
height:calc(8rem + 8vw);
width:calc(8rem + 8vw);
bottom: -10rem;


`



const Main = styled.div`
margin-top: 15rem;
margin-left: 2rem;
display: flex;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
display: inline-block;
font-size: 4rem;
margin-top: 5rem;
margin-left: 10rem;

`

const CurvedLine = styled.div`
margin-left: 9rem;
width: 12rem;
height: 2rem;
border: 5px solid var(--bmwred);
border-color: var(--bmwred) transparent transparent ;
border-radius: 150%/60px 70px 0 0;


`

const Content = styled.div`
display: flex;
justify-content: space-around;
align-items: center;


`


const BrandLogo = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
z-index: 5;
width: 2rem;
height: 2rem;



`


const SideCar = styled.img`
width: calc(25rem + 20vw);
position: absolute;
left: calc(-4rem + 2vw);
bottom: 6rem;
/* box-shadow: 4px 40px 40px white; */
filter: drop-shadow(0.3rem 0.7rem 0.4rem rgba(0, 0, 0, 0.7));


`

const Logo = styled.img`

height: calc(10rem + 10vw);
width: calc(15rem + 15vw);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -2rem; 

z-index: 2;
`
const Blob = styled.img`
position: relative;
left: calc(-20rem - 10vw);
top: 2px;
grid-row: 1;
height: calc(20rem + 240px);
width: calc(18rem + 240px);
z-index: 1;

`
const Stack = styled.div`
position: relative;
/* height: calc(10rem + 10vw);
width: calc(10rem + 10vw); */
display: flex;
flex-direction: grid;
justify-content: center;
align-items: center;
padding-bottom: 5rem;
left: 2rem;
top: 2px;

`

const AboutText = styled.div`
position: relative;
/* padding: 10px; */

width: 50%;
top: 2px;
left: calc(-8rem - 9vw);
border-radius: 30px;
background: #f0efef;
box-shadow:  25px 25px 49px #929292,
             -25px -25px 49px #ffffff;

`


const Text = styled.p`
font-size: calc(0.5rem + 1vw);
line-height: 1.5;
color: var(--black);
padding: 2px;
/* left: -20rem;
top: 2px; */
margin-left: 2px;



`
const Circle = styled.div`
display: inline-block;
width: 1rem;
height: 1rem;
border-radius: 50%;
background: var(--black);
margin-top: 1rem;
margin-right: 0.8rem;
box-shadow: 3px 3px 3px black;



`

const WavesB = styled.img`
width: 100%;
position: absolute;
bottom: -22.7rem;
float: bottom;


`

const Phrase = styled.h1`
margin-bottom: -35px;
font-weight: 800;
font-size: 2.3rem;
color: var(--bmwred);
z-index: 1;
margin-left: calc(-14rem - 11vw);
padding-right: 15rem;
font-family: 'PT Sans Caption', sans-serif;
`

const About = () => {
    return(
        <AboutSection>
           
       <Waves  src={logo} height="400" width="400"/>
       <BrandLogo>
       
        <CgLogo src={cglogo} height="200" width="200" />
        <MLogo src={mlogo} height="200" width="200" />
       
        </BrandLogo>
        <Main>
            <div>
                <Title>About Us</Title>
                <CurvedLine />
            </div>
            <Content>
 
          
           
        <Stack> 
            {/* <Blob src={blob} height="400" width="400"></Blob> */}
            <Logo src={bmwside} height="400" width="400"></Logo>
            <Blob src={blob} height="400" width="400"></Blob>
        


        </Stack>
               <AboutText>
                <SideCar src={kayologo} height="400" width="400"/>
                <Text >Here at Kayo Time Details we're committed to protecting and mantaining your vehicals, proudly detailing vehicals of Annapolis and the surrounding areas. We offer a full service indoor detailing, either drop your car off or let us pick it up for you(limited to agreement). Sceduale an appoitment today and let us remind you what you car looks like new.</Text>
                <div style={{marginLeft: "0.5rem"}}>
                    <Circle style={{ backgroundColor: "var(--bmwblue)"}}/>
                    <Circle style={{ backgroundColor: "var(--bmwred)"}}/>
                    <Circle style={{ backgroundColor: "var(--bmwlightblue)"}}/>
                </div>
               </AboutText>
            </Content>
        </Main>
        <Phrase>
           Never using anything other then the best.
       </Phrase>
        <WavesB src={logo2}/>
      
        </AboutSection>


    )
}

export default About;