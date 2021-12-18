import { Container, ErrorMessage } from "../styles/Shared";
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import Profesor from "../components/Profesor";
import { useEffect, useState } from "react/cjs/react.development";
import { getProfesors } from "../services/profesorServices";
import Loading from "../components/Loading";


const ProfesorsPage = () => {
    const navigate = useNavigate();
    const [profesors, setProfesors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleProfRequisition = async () => {
        const result = await getProfesors();

        if(result.success){
            setProfesors(result.data);
            setIsLoading(false);
            return;
        }

        setErrorMessage(result.message);
        setIsLoading(false)
        return;
    };

    useEffect(() => {
        handleProfRequisition();
        setProfesors();
    }, []);

    return(
        <>
            {
                isLoading ? 
                    <Loading spinnerSize={120} />
                :
                <Container>
                    <IoArrowBack className = 'return' color="#fff" onClick = {() => navigate('/')} />
                    {
                        errorMessage ? 
                        <ErrorMessage>{ errorMessage }</ErrorMessage> :
                        profesors.map((prof) => (
                            <Profesor key = {prof.id} profesor = {prof}/>
                        ))
                    }
                </Container>

            }
        </>
    )   
}

export default ProfesorsPage;
