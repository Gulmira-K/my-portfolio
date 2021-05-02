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
            <span classname='list-item'> Gulmira </span>
            <span className='tag'>&lt;/li&gt;</span>
          </Link>
        </li>
        <li>
          <Link to={'/about'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span classname='list-item'> About </span>
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
        {/* <li>
           <Link to={'/works'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span classname='list-item'> Works </span>
            <span className='tag'>&lt;/li&gt;</span>
            </Link>
        </li> */}
        <li>
           <Link to={'/contact'} className='link'  onClick={closeMobileMenu}>
            <span className='tag'>&lt;li&gt;</span>
            <span classname='list-item'> Contact </span>
            <span className='tag'>&lt;/li&gt;</span>
          </Link>
        </li>
         <li>
          <span className='tag'>&lt;/ul&gt;</span>
        </li>
      </ul>

     
    </div>
  )
}