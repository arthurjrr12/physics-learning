// server/index.ts
import express3 from "express";

// server/routes.ts
import express from "express";
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  usersMap = /* @__PURE__ */ new Map();
  pathsMap = /* @__PURE__ */ new Map();
  modulesMap = /* @__PURE__ */ new Map();
  quizzesMap = /* @__PURE__ */ new Map();
  quizOptionsMap = /* @__PURE__ */ new Map();
  userProgressMap = /* @__PURE__ */ new Map();
  userId = 1;
  pathId = 1;
  moduleId = 1;
  quizId = 1;
  quizOptionId = 1;
  userProgressId = 1;
  // User methods
  async getUser(id) {
    return this.usersMap.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.usersMap.values()).find((user) => user.username === username);
  }
  async getUserByEmail(email) {
    return Array.from(this.usersMap.values()).find((user) => user.email === email);
  }
  async createUser(insertUser) {
    const id = this.userId++;
    const user = { id, ...insertUser };
    this.usersMap.set(id, user);
    return user;
  }
  // Path methods
  async getAllPaths() {
    return Array.from(this.pathsMap.values());
  }
  async getPath(id) {
    return this.pathsMap.get(id);
  }
  async getPathBySlug(slug) {
    return Array.from(this.pathsMap.values()).find((path3) => path3.slug === slug);
  }
  async createPath(insertPath) {
    const id = this.pathId++;
    const path3 = { id, ...insertPath };
    this.pathsMap.set(id, path3);
    return path3;
  }
  // Module methods
  async getModule(id) {
    return this.modulesMap.get(id);
  }
  async getModulesByPathId(pathId) {
    return Array.from(this.modulesMap.values()).filter((module) => module.pathId === pathId).sort((a, b) => a.order - b.order);
  }
  async createModule(insertModule) {
    const id = this.moduleId++;
    const module = { id, ...insertModule };
    this.modulesMap.set(id, module);
    return module;
  }
  // Quiz methods
  async getQuiz(id) {
    return this.quizzesMap.get(id);
  }
  async getQuizzesByModuleId(moduleId) {
    return Array.from(this.quizzesMap.values()).filter((quiz) => quiz.moduleId === moduleId);
  }
  async createQuiz(insertQuiz) {
    const id = this.quizId++;
    const quiz = { id, ...insertQuiz };
    this.quizzesMap.set(id, quiz);
    return quiz;
  }
  // Quiz Option methods
  async getQuizOption(id) {
    return this.quizOptionsMap.get(id);
  }
  async getQuizOptionsByQuizId(quizId) {
    return Array.from(this.quizOptionsMap.values()).filter((option) => option.quizId === quizId);
  }
  async createQuizOption(insertOption) {
    const id = this.quizOptionId++;
    const option = { id, ...insertOption };
    this.quizOptionsMap.set(id, option);
    return option;
  }
  // User Progress methods
  async getUserProgress(userId) {
    return Array.from(this.userProgressMap.values()).filter((progress) => progress.userId === userId);
  }
  async updateUserProgress(progressData) {
    const key = `${progressData.userId}-${progressData.pathId}-${progressData.moduleId}`;
    let progress = this.userProgressMap.get(key);
    if (progress) {
      progress = {
        ...progress,
        ...progressData,
        lastUpdated: /* @__PURE__ */ new Date()
      };
    } else {
      const id = this.userProgressId++;
      progress = {
        id,
        userId: progressData.userId,
        pathId: progressData.pathId,
        moduleId: progressData.moduleId,
        completed: progressData.completed ?? false,
        score: progressData.score ?? 0,
        lastUpdated: /* @__PURE__ */ new Date()
      };
    }
    this.userProgressMap.set(key, progress);
    return progress;
  }
  // Initialize with demo data
  constructor() {
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull()
});
var paths = pgTable("paths", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iconClass: text("icon_class").notNull()
});
var modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  pathId: integer("path_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  order: integer("order").notNull(),
  content: text("content").notNull()
});
var quizzes = pgTable("quizzes", {
  id: serial("id").primaryKey(),
  moduleId: integer("module_id").notNull(),
  question: text("question").notNull(),
  correctOption: text("correct_option").notNull(),
  explanation: text("explanation").notNull()
});
var quizOptions = pgTable("quiz_options", {
  id: serial("id").primaryKey(),
  quizId: integer("quiz_id").notNull(),
  text: text("text").notNull(),
  isCorrect: boolean("is_correct").notNull()
});
var userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  pathId: integer("path_id").notNull(),
  moduleId: integer("module_id").notNull(),
  completed: boolean("completed").notNull().default(false),
  score: integer("score").notNull().default(0),
  lastUpdated: timestamp("last_updated").notNull().defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true
});
var insertPathSchema = createInsertSchema(paths).pick({
  slug: true,
  title: true,
  description: true,
  iconClass: true
});
var insertModuleSchema = createInsertSchema(modules).pick({
  pathId: true,
  title: true,
  description: true,
  order: true,
  content: true
});
var insertQuizSchema = createInsertSchema(quizzes).pick({
  moduleId: true,
  question: true,
  correctOption: true,
  explanation: true
});
var insertQuizOptionSchema = createInsertSchema(quizOptions).pick({
  quizId: true,
  text: true,
  isCorrect: true
});
var insertUserProgressSchema = createInsertSchema(userProgress).pick({
  userId: true,
  pathId: true,
  moduleId: true,
  completed: true,
  score: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  const apiRouter = express.Router();
  apiRouter.post("/users/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      const user = await storage.createUser(userData);
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  apiRouter.post("/users/login", async (req, res) => {
    try {
      const loginSchema = z.object({
        username: z.string(),
        password: z.string()
      });
      const { username, password } = loginSchema.parse(req.body);
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  apiRouter.get("/paths", async (req, res) => {
    try {
      const paths2 = await storage.getAllPaths();
      res.status(200).json(paths2);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  apiRouter.get("/paths/:slug", async (req, res) => {
    try {
      const path3 = await storage.getPathBySlug(req.params.slug);
      if (!path3) {
        return res.status(404).json({ message: "Path not found" });
      }
      res.status(200).json(path3);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  apiRouter.get("/paths/:slug/modules", async (req, res) => {
    try {
      const path3 = await storage.getPathBySlug(req.params.slug);
      if (!path3) {
        return res.status(404).json({ message: "Path not found" });
      }
      const modules2 = await storage.getModulesByPathId(path3.id);
      res.status(200).json(modules2);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  apiRouter.get("/modules/:moduleId/quizzes", async (req, res) => {
    try {
      const moduleId = parseInt(req.params.moduleId);
      const quizzes2 = await storage.getQuizzesByModuleId(moduleId);
      res.status(200).json(quizzes2);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  apiRouter.post("/progress", async (req, res) => {
    try {
      const progressSchema = z.object({
        userId: z.number(),
        pathId: z.number(),
        moduleId: z.number(),
        completed: z.boolean().optional(),
        score: z.number().optional()
      });
      const progressData = progressSchema.parse(req.body);
      const progress = await storage.updateUserProgress(progressData);
      res.status(200).json(progress);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.message });
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
  app2.use("/api", apiRouter);
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express2 from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: ["localhost", "yourdomain.com"]
    // ✅ Correct type
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express3();
app.use(express3.json());
app.use(express3.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(res, bodyJson);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 4e3;
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
