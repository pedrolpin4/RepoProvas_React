import { useState } from "react";
import { CategoriesContainer, ProfesorSelector } from "../styles/ProfesorsStyles";
import Category from "./Category";
import { IoIosArrowDown } from 'react-icons/io'

const Profesor = ({ profesor, categories }) => {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <>
            <ProfesorSelector isVisible = {isVisible} onClick={() => setIsVisible(!isVisible)}>
                <p>{profesor.name} ({profesor.quantity})</p>
                <IoIosArrowDown size = {30} color = "#fff"/>
            </ProfesorSelector>
            <CategoriesContainer isVisible = {isVisible}>
                {
                    categories.map((category) => (
                        <Category key={category.id} category = {category} profesor = {profesor} isVisible = {isVisible}/>
                    ))
                }
            </CategoriesContainer>
        </ >
    )
};

export default Profesor;
