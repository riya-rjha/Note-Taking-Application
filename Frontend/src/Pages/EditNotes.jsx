import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'; 
import axios from 'axios'

const EditNotes = () => {

  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate('');
  const {id} = useParams();
  const API_URl = `http://localhost:5555/notes/${id}`;
  //Get book of specific Id

  //Handle Edit button after getting book of particular ID


  const handleEdit = async() => {
    const data = {topic, status, notes};
    await axios.put(API_URl, data);
  }
  return (
    <div>
      
    </div>
  )
}

export default EditNotes