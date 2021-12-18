import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react/cjs/react.development";
import { CategorySelector, ExamName, ExamsContainer, VisitButton } from "../styles/ProfesorsStyles";

const Category = ({ category, profesor, isVisible }) => {
    const [ examIsVisible, setExamIsVisible ] = useState(false);
    console.log(profesor.exams);
    
    return (
        <>
            <CategorySelector isVisible = {isVisible} examIsVisible = {isVisible ? examIsVisible : false} onClick={() => setExamIsVisible(!examIsVisible)}>
                <p>{category.name} ({profesor.exams.filter(exam => exam.categoryId === category.id).length})</p>
                <IoIosArrowDown size = {20} color = {'#fff'} className = "" />
            </ CategorySelector>
            <ExamsContainer examIsVisible = {isVisible ? examIsVisible : false}>
                {
                    profesor.exams.filter(exam => exam.categoryId === category.id).map(ex => (
                        <div>
                            <ExamName href = {ex.link} target={'_blank'} rel="noreferrer">
                                {ex.name} - {ex.subject}
                            </ExamName>
                            <VisitButton href = {ex.link} target={'_blank'} rel="noreferrer">
                                Visit
                            </VisitButton> 
                        </div>
                    ))
                }
            </ExamsContainer>
        </>
    )
};

export default Category;
