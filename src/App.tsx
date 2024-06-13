
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/Home";
import Homepage from "./assets/components/Homepage";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Login from "./assets/components/LoginPage/Login";


function App(){
    return(
     <div id="app">
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/homepage" element={<Homepage/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
                </BrowserRouter>
            </div>
            </div>
    )
}
export default App;