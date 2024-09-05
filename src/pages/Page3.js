import React, { useState } from 'react';
import './Page3.css';

const Page3 = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue("");
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="page3-container">
            <h1 className="page3-title">To-Do Listesi</h1>
            
            <input
                className="page3-todo-input"
                type="text"
                placeholder="Yeni görev ekleyin..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <button className="page3-todo-button" onClick={addTodo}>Ekle</button>
            
            <ul className="page3-todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className={`page3-todo-item ${todo.completed ? 'page3-todo-complete' : ''}`}>
                        <span>{index + 1}. {todo.text}</span> {/* Sıra numarasını ekliyoruz */}
                        <span className="page3-todo-remove" onClick={() => removeTodo(index)}>X</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page3;
