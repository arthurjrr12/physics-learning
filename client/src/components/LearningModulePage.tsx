import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/lib/userContext";
import { paths, modules, quizzes } from "@/lib/mockData";
import QuizOption from "./QuizOption";

const LearningModulePage = ({ pathId }: { pathId: string }) => {
  const { toast } = useToast();
  const { userProgress, updateProgress } = useUser();
  const [currentPath, setCurrentPath] = useState<any>(null);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [lives, setLives] = useState(3);
  const [xp, setXp] = useState(0);
  
  // Find the current path data
  useEffect(() => {
    const path = paths.find(p => p.id === pathId);
    if (path) {
      setCurrentPath(path);
      // Get the first quiz for this path
      const pathQuizzes = quizzes.filter(q => q.pathId === pathId);
      if (pathQuizzes.length > 0) {
        setCurrentQuiz(pathQuizzes[0]);
      }
    }
  }, [pathId]);

  const handleOptionSelect = (optionId: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(optionId);
  };

  const checkAnswer = () => {
    if (!selectedOption || isAnswerChecked) return;
    
    const isCorrect = selectedOption === currentQuiz.correctOption;
    
    if (isCorrect) {
      toast({
        title: "Correct!",
        description: "That's the right answer. Great job!",
        variant: "default",
      });
      setXp(prev => prev + 10);
      updateProgress(pathId, 10);
    } else {
      toast({
        title: "Incorrect",
        description: "That's not the right answer. Try again!",
        variant: "destructive",
      });
      setLives(prev => prev - 1);
    }
    
    setIsAnswerChecked(true);
  };

  const nextQuestion = () => {
    // In a real app, we would load the next question
    // For the prototype, we'll just reset the current question
    setSelectedOption(null);
    setIsAnswerChecked(false);
    
    // Simulate moving to next question
    toast({
      title: "Moving to next question",
      description: "Loading the next challenge...",
    });
    
    // For demo purposes, we'll just keep the same quiz
    // In a real app, we would fetch the next quiz
  };

  if (!currentPath || !currentQuiz) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading your learning module...</p>
        </div>
      </div>
    );
  }

  // Get current module information
  const currentModule = modules.find(m => m.pathId === pathId && m.order === 3);
  const totalModules = modules.filter(m => m.pathId === pathId).length;
  const completedModules = 2; // For demo purposes
  
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-primary to-[#1DAFB8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-white">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white bg-opacity-20">
                <i className={`${currentPath.iconClass} text-xl`}></i>
              </span>
              <h1 className="text-2xl font-bold">{currentPath.title}</h1>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col text-white">
                  <span className="text-xs opacity-75">Time remaining</span>
                  <span className="font-medium">15:00</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6731 2.99829 16.9501 2.99829C16.227 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2232 22.4519 8.50012C22.4519 7.77703 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012V4.61012Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white font-medium">{lives}</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-1.5 text-white font-medium">
                <span>{xp} XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Progress Tracker */}
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Module Progress</h3>
              <div className="space-y-6">
                {modules.filter(m => m.pathId === pathId).map((module) => {
                  const isCompleted = module.order <= completedModules;
                  const isCurrent = module.order === 3;
                  
                  return (
                    <div key={module.id} className="relative">
                      <div className="flex items-start">
                        <div className="flex flex-col items-center">
                          <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                            isCompleted ? 'bg-[#28C76F] text-white' : 
                            isCurrent ? 'bg-primary text-white font-medium' : 
                            'bg-neutral-300 text-neutral-700 font-medium'
                          }`}>
                            {isCompleted ? (
                              <i className="ri-check-line"></i>
                            ) : (
                              module.order
                            )}
                          </div>
                          {module.order < totalModules && (
                            <div className={`h-full w-0.5 ${isCompleted ? 'bg-[#28C76F]' : 'bg-neutral-300'}`}></div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h4 className={`text-base font-medium ${isCurrent ? 'text-primary' : 'text-neutral-900'}`}>{module.title}</h4>
                          <p className="text-sm text-neutral-600">
                            {module.description}
                          </p>
                          {isCompleted ? (
                            <span className="text-xs text-[#28C76F] font-medium">Completed</span>
                          ) : isCurrent ? (
                            <>
                              <div className="w-full bg-neutral-200 rounded-full h-2 mt-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: `${userProgress[pathId] || 0}%` }}></div>
                              </div>
                              <span className="text-xs text-neutral-600 font-medium">{userProgress[pathId] || 0}% complete</span>
                            </>
                          ) : (
                            <span className="text-xs text-neutral-500 font-medium">Locked</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Your Achievements</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <i className="ri-fire-line text-xl"></i>
                  </div>
                  <span className="text-xs text-neutral-600 mt-2">3-day streak</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i className="ri-question-answer-line text-xl"></i>
                  </div>
                  <span className="text-xs text-neutral-600 mt-2">25 quizzes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                    <i className="ri-award-line text-xl"></i>
                  </div>
                  <span className="text-xs text-neutral-400 mt-2">Perfect score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Quiz Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-neutral-900">{currentModule?.title} Quiz</h2>
                <p className="text-neutral-600 mt-2">{currentQuiz.description}</p>
              </div>

              <div className="max-w-2xl mx-auto">
                {/* Question Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-neutral-50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-neutral-600">Question {currentQuiz.order} of 5</span>
                    <div className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <i className="ri-heart-line mr-1"></i>
                      <span>{lives} lives left</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-neutral-900">{currentQuiz.question}</h3>
                  </div>

                  {/* Multiple Choice Options */}
                  <div className="space-y-3">
                    {currentQuiz.options.map((option: any) => (
                      <QuizOption 
                        key={option.id}
                        option={option}
                        selectedOption={selectedOption}
                        correctOption={currentQuiz.correctOption}
                        isAnswerChecked={isAnswerChecked}
                        onSelect={() => handleOptionSelect(option.id)}
                      />
                    ))}
                  </div>

                  {/* Check Answer Button */}
                  {selectedOption && !isAnswerChecked && (
                    <div className="mt-6">
                      <button 
                        className="w-full bg-primary text-white font-medium py-3 rounded-lg shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                        onClick={checkAnswer}
                      >
                        Check Answer
                      </button>
                    </div>
                  )}

                  {/* Explanation (Hidden initially) */}
                  {isAnswerChecked && (
                    <div className="mt-6 bg-neutral-100 rounded-lg p-4">
                      <h4 className="font-medium text-neutral-900">Explanation</h4>
                      <p className="text-neutral-700 mt-1">
                        {currentQuiz.explanation}
                      </p>
                      <div className="mt-4">
                        <button 
                          className="w-full bg-primary text-white font-medium py-3 rounded-lg shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                          onClick={nextQuestion}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Progress Bar */}
                <div className="mt-6 bg-white rounded-lg p-4">
                  <Progress value={60} className="w-full" />
                  <div className="flex justify-between mt-2 text-sm text-neutral-600">
                    <span>{currentQuiz.order}/5 questions</span>
                    <span>{5 - currentQuiz.order} remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModulePage;
