import { Job } from "./job"

export const Jobs: Job[] = [
  { id: 1, name: "Apple", position: "Software Engineer II",
    progress: 100, applied: true, status: "Application Submitted" },
  { id: 2, name: "Google", position: "Senior Developer",
    progress: 90, applied: true, status: "Application Submitted" },
  { id: 3, name: "Samsung", position: "Java Developer II",
    progress: 75, applied: true, status: "Phone Screen Completed!" },
  { id: 4, name: "Baidu", position: "Data Developer II",
    progress: 25, applied: true, status: "1st Round Interview Done!" },
  { id: 5, name: "Facebook", position: "Software Engineer II",
    progress: 15, applied: true, status: "3rd Round Interview Done!" },
  { id: 6, name: "Tesla", position: "Full Stack Dev III",
    progress: 15, applied: true, status: "Recieved Offer!" }
]
