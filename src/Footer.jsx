import React from "react";


function Footer(){
    var date=new Date();
    var name=date.getFullYear();

     return (<footer><h6 >copyright@{name}</h6></footer>)
}
export {Footer};