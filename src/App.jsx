import React from "react";
import { Footer } from "./Footer";
import { Header}  from "./Header";
import { Note } from "./note";
import { notes } from "./notes";


function Createcard(Thing){
    return (
    <Note
    key={Thing.key}
    title={Thing.title}
    content={Thing.content}
    />
    );
}
function App(){
    return (
        <div>
        <Header/>
        {notes.map(Createcard)}
        <Footer/>

        </div>
        
        );
}

export {App};