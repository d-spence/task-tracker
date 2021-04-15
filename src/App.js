import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// temp tasks list
const tasksList = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:00pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Grocery Shopping',
    day: 'Feb 6th at 3:30pm',
    reminder: false,
  },
]

// App Component ===============================================================
const App = () => {
  const [tasks, setTasks] = useState(tasksList);

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
      <Header />
      <AddTask />
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
