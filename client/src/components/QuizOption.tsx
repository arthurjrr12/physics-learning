import { cn } from "@/lib/utils";

type QuizOptionProps = {
  option: {
    id: string;
    text: string;
  };
  selectedOption: string | null;
  correctOption: string;
  isAnswerChecked: boolean;
  onSelect: () => void;
};

const QuizOption = ({
  option,
  selectedOption,
  correctOption,
  isAnswerChecked,
  onSelect,
}: QuizOptionProps) => {
  const isSelected = selectedOption === option.id;
  const isCorrect = option.id === correctOption;
  
  let optionClasses = "quiz-option rounded-lg border border-neutral-300 p-4 cursor-pointer hover:bg-neutral-50";
  let indicatorClasses = "h-6 w-6 rounded-full border-2 border-neutral-300 flex-shrink-0 mr-3";
  
  if (isAnswerChecked) {
    if (isSelected) {
      if (isCorrect) {
        optionClasses = cn(optionClasses, "correct border-[#28C76F] bg-[rgba(40,199,111,0.1)]");
        indicatorClasses = cn(indicatorClasses, "bg-[#28C76F] border-[#28C76F]");
      } else {
        optionClasses = cn(optionClasses, "incorrect border-[#FC5185] bg-[rgba(252,81,133,0.1)]");
        indicatorClasses = cn(indicatorClasses, "bg-[#FC5185] border-[#FC5185]");
      }
    } else if (isCorrect) {
      optionClasses = cn(optionClasses, "correct border-[#28C76F] bg-[rgba(40,199,111,0.1)]");
    }
  } else if (isSelected) {
    optionClasses = cn(optionClasses, "selected border-primary");
    indicatorClasses = cn(indicatorClasses, "bg-primary border-primary");
  }

  return (
    <div 
      className={optionClasses}
      onClick={onSelect}
      style={{ pointerEvents: isAnswerChecked ? "none" : "auto" }}
    >
      <div className="flex items-center">
        <div className={indicatorClasses}></div>
        <span>{option.text}</span>
      </div>
    </div>
  );
};

export default QuizOption;
