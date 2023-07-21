import React, { useState } from 'react';

const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    const AddToTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === '') return ;
        tasks.push(newTask);
        setTasks([...tasks]);
        setNewtask("");


    }

    const CompleteTask = (index) => {
        const task = tasks[index];
        setCompletedTasks([...completedTasks, task]);
        RemoveTask(index);
      };


    const RemoveTask = (index) => {
        tasks.splice(index, 1)
        setTasks([...tasks]);
    }
    return (
        <div className='container-fluid my-4'>
           <div className="row justify-content-center">
                <div className="col-8 text-center m-5 ">
                    <h1>Todo App</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            onChange={(e)=>{setNewtask(e.target.value)}}
                            type="text"
                            className="form-control"
                            placeholder="Write a Task"
                            value={newTask}
                        />
                        <button onClick={AddToTask} className="btn btn-primary" >
                            Add
                        </button>
                    </div>
                </div>
            </div>

    

            {/* Show Todo List */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group">
                            <table className='table table-bordered'>
                                <tbody>
                                    {
                                        tasks.length !== 0 ? (
                                            tasks.map((element, index)=>{
                                                return(
                                                    <tr key={index.toString()}>
                                                        <td>{element}</td>
                                                        <td><button className='btn btn-success' onClick={() =>CompleteTask(index)}>Complete</button></td>
                                                        <td><button className='btn btn-danger'  onClick={()=>{RemoveTask(index)}}>Remove</button></td>
                                                    </tr>
                                                )
                                            })
                                        ) : (<tr></tr>)
    
                                    }
                                </tbody>
                            </table>

                            <table className='table table-bordered table-primary'>
                                <tbody>
                                    {
                                        completedTasks.map((task, index)=>(
                                            <tr key={index}>
                                                <th>Completed Task</th>
                                                <td className="text-decoration-line-through">{task}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Todo;


