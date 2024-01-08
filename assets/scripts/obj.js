
const movietitle = document.getElementById("title");
const extraname = document.getElementById("extra-name");
const extravalue = document.getElementById("extra-value");
const filterterm = document.getElementById("filter-title");
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const listroot = document.getElementById("movie-list");
const movieArrays = [];

/***************************************************************************** */
//Handlers:
function addMovieHandler() {
  //fetching userInputs
  const movieTitle = movietitle.value;
  const extraName = extraname.value;
  const extraValue = extravalue.value;

  //validation step
  if (
    movieTitle.trim() === "" ||
    extraValue.trim() === "" ||
    extraName.trim() === ""
  ) {
    alert("noValid inputs try again");
  } else {
    const movieObj = {
      id: Math.random(),
      info: {
        movieTitle,
        [extraName]: extraValue,
      },
      getFormattedTitle() {
        return this.info.movieTitle.toUpperCase();
      },
    };
    movieArrays.push(movieObj);
    console.log(movieArrays);
    renderMovies();
    clearInputs();
  }
}
//renderMovie Iteam as A list:
function renderMovies(filterTerm = "") {
  const listRoot = listroot;
  if (movieArrays.length === 0) {
    listRoot.classList.remove("visible");
    return;
  } else {
    listRoot.classList.add("visible");
  }
  listRoot.innerHTML = "";
  const filteredMovies = !filterTerm
    ? movieArrays
    : movieArrays.filter((movie) => {
        return movie.info.movieTitle.includes(filterTerm);
      });
  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    for (key in movie.info) {
      let text = `${movie.getFormattedTitle()} - ${key} : ${movie.info[key]}`;
      movieElement.textContent = text;
      listRoot.append(movieElement);
    }
  });
}
function filterMovie() {
  const filterTerm = filterterm.value;
  renderMovies(filterTerm);
}
function clearInputs() {
  movietitle.value = "";
  extraname.value = "";
  extravalue.value = "";
  filterterm.value=' ';
}
/*************************************************************** */
//events::
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", filterMovie);
