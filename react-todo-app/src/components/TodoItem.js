const TodoItem = ({todo, onToggle, onDelete}) => {
    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span>{todo.text}</span>
            <div className="buttons">
                <button className="check" onClick={onToggle}>✔️</button>
                <button className="delete" onClick={onDelete}>🗑️</button>
            </div>
        </div>
    );
}

export default TodoItem;