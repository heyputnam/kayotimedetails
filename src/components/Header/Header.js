import logo from '../../assets/caricon.png'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { useState, setState, useRef, useEffect } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 1rem;
background: var(--white);
color: var(--black);
position: relative;
z-index: 500;
@media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
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
    margin-right: 0.5rem;
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

/* changes display for mobile screen */

@media only Screen and (max-width: 48em){
    display: none;
}


/* sets nav bar adds responsive hover */

    a{
    font-weight: 600;
    color: var(--black);
    line-height: 1.5;

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
padding: 0.5rem 1rem;
border-radius: 25px;
color: var(--white);
font-weight:  600;
cursor: pointer;
/* box-shadow:  0px 3px 16px -3px white; */
     &:hover{
         transform: scale(1.1);
         box-shadow:  0px 3px 16px -3px #E7222E;
     }
     &:focus{
         transform: scale(0.9);
         box-shadow:  0px 4px 16px -3px #5e87ff;
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
        background: var(--black);
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
      
              border: "4px solid var(--bmwred)",
      
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
            <img src={logo}  alt="logo"/>
            <p>KayoTimeDetails</p>
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