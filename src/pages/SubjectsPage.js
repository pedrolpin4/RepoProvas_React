import { Container, EntitiesContainer, ErrorMessage } from "../styles/Shared";
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSubjects } from "../services/subjectService";
import Loading from "../components/Loading";
import Semester from "../components/Semester";


const SubjectsPage = () => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
    const [ semesters, setSemesters ] = useState([])
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleSubjectRequisition = async () => {
        const result = await getSubjects();

        if(result.success){
            setSubjects(result.data.subjects);
            setSemesters(result.data.periods);
            setCategories(result.data.categories);
            setIsLoading(false);
            return;
        }

        setErrorMessage(result.message);
        setIsLoading(false)
        return;
    };

    useEffect(() => {
        handleSubjectRequisition();
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
                                semesters.map(semester => (
                                    <Semester subjects = {subjects} categories = {categories} semester={semester}/>
                                ))
                            }
                        </ EntitiesContainer>
                    }
                </Container>

            }
        </>
    )   
}

export default SubjectsPage;
