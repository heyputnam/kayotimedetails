import styled  from 'styled-components'
import Blue from '../../assets/bmwblueblob.png'
import Red from '../../assets/bmwredblob.png'
import Light from '../../assets/bmwlightblob.png'
import BoxingLogo from '../../assets/boxinglogo.png'

const HeroSection = styled.div`
width: 100vw;
height: 100vw;
background-color: rgba(0, 0, 0, 0.85);
color: white;


display: flex;
justify-content: center;
position: relative;



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
 width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
/* top: calc(5rem + 5vw);
z-index: 6; */

`;
const RedBlob = styled.div`
 width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;


`;
const LightBlob = styled.div`
 width: calc(17% + 12vw);
  position: absolute;
  right: 0;
  top: calc(2rem + 1vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
`
const LeftBlock = styled.div`





`
const Topic = styled.div`
`

const Circle = styled.span`
`

const Title = styled.h1`
`

const SubText = styled.h5`
`
const CTA = styled.div`
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
                    <Circle/><span>We love card</span>
                </Topic>
                <Title>Kayo Time Details</Title>
                <SubText>Knocking expectation out daily.</SubText>

                <CTA>
            Get in touch &nbsp;
            <img src={BoxingLogo} alt="cta" width="100" height="100" />
                 </CTA>
            </LeftBlock>
            
            </MainContent>
        </HeroSection>
    )
}

export default Hero;