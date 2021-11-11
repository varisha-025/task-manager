import Navbar from "./components/Navbar";
// import Tasks from "./components/Tasks";
import TaskState from "./context/TaskState";
import About from "./components/About";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./components/Home.js";
import Alert from "./components/Alert";

function App() {
    return ( < >
        <TaskState>
        <Router>
        <Navbar / > 
        <Alert message = "this is alert" / > 
        <div className = "container" >
            <Switch >
            <Route exact path = "/" >
            <Home / >
            </Route> 
            <Route exact path = "/about" >
            <About / >
            </Route>  
            </Switch> 
        </div>
        </Router >
        </TaskState>
        </>

    );
}

export default App;