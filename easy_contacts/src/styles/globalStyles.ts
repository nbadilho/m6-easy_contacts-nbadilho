import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
font-family: 'Noto Sans', sans-serif;

    }

    button{
        cursor: pointer;
        font-family: 'Noto Sans', sans-serif;
    }
    input{
        font-family: 'Noto Sans', sans-serif; 
    }

    a{
        color: unset;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }
    html {
  scroll-behavior: smooth;
}


    :root {
        --color-primary: #C4DFDF;
        --color-primary-70:#ACBCFF;
        --color-primary-200:#7790f1;
        --color-secondary:#D2E9E9;
        --color-secondary-20:#a5cfcf;
        --color-tertiary-20:#e6fffd67;
        --color-tertiary: #E3F4F4;
        --color-purple:#75135dba;
        --color-grey100: #333333;
        --color-grey50: #828282;
        --color-grey20: #999898;
        --color-grey0: #F5F5F5; 
        --color-white: #FFFFFF;
        --colo-white-opacity60: rgba(255, 255, 255, 0.8);
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #27AE60;
        --color-information: #155BCB;
        --color-overlay-black: rgba(0,0,0,.5);
        

        --font-size-32: 2rem;
        --font-size-30: 1.875rem;
        --font-size-28: 1.75rem;
        --font-size-24: 1.5rem;
        --font-size-20: 1.25rem;
        --font-size-18: 1.125rem;
        --font-size-16: 1rem;
        --font-size-14: 0.9rem;
        --font-size-12: 0.75rem;

        --radius-1: 0.5rem;
        --radius-2: 5px;
        --radius-50:50%;
    }
`;
