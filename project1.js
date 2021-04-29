//creating an array of objects to to hold username and password
const userpass = [{username: 'sukteam', password: 'sukadmin'}]
//grab content from username and password input field
const username = document.getElementById("username")
const  password = document.getElementById("password")
// function to check grabbed content against userpass contents
function validate () {
  //function to loop through userpass array
  const matches = userpass.some(function (element) {
    return element.username === username.value && element.password === password.value
    
  })
  
  if (matches) {
    //alert("Login Successful")
    window.location.href = 'pj.html'
  }
  
  else {
  
    alert("Incorrect username and password combination")
  }
}

