import AddTasks from "./components/AddTasks"
import TaskLists from "./components/TaskLists"


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-md p-6 border border-none shadow-blue-500">
        <h1 className="flex justify-center items-center text-4xl bg-linear-to-b from-blue-500 to-purple-800 bg-clip-text text-transparent
        font-bold m-5  overflow-hidden">Task Management App</h1>
        <AddTasks/>
      <TaskLists/>
      </div>
      
      </div>
  )
}

export default App