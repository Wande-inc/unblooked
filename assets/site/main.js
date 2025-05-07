/*
  Unblooked main.js
  See https://github.com/Wande-inc/unblooked
*/

// Variables

// - Opening tabs variables
const gameTab = document.querySelector("#gameTab button");
const movieTab = document.querySelector("#movieTab button");
const searchTab = document.querySelector("#searchTab button");
const popTab = document.querySelector("#popTab button");
let games = null;
let movies = null;

// - Iframe controls variables
let isFull = false;
const fullscreenItem = document.getElementById("iframeCon");
const fullscreenButton = document.getElementById("fullscreen");

// - Popular tab variables
const popular = document.getElementById("popular");
const bigMovie = document.querySelector("#bigMovie button");
const sMovies = document.querySelectorAll(".oMovies button");
const bigGames = document.querySelectorAll(".bigGame button");
const sGames = document.querySelectorAll(".sGame button");
let x = 0;

// Opening Tabs

// - Converts the tab variable into text
function convert(tab) {
  if (tab === gameTab) {
    return "games";
  } else if (tab === movieTab) {
    return "movies";
  } else if (tab === searchTab) {
    return "search";
  } else if (tab === popTab) {
    return "popular";
  } else if (tab === "iframe") {
    return "iframe";
  }
  return null;
}

// - Selects a tab by adding a border and setting the div display to "flex"
function select(tab) {
  if (tab) {
    tab.style.borderBottom = "2px solid #fc0303";
  }
  const targetId = convert(tab);
  if (document.getElementById(targetId)) {
    document.getElementById(targetId).style.display = "flex"; // or "flex"
  }
}

// - Deselects a tab by removing a border and setting the div display to "none"
function deselect(tab) {
  if (tab && tab != "iframe") {
    tab.style.borderBottom = "none";
  }
  const targetId = convert(tab);
  if (document.getElementById(targetId)) {
    document.getElementById(targetId).style.display = "none"; // Correct usage
  }
}

// - Opens the game tab
function openGames() {
  games = document.querySelector("#games .gameDiv");

  select(gameTab);
  deselect(movieTab);
  deselect(searchTab);
  deselect(popTab);
  deselect("iframe");
  makeGames();
}

// - Opens the movie tab
function openMovies() {
  movies = document.querySelector("#movies .movieDiv");
  select(movieTab);
  deselect(gameTab);
  deselect(searchTab);
  deselect(popTab);
  deselect("iframe");
  makeMovies();
}

// - Opens the search tab
function openSearch() {
  games = document.querySelector(".searchCon .gameDiv");
  movies = document.querySelector(".searchCon .movieDiv");
  select(searchTab);
  deselect(movieTab);
  deselect(gameTab);
  deselect(popTab);
  deselect("iframe");
  makeGames();
  makeMovies();
}

// - Opens the popular tab
function openPopular() {
  select(popTab);
  deselect(movieTab);
  deselect(gameTab);
  deselect(searchTab);
  deselect("iframe");
  makePopular();
}

// - Opens the game/movie iframe
function openIframe(type, name, id) {
  deselect(popTab);
  deselect(movieTab);
  deselect(gameTab);
  deselect(searchTab);
  if (document.getElementById("iframe")) {
    document.getElementById("iframe").style.display = "flex";
    document.getElementById("iframeName").innerHTML = name;
    const iframe = document.getElementById("iframeCon");
    iframe.onload = function () {
      const message = {
        action: "executeFunction",
        data: { param1: `${type}/${id}` },
      };

      iframe.contentWindow.postMessage(message, "*");
    };
    iframe.src = iframe.src;
  }
}

// - Open default page

openPopular();

// Iframe Controls

// - Adds a fullscreen class to make the iframe fullscreen
function fullscreen() {
  if (isFull) {
    fullscreenButton.classList.remove("fsButton");
    fullscreenItem.classList.remove("fullScreen");
    fullscreenItem.src = fullscreenItem.src;
    isFull = false;
  } else {
    fullscreenButton.className = "fsButton";
    fullscreenItem.className = "fullScreen";
    fullscreenItem.src = fullscreenItem.src;
    isFull = true;
  }
}

