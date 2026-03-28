import { CalendarDays, User } from 'lucide-react';
import { toast } from 'react-toastify';


const TicketCard = ({ ticket, isProgress, setProgress, resolvedTasks }) => {
  const isInProgress = isProgress.some(t => t.id === ticket.id);
  const isResolved = resolvedTasks.some(t => t.id === ticket.id);

  const statusLabel = isResolved ? "Closed" : isInProgress ? "In-Progress" : "Open";

  const handleProgress = () => {
    if (isInProgress || isResolved){
      toast("this is alreay Exit");
      return
    };
    const updatedTicket = { ...ticket, status: "In-Progress" };
    setProgress([...isProgress, updatedTicket]);
    toast("this is alreay In-Progress");
  };

  const statusStyles = {
    Open: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
    'In-Progress': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
    Closed: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
  };

  const priorityColors = {
    High: 'text-red-600',
    Medium: 'text-yellow-600',
    Low: 'text-green-600',
  };

  const statusStyle = statusStyles[statusLabel] || statusStyles['Open']; 
  const priorityColor = priorityColors[ticket.priority] || 'text-gray-600';

  return (
    <div
      onClick={handleProgress}
      className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4 border border-gray-100/50 ${isResolved ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <div className="flex justify-between items-start gap-3">
        <h2 className="text-xl font-semibold text-slate-800 leading-tight">
          {ticket.title}
        </h2>
        <span className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg} ${statusStyle.text}`}>
          <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
          {statusLabel}
        </span>
      </div>

      <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm pt-3 mt-auto border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 font-mono text-xs">#{ticket.id}</span>
          <span className={`font-bold tracking-tight uppercase text-xs ${priorityColor}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>
        <div className="flex items-center gap-6 text-gray-500">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-gray-400" />
            <span>{ticket.user}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-gray-400" />
            <span>{ticket.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;