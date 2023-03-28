import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note({text,date,id,HandleDeleteNote}) {
  return (
    <div className="note">
    <span className='note-text'>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className="delete-icon" size="1.3rem" onClick={()=>HandleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note
