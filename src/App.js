import React, { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';

import "./App.css";

// Data Yang ditampilkan
// const Data = [
//   {
//     message: 'Cari Makan',
//     id: 1
//   },
//   {
//     message: 'Belajar React',
//     id: 2
//   },
//   {
//     message: 'Belajar Lainnya',
//     id: 3
//   },
// ]

// Header
const Header = () => {
  return <>
    <h1> <span role="img" aria-label="note">Aplikasi Taskku📝</span></h1>
  </>
}


// Info Bar
const InfoBar = ({ taskNumber }) => {
  return <div>Ada {taskNumber} yang perlu dikerjakan</div>
}

// Menambahkan Task
const TaskAdder = ({ setTasks, tasks }) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      message: currentValue,
    }
    setTasks([...tasks, newTask])
    setCurrentValue('');
  }


  return <div className="task-adder">
    <TextField
      value={currentValue}
      onChange={event => setCurrentValue(event.target.value)}
      label="Tambah Task"
      variant="outlined"
    />

    <Button
      variant="cointained"
      color="primary"
      disabled={currentValue === ''}
      onClick={() => handleAddTask()}>
      Tambah
    </Button>

  </div>
}


// Memunculkan Task apa saja
const Task = ({ message, id, setTasks, tasks }) => {

  const handleDelete = () => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return <div className="container-task">
    <div className="task">
      <div style={{ display: "inline-block" }}>
        {message}
      </div>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon></DeleteIcon>}
        onClick={() => handleDelete()}
      >
        Delete
      </Button>
    </div>
  </div>
}



// Melakukan perulangan dari total Task pada array Data
const TaskList = ({ tasks, setTasks }) => {
  return tasks.map((task, index) => {
    return <Task message={task.message} id={task.id} setTasks={setTasks} tasks={tasks} key={index} />
  })
}

// MAIN
const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  return <div className="container">
    <div id="child">
      <Header />
      <InfoBar taskNumber={tasks.length} />
      <TaskAdder setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  </div>
}




const App = () => {
  return <>
    <TaskApp></TaskApp>
  </>
}

export default App;