// creating global styles


const { createGlobalStyle } = require("styled-components");


export const GlobalStyle = createGlobalStyle`


:root{
    --white: #ffffff;
    --black: #000000;
    --blue: #3f81f2;
    --paleblue: #c5dced;
    --nav: #042136;
    --steel: #c2c8cc;


}

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'PT Sans Caption', sans-serif;
}
html{
    scroll-behavior: smooth;

}


body, html, a{
    font-family:  'PT Sans Caption', sans-serif;
}

body{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: var(--white);
    overflow-x: hidden;

}

h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;

}

a{
    text-decoration: none;
    outline: none;
}

button{
    border: none;
    outline: none;
    &:focus{
        outline: none;
    }
}

*:focus{
    outline: none;

}


img{
    width: 100%;
    height: auto; 
}





`

