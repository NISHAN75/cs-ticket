import cardImg1 from '../../assets/frame-01.png';
import cardImg2 from '../../assets/frame-02.png';
import StatCard from "../StatCard/StatCard";
const StatCards = () => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 pt-[80px]">
            {/* In-Progress Card */}
            <StatCard
            title="In-Progress" 
            count={0} 
            cardImage={cardImg1}
            />
            {/* Resolved Card */}
            <StatCard 
            title="Resolved" 
            count={0} 
            cardImage={cardImg2}
            />
        </div>
    );
};

export default StatCards;