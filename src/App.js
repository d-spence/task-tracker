import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

function App() {
  const [tasks, setTasks] = useState(tasksList);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
