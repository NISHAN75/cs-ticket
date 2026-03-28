import { Suspense, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import StatCards from './components/StatCards/StatCards';
import TaskSidebar from './components/TaskSidebar/TaskSidebar';
import TicketCards from './components/TicketCards/TicketCards';

const fetchTickets = async () => {
  const res = await fetch("../public/ticket.json");
  return res.json();
};

const ticketsPromise = fetchTickets();

export default function App() {
  const [isProgress, setProgress] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);


  return (
    <>
      <Navbar />
      <StatCards isProgress={isProgress} resolvedTasks={resolvedTasks} />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-6 py-[80px]">
        <Suspense fallback={<span>Loading...</span>}>
          <TicketCards
            ticketsPromise={ticketsPromise}
            isProgress={isProgress}
            setProgress={setProgress}
            resolvedTasks={resolvedTasks} 
          />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <TaskSidebar
            isProgress={isProgress}
            setProgress={setProgress}
            resolvedTasks={resolvedTasks}
            setResolvedTasks={setResolvedTasks}
          />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}