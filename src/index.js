import { logName } from './example-module';
import './style.css';

function component() {
  const element = document.createElement('pre');
  const yourName = 'Gabriel';

  element.innerHTML = ['Hello Webpack!', `My name is ${logName(yourName)}`].join('\n');
  element.classList.add('centered');
  return element;
}

document.body.appendChild(component());
