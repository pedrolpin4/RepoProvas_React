import styled from "styled-components";

const ChoicesContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 700px){
        flex-direction: column;
    }
`

const Choice = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 250px;
    border-radius: 7px;
    margin: 0 40px;
    background-color: #111199;
    transition: all .3s;
    transform: translate(0);

    svg {
        transition: all .3s;
        transform: rotateZ(0);
        font-size: 100px;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 3px 3px rgba(255, 255, 255, 0.7);

        svg {
            transform: rotateZ(-10deg);
        }
    }

    &:active {
        transform: translateY(-2px);
        box-shadow: 0px 1px 2px rgba(255, 255, 255, 0.7);
    }

    p {
        margin-top: 20px;
        color: #fff;
        font-size: 22px;
    }

    @media (max-width: 700px){
        margin: 20px 0;
    }

`

export {
    ChoicesContainer,
    Choice,
}
