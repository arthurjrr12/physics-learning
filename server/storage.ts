import { 
  users, type User, type InsertUser,
  paths, type Path, type InsertPath,
  modules, type Module, type InsertModule,
  quizzes, type Quiz, type InsertQuiz,
  quizOptions, type QuizOption, type InsertQuizOption,
  userProgress, type UserProgress, type InsertUserProgress
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Path methods
  getAllPaths(): Promise<Path[]>;
  getPath(id: number): Promise<Path | undefined>;
  getPathBySlug(slug: string): Promise<Path | undefined>;
  createPath(path: InsertPath): Promise<Path>;
  
  // Module methods
  getModule(id: number): Promise<Module | undefined>;
  getModulesByPathId(pathId: number): Promise<Module[]>;
  createModule(module: InsertModule): Promise<Module>;
  
  // Quiz methods
  getQuiz(id: number): Promise<Quiz | undefined>;
  getQuizzesByModuleId(moduleId: number): Promise<Quiz[]>;
  createQuiz(quiz: InsertQuiz): Promise<Quiz>;
  
  // Quiz Option methods
  getQuizOption(id: number): Promise<QuizOption | undefined>;
  getQuizOptionsByQuizId(quizId: number): Promise<QuizOption[]>;
  createQuizOption(option: InsertQuizOption): Promise<QuizOption>;
  
  // User Progress methods
  getUserProgress(userId: number): Promise<UserProgress[]>;
  updateUserProgress(progress: Partial<InsertUserProgress> & { userId: number; pathId: number; moduleId: number }): Promise<UserProgress>;
}

export class MemStorage implements IStorage {
  private usersMap = new Map<number, User>();
  private pathsMap = new Map<number, Path>();
  private modulesMap = new Map<number, Module>();
  private quizzesMap = new Map<number, Quiz>();
  private quizOptionsMap = new Map<number, QuizOption>();
  private userProgressMap = new Map<string, UserProgress>();
  
  private userId = 1;
  private pathId = 1;
  private moduleId = 1;
  private quizId = 1;
  private quizOptionId = 1;
  private userProgressId = 1;
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.usersMap.get(id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.usersMap.values()).find(user => user.username === username);
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.usersMap.values()).find(user => user.email === email);
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { id, ...insertUser };
    this.usersMap.set(id, user);
    return user;
  }
  
  // Path methods
  async getAllPaths(): Promise<Path[]> {
    return Array.from(this.pathsMap.values());
  }
  
  async getPath(id: number): Promise<Path | undefined> {
    return this.pathsMap.get(id);
  }
  
  async getPathBySlug(slug: string): Promise<Path | undefined> {
    return Array.from(this.pathsMap.values()).find(path => path.slug === slug);
  }
  
  async createPath(insertPath: InsertPath): Promise<Path> {
    const id = this.pathId++;
    const path: Path = { id, ...insertPath };
    this.pathsMap.set(id, path);
    return path;
  }
  
  // Module methods
  async getModule(id: number): Promise<Module | undefined> {
    return this.modulesMap.get(id);
  }
  
  async getModulesByPathId(pathId: number): Promise<Module[]> {
    return Array.from(this.modulesMap.values())
      .filter(module => module.pathId === pathId)
      .sort((a, b) => a.order - b.order);
  }
  
  async createModule(insertModule: InsertModule): Promise<Module> {
    const id = this.moduleId++;
    const module: Module = { id, ...insertModule };
    this.modulesMap.set(id, module);
    return module;
  }
  
  // Quiz methods
  async getQuiz(id: number): Promise<Quiz | undefined> {
    return this.quizzesMap.get(id);
  }
  
  async getQuizzesByModuleId(moduleId: number): Promise<Quiz[]> {
    return Array.from(this.quizzesMap.values()).filter(quiz => quiz.moduleId === moduleId);
  }
  
  async createQuiz(insertQuiz: InsertQuiz): Promise<Quiz> {
    const id = this.quizId++;
    const quiz: Quiz = { id, ...insertQuiz };
    this.quizzesMap.set(id, quiz);
    return quiz;
  }
  
  // Quiz Option methods
  async getQuizOption(id: number): Promise<QuizOption | undefined> {
    return this.quizOptionsMap.get(id);
  }
  
  async getQuizOptionsByQuizId(quizId: number): Promise<QuizOption[]> {
    return Array.from(this.quizOptionsMap.values()).filter(option => option.quizId === quizId);
  }
  
  async createQuizOption(insertOption: InsertQuizOption): Promise<QuizOption> {
    const id = this.quizOptionId++;
    const option: QuizOption = { id, ...insertOption };
    this.quizOptionsMap.set(id, option);
    return option;
  }
  
  // User Progress methods
  async getUserProgress(userId: number): Promise<UserProgress[]> {
    return Array.from(this.userProgressMap.values()).filter(progress => progress.userId === userId);
  }
  
  async updateUserProgress(progressData: Partial<InsertUserProgress> & { userId: number; pathId: number; moduleId: number }): Promise<UserProgress> {
    const key = `${progressData.userId}-${progressData.pathId}-${progressData.moduleId}`;
    let progress = this.userProgressMap.get(key);
    
    if (progress) {
      // Update existing progress
      progress = {
        ...progress,
        ...progressData,
        lastUpdated: new Date(),
      };
    } else {
      // Create new progress entry
      const id = this.userProgressId++;
      progress = {
        id,
        userId: progressData.userId,
        pathId: progressData.pathId,
        moduleId: progressData.moduleId,
        completed: progressData.completed ?? false,
        score: progressData.score ?? 0,
        lastUpdated: new Date(),
      };
    }
    
    this.userProgressMap.set(key, progress);
    return progress;
  }

  // Initialize with demo data
  constructor() {
    // Sample demo data could be initialized here
    // For the prototype this is not needed as we're using client-side mock data
  }
}

export const storage = new MemStorage();
