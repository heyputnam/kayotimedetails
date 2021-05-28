import styled  from 'styled-components'
import Steel from '../../assets/steelblob.png'
import Pale from '../../assets/paleblueblob.png'
import Blue from '../../assets/blueblob.png'

const HeroSection = styled.div`
width: 100vw;
height: 100vw;
background-color: var(--black);



display: flex;
justify-content: center;
position: relative;



`

const Blobs = styled.div`
width: 100%;
position: relative;
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
const PaleBlob = styled.div`
 width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;


`;
const SteelBlob = styled.div`
 width: calc(17% + 12vw);
  position: absolute;
  right: 0;
  top: calc(2rem + 1vw);
  z-index: 5;
`;


const Hero = () => {
    return(
        <HeroSection>
            <Blobs>

                <PaleBlob>
                <img src={Pale} alt="" width="400" height="400" />

                </PaleBlob>
                <SteelBlob>
                <img src={Steel} alt="" width="400" height="400" />

                </SteelBlob>
                <BlueBlob>
                <img src={Blue} alt="" width="400" height="400" />

                </BlueBlob>
            </Blobs>
        </HeroSection>
    )
}

export default Hero;