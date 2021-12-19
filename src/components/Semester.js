import { NameHolder, SemesterContainer } from "../styles/SubjectsStyles";
import Entity from "../components/Entity";
import { EntityContainer, SemestersName } from "../styles/EntityStyles";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Semester = ({ semester, categories, subjects }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <SemesterContainer isVisible = {isVisible}>
            <NameHolder isVisible = {isVisible} onClick = {() => setIsVisible(!isVisible)}>
                {
                    Number(semester.name) ?
                        <SemestersName> {semester.name} 
                            <sup>{ Number(semester.name) === 1 ? 'st ' :
                            Number(semester.name) === 2 ? 'nd ' : 
                            Number(semester.name) === 3 ? 'rd ' : 'th '}</sup>  semester 
                        </SemestersName> :
                        <SemestersName>{semester.name}</SemestersName>  
                }
                <IoIosArrowDown size = {30} color = {'#77f'} />
            </NameHolder>
            <EntityContainer isVisible = {isVisible}>
                {
                    subjects.filter(sub => sub.periodId === semester.id).map((subject) => (
                        <Entity entityIsVisible = { isVisible } key = {subject.id} entity = {subject} categories= {categories}/>
                    ))
                }
            </EntityContainer>
        </SemesterContainer>
    )
};

export default Semester