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

const EntitiesContainer = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
    margin: 120px 0px 50px 0px;
    width: 400px;

    @media(max-width: 450px){
        width: 300px
    }
`

const Container = styled.div `
    position: relative;
    font-family: 'Roboto', sans-serif;
    overflow-x: visible;
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
        font-size: 40px;
        cursor: pointer;
    }

    .return-filters {
        position: absolute;
        top: 30px;
        left: -55px; 
        font-size: 40px;
        cursor: pointer;
    }

    @media (max-width: 700px){
        width: 100vw;

        .return-filters {
            left: 30px; 
        }
        .return {
            left: 30px; 
        }
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
    EntitiesContainer,
}