import React from 'react';

const Task = (props) => {

    return (
<<<<<<< HEAD
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <button onClick={props.markDone} className="doneButton">Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
=======
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
>>>>>>> 44ec9126ab9aaabba3cf97c53743ed9117605e61
        </div>
    )
}

export default Task;
