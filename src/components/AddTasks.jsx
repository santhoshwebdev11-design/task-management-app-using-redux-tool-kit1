import {  useState } from "react";
import { useDispatch } from "react-redux";
import  {v4 as uuid4} from "uuid"
import { addTasks } from "../features/taskSlice";

const AddTasks = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("to-do")
  const dispatch = useDispatch()
  console.log(status);

  const handleSumbit = (e)=>{
    e.preventDefault();
    const newTasks={
      id:uuid4(),
      title,
      description,
      status
    }
    dispatch(addTasks(newTasks))
    setDescription('')
    setTitle('')
    setStatus('')

  }
  
  return (
    <div>
      <form className="mb-6" onSubmit={handleSumbit}>
        <h2 className="text-xl font-bold mb-3 text-indigo-500">
          Add New Task
        </h2>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
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
             onChange={(e)=>setDescription(e.target.value)}
            placeholder="Task Description"
            className="w-full px-3 py-2 rounded-md border focus:outline-none 
         focus:ring-2 focus:ring-blue-200 "
            rows={3}
          ></textarea>
        </div>
        <div>
          <select 
           value={status}
            onChange={(e)=>setStatus(e.target.value)}
           className="w-full px-3 py-2 rounded-md border focus:outline-none 
         focus:ring-2 focus:ring-blue-200 ">
            <option value="To-Do">To-Do</option>
            <option value="In-Progres">In-Progres</option>
            <option value="Completed">Completed</option>
            all
          </select>
        </div>
        <button
          type="sumbit"
          className="w-full px-3 py-2 rounded-md bg-indigo-400 mt-1
        hover:bg-indigo-500 active:bg-indigo-800"
        >
          Add Tasks
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
