import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Index from "./components/Index";

function App() {
    return ( < Router >
        <
        div >
        <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "container" >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Index }
        /> < /
        Switch > <
        /div> < /
        div >

        <
        /div>  < /
        Router >

    );
}

export default App;