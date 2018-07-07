import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <input  checked id='signin' name='action' type='radio' value='signin'>
      <label  for='signin'>login</label>
      <input  id='signup' name='action' type='radio' value='signup'>
      <label  for='signup'>Sign up</label>
      <input  id='reset' name='action' type='radio' value='reset'>
      <label  for='reset'>Reset</label>
      <div id='wrapper'>
        <div id='arrow'></div>
        <input id='email' placeholder='Email' type='text'>
        <input id='pass' placeholder='Password' type='password'>
        <input id='mob' placeholder='Mobile number' type='text'>
        <input id='repass' placeholder='confirm password' type='password'>
      </div>
      <!--<button  type='submit'><span>Reset password</span><br></button>-->
      <!---->
      <!--<button  type='submit'><span>Sign in</span><br></button>-->
      <!---->
      <!--<button  type='submit'><span>Sign up</span><br></button>-->
      <button>
    <span>
      Reset password
      <br>
      login
      <br>
      Sign up
    </span>
      </button>
      </form>
  `,
  styles: [`
    @import url(https://fonts.googleapis.com/css?family=Raleway:700,800);

    :focus {
      outline: none;
    }

    ::-webkit-input-placeholder {
    color: #DEDFDF;
    }

    ::-moz-placeholder {
    color: #DEDFDF;
    }

    :-moz-placeholder {
      color: #DEDFDF;
    }

    ::-ms-input-placeholder {
    color: #DEDFDF;
    }   

    #wrapper, label, #arrow, button  {
      transition: all .5s cubic-bezier(.6, 0, .4, 1);
    }
    
    #wrapper {
      overflow: hidden;
    }
    
    #signin:checked ~ #wrapper {
      height: 134px;
    }
    
    #signin:checked ~ #wrapper #arrow {
      left: 32px;
    }
    
    #signin:checked ~ button span {
      transform: translate3d(0, -72px, 0);
    }
    
    #signup:checked ~ #wrapper {
      height: 258px;
    }
    
    #signup:checked ~ #wrapper #arrow {
      left: 137px;
    }
    
    #signup:checked ~ button span {
      transform: translate3d(0, -144px, 0);
    }
    
    #reset:checked ~ #wrapper {
      height: 72px;
    }
    
    #reset:checked ~ #wrapper #arrow {
      left: 404px;
    }
    
    #reset:checked ~ button span {
      transform: translate3d(0, 0, 0);
    }

    form {
      width: 450px;
      height: 370px;
      margin: -185px -225px;
      position: absolute;
      left: 50%;
      top: 50%;
    }

    input[type=radio] {
      display: none;
    }

    label {
      cursor: pointer;
      color: #ff8505;
      display: inline-block;
      font-size: 22px;
      font-weight: 800;
      opacity: .5;
      margin-bottom: 30px;
      text-transform: uppercase;
    }

    label:hover {
      transition: all .3s cubic-bezier(.6, 0, .4, 1);
      opacity: 1;
      color: #ffab00;
    }

    label[for="signin"] {
      margin-right: 20px;
    }

    label[for="reset"] {
      float: right;
    }

    input[type=radio]:checked + label {
      opacity: 1;
    }

    input[type=text],
    input[type=password] {
      background: #fff;
      color: #ff8505;
      border: none;
      border-radius: 8px;
      font-size: 20px;
      font-family: 'Raleway', sans-serif;
      height: 50px;
      width: 99.5%;
      margin-bottom: 10px;
      opacity: 1;
      text-indent: 20px;
      transition: all .2s ease-in-out;
    }

    button {
      background: #ff8505;
      border: none;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      font-family: 'Raleway', sans-serif;
      font-size: 27px;
      height: 50px;
      width: 100%;
      margin-bottom: 10px;
      overflow: hidden;
      transition: all .3s cubic-bezier(.6, 0, .4, 1);
    }

    button span {
      display: block;
      line-height: 72px;
      position: relative;
      top: -12px;
      transform: translate3d(0, 0, 0);
    }

    button:hover {
      background: #ffab00;
    }

    #arrow {
      height: 0;
      width: 0;
      border-bottom: 10px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      position: relative;
      left: 32px;
    }
  `]
})
export class LoginComponent {
}