// Adding HTML

// - Adds HTML to a div
function addHTML(theDiv, theHTML) {
  theDiv.innerHTML = theDiv.innerHTML + theHTML;
}

// - Removes all HTML from a div
function removeHTML(theDiv) {
  theDiv.innerHTML = "";
}

// Popular Tab

// - Makes the content inside the popular tab (Extracts content from https://github.com/Wande-inc/unblooked)
function makePopular() {
  fetch(
    "https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/movies.json"
  )
    .then((response) => response.json()) // Parse JSON
    .then((data) => {
      data.forEach((item) => {
        if (x <= 4) {
          if (x === 0) {
            bigMovie.onclick = function () {
              openIframe("movies", item.name, item.id);
            };
            bigMovie.style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/movies/${item.id}/img.${item.img}')`;
            bigMovie.querySelector(".backdrop span").innerHTML = item.name;
          } else {
            sMovies[x - 1].onclick = function () {
              openIframe("movies", item.name, item.id);
            };
            sMovies[
              x - 1
            ].style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/movies/${item.id}/img.${item.img}')`;
            sMovies[x - 1].querySelector(".backdrop span").innerHTML =
              item.name;
          }
        }
        x++;
      });
    });
  fetch(
    "https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/games.json"
  )
    .then((response) => response.json()) // Parse JSON
    .then((data) => {
      x = 0;
      data.forEach((item) => {
        if (x <= 7) {
          if (x <= 1) {
            bigGames[x].onclick = function () {
              openIframe("games", item.name, item.id);
            };
            bigGames[
              x
            ].style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/games/${item.id}/img.${item.img}')`;
            bigGames[x].querySelector(".backdrop span").innerHTML = item.name;
          } else {
            sGames[x - 2].onclick = function () {
              openIframe("games", item.name, item.id);
            };
            sGames[
              x - 2
            ].style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/games/${item.id}/img.${item.img}')`;
            sGames[x - 2].querySelector(".backdrop span").innerHTML = item.name;
          }
        }
        x++;
      });
    });
}

// Game Tab

// - Makes the content inside the game tab (Extracts content from https://github.com/Wande-inc/unblooked)
function makeGames() {
  removeHTML(games);
  let i = 0;
  fetch(
    "https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/games.json"
  )
    .then((response) => response.json()) // Parse JSON
    .then((data) => {
      data.forEach((item) => {
        addHTML(
          games,
          `<div class="bigGame searchItem">
            <button id="game-${item.id}" class="noOutline playable" onclick="openIframe('games', '${item.name}', '${item.id}')" style="background-image: url('https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/games/${item.id}/img.${item.img}');">
              <div class="backdrop"><div></div><i class="fa fa-play"></i><span>${item.name}</span></div>
            </button>
          </div>`
        );
        i++;
      });
    });
}

// Movie Tab

// - Makes the content inside the movie tab (Extracts content from https://github.com/Wande-inc/unblooked)
function makeMovies() {
  removeHTML(movies);
  let i = 0;
  fetch(
    "https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/movies.json"
  )
    .then((response) => response.json()) // Parse JSON
    .then((data) => {
      data.forEach((item) => {
        addHTML(
          movies,
          `<div class="oMovies searchItem">
            <button id="movie-${item.id}" class="noOutline playable" onclick="openIframe('movies', '${item.name}', '${item.id}')" style="background-image: url('https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/client/movies/${item.id}/img.${item.img}');">
              <div class="backdrop"><div></div><i class="fa fa-play"></i><span>${item.name}</span></div>
            </button>
          </div>`
        );
        i++;
      });
    });
}

// Search Tab

// - Makes the content inside the search tab based off search term (Extracts content from https://github.com/Wande-inc/unblooked)
document.getElementById("searchInput").addEventListener("input", function () {
  let searchTerm = this.value.toLowerCase();
  let items = document.querySelectorAll(".searchItem");

  items.forEach((item) => {
    let name = item.querySelector(".backdrop span").innerHTML.toLowerCase();
    item.style.display = name.includes(searchTerm) ? "flex" : "none";
  });
});

// NO IFRAMES

if (window.top !== window.self) {
  document.body.innerHTML = "";
}
