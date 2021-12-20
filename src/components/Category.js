import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { CategorySelector, ExamName, ExamsContainer, VisitButton } from "../styles/EntityStyles";

const Category = ({ category, entity, isVisible }) => {
    const [ examIsVisible, setExamIsVisible ] = useState(false);
    
    return (
        <>
        {
            entity.exams.filter(exam => exam.categoryId === category.id).length ?
            <>
                <CategorySelector isVisible = {isVisible} examIsVisible = {isVisible ? examIsVisible : false} onClick={() => setExamIsVisible(!examIsVisible)}>
                    <p>{category.name} ({entity.exams.filter(exam => exam.categoryId === category.id).length})</p>
                    <IoIosArrowDown size = {20} color = {'#fff'} className = "" />
                </ CategorySelector>
                <ExamsContainer examIsVisible = {isVisible ? examIsVisible : false}>
                    {
                        entity.exams.filter(exam => exam.categoryId === category.id).map(ex => (
                            <div>
                                <ExamName href = {ex.link} target={'_blank'} rel="noreferrer">
                                    {ex.name} - {ex.subject ? ex.subject : ex.profesor}
                                </ExamName>
                                <VisitButton href = {ex.link} target={'_blank'} rel="noreferrer">
                                    Visit
                                </VisitButton> 
                            </div>
                        ))
                    }
                </ExamsContainer>
            </> : ''
        }
        </>
    )
};

export default Category;
