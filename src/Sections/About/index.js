import styled from 'styled-components'

import cglogo from '../../assets/chemicalguyslogo.png'
import mlogo from '../../assets/meguiarslogo.png'
import logo from '../../assets/wave.png'
import logo2 from '../../assets/wave2.png'
import kayologo from '../../assets/kayo-logo.png'



const AboutSection = styled.div`
width: 100vw;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: var(--black);
color: var(--white);
`
const Waves = styled.img`
width: 100%;
position: absolute;
top: -1rem;
height: auto;

display: none;

`


const Main = styled.div`
margin: 0 15rem;
margin-top: 15rem;
display: flex;
justify-content: center;
flex-direction: column;



@media only Screen and (max-width: 64em){
  margin: 3rem calc(5rem + 5vw);
  margin-top: 10rem;

}

@media only Screen and (max-width: 40em){
  align-items: center;
  margin: 3rem calc(3rem + 3vw);

}

`

const Title = styled.h1`
display: flex;
align-items: center;
justify-content: center;
font-size: 3rem;
font-family: 'BioRhyme', serif;
margin-top: 1em;

@media only Screen and (max-width: 40em){
  font-size: 1rem;

}


`

const CurvedLine = styled.div`
width: 8rem;
height: 2rem;
border: 5px solid var(--blue-black);
border-color: var(--blue-black) transparent transparent ;
border-radius: 150%/60px 70px 0 0;
justify-content: center;
align-items: center;
margin-left: 50%;

@media only Screen and (max-width: 40em){
 width: 7rem;
}






`

const Content = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

@media only Screen and (max-width: 40em){
 flex-direction: column;

}




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
const BrandLogo = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
z-index: 5;
width: 2rem;
height: 2rem;


@media only Screen and (max-width: 40em){
display: none ;

}


`


const KayoLogo = styled.img`
display: flex;
justify-content: center;
align-content: center;
width: 40%;
bottom: 4rem;
background: transparent;

/* box-shadow: 4px 40px 40px white; */
filter: drop-shadow(0.2rem 0.3rem 5px  var(--white));

animation: move 2.5s ease infinite;
@keyframes move {
    0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
}
@media only Screen and (max-width: 40em){
width: 50vw;
padding-bottom: 0;

}

`








const AboutText = styled.div`
position: relative;
/* padding: 10px; */

width: 50%;
position: relative;



@media only Screen and (max-width: 40em){
 width: 100%;
}


`


const Text = styled.p`
font-size: calc(0.5rem + 1vw);
line-height: 1.7;
margin-left: 1rem;
color: var(--white);
font-family: 'Poppins', sans-serif;


`
const Circle = styled.div`
display: inline-block;
width: 1rem;
height: 1rem;
border-radius: 50%;
background: var(--white);
margin: 0.5rem;
box-shadow: 3px 3px 3px black;



`

const WavesB = styled.img`
width: 100%;
position: absolute;
bottom: -22.7rem;
float: bottom;
display: none;

@media only Screen and (max-width: 48em){
   display: none;
}







`




const About = () => {
    return(
        <AboutSection id="about">
           
       <Waves  src={logo} height="400" width="400"/>
       {/* <BrandLogo>
       
        <CgLogo src={cglogo} height="200" width="200" />
        <MLogo src={mlogo} height="200" width="200" />
       
        </BrandLogo> */}
        <Main>
            <div>
                <Title>About Us</Title>
                <CurvedLine />
            </div>
            <Content>
 
          
           
       
        <KayoLogo src={kayologo} height="400" width="400"/>
               <AboutText>
        
                <Text> Here at Kayo Time Details we're committed to protecting and mantaining your vehicals, proudly detailing vehicals of Annapolis and the surrounding areas. We offer a full service indoor detailing, either drop your car off or let us pick it up for you(limited to agreement). Sceduale an appoitment today and let us remind you what you car looks like new.</Text>
                <div style={{marginLeft: "0.5rem"}}>
                    <Circle style={{ backgroundColor: "var(--raisin-black)"}}/>
                    <Circle style={{ backgroundColor: "var(--raisin-black)"}}/>
                    <Circle style={{ backgroundColor: "var(--raisin-black)"}}/>
                </div>
               </AboutText>
            </Content>
        </Main>
        <WavesB src={logo2}/>
      
        </AboutSection>


    )
}

export default About;