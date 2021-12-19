import { NameHolder, SemesterContainer } from "../styles/SubjectsStyles";
import Entity from "../components/Entity";
import { EntityContainer, SemestersName } from "../styles/EntityStyles";

const Semester = ({ semester, categories, subjects }) => {
    
    return (
        <SemesterContainer >
            <NameHolder>
                {
                    Number(semester.name) ?
                        <SemestersName> {semester.name} 
                            <sup>{ Number(semester.name) === 1 ? 'st ' :
                            Number(semester.name) === 2 ? 'nd ' : 
                            Number(semester.name) === 3 ? 'rd ' : 'th '}</sup>  semester 
                        </SemestersName> :
                        <SemestersName>{semester.name}</SemestersName>  
                }
            </NameHolder>
            <EntityContainer>
                {
                    subjects.filter(sub => sub.periodId === semester.id).map((subject) => (
                        <Entity key = {subject.id} entity = {subject} categories= {categories}/>
                    ))
                }
            </EntityContainer>
        </SemesterContainer>
    )
};

export default Semester