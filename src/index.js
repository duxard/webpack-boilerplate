import './style.css';
import Icon from './icon.png';

const component = () => {
  const element = document.createElement('div');
  const text = document.createTextNode('Hello, webpack!'); 
  element.appendChild(text);
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());