// App.jsx
import React from 'react';
import Heading from './Components/Heading';
import AddBlogs from './Pages/AddBlogs.jsx';
import DeleteBlogs from './Pages/DeleteBlogs.jsx';
import EditBlogs from './Pages/EditBlogs.jsx';
import Register from './Pages/Register.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Heading />} />
      <Route path='/Blogs/create' element={<AddBlogs />} />
      <Route path='/Blogs/delete/:id' element={<DeleteBlogs />} />
      <Route path='/Blogs/edit/:id' element={<EditBlogs />} />
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App