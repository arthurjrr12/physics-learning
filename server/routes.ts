import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  const apiRouter = express.Router();
  
  // User routes
  apiRouter.post("/users/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(userData.username);
      
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      const user = await storage.createUser(userData);
      
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: (error as z.ZodError).message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  apiRouter.post("/users/login", async (req, res) => {
    try {
      const loginSchema = z.object({
        username: z.string(),
        password: z.string(),
      });
      
      const { username, password } = loginSchema.parse(req.body);
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Don't return password in response
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: (error as z.ZodError).message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Paths routes
  apiRouter.get("/paths", async (req, res) => {
    try {
      const paths = await storage.getAllPaths();
      res.status(200).json(paths);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  apiRouter.get("/paths/:slug", async (req, res) => {
    try {
      const path = await storage.getPathBySlug(req.params.slug);
      if (!path) {
        return res.status(404).json({ message: "Path not found" });
      }
      res.status(200).json(path);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Modules routes
  apiRouter.get("/paths/:slug/modules", async (req, res) => {
    try {
      const path = await storage.getPathBySlug(req.params.slug);
      if (!path) {
        return res.status(404).json({ message: "Path not found" });
      }
      
      const modules = await storage.getModulesByPathId(path.id);
      res.status(200).json(modules);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Quizzes routes
  apiRouter.get("/modules/:moduleId/quizzes", async (req, res) => {
    try {
      const moduleId = parseInt(req.params.moduleId);
      const quizzes = await storage.getQuizzesByModuleId(moduleId);
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // User progress routes
  apiRouter.post("/progress", async (req, res) => {
    try {
      const progressSchema = z.object({
        userId: z.number(),
        pathId: z.number(),
        moduleId: z.number(),
        completed: z.boolean().optional(),
        score: z.number().optional(),
      });
      
      const progressData = progressSchema.parse(req.body);
      const progress = await storage.updateUserProgress(progressData);
      res.status(200).json(progress);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: (error as z.ZodError).message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  apiRouter.get("/users/:userId/progress", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const progress = await storage.getUserProgress(userId);
      res.status(200).json(progress);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Register API routes
  app.use("/api", apiRouter);
  
  // Create HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}