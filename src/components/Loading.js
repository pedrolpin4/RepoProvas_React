import styled from 'styled-components';
import { FcGlobe } from 'react-icons/fc';

export default function Loading({ spinnerSize,
                                  message, }) {
    return (
        <LoadingContainer>
            <FcGlobe size={spinnerSize} 
                       className="spinner"/>
            <Text>{
                message
                 ? message
                 : ""    
            } </Text>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    .spinner {
        animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const Text = styled.p`
    font-family: 'Oswald', sans-serif;
    color: #fff;
`