import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaNoteSticky } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Spinner from "./Spinner.jsx";
import DatesModal from "../Modals/DatesModal.jsx";
import Searchbar from "./Searchbar.jsx";
import NotesModal from "../Modals/NotesModal";

const NotesCard = () => {
  const [Notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [NotesModal, setNotesModal] = useState(false);
  const [datesModal, setDatesModal] = useState(false);

  const API_URL = "https://notes-tracker.onrender.com/notes";

  const getNotes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data.data);
      setFilteredNotes(response.data.data); // Initialize with all Notes
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleSearch = (keywords) => {
    const keywordArray = keywords
      .split(" ")
      .map((kw) => kw.trim().toLowerCase());
    const filtered = Notes.filter((Note) =>
      keywordArray.some(
        (keyword) =>
          Note.topic.toLowerCase().includes(keyword) ||
          Note.notes.toLowerCase().includes(keyword)
      )
    );
    setFilteredNotes(filtered);
  };

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
    <div className="relative min-h-screen bg-gray-100 p-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Searchbar onSearch={handleSearch} />
          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredNotes.map((Note, index) => (
              <div
                key={Note.id}
                className="bg-gradient-to-r from-purple-200 to-purple-300 text-gray-800 border border-purple-300 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              >
                <div className="text-lg font-semibold">
                  <span className="font-bold text-xl">S.No:</span> {index + 1}
                </div>
                <div className="mt-4">
                  <span className="font-bold text-lg">Topic:</span> {Note.topic}
                </div>
                <div className="mt-2">
                  <span className="font-bold text-lg">Status:</span> {Note.status}
                </div>
                <div className="mt-2">
                  <span className="font-bold text-lg">Date:</span> {new Date(Note.createdAt).toDateString()}
                </div>
                <div className="flex items-start justify-start mt-4 text-2xl">
                  <FaNoteSticky
                    className="cursor-pointer text-4xl text-yellow-500 transition-colors"
                    onClick={() => openNotesModal(index)}
                  />
                  <Link to={`/Notes/edit/${Note._id}`}>
                    <MdEdit className="cursor-pointer text-4xl text-green-500 transition-colors mx-2" />
                  </Link>
                  <Link to={`/Notes/delete/${Note._id}`}>
                    <MdDelete className="cursor-pointer text-4xl text-red-500 transition-colors mx-2" />
                  </Link>
                  <CiCalendarDate
                    className="cursor-pointer text-yellow-500 text-4xl mx-2"
                    onClick={() => openDatesModal(index)}
                  />
                </div>
              </div>
            ))}
          </div>

          {NotesModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                  onClick={closeNotesModal}
                >
                  &times;
                </button>
                <NotesModal onClose={closeNotesModal} Note={filteredNotes[selectedIndex]} />
              </div>
            </div>
          )}

          {datesModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                  onClick={closeDatesModal}
                >
                  &times;
                </button>
                <DatesModal onClose={closeDatesModal} Note={filteredNotes[selectedIndex]} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NotesCard;
