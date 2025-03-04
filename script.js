
let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showPosts(id){
  let str = ""
  //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data && data.map((value) => {
        str += `<div>
        <b>${value.title}</b>
        <p>${value.body}</p>
        </div>`;
      });
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}
function showAlbums(id){
  let str = "<h3>My Albums</h3>";
  //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    data && data.map((value)=>{
      str+=`<div>
      <b>${value.title}</b>
      </div>`;
    });
    content.innerHTML = str;
  })

}
function showProfiles(id){
  let str = "<h3>My Profiles</h3>"
  //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    data && data.map((value)=>{
      str+=`<div>
      <b>${value.name}</b>
      <p>${value.email}</p>
      <p>${value.phone}</p>
      </div>`;
    });
    content.innerHTML = str;
  })

}
function showTodo(id){
    let str = "<h3>To Dos</h3>"
    //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      data && data.map((value)=>{
            str += `<div><input type='checkbox' ${value.completed && "checked"}>${value.title}</div>`;
      });
      content.innerHTML = str;
    })
  
  }

function showHome(){
    let name=document.getElementById("user");
    let selectedName = name.options[name.selectedIndex].text;
   
    let name1=user.value;
   let str=`
   <div class='container-fluid'>
      <div class='row'>
        <div class='d-flex justify-content-between bg-primary text-light'>
        <div>MySocial Media</div>
        <div >${selectedName}</div>
       </div>
      </div>
       <div class='row'>
        <div class='d-flex'>
        <div class='m-2 text-primary' onclick='showPosts()'>Home</div>
        <div  id='content'></div>
        </div>
       </div>
       <div class='row'>
       <p onclick='showAlbums(${name1})' class='text-primary'>Album</p>
        <p onclick='showProfiles(${name1})' class='text-primary'>profile</p>
         <p onclick='showTodo(${name1})' class='text-primary'>To Do</p>
       <p onclick='showLogin()' class='text-secondary'>logout</p>
      </div>
      <div class='row '>
      <div class='bg-primary text-light p-5'>
      <p> @copyright reserved</p>
      </div>
      </div>

    </div>
   `
   document.getElementById("root").innerHTML=str;
   showPosts(name1);
}




function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media</h2>
  <p> This is the caption of the website.</p>
  </div>
  <div class=' text-center mt-5'>
  <select class='form-control' id='user'>
  <option value='0'>
  --select user--
  </option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control mt-3 btn btn-secondary' onclick='showHome()'>Log In</button></p></div>`
  root.innerHTML = str
}