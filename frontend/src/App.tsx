import { JobBoard } from "@/components/JobBoard";
import { ToastProvider } from "@/hooks/use-toast";

export default function App() {
  return (
    <ToastProvider>
      <JobBoard />
    </ToastProvider>
  );
}
