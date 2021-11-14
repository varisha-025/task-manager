import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
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
    const [alert, setAlert] = useState(null)
    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        });
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    return (<>
        <TaskState>
            <Router>
                <Navbar />
                <Alert alert={alert}/>
                <div className="container" >
                    <Switch >
                        <Route exact path="/" >
                            <Home showAlert={showAlert}/>
                        </Route>
                        <Route exact path="/about" >
                            <About />
                        </Route>
                        <Route exact path="/login" >
                            <Login showAlert={showAlert}/>
                        </Route>
                        <Route exact path="/signup" >
                            <Signup showAlert={showAlert}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TaskState>
    </>

    );
}

export default App;