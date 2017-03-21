// require('./login');

import {login} from './login';
import {Student} from './greeter';
import {greeter} from './greeter';

login('admin','hren');

console.log('App loaded');

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);



document.writeln("<br />cheers!");