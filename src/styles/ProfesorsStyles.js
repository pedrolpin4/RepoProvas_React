import styled from "styled-components";

const ProfesorContainer = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
    margin: 120px 0px 50px 0px;
    width: 400px

    @media(max-width: 450px){
        width: 300px
    }
`

const ProfesorSelector = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    padding: 15px;
    width: 400px;
    height: 60px;
    font-size: 20px;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all .4s;

    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    svg {
        transition: all .4s;
        transform: ${props => props.isVisible ? 'rotateX(-180deg)' : 'none'};
    }

    p{
        opacity: 1;
        color: #fff;
    }
`

const CategoriesContainer = styled.div`
    align-self: center;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: 600px;
    overflow-y: scroll;
    transition: all .4s;
    transform: ${props => props.isVisible ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top;
    height: auto;
    border-radius: 5px;
`

const CategorySelector = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    opacity: ${props => props.isVisible ? '1' : '0'};
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 30px;
    width: 400px;
    transition: all .4s;
    min-height: ${props => props.isVisible ? '50px' : '0px'};
    height: ${props => props.isVisible ? 'auto' : '0px'};
    color: white;
    background: transparent;

    svg {
        transition: all .4s;
        transform: ${props => props.examIsVisible ? 'rotateX(-180deg)' : 'none'};
    }
    
    :hover{
        background: rgba(255, 255, 255, 0.1);
    }
`

const ExamsContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    opacity: ${props => props.examIsVisible ? '1' : '0'};
    align-items: center;
    overflow-y: scroll;
    width: 400px;
    transition: all .4s;
    max-height: 100px;
    transform: ${props => props.examIsVisible ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top;
    height: auto;
    background: transparent;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0px 25px 0px 40px;
        color: ${props => props.examIsVisible ? '#fff' : 'transparent'};
        transition: all .4s;
        transform: ${props => props.examIsVisible ? 'scaleY(1)' : 'scaleY(0)'};
        height: ${props => props.examIsVisible ? '50px' : '0px'};
    }
`

const ExamName = styled.a`
    text-transform: capitalize;
    transition: all .4s;

    :hover {
        color: #00a;
    }
`

const VisitButton = styled.a`
    position: relative;
    cursor: pointer;
    font-size: 14px;
    background-color: #0000FF;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    width: 70px;
    height: 25px;
    border-radius: 18px;
    backface-visibility: hidden; 

    &::after{
        content: "";
        background-color: #0000FF;
        z-index: -1;
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 18px;
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
`

export {
    ProfesorContainer,
    ProfesorSelector,
    CategoriesContainer,
    CategorySelector,
    ExamsContainer,
    ExamName,
    VisitButton,
}
