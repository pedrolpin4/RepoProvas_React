import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import SendExam from "./pages/SendExam";
import ViewChoices from "./pages/ViewChoices";
import ProfesorsPage from "./pages/ProfesorsPage";
import SubjectsPage from "./pages/SubjectsPage";

const App = () => (
    <Router>
        <GlobalStyles />
        <Routes>
            <Route path = '/' exact element = {<Home />}/>
            <Route path = '/send-exam' exact element = {<SendExam />} />
            <Route path = '/view-choices' exact element = {<ViewChoices />} />
            <Route path = '/profesors' exact element = {<ProfesorsPage />} />
            <Route path = '/subjects' exact element = {<SubjectsPage />} />
        </Routes>
    </Router>
);

export default App