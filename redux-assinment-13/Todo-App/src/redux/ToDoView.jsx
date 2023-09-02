import React from "react";
// import styles from "./ToDoView.module.css";
import AddTask from "../components/AddTask";
import ToDoItem from "../components/ToDoItem";
import Task from "../components/Task";

const ToDoView = () => {
	return (
		<div className="container my-5">
			<div className={`card shadow  ${styles.cardClass}`}>
				<h1 className="card-title mt-4 text-center">To-Do</h1>
				<div className="card-body">
					<AddTask />
					<ToDoItem />
				</div>
				<Task />
			</div>
		</div>
	);
};

export default ToDoView;