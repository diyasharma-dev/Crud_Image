import React,{Component} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.css";
import {Routes,Route} from "react-router-dom";
import Edit from "./components/Update";

export default class App extends Component{
    render =() =>{
        return(
            <React.Fragment>
                <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Contact/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                </Routes>
                </React.Fragment>
        )
    }
}