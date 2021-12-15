import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";

const App = () => (
    <Router>
        <GlobalStyles />
        <Routes>
            <Route path = '/' element = {<Home />}/>
        </Routes>
    </Router>
);

export default App