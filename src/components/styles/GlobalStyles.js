
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
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
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
        border-radius: 10px;
        margin: 0 3px;
    }
    
`
export default GlobalStyles