import styled from 'styled-components'

import github from '../../assets/github.png'
import hand from '../../assets/hand.png'
import linkedin from '../../assets/linkedin.png'

const FooterSection = styled.div`
padding: 1.2rem calc(2.5rem + 2.5vw);
font-size: 1rem;
display: flex;
align-items: center;
justify-content: space-between;

`
const LeftText = styled.div`


`
const RightText = styled.div`
display: flex;
align-items: center;
img{
    width: 1.5rem;
    filter: invert(100%);
    margin-left: 1rem;
    transform: all 0.2s ease-in-out;
}
a{
    &:hover{
        img{
            transform: scale(1.5);
            filter: invert(50%) saturate(300%)
        }
    }
}

`
const Footer = () => {
    return(
        <FooterSection>
           <LeftText>
           © 2021 created and designed by Hailey Putnam
           </LeftText>
           <RightText>
        Reach out via 
        <a href="https://linkedin.com">
            <img src={linkedin} />
        </a>
        <a href="https://github.com">
            <img src={github} />
        </a>
        <a href="https://heyputnam.com">
            <img src={hand} />
        </a>
           </RightText>
        </FooterSection>
    )
}

export default Footer;