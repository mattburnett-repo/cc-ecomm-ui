
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        // https://www.gradient-animator.com/
        background: linear-gradient(270deg, ${({ theme }) => theme.colors.light}, ${({ theme }) => theme.colors.dark});
        background-size: 400% 400%;
    
        -webkit-animation: MainBackgroundGradientAnimation 15s ease infinite;
        -moz-animation: MainBackgroundGradientAnimation 15s ease infinite;
        -o-animation: MainBackgroundGradientAnimation 15s ease infinite;
        animation: MainBackgroundGradientAnimation 17s ease infinite;

        color: ${({ theme }) => theme.colors.black};
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }
    
    @-webkit-keyframes MainBackgroundGradientAnimation {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes MainBackgroundGradientAnimation {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-o-keyframes MainBackgroundGradientAnimation {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes MainBackgroundGradientAnimation {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }


    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
    button {
        width: 6rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.black};
        font-weight: 700;
        border-radius: 10px;
        margin: 0 3px;
    }
    
`
export default GlobalStyles