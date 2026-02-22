let currentTab = "all";

let jobs = [
  {
    id: 1,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all",
    badge: "Not Applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "NOT APPLIED",
    badge: "Not Applied",
  },
];

function loadJobs() {
  const container = document.getElementById("jobContainer");
  container.innerHTML = "";

  let filtered = jobs.filter((job) =>
    currentTab === "all" ? true : job.status === currentTab,
  );

  document.getElementById("tabCount").innerText =
    filtered.length + " of " + jobs.length + " Jobs";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-10">
        <div class="text-5xl mb-4"><img src="./assets/jobs.png" alt="" class="mx-auto"></div>
        <h3 class="text-xl font-semibold">No Jobs Available</h3>
        <p class="text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  filtered.forEach((job) => {
    container.innerHTML += `
  <div class="bg-white p-6 rounded-xl shadow relative w-full">
    <button onclick="deleteJob(${job.id})" class="absolute top-5 right-5 text-red-500">
      <div class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="1.5" 
             stroke="currentColor" 
             class="w-5 h-5 text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round" 
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </div>
    </button>

    <h3 class="text-lg font-bold">${job.position}</h3>
    <p class="text-sm text-gray-500">${job.company}</p>
    <p class="text-sm mt-2 text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>

    ${job.status === "interview" || job.status === "rejected" ? `<p class="w-32 text-center px-2 py-1 rounded mt-3 ${job.status === "rejected" ? "bg-red-200 text-red-600 border border-red-400" : "bg-green-200 text-green-600 border border-green-400"}">${job.badge}</p>` : ""}
    <p class="text-sm mt-3 text-gray-600">${job.description}</p>
    <div class="flex gap-2 mt-4">
      <button onclick="updateStatus(${job.id}, 'interview')"class="flex px-6 py-2 border border-green-500 rounded cursor-pointer ${job.status === "interview"? "bg-green-500 text-white": "bg-transparent text-green-500"} hover:bg-green-500 hover:text-white">
        Interview
      </button>
      <button onclick="updateStatus(${job.id}, 'rejected')"class="flex px-6 py-2 border border-red-500 rounded cursor-pointer ${job.status === "rejected"? "bg-red-500 text-white": "bg-transparent text-red-500"} hover:bg-red-500 hover:text-white">
        Rejected
      </button>
    </div>
  </div>
`;
  });
}

function updateStatus(id, status) {
  jobs = jobs.map((job) => {
    if (job.id === id) {
      if (job.status === status) {
        job.status = "all";
      } else {
        job.status = status;
        if (job.status === "interview") {
          job.badge = "Interview";
        } else if (job.status === "rejected") {
          job.badge = "Rejected";
        } else {
          job.badge = "Not Applied";
        }
      }
    }
    return job;
  });
  updateDashboard();
  loadJobs();
}

function deleteJob(id) {
  let job = jobs.find((j) => j.id === id);
  jobs = jobs.filter((j) => j.id !== id);
  updateDashboard();
  loadJobs();
}

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length; // total count of jobs
  document.getElementById("interviewCount").innerText = jobs.filter((j) => j.status === "interview",).length; // count of interview jobs
  document.getElementById("rejectedCount").innerText = jobs.filter((j) => j.status === "rejected",).length; // count of rejected jobs
}

function changeTab(tab) {
  currentTab = tab;
  document
    .querySelectorAll(".tabBtn")
    .forEach((btn) => btn.classList.remove("bg-indigo-500", "text-white"));
  document
    .getElementById(tab + "Tab")
    .classList.add("bg-indigo-500", "text-white");
  loadJobs();
}

updateDashboard();
loadJobs();
