import styled from "styled-components";

const SemesterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-bottom: 10px;
`

const NameHolder = styled.div`
    display: flex;
    width: 400px;
    padding: 0px 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    svg {
        transition: all .4s;
        transform: ${props => props.isVisible ? 'rotateX(-180deg)' : 'none'};
    }

    :hover {
        background: rgba(255, 255, 255, 0.1);
    }
`

export {
    SemesterContainer,
    NameHolder,
};
