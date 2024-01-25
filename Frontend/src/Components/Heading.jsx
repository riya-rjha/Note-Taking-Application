import React, { useState } from 'react'
import NotesCard from '../Components/NotesCard'
import NotesTable from '../Components/NotesTable'

const Heading = () => {
  const [notes, setNotes] = useState([]);
  const [tableNotes, setTableNotes] = useState(true);
  const [cardNotes, setCardNotes] = useState(false);
  return (
    <div >
      <h2 className='font-bold text-2xl text-center pt-4'>
        Note Making Application
      </h2>
      <div className="flex items-center justify-center pt-8 gap-4">
        <button className='shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75' onClick={() => { setTableNotes(true); setCardNotes(false) }}>Table</button>
        <button className='shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75' onClick={() => { setCardNotes(true); setTableNotes(false) }}>Card</button>
      </div>
      {tableNotes ?
        <NotesTable notes={notes}/>
        :
        <NotesCard />
      }

    </div>
  )
}

export default Heading