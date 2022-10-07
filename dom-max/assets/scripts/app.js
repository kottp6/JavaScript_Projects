const addMovieModel = document.getElementById("add-modal");
//const addMovieModel = document.querySelector('#add-modal');
//const addMovieModel = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');
//const backdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModel.querySelectorAll('input');
//const userInputs = addMovieModel.getElementsByTagName('input');

const entryTextSection = document.getElementById('entry-text');

const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

// SECTION DATA delete section

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }
    else{
        entryTextSection.style.display = 'none ';
    }
};

const closeMovieDeletionModal = () =>
{
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovieHandler = (movieId) =>
{
    let movieIndex = 0;
    for(const movie of movies)
    {
        if(movie.id === movieId)
        {    
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
    //listRoot.removeChild(listRoot.children[movieIndex]); 
    closeMovieDeletionModal();
}


const startDeleteMovieHandler = movieId =>
{
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    //deleteMovie(movieId);   
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger'); 

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));// 

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');  
    //confirmDeletionButton.removeEventListener("click", deleteMovieHandler.bind(null,movieId));
    cancelDeletionButton.removeEventListener('click',closeMovieDeletionModal);


    cancelDeletionButton.addEventListener('click',closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click',deleteMovieHandler.bind(null,movieId));
        //closeMovieDeletionModal();
};

// add new movie 
const renderNewMovieElement = (id,title,imageUrl,rating,salary) =>
{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class ="movie-element__image">
        <img src="${imageUrl}" alt="${title}" width="200px">
    </div>
    <div class = "movie-element__info">
        <h1 style="text=align :center" >User Information</h1>
        <p> <span style="color:black" >Name:</span> ${title}</p>
        <p style="marign:10px"><span style="color:black" >Age:</span> ${rating}</p> 
        </br>
        <br>
        <br>
        <p> <span style="color:black" >Salary:</span>${salary} $</p>
    </div>
    `; 
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};


// shadow 
const toggleBackdrop = () =>{
    backdrop.classList.toggle('visible');
}

const closeMivieModal =()=>
{
    addMovieModel.classList.remove('visible');
}

// show form becouse its block
const showMovieModal = () =>{
    addMovieModel.classList.add('visible');
    toggleBackdrop();
};

// TO CLICK ANY WHERE TO CLOSE 

const clearMovieInputs = () =>
{
    for (const userInput of userInputs)
    {
        userInput.value = '';
    }
}

// CANCEL BUTTON
const cancelAddMovieHnadler = () => {
    closeMivieModal();
    toggleBackdrop();
    clearMovieInputs();
};


// add and validation 
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    const salary = userInputs[3].value;

    if(titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    salary.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue<18 ||
    +ratingValue>40){
        alert('please enter vaild values (rating between 18 and 40 )')
        return;
    }

    const newMovie = {
        id : Math.random().toString(),
        title : titleValue,
        image: imageUrlValue,
        rating : ratingValue,
        salary : salary,
    };
    movies.push(newMovie);
    console.log(movies);
    closeMivieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id,newMovie.title, newMovie.image, newMovie.rating,newMovie.salary); 
    updateUI(); 
};

const backdropClickHandler = () =>
{
    closeMivieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
};

startAddMovieButton.addEventListener('click',showMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHnadler);
confirmAddMovieButton.addEventListener('click',addMovieHandler);

// console.log(startAddMovieButton);
// console.log(addMovieModel);