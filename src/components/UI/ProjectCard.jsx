import svg from '../../assets/images/icons/github-mark-white.svg';
import './css/projectCardStyle.css';
export default function ProjectCard({app}){
  return (
    <div className="container image-container">
      
      <div className="overlay font-stmreg portfolio-image">
        <a className='hoverable-icon title-overlay text-app-yellow' href={app.deployedApp} target='_blank'>
          {app.title}</a>
        <div className='icon-container'>
          <a href={app.githubURL} target='_blank'><img className='hoverable-icon img-overlay' src={svg} /></a>
        </div>
        <p className='stack-overlay text-app-yellow'>{app.stack}</p>
        
      </div>
      <img className='portfolio-image' src={app.image}/>
      
    </div>
  );
}