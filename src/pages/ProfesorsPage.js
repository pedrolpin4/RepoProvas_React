import { Container, ErrorMessage } from "../styles/Shared";
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfesors } from "../services/profesorServices";
import Loading from "../components/Loading";
import { EntitiesContainer } from "../styles/Shared";
import Entity from "../components/Entity";


const ProfesorsPage = () => {
    const navigate = useNavigate();
    const [profesors, setProfesors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleProfRequisition = async () => {
        const result = await getProfesors();

        if(result.success){
            setProfesors(result.data.profesors);
            setCategories(result.data.categories);
            setIsLoading(false);
            return;
        }

        setErrorMessage(result.message);
        setIsLoading(false)
        return;
    };

    useEffect(() => {
        handleProfRequisition();
    }, []);

    return(
        <>
            {
                isLoading ? 
                    <Loading spinnerSize={120} />
                :
                <Container>
                    <IoArrowBack className = 'return-filters' color="#fff" onClick = {() => navigate('/view-choices')} />
                    {
                        errorMessage ? 
                        <ErrorMessage>{ errorMessage }</ErrorMessage> :
                        <EntitiesContainer>
                        {
                            profesors.map((prof) => (
                                <Entity key = {prof.id} entity={prof} categories= {categories}/>
                            ))
                        }
                        </ EntitiesContainer>
                    }
                </Container>

            }
        </>
    )   
}

export default ProfesorsPage;
