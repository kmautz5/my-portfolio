import React from 'react'; //used to need this line but modern react/vite doesn't need it anymore
import {useState} from 'react';
import './ProjectTile.css';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveSite: string | null;
  githubUrl: string;
}

const ProjectTile = ({project}: {project: Project}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className={`project-card-container ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
      <div className='project-card'>
        {/*Front of card*/}
        <div className='card-face card-face-front'>
          <img src={project.imageUrl} alt={project.title} className='project-image' />
          <h3 className='project-title'>{project.title}</h3>
        </div>
        {/*Back of card*/}
        <div className='card-face card-face-back'>
          <p className="project-description">
            {project.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < project.description.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          
          <div>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}>GitHub Repository
            </a>
          </div>
          <div>
            {/* Conditionally render the "Live Site" link only if the liveSite is not null */}
            {project.liveSite && (
              <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;