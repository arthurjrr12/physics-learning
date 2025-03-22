import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { UserProvider } from "./lib/userContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PathSelection from "./pages/PathSelection";
import LearningModule from "./pages/LearningModule";
import Login from "./pages/Login";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <div className="font-inter bg-neutral-100 text-neutral-800 min-h-screen">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/paths" component={PathSelection} />
        <Route path="/learn/:path" component={LearningModule} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router />
        <Toaster />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
