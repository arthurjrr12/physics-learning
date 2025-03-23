import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useUser } from "@/lib/userContext";
import { useToast } from "@/hooks/use-toast";
import { paths } from "@/lib/mockData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const PathCard = ({ path, index, onSelect }: { path: any, index: number, onSelect: (pathId: string) => void }) => {
  const { setCurrentPath } = useUser();

  const handleSelection = () => {
    setCurrentPath(path.id);
    onSelect(path.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleSelection}
    >
      <div className="h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="w-full h-full flex items-center justify-center">
          <path.icon className="h-24 w-24 text-white opacity-30" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <div className={`flex items-center justify-center h-10 w-10 rounded-md ${path.bgColor} text-white`}>
            <i className={`${path.iconClass} text-xl`}></i>
          </div>
          <h3 className="ml-3 text-xl font-semibold text-neutral-900">{path.title}</h3>
        </div>
        <p className="mt-4 text-neutral-600">
          {path.description}
        </p>
        <div className="mt-6">
          {path.tags.map((tag: string, idx: number) => (
            <span key={idx} className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${path.tagBg} ${path.tagText} ${idx > 0 ? 'ml-2' : ''}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <div 
            className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${path.btnBg} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${path.id === 'engineering' ? 'primary' : path.id === 'healthcare' ? 'teal-500' : 'amber-500'} cursor-pointer`}
          >
            Start Learning
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AuthDialog = ({ isOpen, onClose, selectedPath }: { isOpen: boolean, onClose: () => void, selectedPath: string | null }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useUser();
  const [_, setLocation] = useLocation();

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Demo login simulation
      login(values.email);
      
      toast({
        title: "Login successful!",
        description: "Welcome to the Physics Digital Learning System.",
        variant: "default",
      });
      
      if (selectedPath) {
        setLocation(`/learn/${selectedPath}`);
      }
      onClose();
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onRegisterSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true);
    
    try {
      // Simulate register API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Demo register simulation
      login(values.email);
      
      toast({
        title: "Registration successful!",
        description: "Welcome to the Physics Digital Learning System.",
        variant: "default",
      });
      
      if (selectedPath) {
        setLocation(`/learn/${selectedPath}`);
      }
      onClose();
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Account Required
          </DialogTitle>
          <DialogDescription className="text-center">
            Please log in or create an account to start learning
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-4">
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-50 border-t-white rounded-full"></div>
                      Logging in...
                    </div>
                  ) : "Log In"}
                </Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="register" className="mt-4">
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={registerForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-50 border-t-white rounded-full"></div>
                      Creating account...
                    </div>
                  ) : "Create Account"}
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const PathSelectionPage = () => {
  const { isLoggedIn } = useUser();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [_, setLocation] = useLocation();

  const handlePathSelect = (pathId: string) => {
    if (isLoggedIn) {
      setLocation(`/learn/${pathId}`);
    } else {
      setSelectedPath(pathId);
      setShowAuthDialog(true);
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Choose Your Learning Path
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-white opacity-90 max-w-3xl mx-auto"
            >
              Select the career path that aligns with your interests and goals
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {paths.map((path, index) => (
            <PathCard 
              key={path.id} 
              path={path} 
              index={index} 
              onSelect={handlePathSelect}
            />
          ))}
        </div>
      </div>

      <AuthDialog 
        isOpen={showAuthDialog} 
        onClose={() => setShowAuthDialog(false)} 
        selectedPath={selectedPath}
      />
    </div>
  );
};

export default PathSelectionPage;
