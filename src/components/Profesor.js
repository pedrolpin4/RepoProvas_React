import { useState } from "react/cjs/react.development";
import { CategoriesContainer, ProfesorContainer, ProfesorSelector } from "../styles/ProfesorsStyles";
import Category from "./Category";

const Profesor = ({ profesor, categories }) => {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <ProfesorContainer>
            <ProfesorSelector onClick={() => setIsVisible(!isVisible)}>
                <p>{profesor.name} ({profesor.quantity})</p>
            </ProfesorSelector>
            <CategoriesContainer isVisible = {isVisible}>
                {
                    categories.map((cat) => (
                        <Category key={cat.id} cat = {cat}/>
                    ))
                }
            </CategoriesContainer>
        </ ProfesorContainer>
    )
};

export default Profesor;
