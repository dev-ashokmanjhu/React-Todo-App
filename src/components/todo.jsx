import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() && age.trim()) {
      setTodos((prev) => [...prev, { title: inputValue, age: age }]);
      setInputValue("");
      setAge("");
    }
  }

  function handleDelete(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div className="  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform -skew-y-2 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
            My Todo List
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Name"
              required
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="w-full rounded-l-lg border-2 border-purple-500 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-600"
            />

            <input
              type="number"
              placeholder="Age"
              value={age}
              required
              onChange={(event) => setAge(event.target.value)}
              className="w-full  border-2 border-purple-500 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-600"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none transition duration-300 ease-in-out"
            >
              Add
            </button>
          </form>
          <ul className="mt-8">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-300"
              >
                <span className="text-lg font-medium text-gray-800">
                  {todo.title}({todo.age}) Years Old
                </span>
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
