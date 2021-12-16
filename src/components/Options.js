import { IoArrowDown } from "react-icons/io5";
import { ExamSelect, SelectContainer, Option, OptionsContainer } from "../styles/OptionStyles";

const Options = ({options, option, setOption, isVisible, setIsVisible, name}) => (
        <SelectContainer onClick={() => setIsVisible(!isVisible)} isVisible = {isVisible}>
                <ExamSelect option = {option}>
                    <p> { option ? option.name : name}</p>
                    <IoArrowDown size={25} color="#003"
                        className={ isVisible ? "show-options" : "show-options active"} />
                </ExamSelect>
                {
                    <OptionsContainer isVisible = {isVisible}>
                        {
                            options.map((opt) => (
                                <Option key = {opt.id} onClick = {() => {
                                        setOption(opt)
                                        setIsVisible(false)
                                    }} isVisible = {isVisible}>
                                    {opt.name}
                                </Option>
                            ))
                        }
                    </OptionsContainer>
                }
        </SelectContainer>
);


export default Options