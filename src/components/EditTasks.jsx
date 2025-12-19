import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTasks } from "../features/taskSlice";


const EditTasks = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
  dispatch(editTasks({ id: task.id, title, description, status }));
  setIsEdit(false);
};

  return (
    <>
      {isEdit ? (
        <div className="absolute bg-white p-4 rounded-md shadow-lg z-10 ">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            Edit Task
          </h2>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Name"
              className="w-full px-3 py-2 rounded-md border focus:outline-none 
         focus:ring-2 focus:ring-blue-200 focus:ring-offset-1"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task Description"
              className="w-full px-3 py-2 rounded-md border focus:outline-none 
         focus:ring-2 focus:ring-blue-200 "
              rows={3}
            ></textarea>
          </div>
          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-md border focus:outline-none 
         focus:ring-2 focus:ring-blue-200 "
            >
              <option value="To-Do">To-Do</option>
              <option value="In-Progres">In-Progres</option>
              <option value="Completed">Completed</option>
              
            </select>
          </div>

          <div className="flex justify-between">
            <button
            onClick={handleEdit}
              
              className=" px-3 py-2 rounded-md bg-indigo-400 mt-1
              hover:bg-indigo-500 active:bg-indigo-800"
            >
              save
            </button>
            <button
            onClick={() => setIsEdit(false)}
              className=" px-3 py-2 rounded-md bg-gray-400 mt-1
             hover:bg-gray-500 active:bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEdit(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-800"
        >
          Edit
        </button>
      )}
    </>
  );
};

export default EditTasks;
