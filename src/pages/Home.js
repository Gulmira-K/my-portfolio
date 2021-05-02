import './Home.css';

export default function Home() {
  return(
    <div className='Home'>
      <div className='tag'>&lt;header&gt;</div>
      <div className='text-container'>
        <div className='wrapper'>
        <h1 className='static-text'>Hi! I'm</h1>
        <ul className='dynamic-texts'>
          <li><span className='typing-text'>Gulmira Kojenova</span></li>
          <li><span className='typing-text'>a Front End Developer</span></li>
          <li><span className='typing-text'>interested in coding languages</span></li>
          <li><span className='typing-text'>and in human languages</span></li>
        </ul>
        </div>
      </div>
      <div className='tag'>&lt;/header&gt;</div>
    </div>
    )
}