import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaNoteSticky } from 'react-icons/fa6';
import { MdEdit, MdDelete } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import Spinner from './Spinner';
import NotesModal from '../Modals/NotesModal';
import DatesModal from '../Modals/DatesModal';

const NotesCard = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [notesModal, setNotesModal] = useState(false);
  const [datesModal, setDatesModal] = useState(false);

  const API_URL = 'https://notes-tracker.onrender.com/notes';

  const getNotes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const openNotesModal = (index) => {
    setSelectedIndex(index);
    setNotesModal(true);
  };

  const closeNotesModal = () => {
    setSelectedIndex(null);
    setNotesModal(false);
  };

  const openDatesModal = (index) => {
    setSelectedIndex(index);
    setDatesModal(true);
  };

  const closeDatesModal = () => {
    setSelectedIndex(null);
    setDatesModal(false);
  };

  return (
    <div className="relative">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-center mt-[100px] mb-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {notes.map((note, index) => (
              <div key={note.id} className="relative bg-gradient-to-r from-purple-100 via-purple-200 to-purple-50 border-2 border-purple-500 rounded-lg p-6 transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                <div className="text-xl font-semibold text-purple-900">
                  <span className="font-bold">S.No :</span> {index + 1}
                </div>
                <div className="mt-4 text-lg">
                  <span className="font-bold">Topic :</span> {note.topic}
                </div>
                <div className="mt-4 text-lg">
                  <span className="font-bold">Status :</span> {note.status}
                </div>
                <div className="mt-4 text-lg">
                  <span className="font-bold">Date :</span> {new Date(note.createdAt).toDateString()}
                </div>
                <div className="flex items-center justify-between mt-6 text-2xl">
                  <FaNoteSticky className="text-purple-900 cursor-pointer text-4xl hover:text-purple-700" onClick={() => openNotesModal(index)} />
                  <Link to={`/notes/edit/${note._id}`}>
                    <MdEdit className="text-green-700 cursor-pointer text-4xl hover:text-green-500" />
                  </Link>
                  <Link to={`/notes/delete/${note._id}`}>
                    <MdDelete className="text-red-700 cursor-pointer text-4xl hover:text-red-500" />
                  </Link>
                  <CiCalendarDate className="text-yellow-600 cursor-pointer text-4xl hover:text-yellow-400" onClick={() => openDatesModal(index)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {notesModal && selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <NotesModal onClose={closeNotesModal} note={notes[selectedIndex]} />
        </div>
      )}
      {datesModal && selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <DatesModal onClose={closeDatesModal} note={notes[selectedIndex]} />
        </div>
      )}
    </div>
  );
};

export default NotesCard;
