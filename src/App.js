import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// temp tasks list
const tasksList = [
  {
    id: 1,
    text: 'Doctors Appointment',
    date: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    date: 'Feb 6th at 1:00pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Grocery Shopping',
    date: 'Feb 6th at 3:30pm',
    reminder: false,
  },
];

// App Component ===============================================================
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(tasksList);
  const [idCounter, setIdCounter] = useState(
    // Set idCounter to the largest id value from tasks array plus 1
    Math.max(...tasks.map(task => task.id)) + 1
  );

  // Add Task
  const addTask = (task) => {
    const id = idCounter;
    setIdCounter(idCounter + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id; // return false if id matches
    }));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      // Toggle the reminder bool value of the task with matching id
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    }));
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 // If no tasks, display a message instead of Tasks component
        ? <Tasks 
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        : <h3 style={{ textAlign: 'center' }}>No Tasks. Take a breath.</h3>
      }
    </div>
  );
}

export default App;
