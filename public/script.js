let catalog = document.querySelector(".catalog__body");
let catalogItem = document.getElementsByClassName("catalog__item");
let showMoreButton = document.querySelector("#showMore");

// Выпадающее меню
const navbarToggler = document.querySelector(".navbar__toggle");
const navbarMenu = document.querySelector(".navbar__list");
if (navbarToggler) {
  navbarToggler.addEventListener("click", () => {
    navbarMenu.classList.toggle("toggled");
    navbarToggler.classList.toggle("white");
  });
}

for (let i = 0; i < catalogItem.length; i++) {
  //   console.log(i);
  if (i > 3) {
    catalogItem[i].classList.add("hide-item");
    console.log(i);
  }
}

let hideItems = document.getElementsByClassName("hide-item");
function showMore() {
  if (hideItems.length > 4) {
    for (let i = 0; i < 4; i++) {
      hideItems[i].classList.remove("hide-item");
      console.log(hideItems[i]);
    }
  } else if (hideItems.length > 0 && hideItems.length < 3) {
    console.log("Malo");
    [...hideItems].forEach((e) => {
      e.classList.remove("hide-item");
    });
  } else {
    showMoreButton.remove();
  }
}

showMoreButton.addEventListener("click", showMore);
