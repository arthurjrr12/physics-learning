import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const paths = pgTable("paths", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iconClass: text("icon_class").notNull(),
});

export const modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  pathId: integer("path_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  order: integer("order").notNull(),
  content: text("content").notNull(),
});

export const quizzes = pgTable("quizzes", {
  id: serial("id").primaryKey(),
  moduleId: integer("module_id").notNull(),
  question: text("question").notNull(),
  correctOption: text("correct_option").notNull(),
  explanation: text("explanation").notNull(),
});

export const quizOptions = pgTable("quiz_options", {
  id: serial("id").primaryKey(),
  quizId: integer("quiz_id").notNull(),
  text: text("text").notNull(),
  isCorrect: boolean("is_correct").notNull(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  pathId: integer("path_id").notNull(),
  moduleId: integer("module_id").notNull(),
  completed: boolean("completed").notNull().default(false),
  score: integer("score").notNull().default(0),
  lastUpdated: timestamp("last_updated").notNull().defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
});

export const insertPathSchema = createInsertSchema(paths).pick({
  slug: true,
  title: true,
  description: true,
  iconClass: true,
});

export const insertModuleSchema = createInsertSchema(modules).pick({
  pathId: true,
  title: true,
  description: true,
  order: true,
  content: true,
});

export const insertQuizSchema = createInsertSchema(quizzes).pick({
  moduleId: true,
  question: true,
  correctOption: true,
  explanation: true,
});

export const insertQuizOptionSchema = createInsertSchema(quizOptions).pick({
  quizId: true,
  text: true,
  isCorrect: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).pick({
  userId: true,
  pathId: true,
  moduleId: true,
  completed: true,
  score: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPath = z.infer<typeof insertPathSchema>;
export type Path = typeof paths.$inferSelect;

export type InsertModule = z.infer<typeof insertModuleSchema>;
export type Module = typeof modules.$inferSelect;

export type InsertQuiz = z.infer<typeof insertQuizSchema>;
export type Quiz = typeof quizzes.$inferSelect;

export type InsertQuizOption = z.infer<typeof insertQuizOptionSchema>;
export type QuizOption = typeof quizOptions.$inferSelect;

export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type UserProgress = typeof userProgress.$inferSelect;
