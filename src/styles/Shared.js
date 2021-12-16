import styled from "styled-components"

const MainTitle = styled.h1`
    font-size: 54px;
    margin-bottom: 30px;
    font-family: 'Sawarabi Gothic', sans-serif;
    color: #fff;

    @media(max-width: 450px){
        font-size: 35px;
        margin-bottom: 30px;
    }
`

const Container = styled.div `
    position: relative;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden; 
    animation: moveInRight .7s;

    .return {
        position: absolute;
        top: 30px;
        left: 0px; 
        cursor: pointer;
    }
`

const ErrorMessage = styled.p`
    color: #a00;
    font-size: 18px;
`

export {
    Container,
    MainTitle,
    ErrorMessage,
}