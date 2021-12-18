import { useState } from "react/cjs/react.development";
import { CategorySelector } from "../styles/ProfesorsStyles";

const Category = ({ category }) => {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <CategorySelector isVisible = {isVisible} onClick={() => setIsVisible(!isVisible)}>
            <p>{category.name} ({category.quantity})</p>
        </ CategorySelector>
    )
};

export default Category;
