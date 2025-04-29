import React from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../Utilities/useLocalStorage";
import Swal from "sweetalert2";

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const { handleSubmit, register, reset } = useForm();

  // Function to handle adding new task
  const onSubmit = (data) => {
    const newTask = {
      taskText: data.taskText,
      completed: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setTasks([...tasks, newTask]);
    reset();

    // Notify the user that the task has been added
    Swal.fire({
      icon: "success",
      title: "Task Added",
      text: `You added: "${data.taskText}"`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Function to toggle task completion status
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);

    // Notify the user that the task was marked as completed
    Swal.fire({
      icon: "success",
      title: "Task Completed",
      text: `You completed: "${updatedTasks[index].taskText}"`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Function to delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Notify the user that the task was deleted
    Swal.fire({
      icon: "error",
      title: "Task Deleted",
      text: `You deleted: "${tasks[index].taskText}"`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Separate active and completed tasks
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="bg-base-300 p-8 rounded-2xl shadow-md mx-auto max-w-2xl">
      <h1 className="text-base-content text-2xl font-bold mb-6">Tasks</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between items-center gap-4 mb-6"
      >
        <input
          {...register("taskText", { required: true })}
          type="text"
          className="border rounded-2xl py-2 px-4 w-full text-base-content"
          placeholder="Add a new task"
        />
        <button className="btn btn-primary">Add</button>
      </form>

      {/* Active Tasks */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Active Tasks</h2>
        {activeTasks.length === 0 && <p className="text-sm">No active tasks</p>}
        {activeTasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-base-100 p-4 rounded-xl mb-3"
          >
            <div>
              <p className="font-medium">{task.taskText}</p>
              <p className="text-xs text-gray-500">
                {task.date} {task.time}
              </p>
            </div>
            <button
              className="btn btn-success btn-sm"
              onClick={() => toggleComplete(tasks.indexOf(task))}
            >
              ✔
            </button>
          </div>
        ))}
      </div>

      {/* Completed Tasks */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Completed Tasks</h2>
        {completedTasks.length === 0 && (
          <p className="text-sm">No completed tasks</p>
        )}
        {completedTasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-green-100 p-4 rounded-xl mb-3"
          >
            <div>
              <p className="line-through font-medium text-black">
                {task.taskText}
              </p>
              <p className="text-xs text-black">
                {task.date} {task.time}
              </p>
            </div>
            <button
              className="btn btn-error btn-sm"
              onClick={() => deleteTask(tasks.indexOf(task))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
