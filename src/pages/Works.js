import './Works.css';
import todo from "../media/todoList.png";
import weather from "../media/weather.png";
import travel from "../media/travel.png";
import grocery from "../media/grocery.png";
import calculator from "../media/calculator.png";

export default function Works() {
  return(
    <div className='Works'>
      <div className='tag'>&lt;div class="<span className='header'>works</span>"&gt;</div>
      <div className='works__container'>
        <div className='works__item'>
          <a href='https://todo-list-by-gulmira.netlify.app/' rel="noreferrer" target='_blank'>
            <div className='image'>
              <img src={todo} alt='ToDo List' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>ToDo List</h3>
              </div>
            </div>
          </a>
           <p className='work__description'>A simple ToDo List coded in <br/> HTML, JavaScript and CSS</p>
        </div>
        <div className='works__item'>
          <a href='https://react-weatherapp-by-gulmira.netlify.app/' rel="noreferrer" target='_blank'>
            <div className='image'>
              <img src={weather} alt='Weather App' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>Weather APP</h3>
              </div>
            </div>
          </a>
          <p className='work__description'>Weather APP with a search <br/> engine built with React</p>
        </div>
        <div className='works__item'>
          <a href='https://gulmira-k.github.io/website/index.html' rel="noreferrer" target='_blank'>
            <div className='image'>
              <img src={travel} alt='Website' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>Visit Uzbekistan<br/>Website</h3>
              </div>
            </div>
          </a>
          <p className='work__description'>Website programmed<br/> in HTML and CSS</p>
        </div>
        <div className='works__item'>
          <a href='https://gulmira-k.github.io/shopping_cart/' rel="noreferrer" target='_blank'>
            <div className='image'>
              <img src={grocery} alt='Grocery' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>Online Grocery</h3>
              </div>
            </div>
          </a>
          <p className='work__description'>Drag and drop APP built<br/>with HTML, CSS and JS</p>
        </div>
        <div className='works__item'>
          <a href='https://gulmira-k.github.io/calculator/' rel="noreferrer" target='_blank'>
            <div className='image'>
              <img src={calculator} alt='Calculator' />
              <div className='image__overlay'>
                <h3 className='image__overlay--title'>Calculator</h3>
              </div>
            </div>
          </a>
          <p className='work__description'>A simple calculator <br/> using eval() method</p>
        </div>
      </div>
      <div className='tag'>&lt;/div&gt;</div>
    </div>
    )
}