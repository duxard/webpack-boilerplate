import './style.css';

const component = () => {
  const element = document.createElement('div');
  const text = document.createTextNode('Hello, webpack!'); 
  element.appendChild(text);
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());