

const StatCard = ({ title,count,cardImage }) => {


  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg flex items-center justify-center h-64 w-full`}>
        <img 
        src={cardImage} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        alt="pattern" 
      />
      <div className="relative z-10 text-center text-white">
        <h3 className="text-xl font-medium tracking-tight mb-2 opacity-90">
          {title}
        </h3>
        <p className="text-7xl font-light tracking-tight">
          {count}
        </p>
      </div>
    </div>
  );
};

export default StatCard;