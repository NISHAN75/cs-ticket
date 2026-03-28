import cardImg1 from '../../assets/frame-01.png';
import cardImg2 from '../../assets/frame-02.png';
import StatCard from "../StatCard/StatCard";
const StatCards = ({isProgress , resolvedTasks}) => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 pt-[80px]">
            {/* In-Progress Card */}
            <StatCard
            title="In-Progress" 
            count={isProgress.length} 
            cardImage={cardImg1}
            />
            {/* Resolved Card */}
            <StatCard 
            title="Resolved" 
            count={resolvedTasks.length} 
            cardImage={cardImg2}
            />
        </div>
    );
};

export default StatCards;