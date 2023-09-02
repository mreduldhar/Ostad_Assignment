import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../redux/ToDoSlice";

const store = configureStore({
	reducer: {
		toDo: toDoReducer,
	},
});
export default Store;