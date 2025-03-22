import { useParams } from "wouter";
import LearningModulePage from "@/components/LearningModulePage";

export default function LearningModule() {
  const { path } = useParams();
  
  if (!path) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">No Path Selected</h1>
          <p className="mt-4 text-neutral-600">Please go back and select a learning path</p>
        </div>
      </div>
    );
  }
  
  return <LearningModulePage pathId={path} />;
}
