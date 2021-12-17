import styled from "styled-components";

const SelectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;

    .show-options{
        position: absolute;
        top: 35px;
        right: 15px;
        transition: all .4s;
        transform: ${props => props.isVisible ? 'rotateX(-180deg)' : 'none'};
    }
`

const ExamSelect = styled.div`
    cursor: pointer;
    margin-top: 20px;
    padding: 15px;
    width: 400px;
    height: 60px;
    font-size: 24px;
    color: black;
    background-color: #fff;
    color: black;
    outline: none;
    border: none;
    border-radius: 5px;
    
    @media(max-width: 450px){
        width: 300px
    }

    p{
        opacity: ${props => props.option ? '1' : '0.6'};
    }
`

const OptionsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 300px;
    overflow-y: scroll;
    transition: all .4s;
    transform: ${props => props.isVisible ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top;
    height: auto;
    border-radius: 5px;
`

const Option = styled.div`
    cursor: pointer;
    flex-shrink: 0;
    opacity: ${props => props.isVisible ? '1' : '0'};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
    width: 100%;
    transition: all .4s;
    height: ${props => props.isVisible ? '50px' : '0px'};
    color: white;
    background: ${props => props.isVisible ? 'rgba(120, 120, 120, 0.3)' : ''};
    
    :hover{
        background: rgba(120, 120, 120, 0.5);
    }
`

export {
    Option,
    OptionsContainer,
    ExamSelect,
    SelectContainer,
}