import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const NotesTable = () => {
  return (
    <div>
      <table className='w-full border-separate border-spacing-6 p-4 mt-8'>
        <thead>
          <tr>
            <th className="border-purple-600 border-2 rounded-md p-2">S.No</th>
            <th className="border-purple-600 border-2 rounded-md p-2">Topic</th>
            <th className="border-purple-600 border-2 rounded-md p-2 max-md:hidden">Status</th>
            <th className="border-purple-600 border-2 rounded-md p-2">Date</th>
            <th className="border-purple-600 border-2 rounded-md p-2">Notes</th>
            <th className="border-purple-600 border-2 rounded-md p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>1</td>
            <td>ReactJS</td>
            <td className='max-md:hidden'>Ongoing</td>
            <td>13/02/2023</td>
            <td>ReactJS simplifies UI development with reusable components, virtual DOM, and efficient state management in JavaScript.</td>
            <td className='cursor-pointer'><FaEdit /></td>
            <td><MdDelete /></td>
            {/* font-size: 24px;
            margin-bottom: 26px;
            margin-left: 15px; */}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className='text-center'>2</td>
            <td>JavaScript</td>
            <td className='max-md:hidden'>Ongoing</td>
            <td>14/08/2023</td>
            <td>JavaScript powers web interactivity, making pages dynamic with client-side scripting for enhanced user experiences.</td>
            <td><FaEdit /></td>
            <td><MdDelete /></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className='text-center'>3</td>
            <td>Postman API</td>
            <td className='max-md:hidden'>Completed</td>
            <td>21/01/2024</td>
            <td>Postman simplifies API testing, automation, and collaboration with an intuitive interface and powerful features.</td>
            <td><FaEdit /></td>
            <td><MdDelete /></td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default NotesTable