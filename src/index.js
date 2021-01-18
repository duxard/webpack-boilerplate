const component = () => {
  const element = document.createElement('div');
  const text = document.createTextNode('Hello, webpack'); 
  element.appendChild(text);
  return element;
}

document.body.appendChild(component());