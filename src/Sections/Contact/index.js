import facebook from '../../assets/facebook2.png'
import instagram from '../../assets/instagram3.png'
import google from '../../assets/google2.png'
import styled from 'styled-components'
import { useState } from 'react';
import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';


// init("user_n851EwkEFNDS5NLsWvsH7");

const ContactSection = styled.div`
width: 100vw;

padding: calc(2.5rem + 2.5vw) 0;
background: var(--black);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 5rem;
font-family: primot, sans-serif;

font-weight: 400;

font-style: normal;
`


const Title = styled.h1`
display: inline-block;
font-size: 2.5rem;
margin-top: 2rem;
position:relative;
color: white;
font-family: primot, sans-serif;

font-weight: 400;

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



const Icons = styled.div`
   display: flex;
  margin-bottom: 3rem;
  margin-top: 2rem;
  
  a {
      
    &:hover {
      img {
       filter: invert(100%);
    
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
 height: 100%;
 margin-top: 2rem;


  input {
    padding: 1rem calc(4em + 3vw);
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
    
    background-color: var(--blue-blue);
    border-radius: 20px;
    font-size: 1.2rem;
    color: white;
    font-family: primot, sans-serif;

font-weight: 400;

font-style: normal;
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
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      init("user_n851EwkEFNDS5NLsWvsH7");
      const onSubmit = (e) => {
       e.preventDefault();
        send(
            'service_v3brxqf',
            'template_48v3j9h',
            toSend,
            'user_n851EwkEFNDS5NLsWvsH7'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
           e.target.value = '';
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
  
    return(
        <ContactSection id="contact">
         <Title>Get In Touch</Title>
        <Form id="form" onSubmit={onSubmit}>
            <Row>
            <input id="form" type="text" name="name" placeholder="your name"  value={toSend.name}
    onChange={handleChange}></input>
            <input id="form" type="text" name="email" placeholder="enter a working email"  value={toSend.email}
    onChange={handleChange}></input>
            <input id="form" type="text" name="phone" placeholder="enter a contact number" value={toSend.phone}
    onChange={handleChange}></input>
            </Row>
            <textarea id="form" name="message"  cols="30" rows="2" placeholder="your message" value={toSend.message}
    onChange={handleChange}></textarea>
            
            <div style={{margin: "0 auto"}}>
                <button type="submit"> 
                    Submit
                </button>
            </div>
        </Form>
        <Icons>
             <a href="https://www.facebook.com/kayotimedetails" alt="">
                 <img src={facebook} alt=""></img>
             </a>
             <a href="https://www.instagram.com/kayotimedetails/?hl=en" alt="">
                 <img src={instagram} alt=""></img>
             </a>
             <a href="https://www.google.com/maps/place/Kayo+Time+Details/@38.9875421,-76.5283712,15z/data=!4m5!3m4!1s0x0:0x9063af6d112b428!8m2!3d38.9875421!4d-76.5283712" alt="">
                 <img src={google} alt=""></img>
             </a>
         </Icons>

        </ContactSection>
    )
}

export default Contact;