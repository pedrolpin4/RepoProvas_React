import styled from "styled-components";

const EntitySelector = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    padding: 15px;
    width: 400px;
    font-size: 20px;
    background-color: transparent;
    border-radius: 5px;

    @media(max-width: 450px){
        width: 350px;
    }

    @media(max-width: 380px){
        width: 300px;
    }

    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    svg {
        transition: all .4s;
        transform: ${props => props.isVisible ? 'rotateX(-180deg)' : 'rotateX(0)'};
    }

    p{
        opacity: 1;
        transition: all .4s;
        color: #fff;
    }
`

const EntityContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform-origin: top;
    border-radius: 5px;
`


const CategoriesContainer = styled.div`
    align-self: center;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
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
    width: 100%;
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
    width: 100%;
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

const SemestersName = styled.p`
    font-size: 24px;
    margin: 10px 0px 15px 0px;
    color: #77f;

    sup { 
        vertical-align: super;
        font-size: smaller;
    }

    @media(max-width: 450px){
        font-size: 26px;
        margin-bottom: 30px;
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
    EntitySelector,
    CategoriesContainer,
    CategorySelector,
    ExamsContainer,
    EntityContainer,
    ExamName,
    VisitButton,
    SemestersName,
}
