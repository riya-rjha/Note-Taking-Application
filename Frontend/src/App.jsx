// App.jsx
import React from 'react';
import Heading from './Components/Heading';
import AddNotes from './Pages/AddNotes.jsx';
import DeleteNotes from './Pages/DeleteNotes.jsx';
import EditNotes from './Pages/EditNotes.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Heading />} />
      <Route path='/Notes/create' element={<AddNotes />} />
      <Route path='/Notes/delete/:id' element={<DeleteNotes />} />
      <Route path='/Notes/edit/:id' element={<EditNotes />} />
    </Routes>
  )
}

export default App