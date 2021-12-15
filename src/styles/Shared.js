import styled from "styled-components"

const MainTitle = styled.h1`
    font-size: 54px;
    margin-bottom: 30px
    font-family: 'Sawarabi Gothic', sans-serif;
    color: #fff;
`

const Container = styled.div `
    position: relative;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden; 
    animation: moveInRight .7s;

    svg {
        position: absolute;
        top: 20px;
        left: 20px; 
    }
`

export {
    Container,
    MainTitle,
}