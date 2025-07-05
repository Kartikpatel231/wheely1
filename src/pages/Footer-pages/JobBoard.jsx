import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const jobData = {
   Dubai: [
    { title: "Account Executive", team: "Sales", location: "Dubai" },
    { title: "Customer Service Agent, English Speakers", team: "Customer Service", location: "Dubai" },
    { title: "Customer Service Agent", team: "Customer Service", location: "Dubai" }
  ],
  Paris: [
    { title: "Account Executive", team: "Sales", location: "Paris" }
  ],
  London: [
    { title: "Frontend Developer", team: "Engineering", location: "London" },
    { title: "Account Executive", team: "Sales", location: "London" },
    { title: "Backend Engineer", team: "Engineering", location: "London" },
    { title: "Data Scientist", team: "Data Science", location: "London" },
    { title: "Digital Marketing Specialist", team: "Marketing", location: "London" },
    { title: "Head of Brand & Creative", team: "Design", location: "London" },
    { title: "Product Manager, UX", team: "Product", location: "London" },
    { title: "Recruiter (business)", team: "Product", location: "London" },
    { title: "Product Manager, UX", team: "Recruitment", location: "London" },
    { title: "Senior Backend Engineer", team: "Engineering", location: "London" },
    { title: "(Senior) Product Designer", team: "Design", location: "London" },
    { title: "Site Reliability Engineer", team: "Engineering", location: "London" },
    { title: "Tech Lead Manager", team: "Engineering", location: "London" }
  ],
  Nicosia: [
    { title: "Accounts Payable Accountant", team: "Finance", location: "Nicosia" },
    { title: "Android Engineer, Supply", team: "Engineering", location: "Nicosia" },
    { title: "Backend Engineer", team: "Engineering", location: "Nicosia" },
    { title: "Data Scientist", team: "Data Science", location: "Nicosia" },
    { title: "Digital Marketing Specialist", team: "Marketing", location: "Nicosia" },
    { title: "Frontend Engineer", team: "Engineering", location: "Nicosia" },
    { title: "Product Manager, Technical", team: "Product", location: "Nicosia" },
    { title: "Product Manager, UX", team: "Product", location: "Nicosia" },
    { title: "Recruiter (non-tech)", team: "Recruitment", location: "Nicosia" },
    { title: "Recruiter (tech)", team: "Recruitment", location: "Nicosia" },
    { title: "(Senior) Product Designer", team: "Design", location: "Nicosia" },
    { title: "Site Reliability Engineer", team: "Engineering", location: "Nicosia" },
    { title: "Tech Lead Manager", team: "Engineering", location: "Nicosia" }
  ],
  Berlin: [
    { title: "Data Scientist", team: "Data Science", location: "Berlin" },
    { title: "QA Engineer", team: "Engineering", location: "Berlin" }
  ]
  // ... (keep your existing jobData object)
};

const JobBoard = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [visibleJobsCount, setVisibleJobsCount] = useState(10);

  // Get all jobs when "All Cities" is selected, otherwise get jobs for selected city
  const jobs = selectedCity === "All Cities" 
    ? Object.values(jobData).flat() 
    : jobData[selectedCity] || [];

  // Filter jobs by team if a specific team is selected
  const filteredJobs = selectedTeam === "All Teams" 
    ? jobs 
    : jobs.filter(job => job.team === selectedTeam);

  // Calculate team counts for the current selection
  const teamCount = jobs.reduce((acc, job) => {
    acc[job.team] = (acc[job.team] || 0) + 1;
    return acc;
  }, {});

  const totalJobs = jobs.length;
  const jobsToShow = filteredJobs.slice(0, visibleJobsCount);
  const canShowMore = visibleJobsCount < filteredJobs.length;

  const loadMoreJobs = () => {
    setVisibleJobsCount(prev => prev + 10);
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto border-b-1 border-gray-200">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Filter Options */}
        <div className="w-full md:w-1/3 space-y-8">
          {/* Location Selector */}
          <div>
            <label className="block uppercase text-sm font-semibold mb-2 text-gray-700">Location</label>
            <select
              className="w-full border border-gray-100 px-3 py-2 text-gray-800"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedTeam("All Teams");
                setVisibleJobsCount(10); // Reset visible jobs count when filters change
              }}
            >
              <option value="All Cities">All Cities</option>
              {Object.keys(jobData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Team List */}
          <div>
            <h2 className="uppercase text-sm font-semibold text-gray-700 mb-2">Team</h2>
            <ul className="text-gray-600 space-y-2">
              <li 
                className={`cursor-pointer ${selectedTeam === "All Teams" ? "text-[17px] font-[550] text-[#000429]" : ""}`}
                onClick={() => {
                  setSelectedTeam("All Teams");
                  setVisibleJobsCount(10);
                }}
              >
                All Teams · {totalJobs}
              </li>
              {Object.entries(teamCount).map(([team, count]) => (
                <li 
                  key={team}
                  className={`cursor-pointer ${selectedTeam === team ? "text-[17px] font-[550] text-[#000429]" : "text-[17px] font-[450]"}`}
                  onClick={() => {
                    setSelectedTeam(team);
                    setVisibleJobsCount(10);
                  }}
                >
                  {team} · {count}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Job Listings */}
        <div className="w-full md:w-2/3">
          {jobsToShow.length > 0 ? (
            <>
              <ul className="space-y-6">
                {jobsToShow.map((job, idx) => (
                  <li key={idx} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex justify-between items-start cursor-pointer">
                      <div>
                        <h3 className="text-[17px] font-[450] hover:text-gray-700">{job.title}</h3>
                        <p className="uppercase text-sm text-gray-500 mt-1">{job.team}</p>
                      </div>
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
                        {job.location}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {canShowMore && (
                <div className="mt-6 text-center">
                  <button 
                    onClick={loadMoreJobs}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    See More ({filteredJobs.length - visibleJobsCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500">No jobs available for the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;