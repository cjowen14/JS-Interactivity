console.log("Hello World");

let message = document.querySelector("#message");

function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    let newUl = document.querySelector("ul");
    newUl.appendChild(movie);
    inputField.value = '';
    message.textContent = 'Movie Added!'
    revealMessage();
}

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = `${event.target.previousElementSibling.textContent} Deleted!`;
    revealMessage();
}

function crossOffMovie(event){
    console.log(event);
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} Watched!`;
    }else{
        message.textContent = `${event.target.textContent} Added Back!`;
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove("hide");
    setTimeout(disappear, 1000)
}

function disappear(){
    message.classList.toggle("hide");
}

let newForm = document.querySelector("form");
newForm.addEventListener("submit", addMovie);

