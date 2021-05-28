// using global styles
import { GlobalStyle } from './glabalStyles'

import{ lazy, Suspense } from 'react';


const Home = lazy(()=> import("./Pages/Home/Home"))
const Header = lazy(()=> import("./components/Header/Header"))
const Footer = lazy(()=> import("./components/Footer/Footer"))
const ScrollToTop = lazy(()=> import("./components/ScrollToTop/ScrollToTop"))

function App() {
  return (
    <section >
      <Suspense fallback={null}>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
    <ScrollToTop />
      </Suspense>
    
    </section> 
  );
}

export default App;
