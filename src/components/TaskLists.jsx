import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTodos } from "../features/taskSlice";
import EditTasks from "./EditTasks";

const TaskLists = () => {
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <p>tasks is loading.....</p>;
  }
  if (error) {
    return <p>there is and error {error}</p>;
  }

const handleDelete =(id)=>{
  dispatch(deleteTask(id))
}
  return (
    <div >
      <div>
       
        <h1 className="taxt-sm font-semibold">Tasks:</h1>
        
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center"
            >
              <div className="">
                <h3 className="text-lg font-medium text-gray-800">
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-gray-600">{task.description}</p>
                )}
                <p className="mt-1 text-sm font-semibold ">
                  Status:{" "}
                  <span className="italic underline">{task.status}</span>
                </p>
              </div>
              <div className="flex space-x-5">
               <EditTasks task={task}/>
                <button onClick={()=>handleDelete(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 active:bg-red-800">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskLists;
