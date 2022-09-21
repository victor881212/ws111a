import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
function page(name,css,js,body)
{
  return`
  <html>
  <head>
        <title> ${name} </title>
        <style>
        ${css}
        </style>
        <script>
        ${js}
        </script>
  </head>
  <body>
    ${body}
  </body>
  </html>
  `
}

app.use((ctx) => {
  let pathname=ctx.request.url.pathname
  if(pathname.startsWith("/login"))
  {
  ctx.response.body = page(
    `
    login
    `
    ,
    `
    h1 {
      color: rgba(62, 8, 124, 0.726);
      width: 100%;
      text-align: center;
  }
  
  #pcenter {
      text-align: center;
  }
  
  #body1 {
      background: url("https://github.com/victor881212/wp110b/blob/master/homework/html/material/picture.jpg?raw=true");
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
  }
  
  label {
      color: black;
      text-align: center;
      font-size: 18px;
      padding: 20px;
      width: 10%;
  }
  
  #inputwrite {
      max-width: 200px;
      min-width: 100px;
      width: 30%;
  }

  button {
    width:100px;
    height:30px;
  }
    `
  ,
  `
  function tosignup(obj) {
    window.location = ('./' + 'signup')
    }
  function login(obj) {
    window.location = ('./' + 'home')
  }
  `
  ,
  `
  <h1>登入</h1>
    <p id="pcenter"><label style="font-size: 18px;" for="fname">account:</label>
        <input type="text" id="inputwrite" name="fname" value placeholder="account"><br><br></p>
    <p id="pcenter"><label style="font-size: 18px;" for=" lname ">password:</label>
        <input type="text " id="inputwrite" name="lname " value placeholder="password "><br><br></p>
    <p id="pcenter">
        <button type="button" onClick="tosignup(this)" width="50px" height="20px">signup </button>
        <button type="button" onClick="login(this)" width="50px" height="20px">login </button>
    </p>
    `
    )
  }



  else if(pathname.startsWith("/signup")){
    ctx.response.body = page(
    `
    signup
    `
    ,
    `
    h1 {
      color: rgba(62, 8, 124, 0.726);
      width: 100%;
      text-align: center;
  }
  
  #pcenter {
      text-align: center;
  }
  
  #body1 {
      background: url("https://github.com/victor881212/wp110b/blob/master/homework/html/material/picture.jpg?raw=true");
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
  }
  
  label {
      color: black;
      text-align: center;
      font-size: 18px;
      padding: 20px;
      width: 10%;
  }
  
  #inputwrite {
      max-width: 200px;
      min-width: 100px;
      width: 30%;
  }

  button {
    width:100px;
    height:30px;
  }
    `
  ,
  `
  function tologin(obj) {
    window.location = ('./' + '/login' )
    }
  `
  ,
  `
  <h1>註冊表單</h1>
    <p id="pcenter"><label style="font-size: 18px;" for="fname">First name:</label>
        <input id="inputwrite" type="text" id="fname" name="fname" value placeholder="First name"><br><br></p>
    <p id="pcenter"><label style="font-size: 18px;" for=" lname ">Last name:</label>
        <input id="inputwrite" type="text " id="lname " name="lname " value placeholder="Last name "><br><br></p>
    <p id="pcenter">
        <input type="checkbox" name="agree "> I agree all statements in
        <a href="https://google.com ">Terms of serviceSignup</a>
    </p>
    <p id="pcenter">
        <button type"button" onClick=tologin(this)>back to login</button>
        <button type"button" onclick=signup(this)>sign up</button>  
    </p>
    `
    )
  }
    else if(pathname.startsWith("/home")){
      ctx.response.body = page(
        `home`
        ,
        `
        `
        ,
        `
        `
        ,
        `
        <h1>welcome</h1>
        `
      )
    }
  else {
    console.log('url=', ctx.request.url)
    ctx.response.redirect('http://127.0.0.1:8000/login')
  }
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
