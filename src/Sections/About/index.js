import styled from 'styled-components'


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
font-size: 4rem;
font-family: primot, sans-serif;

font-weight: 400;

font-style: normal;




@media only Screen and (max-width: 40em){
  font-size: 2rem;

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
font-family: usual, sans-serif;

font-weight: 700;

font-style: normal;



@media only Screen and (max-width: 40em){
 width: 100%;
}


`


const Text = styled.p`
font-size: calc(0.5rem + 1vw);
line-height: 1.7;
margin-left: 1rem;
color: var(--blue-blue);



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
           

     
        <Main>
            <div>
                <Title>About Us</Title>
           
            </div>
            <Content>
 
          
           
       
        <KayoLogo src={kayologo} height="400" width="400"/>
               <AboutText>
        
                <Text> Here at Kayo Time Details we're committed to protecting and mantaining your vehicals, proudly detailing vehicals of Annapolis and the surrounding areas. We offer a full service indoor detailing, either drop your car off or let us pick it up for you(limited to agreement). Sceduale an appoitment today and let us remind you what you car looks like new.</Text>
                <div style={{marginLeft: "0.5rem"}}>
                    <Circle style={{ backgroundColor: "#898c91"}}/>
                    <Circle style={{ backgroundColor: "#898c91"}}/>
                    <Circle style={{ backgroundColor: "#898c91"}}/>
                </div>
               </AboutText>
            </Content>
        </Main>
        <WavesB src={logo2}/>
      
        </AboutSection>


    )
}

export default About;