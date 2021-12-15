import { MainTitle } from "../styles/Shared";
import { ExamInput, ExamSelect, SendButton, SendForms } from "../styles/SendExamStyle";
import { Container } from "../styles/Shared";
import { MdArrowLeft } from 'react-icons/md'
import { useState } from "react";
import * as sendExam from '../services/sendServices'
import { useNavigate } from "react-router-dom";

const SendExam = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const submitExam = async (e) => {
        e.preventDefault();
        const forms = {
            name,
            link,
        };

        const result = await sendExam.postExam(forms);

        if(result.success){
            navigate('/')
            return;
        }

        setErrorMessage(result.message)
        return;
    }

    return (
        <Container>
            <MdArrowLeft size = {20}/>
            <MainTitle>
                ExamsRepo
            </MainTitle>
            <SendForms onSubmit={submitExam}>
                <ExamInput placeholder= "Name*" value = {name} onChange={(e) => setName(e.target.value)}/>
                <ExamInput placeholder= "Link*" value = {link} onChange={(e) => setLink(e.target.value)}/>
                <ExamSelect>
                    <p>Categories*</p>
                </ExamSelect>
                <ExamSelect>
                    <p>Subjects*</p>
                </ExamSelect>
                <ExamSelect>
                    <p>Profesors*</p>
                </ExamSelect>
                <SendButton>
                    <p>Send Exam</p>
                </SendButton>
            </SendForms>
            <p>{errorMessage}</p>
        </Container>
    );
}

export default SendExam