import './Works.css';
import todo from "../media/todoList.png";
import weather from "../media/weather.png";

export default function Works() {
  return(
    <div className='Works'>
      <div className='tag'>&lt;div class="<span className='header'>works</span>"&gt;</div>
      <div className='works__container'>
        <div className='works__item'>
          <a href='https://todo-list-by-gulmira.netlify.app/' target='_blank'>
            <div className='image'>
              <img src={todo} alt='ToDo List' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>ToDo List</h3>
              </div>
            </div>
          </a>
           <p className='work__description'>A simple ToDo List App coded <br/> in HTML, JavaScript and CSS.</p>
        </div>
        <div className='works__item'>
          <a href='https://react-weatherapp-by-gulmira.netlify.app/' target='_blank'>
            <div className='image'>
              <img src={weather} alt='Weather App' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>Weather APP</h3>
              </div>
            </div>
          </a>
          <p className='work__description'>Weather APP with a search <br/> engine built with React.</p>
        </div>
      </div>
      <div className='tag'>&lt;/div&gt;</div>
    </div>
    )
}