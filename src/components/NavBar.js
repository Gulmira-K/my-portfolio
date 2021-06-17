import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='NavBar'>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <span className='tag'>&lt;ul&gt;</span>
        </li>
        <li>
          <Link to={'/'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span className='list-item'> Gulmira </span>
            <span className='tag'>&lt;/li&gt;</span>
          </Link>
        </li>
        <li>
          <Link to={'/about'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span className='list-item'> About </span>
            <span className='tag'>&lt;/li&gt;</span>
          </Link>
        </li>
        {/* <li>
          <Link to={'/skills'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span classname='list-item'> Skills </span>
            <span className='tag'>&lt;/li&gt;</span>
          </Link>
        </li> */}
        <li>
           <Link to={'/works'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span className='list-item'> Works </span>
            <span className='tag'>&lt;/li&gt;</span>
            </Link>
        </li>
        <li>
           <Link to={'/contact'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span className='list-item'> Contact </span>
            <span className='tag'>&lt;/li&gt;</span>
          </Link>
        </li>
         <li>
          <span className='tag'>&lt;/ul&gt;</span>
        </li>
        <li className='socialsLinks'>
          <a href='https://github.com/Gulmira-K' rel="noreferrer" target='_blank'>
            <i class="fab fa-github"></i>
          </a>
          <a href='https://www.linkedin.com/in/gulmira-kojenova/' rel="noreferrer" target='_blank'>
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:gkojenova@gmail.com" rel="noreferrer" target='_blank'>
            <i class="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}