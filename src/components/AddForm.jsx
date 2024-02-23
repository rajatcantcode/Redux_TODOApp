import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";

const AddForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-xs text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          type="text"
          placeholder="Write Tasks :)"
        />
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddForm;
