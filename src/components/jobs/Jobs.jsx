"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../../lib/fetch-jobs";

const JobsList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (!data || !data.jobs || data.jobs.length === 0) {
    return <div>No jobs found.</div>;
  }

  return (
    <ul>
      {data.jobs.map((job) => (
        <li key={job.id}>{job}</li>
      ))}
    </ul>
  );
};

export default JobsList;
