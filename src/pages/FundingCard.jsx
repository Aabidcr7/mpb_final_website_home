import Button from "../components/ui/Button";
// import { ChevronRight } from "lucide-react";

/**
 * @param {{ title: string; description: string; iconSrc: string; onSelect: () => void; delay?: number }} props
 */
export const FundingCard = ({ 
  title, 
  description, 
  iconSrc,
  onSelect,
  delay = 0 
}) => {
  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-lg border border-border/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 max-w-sm animate-fade-in cursor-pointer group backdrop-blur-sm"
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      }}
      onClick={onSelect}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgb(124 58 237 / 0.25), 0 0 0 4px #ede9fe, 0 2px 4px -2px rgb(0 0 0 / 0.1)';
        e.currentTarget.style.borderColor = '#a78bfa'; // Tailwind violet-400
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
        e.currentTarget.style.borderColor = '';
      }}
      role="button"
      tabIndex={0}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <img 
            src={iconSrc} 
            alt={title}
            className="w-20 h-20 object-contain drop-shadow-sm"
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-poppins font-bold text-center text-[#111827] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base font-poppins font-normal text-center text-[#4b5563] leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-center w-full mt-2">
          <span className="font-semibold text-lg select-none">Select</span>
          <span className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300 select-none">→</span>
        </div>
      </div>
    </div>
  );
};

export default FundingCard;
