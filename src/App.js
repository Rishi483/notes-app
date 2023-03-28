import {React, useEffect } from 'react'
import {nanoid} from 'nanoid'
import { useState } from 'react';
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [Notes,setNotes]=useState([
    {
    id:nanoid(),
    text:"This is my first Note",
    date:"15-04-2023"
   },
   {
    id:nanoid(),
    text:"This is my second Note",
    date:"16-04-2023"
   },
   {
    id:nanoid(),
    text:"This is my third Note",
    date:"17-04-2023"
   },
   {
    id:nanoid(),
    text:"This is my fourth Note",
    date:"17-04-2023"
   }
]);

const [SearchText,setSearchText]=useState('');
const [darkMode,setdarkMode]=useState(false);

useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNotes){
    setNotes(savedNotes);
  }
  const savedDarkMode=JSON.parse(localStorage.getItem('react-notes-app-dark-mode'));
  if(savedDarkMode){
    setdarkMode(savedDarkMode);
  }
},[])

useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(Notes))
},[Notes])

useEffect(()=>{
  localStorage.setItem('react-notes-app-dark-mode',JSON.stringify(darkMode));
},[darkMode])
  
  const addNote=(newText)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:newText,
      date:date.toLocaleDateString()
    }
    const newNotes=[...Notes,newNote];
    setNotes(newNotes);
  }
  const deleteNote=(id)=>{
    const newNotes=Notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  }

  
  
  
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setdarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={Notes.filter((note)=>note.text.toLowerCase().includes(SearchText))} HandleAddNote={addNote} HandleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App
