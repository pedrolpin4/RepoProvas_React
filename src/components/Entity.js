import { useState } from "react";
import { CategoriesContainer, EntitySelector } from "../styles/EntityStyles";
import Category from "./Category";
import { IoIosArrowDown } from 'react-icons/io'

const Entity = ({ entity, categories }) => {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <>
            <EntitySelector isVisible = {isVisible} onClick={() => setIsVisible(!isVisible)}>
                <p>{entity.name} ({entity.quantity})</p>
                <IoIosArrowDown size = {30} color = "#fff"/>
            </EntitySelector>
            <CategoriesContainer isVisible = { isVisible }>
                {
                    categories.map((category) => (
                        <Category key={category.id} category = {category} entity = {entity} isVisible = {isVisible}/>
                    ))
                }
            </CategoriesContainer>
        </ >
    )
};

export default Entity;
