import styled from "styled-components";

const ButtonsHolder = styled.div`
    display: flex;
    align-items: center;
`

const OptionButton = styled.div`
    position: relative;
    cursor: pointer;
    font-size: 18px;
    background-color: #0000FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 35px 0px 35px;
    color: #FFFFFF;
    width: 150px;
    height: 60px;
    border-radius: 30px;
    backface-visibility: hidden; 

    &::after{
        content: "";
        background-color: #0000FF;
        z-index: -1;
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 30px;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .5s;
    }

    &:hover{
        transform: translateY(-3px);
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active{
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0, .2);
    }

    @media (max-width: 450px) {
        font-size: 16px;
        margin: 30px 20px 0px 20px;
        width: 120px;
        height: 50px;
        border-radius: 25px;
    }
`

export {
    ButtonsHolder,
    OptionButton,
}
