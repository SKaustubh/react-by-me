import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
    return (
        <div className="container-items">
            {todoItems.map((item, index) => (
                <TodoItem key={index} TodoDate={item.dueDate} todoName={item.name} />
            ))}
        </div>
    );
};

TodoItems.propTypes = {
    todoItems: PropTypes.array.isRequired,
};

export default TodoItems;
