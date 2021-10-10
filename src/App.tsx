import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Policy from "./components/Policy";
import Responsive from "./components/Responsive";

const App = (): JSX.Element => {
    return (
        <Router>
            <Responsive>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/policy" component={Policy}></Route>
                </Switch>
            </Responsive>
        </Router>
    );
};

export default App;
