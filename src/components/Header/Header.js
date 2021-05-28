import logo from '../../assets/boxing.png'
import styled from 'styled-components'
import { useState, setState } from 'react'


const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 1rem;
background: var(--steel);
color: var(--white);
position: relative;
z-index: 500;
border-radius: 10px;
margin: 0.5rem;



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
    color: var(--white);
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
    
 

`;


const Button = styled.button`
background-color: var(--blue);
padding: 0.5rem 1rem;
border-radius: 25px;
color: var(--white);
font-weight:  600;
cursor: pointer;

     &:hover{
         transform: scale(1.1);

     }
     &:focus{
         transform: scale(0.9);

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
background: rgba(53, 53,63, 0.85);
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


    // setting up state for button click of hamburger button 

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return(
        <Headers>
            <Logo>
            <img src={logo}  alt="logo"/>
            <p>KayoTimeDetails</p>
          </Logo>
          <Nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">
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