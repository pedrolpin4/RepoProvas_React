import { ErrorMessage, MainTitle } from "../styles/Shared";
import { ExamInput, SendButton, SendForms } from "../styles/SendExamStyle";
import { Container } from "../styles/Shared";
import { IoArrowBack } from 'react-icons/io5'
import { useEffect, useState } from "react";
import * as sendExam from '../services/sendServices'
import { useNavigate } from "react-router-dom";
import Options from "../components/Options";
import validateForm from "../validations/joiValidations";
import Loading from "../components/Loading";

const SendExam = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [profesors, setProfesors] = useState([]);
    const [profesor, setProfesor] = useState('');
    const [isCategories, setIsCategories] = useState(false);
    const [isSubjects, setIsSubjects] = useState(false);
    const [isProfesors, setIsProfesors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const submitExam = async (e) => {
        e.preventDefault();
        const forms = {
            name,
            link,
            categoryId: category.id,
            subjectId: subject.id,
            profesorId: profesor.id,
        };

        if(validateForm(forms)) return setErrorMessage(validateForm(forms));

        const result = await sendExam.postExam(forms);

        if(result.success) {
            navigate('/');
            return;
        }

        setErrorMessage(result.message);
        return;
    }

    const getAvailableOptions = async () => {
        const result = await sendExam.getExam();
        if(result.success) {
            setSubjects(result.data.subjects);
            setCategories(result.data.categories);
            setProfesors(result.data.profesors);
            setIsLoading(false)
            return;
        }
        
        setErrorMessage(result.message);
        setIsLoading(false)
        return;
    }

    useEffect(() =>{
        getAvailableOptions();
    }, []);

    useEffect(() => {
        setProfesor('')
    }, [subject])

    return (
        <>
        {
            isLoading ? 
                <Loading spinnerSize={120} />
            :
            <Container>
                <IoArrowBack color="#fff" className = 'return'
                    onClick={() => navigate("/")}/>
                <MainTitle>
                    ExamsRepo
                </MainTitle>
                <SendForms onSubmit={submitExam}>
                    <ExamInput placeholder= "Name*" value = {name} onChange={(e) => setName(e.target.value)} 
                        pattern=".{3,}" required />
                    <ExamInput placeholder= "Link*" value = {link} onChange={(e) => setLink(e.target.value)} 
                        pattern=".{10,}" required/>
                        <Options options = {categories} option = {category} setOption = {setCategory}
                            isVisible={isCategories} setIsVisible = {setIsCategories} name = {'Categories'}/>
                        <Options options = {subjects} option = {subject} setOption = {setSubject}
                            isVisible={isSubjects} setIsVisible = {setIsSubjects} name = {'Subjects'}/>
                    {
                        subject ?
                            <Options options = {profesors.filter((prof) => prof.profesorSubject.some(ps => ps.subjectId  === subject.id))}
                                option = {profesor} setOption = {setProfesor}  name = {'Profesors'}
                                isVisible={isProfesors} setIsVisible = {setIsProfesors}/>
                            :
                            <></>
                    }
                    <SendButton type = "submit">
                        <p>Send Exam</p>
                    </SendButton>
                </SendForms>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </Container>
        }
        </>
    );
}

export default SendExam