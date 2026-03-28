import { use } from 'react';
import TicketCard from "../TicketCard/TicketCard";

const TicketCards = ({ ticketsPromise, isProgress, setProgress, resolvedTasks }) => {
    const tickets = use(ticketsPromise);
    return (
        <div className="lg:col-span-9">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tickets.map(ticket => (
                    <TicketCard
                        key={ticket.id}
                        ticket={ticket}
                        isProgress={isProgress}
                        setProgress={setProgress}
                        resolvedTasks={resolvedTasks}
                    />
                ))}
            </div>
        </div>
    );
};

export default TicketCards;