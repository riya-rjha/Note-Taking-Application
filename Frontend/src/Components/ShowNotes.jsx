import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const ShowNotes = () => {

  const [notes, setNotes] = useState([]);
  const [popUpNotes, setPopUpNotes] = useState(false);

  const URL = 'http://localhost:5555/notes';

  const fetchNotes = async () => {
    const notesData = await axios.get(URL);
    console.log(notesData);
  }

  fetchNotes();

  return (
    <div>
      ShowNotes
    </div>
  )
}

export default ShowNotes