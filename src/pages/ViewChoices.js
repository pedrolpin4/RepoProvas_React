import { useNavigate } from "react-router-dom"
import { Choice, ChoicesContainer } from "../styles/ChoiceStyles";
import { Container } from "../styles/Shared";
import { FcGraduationCap, FcSurvey } from 'react-icons/fc'
import { IoArrowBack } from "react-icons/io5";

const ViewChoices = () => {
    const navigate = useNavigate();
    
    return (
        <Container>
            <IoArrowBack color="#fff" className = 'return'
                onClick={() => navigate("/")}/>
            <ChoicesContainer>
                <Choice onClick = {() => navigate('/profesors')}>
                    <FcGraduationCap color="#fff"/>
                    <p>View by Profesor</p>
                </Choice>
                <Choice onClick = {() => navigate('/subjects')}>
                    <FcSurvey color="#fff"/>
                    <p>View by Subject</p>
                </Choice>
            </ChoicesContainer>
        </Container>
    )
}

export default ViewChoices