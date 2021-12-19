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

    @media(max-width: 450px){
        width: 350px;
    }

    @media(max-width: 380px){
        width: 300px;
    }
`

export {
    SemesterContainer,
    NameHolder,
};
