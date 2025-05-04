import React, { useState, useEffect } from 'react';
import Header from '../components/header';



function Dashboard() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [filter, setFilter] = useState("all");

  const toggleComplete = (index) => {
    const newList = [...taskList];
    newList[index].completed = !newList[index].completed;
    setTaskList(newList);
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedTask(taskList[index].text);
  };

  const saveEditedTask = (index) => {
    const newList = [...taskList];
    newList[index].text = editedTask;
    setTaskList(newList);
    setEditingIndex(null);
    setEditedTask('');
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    console.log('Retrieved from localStorage:', savedTasks); // Debugging
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever taskList changes
  useEffect(() => {
    console.log('Saving to localStorage:', taskList); // Debugging
    localStorage.setItem('tasks', JSON.stringify(taskList));
    console.log(taskList);
  }, [taskList]);


  // Load tasks from localStorage when the component mounts


  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    const updatedTaskList = [...taskList, { text: task, completed: false }];
    console.log('Updated Task List:', updatedTaskList); // Debugging
    setTaskList(updatedTaskList);
    setTask('');
  };



  const unRemain = taskList.filter((task) => !task.completed).length;



  const FilterTask = taskList.filter(
    (task) => {
      if (filter === "completed") {
        return task.completed;
      }

      if (filter === "pending") {
        return !task.completed;
      }

      return taskList

    }
  )






  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex flex-col px-4 py-5 mx-4 bg-[#E3E8EC] border-2 rounded md:mx-20 md:px-10">
        <div className="w-full flex flex-row md:flex-row px-5 justify-between ">
          <div className="mb-4 md:mb-0">
            <h2 className="text-[#3e84f6] text-2xl font-semibold">Personal Task</h2>
            <h3>{`${unRemain} task${unRemain !== 1 ? 's' : ''} remaining`}</h3>

            <form onSubmit={addTask} className="mt-5 flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add task"
                className="p-2 border rounded flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </form>

           

          </div>
          <div className="mt-5">
              <label htmlFor="filter" className="mr-2 font-semibold">
                Filter:
              </label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
        </div>

        <div className="mt-4 space-y-3">
          {FilterTask.map((t, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-white rounded shadow"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(index)}
                />
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  <h2
                    className={`${t.completed ? 'line-through text-gray-400' : ''
                      }`}
                  >
                    {t.text}
                  </h2>
                )}
              </div>

              <div className="flex gap-2">
                {editingIndex === index ? (
                  <button
                    onClick={() => saveEditedTask(index)}
                    className="text-green-600 font-semibold"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(index)}
                    className="text-blue-600 font-semibold"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-600 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;