<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
=======
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
>>>>>>> 44ec9126ab9aaabba3cf97c53743ed9117605e61

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
<<<<<<< HEAD
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", done: false}
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({tasks});
  }

  console.log(formState);
=======
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Clean room", deadline: "Tomorrow" },
      { id: 5, title: "Mop Floor", deadline: "Tomorrow" }
    ]
  });

>>>>>>> 44ec9126ab9aaabba3cf97c53743ed9117605e61

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map(
<<<<<<< HEAD
        (task, index) => (              
=======
        (task) => (              
>>>>>>> 44ec9126ab9aaabba3cf97c53743ed9117605e61
          <Task 
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            key={task.id}
<<<<<<< HEAD
            done={task.done}
            markDone={() => doneHandler(index)}
            deleteTask = {() => deleteHandler(index)}
          />
        )
      )} 

      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
=======
          />
        )
      )} 
>>>>>>> 44ec9126ab9aaabba3cf97c53743ed9117605e61
    </div>
  );

}

export default App;
