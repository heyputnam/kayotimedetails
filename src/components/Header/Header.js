import logo from '../../assets/realcar.png'
import styled from 'styled-components'
import kayologo from '../../assets/bg.jpg'
import { gsap } from 'gsap'
import { useState, setState, useRef, useEffect } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 1rem;
/* background-image: radial-gradient(farthest-corner at 40px 40px,
      #111 20%, #333 100%,#ddd 100%);


color: var(--black); */
color: #FFF;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.9);
  background: #434343 none repeat scroll 0% 0%;
  border: 1px solid #242424;
  border-radius: 4px;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.25),
    0 1px 0 rgba(255, 255, 255, 0.25) inset,
    0 0 0 rgba(0, 0, 0, 0.5) inset,
    0 1.25rem 0 rgba(255, 255, 255, 0.08) inset,
    0 -1.25rem 1.25rem rgba(0, 0, 0, 0.3) inset,
    0 1.25rem 1.25rem rgba(255, 255, 255, 0.1) inset;

transition: all 0.2s linear 0s;
position: relative;
z-index: 500;
font-family: primot, sans-serif;

font-weight: 400;

font-style: normal;



@media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
    &:before {
    border-radius: 40px;
    }
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
    &:before {
    border-radius: 35px;
    }
  }



`
const Logo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 3rem; 
height: auto;
cursor: pointer;

img{
    margin-left: -1rem;
    border-radius: 35px;
}
p{
    letter-spacing: 4px;
    color:var(--blue);
    font-weight: 600;
}


`
const Nav = styled.nav`
width: 25rem;
max-width: 40rem;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.1rem;


/* changes display for mobile screen */

@media only Screen and (max-width: 48em){
    display: none;
}


/* sets nav bar adds responsive hover */

    a{
    font-weight: 600;
    color: var(--white);
    line-height: 1.3;
    margin-left: -3rem;
    /* font-family: primot, sans-serif;

font-weight: 400;

font-style: normal; */
font-family: usual, sans-serif;

font-weight: 700;

font-style: normal;




        &::after{
        content: '';
        display: block;
        height: 3px;
        width: 3px;
        background: transparent;
        transition: width 0.5s;
        }
        &:not(:last-child):hover::after{
        width: 100%;
        background: var(--blue) 

        }
    
     }
    
 

`
const Button = styled.button`
background-color: var(--blue);
padding: 0.4rem 1rem;
border-radius: 25px;
color: var(---white);

font-family: usual, sans-serif;

font-weight: 700;

font-style: normal;




cursor: pointer;
/* box-shadow:  0px 3px 16px -3px white; */
     &:hover{
         transform: scale(1.1);
         box-shadow:  0px 3px 16px -3px black;
     }
     &:focus{
         transform: scale(0.9);
         box-shadow:  0px 4px 16px -3px black;
    }


`
const HamburgerBtn = styled.button`
position: relative;
background: transparent;
width: 2rem;
height: 2px;
cursor: pointer;
display: none;

/* show hamburger button when on mobile screen */

@media only Screen and (max-width: 48em){
    display: inline-block;
}

    &::before,&::after{
        content: '';
        background: var(--white);
        width: 2rem;
        height: 2px;
        display: inline-block;
        position: absolute;
        left: 0;
        cursor: pointer;
        transition: all 0.3;
    }

/* using javascript to change css based on props */

    &::before{
        top: ${props => (props.clicked ? "0" : "-0.5rem")};
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")}

    }

    &::after{
        top: ${props => (props.clicked ? "0" : "0.5rem")};
        transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")}
    }

`
const MobileMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
position: absolute;
top: 100%;
left: 0;
right: 0;
/* switches visiablity for when button is clicked or on clicked based on props */
opacity: ${props => (
    props.clicked ? '1' : 0
)};
visibility: ${props => (
    props.clicked ? 'visable' : 0
)};
background: rgba(0, 0,0, 0.87);
/* makes rounded and look like floating  */
border-radius: 20px;
margin: 0.5rem;
overflow: hidden;


    a{
        color: var(--white);
        font-weight: 600;
        font-size: 1.5rem;
        margin: 1.5rem;
        cursor: pointer;
    }




`
const Header = () => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    const headerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
// sets up animation for nav bar to scroll with page
    useEffect(()=>{
        let element = headerRef.current;
        const mq = window.matchMedia("(max-width:40em)");
        // for mobile
        if (mq.matches) {
            gsap.to(element, {
              position: "fixed",
              top: "0",
              left: "0",
              right: "4.5rem",
              padding: "1rem 1rem",
              
              borderRadius: "0 0 50px 50px",
      
              border: "2px solid var(--white)",
            
      
              duration: 1,
              ease: "power1.out",
      
              scrollTrigger: {
                trigger: element,
                start: "bottom+=200 top",
                end: "+=100",
                scrub: true,
              },
            
            });
          } else {
            //   regular webpage setup
            gsap.to(element, {
              position: "fixed",
              top: "1rem",
              left: "3rem",
              right: "3rem",
              padding: "1.5rem 2rem",
      
              borderRadius: "50px",
              border: "2px solid var(--white)",
        
      
              duration: 1,
              ease: "power1.out",
      
              scrollTrigger: {
                trigger: element,
                start: "bottom+=300 top",
                end: "+=250",
                scrub: true,
              },
            
            });
          }
        }, []);
    return(
        <Headers ref={headerRef} >
            <Logo>
            <img src={kayologo}  alt="logo"/>
            {/* <p>KayoTimeDetails</p> */}
          </Logo>
          <Nav>
              <a href="#home" >Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact" >
                  <Button>
                      Contact Us
                  </Button>
            </a>
          </Nav>

          {/* adding nav to hamburger button mobile screen */}
          <HamburgerBtn onClick={() => handleClick()} clicked={click}>
           <span></span>
          </HamburgerBtn>
          {/* add onClick to all to make menu close when any selection is pressed automatically */}
          <MobileMenu clicked={click}>
             <a href="#home" onClick={() => handleClick()}  >Home</a>
              <a href="#about" onClick={() => handleClick()}  >About</a>
              <a href="#services" onClick={() => handleClick()}  >Services</a>
              <a href="#reviews" onClick={() => handleClick()}  >Reviews</a>
              <a href="#contact" onClick={() => handleClick()}   >
                  <Button>
                      Contact Us
                  </Button>
            </a>
             </MobileMenu>
             
        </Headers>
    )
}


export default Header;