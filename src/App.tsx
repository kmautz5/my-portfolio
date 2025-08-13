/*import React from 'react';*/ //used to need this line but modern react/vite doesn't need it anymore
import ProjectTile from './components/ProjectTile';
import './App.css'

const projects = [
    {
        id: 1,
        title: 'React Portfolio',
        description: 'A personal portfolio site generated from Vite and customized to showcase my latest resume and projects.\nTechnologies used: React, TypeScript',
        imageUrl: '/favicon.svg',
        githubUrl: 'https://github.com/yourusername/project1'
    },
    {
        id: 2,
        title: 'Alien Beats',
        description: 'A cloud-based music recommendation engine. The user inputs a popular song name and gets suggested a similar song based on its BPM.\nTechnologies used: AWS, SQL, Python, JavaScript',
        imageUrl: '/reco_icon.svg', // Use a real image URL
        githubUrl: 'https://github.com/yourusername/project2'
    },
    {
        id: 3,
        title: 'Battleship Game',
        description: 'A Python game played via command prompt.',
        imageUrl: 'https://via.placeholder.com/300x200', // Use a real image URL
        githubUrl: 'https://github.com/yourusername/project3'
    }
]

function App() {
  return (
    <>
      <a
        href="/kelly_mautz_resume.pdf"
        download="/KellyMautz_Resume_s08072025.pdf"
        className="image-container-link"
      >
        <div className="image-container">
          <img src="/resumecircles.svg" className="logo" alt="Resume Circles" />
          <p className="overlay-text">Kelly Mautz</p>
        </div>
      </a>
      <p className='description-text'>Click my name to download my latest resume</p>
      <p className='description-text2'>Click on a project tile to learn more</p>
      <div className='app-container'>
        <h2>My Projects</h2>
        <div className="project-grid-wrapper">
          <div className='project-grid'>
            {projects.map((project) => (
              <ProjectTile key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;