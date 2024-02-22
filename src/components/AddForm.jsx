import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";

const AddForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
  };


  return (
    <div className="flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          onChange={(e) => setTask(e.target.value)}
          className="w-full py-2 px-4 text-black mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-xs"
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
