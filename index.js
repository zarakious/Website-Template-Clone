// Navbar and mobile Menu

const displayNav = () => {
  document.getElementById("links").classList.add("transitionLinks");
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("close").style.display = "block";
};
const hideNav = () => {
  document.getElementById("links").classList.remove("transitionLinks");
  document.getElementById("close").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
};

const hideFormContact = () => {
  document.getElementById("offer-contact").style.display = "none";
};
const showFormContact = () => {
  document.getElementById("offer-contact").style.display = "flex";
};
const showSubItems = (e) => {
  const dropDownList = document.getElementById("dropdown");
  dropDownList.style.display === "flex"
    ? (dropDownList.style.display = "none")
    : (dropDownList.style.display = "flex");
};
document.getElementById("hamburger").onclick = displayNav;
document.getElementById("close").onclick = hideNav;
document.getElementById("drop-down-header").onclick = showSubItems;
document.getElementById("offer").onclick = showFormContact;
document.getElementById("apply-now").onclick = showFormContact;
document.getElementById("apply").onclick = showFormContact;

// Close contact Form
document.getElementById("close-contact").onclick = hideFormContact;

//  Automate Catalogue Animations

var cards = document.getElementsByClassName("card");
let delay = 0;
Array.from(cards).forEach((el) => {
  el.style.animationDelay = Math.random() + "s";
});

// Video Player
const displayPlayer = () => {
  document.getElementById("video-player").style.display = "flex";
};
const closePlayer = () => {
  document.getElementById("video-player").style.display = "none";
  document.getElementById("video").pause();
};
document.getElementById("play").onclick = displayPlayer;
document.getElementById("close-player").onclick = closePlayer;
document.getElementById("player-overlay").onclick = closePlayer;

// Slider Functions
let sliderBoxs = Array.from(document.querySelectorAll(".slider-container div")),
  slidesCount = sliderBoxs.length,
  currentSlide = 4,
  nextButton = document.getElementById("next"),
  previousButton = document.getElementById("previous");
nextButton.onclick = nextSlide;
previousButton.onclick = previousSlide;

function nextSlide() {
  if (currentSlide === slidesCount) {
    currentSlide = 0;
  }
  currentSlide++;
  theChecker();
}

function previousSlide() {
  if (currentSlide === 1) {
    currentSlide = 4;
  }
  currentSlide--;
  theChecker();
}

function theChecker() {
  sliderBoxs.forEach((div) => div.classList.remove("active"));
  sliderBoxs[currentSlide - 1].classList.add("active");
}
const autoDisplay = () => setInterval(nextSlide, 5000);

let catalogueItems = Array.from(
  document.querySelectorAll(".catalogue-items > div")
);

let items = document.querySelectorAll(".catalogue-nav-list li"),
  tab = [],
  index;
for (const e of items) {
  tab.push(e.innerHTML);
}

// Catalogue display

let lastClickedNavItem;
for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    lastClickedNavItem = lastClickedNavItem
      ? lastClickedNavItem.removeAttribute("id")
      : null;
    this.setAttribute("id", "nav-list-active");
    lastClickedNavItem = this;
    index = tab.indexOf(this.innerHTML);
    let newItems = catalogueItems.filter(
      (el) => catalogueItems.indexOf(el) !== index
    );
    catalogueItems[index].classList.add("active");
    catalogueItems[index].classList.remove("catalogue");
    newItems.forEach((item) => {
      item.classList.add("catalogue");
      item.classList.remove("active");
    });
  };
  i === 0
    ? catalogueItems[i].classList.add("active")
    : catalogueItems[i].classList.add("catalogue");
}

autoDisplay();
