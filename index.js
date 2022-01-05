console.log("Hello World");



function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    let newUl = document.querySelector("ul");
    newUl.appendChild(movie);
    inputField.value = '';
}

function deleteMovie(event){
    event.target.parentNode.remove();
}

let newForm = document.querySelector("form");
newForm.addEventListener("submit", addMovie);

