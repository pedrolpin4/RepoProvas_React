import { useNavigate } from 'react-router-dom';
import {
    ButtonsHolder,
    OptionButton
} from '../styles/HomeStyles'
import { Container, MainTitle } from '../styles/Shared';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <Container>
            <MainTitle>
                ExamsRepo
            </MainTitle>
            <ButtonsHolder>
                <OptionButton>View Exams</OptionButton>
                <OptionButton onClick={() => navigate('/send-exam')}>Send an Exam</OptionButton>
            </ButtonsHolder>
        </Container>
    )
};

export default Home