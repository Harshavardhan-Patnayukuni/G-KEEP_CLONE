import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote]= useState({
    title:"",
    content:""
  });
function Handlechange(event){
const{name , value}=event.target;

setNote(prevNote => {
return{
  ...prevNote,
  [name]:value
};
});
}

function SubmitNote(event){
  event.preventDefault();
  props.onAdd(note);
}
  return (
    <div>
      <form>
        <textarea name="title" onChange={Handlechange}  value={note.title} placeholder="Title" />
        <textarea name="content" 
        value={note.content} 
        onChange={Handlechange}
        placeholder="Take a note..." rows="3" />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
