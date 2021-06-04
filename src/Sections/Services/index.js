import styled from 'styled-components'
import TextBlock from '../../components/TextBlock/TextBlock'
import PhotoBlock from '../../components/PhotoBlock/PhotoBlock'
import goldwheel from '../../assets/goldwheel.png'
import platniumwheel from '../../assets/platniumwheel.png'
import diamondwheel from '../../assets/diamondwheel.png'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
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
font-size: 3rem;
margin-top: 1rem;
position:relative;

font-family: primot, sans-serif;

font-weight: 300;

font-style: normal;


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
/* margin: 3rem 10rem; */
align-items: center;
justify-content: space-between;
position: relative;

@media only Screen and (max-width: 48rem){
    display: block;
    &:last-child{
        margin-bottom: 2rem;
    }
}


@media only Screen and (max-width: 40em){
    margin: 10rem calc(2rem + 3vw);
    &:last-child{
        margin-bottom: 2rem;
    }
}

ul{
    list-style: none;
    line-height: 1.6;
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
    const ref = useRef(null);
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);


    const addToRefs = (el) =>{
        if(el && !revealRefs.current.includes(el) ){
            revealRefs.current.push(el);
        }

        // console.log("reveal refs", revealRefs.current);
    }

    useEffect(()=>{
        let element = ref.current;
        const line = document.getElementById("line");
     
        // this part makes elements on screen move up but background stay static
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger: document.getElementById("services"),
                start: "top top+=180",
                end: "bottom bottom",
                pin: element,
                // markers: true,
            }
        });

        t1.fromTo(
            // using variable
            line,
            {
                height: "15rem",
            },
            {
                height: "3rem",
                duration: 2,
                scrollTrigger:{
                    trigger: line,
                    start: "top top+=200",
                    end: "bottom top+=220",
                    scrub: true,
                }
            }
        );

            // making appear on scroll

            revealRefs.current.forEach(
                (el, index) =>{
                    t1.from(
                        el.childNodes[0],
                        {
                            x: -300,
                            opacity: 0,
                            duration: 3,
                            ease: "power2",

                            scrollTrigger:{
                                trigger: el,
                                id: `section-${index + 1}`,
                                start: "top center+=200",
                                end: "bottom bottom-=200",
                                scrub: true,
                                snap: true,
                                // markers: true,
                            }
                        }
                    ).to(
                        el.childNodes[1],
                        {
                            transform: "scale(0)",
                            ease: "power2.inOut",

                            scrollTrigger:{
                                trigger: el.childNodes[1],
                                id: `section-${index + 1}`,
                                start: "top center",
                                end: "bottom center",
                                scrub: true,
                                snap: true,
                                // markers: true,
                            }
                        }
                    ).from(
                        el.childNodes[2],
                        {
                            y: 400,

                            duration: 8,
              
                            ease: "power2",
                            scrollTrigger: {
                              id: `section-${index + 1}`,
                              trigger: el,
                              start: "top center+=100",
                              end: "bottom bottom-=200",
                              scrub: true,
                              snap: true,
                            }
                        }
                    ).to(
                        el, {
                            opacity: 0,

                            ease: "power2",
                            scrollTrigger: {
                              id: `section-${index + 1}`,
                              trigger: el,
                              start: "top top+=300",
                              end: "center top+=300",
                              scrub: true,
                            }
                        }
                
                    )
                    }
                ) 
    }, [])

    return(
       <ServiceSection id="services">
           <Background ref={ref}>
               <Title>What We Do.</Title>
               <Line id="line"/>
               <Triangle />
           </Background>
           <Content ref={addToRefs}>
               <TextBlock 
                topic=""
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
               <img src={goldwheel} alt="soap" height="400" width="400" />
               </OBJ>
               <PhotoBlock price="$125"/>
           </Content>
           <Content ref={addToRefs}>
               <TextBlock 
                topic=" "
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
                <img src={platniumwheel} alt="soap" height="400" width="400" />
                </OBJ>
               <PhotoBlock price={"$200"}/>
           </Content>
           <Content ref={addToRefs}>
               <TextBlock 
                topic=" "
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
                    {/* <li>Rust Removal On Rims</li>
                    <li>Engine Bay Deep Clean</li>
                    <li>Trunk Deep Clean</li>
                    <li>Exterior Trim restoration and UV Protection</li>
                    <li>Max Pro Tire Gel</li>
                    <li>RainX window Treatment</li>
                    <li>Exterior Full Polish</li>
                    <li>Ceramic Wax</li> */}
                </ul>}
               
               />
               <OBJ>
                <img src={diamondwheel} alt="soap" height="400" width="400" />
                </OBJ>
               <PhotoBlock price=" $300">
                
               </PhotoBlock>
           </Content>
           <Content ref={addToRefs}>
               {/* fake text block to slow down  */}
              <TextBlock
              topic=" " 
              ></TextBlock>
               <OBJ>
                
                </OBJ>
               
           </Content>
       </ServiceSection>
    )
}

export default Services;