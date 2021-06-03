import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import google from '../../assets/google.png'
import styled from 'styled-components'

const ContactSection = styled.div`
width: 100vw;
padding: calc(2.5rem + 2.5vw) 0;
background: var(--black);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 3rem;
`


const Title = styled.h1`
display: inline-block;
font-size: 2rem;
margin-top: 1rem;
position:relative;
color: white;

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



const Icons = styled.div`
   display: flex;
  margin-bottom: 3rem;
  margin-top: 1rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`

const Form = styled.form`

display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    &:not(:last-child){
        margin-right: 1rem;
    }
    background-color: var(--steel);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--white);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--steel);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--white);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`

 @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"], &[name="email"]{
        margin-right: 0;
      }
      
    }
  }



`


const Contact = () => {
    return(
        <ContactSection id="contact">
         <Title>Get In Touch</Title>
        <Form>
            <Row>
            <input type="text" name="name" placeholder="your name"></input>
            <input type="text" name="email" placeholder="enter a working email"></input>
            <input type="text" name="phone" placeholder="enter a contact number"></input>
            </Row>
            <textarea name="message" id="" cols="30" rows="2" placeholder="your message"></textarea>
            
            <div style={{margin: "0 auto"}}>
                <button>
                    Submit
                </button>
            </div>
        </Form>
        <Icons>
             <a href="https//facebook.com/">
                 <img src={facebook}></img>
             </a>
             <a href="https://www.instagram.com/kayotimedetails/?hl=en">
                 <img src={instagram}></img>
             </a>
             <a href="https://www.instagram.com/kayotimedetails/?hl=en">
                 <img src={google}></img>
             </a>
         </Icons>

        </ContactSection>
    )
}

export default Contact;