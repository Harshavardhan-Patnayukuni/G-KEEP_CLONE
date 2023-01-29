import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header}  from "./Header";
import { Note } from "./note";


function App(){
    return (
        <div>
        <Header/>
        <Note/>
        <Footer/>

        </div>
        
        );
}

export {App}