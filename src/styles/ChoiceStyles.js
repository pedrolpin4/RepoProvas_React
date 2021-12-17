import styled from "styled-components";

const ChoicesContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0px;

    @media (max-width: 700px){
        flex-direction: column;
    }
    @media (max-width: 500px){
        margin-top: 80px;
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

    @media (max-width: 400px){
        width: 200px;
        height: 250px;

        svg{ 
            font-size: 80px;
        }

        p {
            font-size: 18px;
        }
    }
`

export {
    ChoicesContainer,
    Choice,
}
