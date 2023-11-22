var btn =  document.querySelector("button");
var todo = document.querySelector(".todo");
var completed = document.querySelector(".completed");




function request() {
  var requestHttp = new XMLHttpRequest();
  // The XMLHttpRequest object can be used to request data from a web server.
  // The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.
  requestHttp.open("GET", "https://dummyjson.com/todos");
  requestHttp.send();


  requestHttp.onload = function () {
     // console.log(requestHttp.responseText);
    var response = JSON.parse(requestHttp.responseText);

    // Get a random index within the range of the todos array
    var randomIndex = Math.floor(Math.random() * response.todos.length);

    // Use the random index to select a random todo
    var todoAPI = response.todos[randomIndex].todo;
    var randomCompletedapi = response.todos[randomIndex].completed;

    todo.textContent = todoAPI;
    completed.textContent = randomCompletedapi;
  };
}


btn.addEventListener("click", request);
