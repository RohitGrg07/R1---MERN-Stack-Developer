import { Job } from "@/types/job";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function JobDetailsDialog({ job, open, onOpenChange }: Props) {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {job.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Company
              </label>
              <div className="text-lg font-semibold">{job.company}</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="text-lg font-semibold">{job.location}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Salary Range
              </label>
              <div className="text-lg font-semibold">{job.salary}</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Job Type
              </label>
              <div className="text-lg font-semibold capitalize">
                {job.type.replace("-", " ")}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Remote Work
            </label>
            <div className="text-lg font-semibold">
              {job.remote ? "Available" : "Not Available"}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Job Description
            </label>
            <div className="text-gray-800 leading-relaxed">
              {job.description}
            </div>
          </div>

          {job.requirements && job.requirements.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Requirements
              </label>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Benefits
              </label>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
