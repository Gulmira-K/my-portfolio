import './About.css';

export default function About() {
  return(
    <div className='About'>
       <div className='tag'>&lt;div class="<span className='header'>about</span>"&gt;</div>
        <p className='about-text'>Junior Front End Developer originally from Uzbekistan, currently based in Spain.
          Passionate about learning and improving coding skills.
          Analytical mindset that enjoys creating responsive and user friendly web apps.
        </p>
      <h2 className='sub-header'>Skills:</h2>
      <ul>
        <li>
          <i className="fab fa-html5"></i>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated html" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </li>
        <li>
          <i class="fab fa-css3-alt"></i>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated css" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
          </div>
        </li>
        <li>
          <i class="fab fa-js-square"></i>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated js" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
          </div>
        </li>
        <li>
         <i class="fab fa-bootstrap"></i>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bootstrap" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </li>
        <li>
          <i class="fab fa-react"></i>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated react" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </li>
        <li>
          <i class="fab fa-github-square"></i>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated github" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </li>
      </ul>
          
        
       <div className='tag'>&lt;/div&gt;</div>
    </div>
    )
}