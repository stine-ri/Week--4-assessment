


const jobListings = [
    { title: 'Senior Frontend Developer', type: 'Full Time', location: 'USA only', skills: ['HTML', 'CSS', 'JavaScript'], experience: 'Senior', company: 'Photosnap', new: true, featured: true },
    { title: 'Fullstack Developer', type: 'Part Time', location: 'Remote', skills: ['Python', 'React'], experience: 'Midweight', company: 'Manage', new: true, featured: true },
    { title: 'Junior Frontend Developer', type: 'Part Time', location: 'USA only', skills: ['CSS', 'JavaScript'], experience: 'Junior', company: 'Account', new: true, featured: false },
    { title: 'Junior Frontend Developer', type: 'Contract', location: 'USA only', skills: ['CSS', 'JavaScript'], experience: 'Junior', company: 'MyHome', new: false, featured: false },
    { title: 'Software Engineer', type: 'Full Time', location: 'Worldwide', skills: ['JavaScript', 'Sass', 'Ruby'], experience: 'Midweight', company: 'Loop Studios', new: false, featured: false },
    { title: 'Junior Backend Developer', type: 'Full Time', location: 'UK only', skills: ['Ruby', 'RoR'], experience: 'Junior', company: 'Facelt', new: false, featured: false },
    { title: 'Junior Developer', type: 'Contract', location: 'UK only', skills: ['HTML', 'Sass', 'JavaScript'], experience: 'Junior', company: 'Shortly', new: false, featured: false }
  ];
  
  const jobContainer = document.getElementById('job-listings');
  const jobTypeFilter = document.getElementById('job-type-filter');
  const locationFilter = document.getElementById('location-filter');
  const experienceFilter = document.getElementById('experience-filter');
  const filterButton = document.getElementById('filter-button');
  
  function renderJobs(jobs) {
    jobContainer.innerHTML = '';
    jobs.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job-listing');
      jobElement.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company} ${job.new ? '<span class="new">NEW!</span>' : ''} ${job.featured ? '<span class="featured">FEATURED</span>' : ''}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Experience:</strong> ${job.experience}</p>
        <p><strong>Skills:</strong> ${job.skills.join(', ')}</p>
      `;
      jobContainer.appendChild(jobElement);
    });
  }
  
  function filterJobs() {
    const filters = {
      type: jobTypeFilter.value,
      location: locationFilter.value,
      experience: experienceFilter.value
    };
  
    const filteredJobs = jobListings.filter(job => {
      return (filters.type ? job.type === filters.type : true)
        && (filters.location ? job.location === filters.location : true)
        && (filters.experience ? job.experience === filters.experience : true);
    });
  
    renderJobs(filteredJobs);
  }
  
  filterButton.addEventListener('click', filterJobs);
  
  renderJobs(jobListings);
  




















