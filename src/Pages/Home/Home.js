
// import sections

import Hero from '../../Sections/Hero/index'
import About from '../../Sections/About/index'
import Contact from '../../Sections/Contact/index'
import Reviews from '../../Sections/Reviews/index'
import Services from '../../Sections/Services/index'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Home = () => {
    return(
        <Container>
           <Hero />
           <About />
           <Services />
           <Reviews />
           <Contact />
        </Container>
    )
}

export default Home;