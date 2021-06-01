
import styled from 'styled-components'


const RightBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
position: relative;

@media only Screen and (max-width: 48rem){
    display: none;
}

`

const PhotoBlock = ({picture}) => {
    const pic = require(`../../assets/${picture}`).default;
    return(
        <RightBlock>
           <img src={pic} alt="picture"/>
        </RightBlock>
    )
}

export default PhotoBlock;