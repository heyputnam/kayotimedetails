import styled from 'styled-components'
import TextBlock from '../../components/TextBlock/TextBlock'
import PhotoBlock from '../../components/PhotoBlock/PhotoBlock'
import soap from '../../assets/soap.png'
import chemicalguys from '../../assets/chemicalguysproducts.png'
import meguiars from '../../assets/meguiarsproducts.png'

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
height: 100%;
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
display: flex;
margin: 10rem 10rem;
align-items: center;
justify-content: space-between;
position: relative;

@media only Screen and (max-width: 48rem){
    display: block;
    &:last-child{
        margin-bottom: 2rem;
    }
}

`

const OBJ = styled.div`
position: absolute;
top: 80%;
right: 35%;
width: 20vw;
display: flex;
justify-content: center;
align-items: center;


@media only Screen and (max-width: 48rem){
    opacity: 0.5;
}
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
               <TextBlock 
                topic="Starting at $125"
                title="Gold Package"
                subText={<ul>
                    <li>Exterior Wash</li>
                    <li>Clay Bar Treatment</li>
                    <li>Lite Interior Detail</li>
                    <li>Tire Shine</li>
                    <li>Ceramic Wax</li>
                </ul>}
               
               />
               <OBJ>
               <img src={soap} alt="soap" height="400" width="400" />
               </OBJ>
               <PhotoBlock picture="goldwheel.png"/>
           </Content>
           <Content>
               <TextBlock 
                topic="Starting at $200"
                title="Platinum Package"
                subText={<ul>
                    <li>Heavy Exterior Wash</li>
                    <li>Clay Bar Treatment</li>
                    <li>Exterior Pain Conditioner</li>
                    <li>Heavy Interior Detail</li>
                    <li>Interior Stain Extraction</li>
                    <li>Iron and Brake Dust Removal for Rims</li>
                    <li>Max Pro Tire Gel</li>
                    <li>Lite Exterior Polish</li>
                    <li>Ceramic Wax</li>
                </ul>}
               
               />
               <OBJ>
                <img src={chemicalguys} alt="soap" height="400" width="400" />
                </OBJ>
               <PhotoBlock picture="platniumwheel.png"/>
           </Content>
           <Content>
               <TextBlock 
                topic="Starting at $300"
                title="Diamond Package"
                subText={<ul>
                    <li>Heavy Exterior Wash</li>
                    <li>Clay Bar Treatment</li>
                    <li>Exterior Pain Conditioner and Clear Coat Protection</li>
                    <li>Exterior Tar Removal</li>
                    <li>Interior Heatedsteam Treatment</li>
                    <li>Heavy Interior Detail</li>
                    <li>Interior Oder Removal</li>
                    <li>Interior leather/plastic/vinyl UV Protection Treatment </li>
                    <li>Interior Stain Extraction</li>
                    <li>Iron and Brake Dust Removal for Rims</li>
                    <li>Rust Removal On Rims</li>
                    <li>Engine Bay Deep Clean</li>
                    <li>Trunk Deep Clean</li>
                    <li>Exterior Trim restoration and UV Protection</li>
                    <li>Max Pro Tire Gel</li>
                    <li>RainX window Treatment</li>
                    <li>Exterior Full Polish</li>
                    <li>Ceramic Wax</li>
                </ul>}
               
               />
               <OBJ>
                <img src={meguiars} alt="soap" height="400" width="400" />
                </OBJ>
               <PhotoBlock picture="diamondwheel.png"/>
           </Content>
       </ServiceSection>
    )
}

export default Services;