import styled from "styled-components";

const SendForms = styled.form`
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    @media(max-width: 450px){
        width: 300px;
    }
`

const ExamInput = styled.input`
    margin-top: 20px;
    padding: 15px;
    width: 100%;
    height: 60px;
    font-size: 24px;
    color: black;
    background-color: #fff;
    color: black;
    outline: none;
    border: none;
    border-radius: 5px;

    ::placeholder {
        font-family: inherit;
        font-size: 24px;
        color: black;
        opacity: 0.6;
    }
`

const SendButton = styled.button`
    position: relative;
    cursor: pointer;
    font-size: 24px;
    background-color: #0000FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 35px 20px 35px;
    color: #FFFFFF;
    width: 100%;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0px 1.2px 1px rgba(255, 255, 255, 0.3);
    backface-visibility: hidden; 
    transition: all .2s;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0px 4px 3px rgba(255, 255, 255, 0.5);
    }
    
    &:active{
        transform: translateY(-1px);
        box-shadow: 0px 2px 1px rgba(255, 255, 255, 0.5);
    }
`

export {
    SendForms,
    ExamInput,
    SendButton,
}