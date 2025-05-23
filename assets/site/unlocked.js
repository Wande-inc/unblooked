makeSite();

function makeSite() {
  document.body.innerHTML = `    <nav>
      <a href="" id="title">Unbl<span class="colored">&infin;</span>ked</a>
      <ul id="navList">
        <li id="popTab" class="navItem">
          <button class="noOutline" onclick="openPopular()">Popular</button>
        </li>
        <li id="gameTab" class="navItem">
          <button class="noOutline" onclick="openGames()">Games</button>
        </li>
        <li id="movieTab" class="navItem">
          <button class="noOutline" onclick="openMovies()">Movies</button>
        </li>
        <li id="searchTab" class="navItem">
          <button class="noOutline" onclick="openSearch()">
            <i class="fa fa-search"></i>
          </button>
        </li>
      </ul>
    </nav>
    <div id="navSpace"></div>
    <div id="popular">
      <div id="leftSec" class="section">
        <div id="bigMovie">
          <button class="noOutline playable">
            <div class="backdrop">
              <div></div>
              <i class="fa fa-play"></i><span></span>
            </div>
          </button>
        </div>
        <ul id="otherMovies">
          <div class="oMovies">
            <button class="noOutline playable">
              <div class="backdrop">
                <div></div>
                <i class="fa fa-play"></i><span></span>
              </div>
            </button>
          </div>
          <div class="oMovies">
            <button class="noOutline playable">
              <div class="backdrop">
                <div></div>
                <i class="fa fa-play"></i><span></span>
              </div>
            </button>
          </div>
          <div class="oMovies">
            <button class="noOutline playable">
              <div class="backdrop">
                <div></div>
                <i class="fa fa-play"></i><span></span>
              </div>
            </button>
          </div>
          <div class="oMovies">
            <button class="noOutline playable">
              <div class="backdrop">
                <div></div>
                <i class="fa fa-play"></i><span></span>
              </div>
            </button>
          </div>
        </ul>
      </div>
      <div id="rightSec" class="section">
        <div id="top">
          <div class="bigGame">
            <button class="noOutline playable">
              <div class="backdrop">
                <div></div>
                <i class="fa fa-play"></i><span></span>
              </div>
            </button>
          </div>
          <ul class="smallGames">
            <div class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </div>
            <div class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </div>
            <div class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </div>
            <div class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </div>
          </ul>
        </div>
        <div id="bottom">
          <ul class="smallGames">
            <li class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </li>
            <li class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </li>
            <li class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </li>
            <li class="sGame">
              <button class="noOutline playable">
                <div class="backdrop">
                  <div></div>
                  <i class="fa fa-play"></i><span></span>
                </div>
              </button>
            </li>
          </ul>
          <div class="bigGame">
            <button class="noOutline playable">
              <div class="backdrop">
                <div></div>
                <i class="fa fa-play"></i><span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="games">
      <div class="gameDiv"></div>
    </div>
    <div id="movies">
      <div class="movieDiv"></div>
    </div>
    <div id="search">
      <div class="search">
        <input
          type="text"
          placeholder="Search..."
          oninput=""
          id="searchInput"
        />
        <button><i class="fa fa-search"></i></button>
      </div>
      <div class="searchCon">
        <div class="gameDiv movieDiv"></div>
      </div>
    </div>
    <div id="iframe">
      <div id="gameHolder">
        <iframe src="iframe.html" frameborder="0" id="iframeCon"></iframe>
        <div>
          <span id="iframeName"></span
          ><button onclick="fullscreen()" id="fullscreen">
            <span class="tooltiptext">!Will Refresh Page!</span>
          </button>
        </div>
      </div>
    </div>
    <footer>
      <span>Made by Wande.inc</span>
    </footer>
`;

  document.head.innerHTML = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Google</title>
    <link rel="icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@latest/assets/site/img/favicon.webp">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />`;

  let script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/Wande-inc/unblooked@main/assets/site/main.min.js";
  document.body.appendChild(script);
}
