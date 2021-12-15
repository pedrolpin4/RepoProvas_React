import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import SendExam from "./pages/SendExam";

const App = () => (
    <Router>
        <GlobalStyles />
        <Routes>
            <Route path = '/' exact element = {<Home />}/>
            <Route path = '/send-exam' exact element = {<SendExam />} />
        </Routes>
    </Router>
);

export default App