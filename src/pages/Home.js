import { useNavigate } from 'react-router-dom';
import {
    ButtonsHolder,
    HomeContainer,
    MainTitle,
    OptionButton
} from '../styles/HomeStyles'

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <HomeContainer>
            <MainTitle>
                ExamsRepo
            </MainTitle>
            <ButtonsHolder>
                <OptionButton onClick={() => navigate('/send-exam')}>View Exams</OptionButton>
                <OptionButton>Send an Exam</OptionButton>
            </ButtonsHolder>
        </HomeContainer>
    )
};

export default Home