import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NotesList({notes,HandleAddNote,HandleDeleteNote}) {
  return (
      <div className="notes-list">
            {notes.map(
                (note)=> (<Note id={note.id} text={note.text} date={note.date} HandleDeleteNote={HandleDeleteNote}/>)
            )}
            <AddNote HandleAddNote={HandleAddNote}/>
      </div>
  )
}

export default NotesList
