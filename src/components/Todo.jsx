import React from "react";
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/Todo/TodoSlice";
import { toggleTodo } from "../features/Todo/TodoSlice";
import { useDispatch } from "react-redux";

const todo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="w-fit h-fit  p-5 bg-zinc-600 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-white rouned-lg font-mono flex flex-col items-center justify-center">
      TASKS
      <ul className="mb-[50px]">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="flex items-center justify-between gap-2">
              {/* TOGGLE BUTTON */}
              <button
                onClick={() => toggleHandler(todo.id)}
                className={`p-2 ${
                  todo.isCompleted ? "bg-green-600" : "bg-black"
                } border-2 ${
                  todo.isCompleted ? "border-green-600" : "border-white"
                } rounded-full focus:outline-none`}
              ></button>

              {/* TASK NAME */}
              {todo.task}

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteHandler(todo.id)}
                className="bg-red-700 rounded-md p-[0.5px] px-1 text-xs"
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
      <AddForm />
    </div>
  );
};

export default todo;
