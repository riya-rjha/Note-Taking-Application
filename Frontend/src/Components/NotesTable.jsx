import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const NotesTable = () => {
  return (
    <div>
      <table className='w-full border-separate border-spacing-4 p-4 mt-4'>
        <thead>
          <tr>
            <th className="border-purple-600 text-xl border-2 rounded-md p-2">S.No</th>
            <th className="border-purple-600 text-xl border-2 rounded-md p-2">Topic</th>
            <th className="border-purple-600 text-xl border-2 rounded-md p-2 max-md:hidden">Status</th>
            <th className="border-purple-600 text-xl border-2 rounded-md p-2 max-md:hidden">Date</th>
            <th className="border-purple-600 text-xl border-2 rounded-md p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center border-purple-600 border-2 rounded-md p-2 '>1</td>
            <td className='border-purple-600 border-2 rounded-md p-2'>ReactJS</td>
            <td className='max-md:hidden outline-none border-purple-600 border-2 rounded-md p-2'>Ongoing</td>
            <td className='max-md:hidden border-purple-600 border-2 rounded-md p-2'>13/02/2023</td>
            <td>
              <p className='border-purple-600 border-2 outline-none rounded-md p-2'>
                ReactJS simplifies UI development with reusable components, virtual DOM, and efficient state management in JavaScript. ReactJS is a declarative JavaScript library for building user interfaces. It allows developers to create reusable UI components that efficiently update and render as the underlying data changes. React's virtual DOM optimizes rendering performance, enabling the creation of interactive and dynamic web applications with a modular and scalable structure.
              </p>
            </td>
            <td className='flex items-center justify-around p-2'>
              <FaEdit className='cursor-pointer text-3xl ' />
              <MdDelete className='cursor-pointer text-3xl ' />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className='text-center border-purple-600 border-2 rounded-md p-2'>2</td>
            <td className=' border-purple-600 border-2 rounded-md p-2'>JavaScript</td>
            <td className='max-md:hidden outline-none border-purple-600 border-2 rounded-md p-2'>Ongoing</td>
            <td className='max-md:hidden border-purple-600 border-2 rounded-md p-2'>14/08/2023</td>
            <td>
              <p className='border-purple-600 border-2 outline-none rounded-md p-2'>
                JavaScript powers web interactivity, making pages dynamic with client-side scripting for enhanced user experiences. JavaScript is a versatile programming language widely used for web development. It enables dynamic, client-side interactions, allowing developers to create interactive and responsive user interfaces. With support for asynchronous operations and a vast ecosystem of libraries, JavaScript plays a crucial role in shaping the modern web landscape.</p></td>
            <td className='flex items-center justify-around text-center p-2'>
              <FaEdit className='cursor-pointer text-3xl ' />
              <MdDelete className='cursor-pointer text-3xl ' />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className='text-center border-purple-600 border-2 rounded-md p-2'>3</td>
            <td className=' border-purple-600 border-2 rounded-md p-2'>Postman API</td>
            <td className='max-md:hidden border-purple-600 border-2 rounded-md outline-none p-2'>Completed</td>
            <td className='max-md:hidden border-purple-600 border-2 rounded-md p-2'>21/01/2024</td>
            <td>
              <p className='border-purple-600 border-2 outline-none rounded-md p-2'>
                Postman simplifies API testing, automation, and collaboration with an intuitive interface and powerful features. Postman is a popular collaboration platform for API development, providing tools for designing, testing, and monitoring APIs. It simplifies the development process by allowing users to create and share API documentation, automate testing, and streamline collaboration among team members, ensuring efficient and error-free API workflows.
              </p>
            </td>
            <td className='flex items-center justify-around p-2 '>
              <FaEdit className='cursor-pointer text-3xl ' />
              <MdDelete className='cursor-pointer text-3xl ' />
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default NotesTable