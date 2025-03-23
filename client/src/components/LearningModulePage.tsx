import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/lib/userContext";
import { paths, modules, quizzes } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import QuizOption from "./QuizOption";
import { 
  Search, 
  BookOpen, 
  Award, 
  Trophy, 
  Star, 
  BookmarkCheck, 
  CheckCircle2, 
  Zap, 
  Medal, 
  PartyPopper,
  AlertTriangle,
  BookX
} from "lucide-react";

const LearningModulePage = ({ pathId }: { pathId: string }) => {
  const { toast } = useToast();
  const { userProgress, updateProgress } = useUser();
  const [currentPath, setCurrentPath] = useState<any>(null);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [lives, setLives] = useState(3);
  const [xp, setXp] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [pathQuizzes, setPathQuizzes] = useState<any[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState([true, true, false, true, false, false]);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const [completionPassed, setCompletionPassed] = useState(false);
  
  // Find the current path data
  useEffect(() => {
    const path = paths.find(p => p.id === pathId);
    if (path) {
      setCurrentPath(path);
      // Get quizzes for this path
      const filteredQuizzes = quizzes.filter(q => q.pathId === pathId);
      setPathQuizzes(filteredQuizzes);
      if (filteredQuizzes.length > 0) {
        setCurrentQuiz(filteredQuizzes[0]);
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
      updateProgress(pathId, 5);
      
      // Unlock achievement if streak of correct answers (simulated)
      if (xp >= 20 && !unlockedAchievements[2]) {
        setUnlockedAchievements(prev => {
          const updated = [...prev];
          updated[2] = true;
          return updated;
        });
        
        toast({
          title: "Achievement Unlocked!",
          description: "Perfect Knowledge! You got 3 questions correct in a row.",
          variant: "default",
        });
      }
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
    setSelectedOption(null);
    setIsAnswerChecked(false);
    
    // Check if this was the last question in the module
    if (currentQuizIndex === pathQuizzes.length - 1) {
      // Calculate score based on remaining lives
      const moduleScore = Math.round((lives / 3) * 100);
      const passThreshold = 70;
      
      // Update achievements if module is completed
      if (!unlockedAchievements[3]) {
        setUnlockedAchievements(prev => {
          const updated = [...prev];
          updated[3] = true;
          return updated;
        });
      }
      
      // Determine if the user passed the module
      setCompletionPassed(moduleScore >= passThreshold);
      
      // Show completion dialog
      setShowCompletionDialog(true);
      
      // For demo purposes, we're cycling back to the first question
      setCurrentQuizIndex(0);
      setCurrentQuiz(pathQuizzes[0]);
      
      // Reset lives for the next attempt
      setLives(3);
    } else {
      // Move to the next question
      const nextIndex = currentQuizIndex + 1;
      setCurrentQuizIndex(nextIndex);
      setCurrentQuiz(pathQuizzes[nextIndex]);
      
      toast({
        title: "Moving to next question",
        description: "Loading the next challenge...",
      });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredModules = modules
    .filter(m => m.pathId === pathId)
    .filter(m => 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
  
  // Define achievements
  const achievements = [
    { 
      name: "3-Day Streak", 
      description: "Login for 3 consecutive days", 
      icon: <Zap className="h-5 w-5" />, 
      color: "amber" 
    },
    { 
      name: "Quiz Master", 
      description: "Complete 25 quiz questions", 
      icon: <BookOpen className="h-5 w-5" />, 
      color: "blue" 
    },
    { 
      name: "Perfect Knowledge", 
      description: "Get 3 questions correct in a row", 
      icon: <Star className="h-5 w-5" />, 
      color: "green" 
    },
    { 
      name: "Module Complete", 
      description: "Finish your first learning module", 
      icon: <CheckCircle2 className="h-5 w-5" />, 
      color: "purple" 
    },
    { 
      name: "Physics Champion", 
      description: "Reach 500 XP on the platform", 
      icon: <Trophy className="h-5 w-5" />, 
      color: "orange" 
    },
    { 
      name: "Early Adopter", 
      description: "Join the platform in the first month", 
      icon: <Award className="h-5 w-5" />, 
      color: "pink" 
    }
  ];
  
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
            {/* Search Module Area */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <Input 
                  type="search" 
                  placeholder="Search modules..." 
                  className="pl-10 focus:border-primary" 
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Module Progress</h3>
              <div className="space-y-6">
                {filteredModules.map((module) => {
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Your Achievements</h3>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-none">
                  {unlockedAchievements.filter(Boolean).length}/{achievements.length}
                </Badge>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg transition-all ${
                      unlockedAchievements[index] 
                        ? `bg-${achievement.color}-50 hover:bg-${achievement.color}-100` 
                        : 'bg-neutral-100 text-neutral-400'
                    }`}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      unlockedAchievements[index] 
                        ? `bg-${achievement.color}-100 text-${achievement.color}-600` 
                        : 'bg-neutral-200 text-neutral-400'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${unlockedAchievements[index] ? 'text-neutral-900' : 'text-neutral-400'}`}>
                        {achievement.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {achievement.description}
                      </p>
                    </div>
                    {unlockedAchievements[index] && (
                      <div className="ml-auto">
                        <BookmarkCheck className="h-5 w-5 text-green-500" />
                      </div>
                    )}
                  </div>
                ))}
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
                  key={currentQuiz.id}
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
                  <Progress value={(currentQuiz.order / 5) * 100} className="w-full" />
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

      {/* Module Completion Dialog */}
      <Dialog open={showCompletionDialog} onOpenChange={setShowCompletionDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              {completionPassed ? (
                <div className="flex items-center justify-center gap-2 text-[#28C76F]">
                  <PartyPopper className="h-6 w-6" />
                  <span>Congratulations!</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-amber-500">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Module Review Required</span>
                </div>
              )}
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              {completionPassed ? (
                <span>You've successfully completed the {currentModule?.title} module!</span>
              ) : (
                <span>You'll need to review the material and try again.</span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-5">
            <div className="mb-6 flex justify-center">
              {completionPassed ? (
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#28C76F]/10 text-[#28C76F]">
                  <Medal className="h-12 w-12" />
                </div>
              ) : (
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-amber-100 text-amber-500">
                  <BookX className="h-12 w-12" />
                </div>
              )}
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">
                {completionPassed ? "Great work!" : "Don't worry!"}
              </h3>
              <p className="text-neutral-600 mb-4">
                {completionPassed 
                  ? "You've mastered the key concepts in this module. Keep up the great work!" 
                  : "Learning takes time. Review the material, take notes, and try the quiz again."}
              </p>
              <div className="bg-neutral-100 p-3 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Score:</span>
                  <span className={`font-bold ${completionPassed ? 'text-[#28C76F]' : 'text-amber-500'}`}>
                    {Math.round((lives / 3) * 100)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Status:</span>
                  <span className={`font-bold ${completionPassed ? 'text-[#28C76F]' : 'text-amber-500'}`}>
                    {completionPassed ? "PASSED" : "REVIEW NEEDED"}
                  </span>
                </div>
                {completionPassed && (
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">XP Earned:</span>
                    <span className="font-bold text-primary">+50 XP</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-center">
            <Button 
              type="button" 
              onClick={() => {
                setShowCompletionDialog(false);
                if (completionPassed) {
                  // If passed, update XP
                  setXp(prev => prev + 50);
                  
                  // Update progress to 100% for this module
                  updateProgress(pathId, 100 - (userProgress[pathId] || 0));
                  
                  toast({
                    title: "Module Completed!",
                    description: "You've earned 50 XP and unlocked the next module.",
                    variant: "default",
                  });
                } else {
                  toast({
                    title: "Keep practicing",
                    description: "You can retry this module to improve your score.",
                    variant: "default",
                  });
                }
              }} 
              className={`w-full ${completionPassed ? 'bg-[#28C76F] hover:bg-[#28C76F]/90' : 'bg-primary'}`}
            >
              {completionPassed ? "Continue to Next Module" : "Review Module"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LearningModulePage;
