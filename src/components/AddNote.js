import {React,useState} from 'react'

function AddNote({HandleAddNote}) {
    const [notesText,setNotesText]=useState('');
    const charLimit=200;

    const handleChange=(event)=>{
        if(charLimit-event.target.value.length>=0){
            setNotesText(event.target.value)
        }
    }
    const handleSaveClick=()=>{
        if(notesText.trim().length>0){
            HandleAddNote(notesText);
            setNotesText('');
        }
        else
          alert("Note Cannot be empty!!");
    }
  return (
    <div className='note new'>
      <textarea cols="10" rows="8" placeholder='Type to add a note..' onChange={handleChange} value={notesText}></textarea>
      <div className="note-footer">
        <small>{charLimit-notesText.length} Remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote

