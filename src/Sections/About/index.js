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
background: #EA3E48;
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
font-size: 2.7rem;
margin-top: 5rem;
margin-left: 5rem;

`

const CurvedLine = styled.div`
margin-left: 5rem;
width: 7rem;
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
right: 15rem;
bottom: 30%;


`

const Logo = styled.img`
height: calc(10rem + 10vw);
width: calc(15rem + 15vw);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -2rem; 
margin-right: 3rem;

`
const Blob = styled.img`
margin-right: -33.5rem;
grid-row: 1;
height: calc(20rem + 240px);
width: calc(18rem + 240px);
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


`

const AboutText = styled.div`
position: relative;
padding: 10px;
margin-left: 10px;
width: 50%;
right: 2rem;
border-radius: 25px;
background: #EA3E48;
box-shadow: inset 29px 29px 41px #a62c33,
            inset -29px -29px 41px #ff505d;

`


const Text = styled.p`
font-size: calc(0.5rem + 1vw);
line-height: 1.5;
color: var(--black);
padding: 10px;


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
            <Blob src={blob} height="400" width="400"></Blob>
            <Logo src={bmwside} height="400" width="400"></Logo>
        


        </Stack>
               <AboutText>
                <SideCar src={kayologo} height="400" width="400"/>
                <Text>Here at Kayo Time Details we're committed to protecting and mantaining your vehicals, proudly detailing vehicals of Annapolis and the surrounding areas. We offer a full service indoor detailing, either drop your car off or let us pick it up for you(limited to agreement). Sceduale an appoitment today and let us remind you what you car looks like new.</Text>
                <div style={{marginLeft: "0.5rem"}}>
                    <Circle style={{ backgroundColor: "var(--bmwblue)"}}/>
                    <Circle style={{ backgroundColor: "var(--bmwred)"}}/>
                    <Circle style={{ backgroundColor: "var(--bmwlightblue)"}}/>
                </div>
               </AboutText>
            </Content>
        </Main>
        <WavesB src={logo2}/>
        
        </AboutSection>


    )
}

export default About;