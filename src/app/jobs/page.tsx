import Navbar from "@/components/navbar/Navbar";
import JobsList from "@/components/jobs/Jobs";

export default function Jobs() {
  return (
    <main className="flex flex-col  min-h-screen">
      <Navbar />
      <JobsList />
    </main>
  );
}
