// ! shopping cart
const btnCart = document.getElementById("cart-button");
const cart = document.querySelector(".header .cart-items");
btnCart.addEventListener("click", () => {
  cart.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(btnCart) && !e.composedPath().includes(cart)) {
    cart.classList.remove("active");
  }
});

//!search button
const btnSearch = document.getElementById("search-button");
const searchForm = document.querySelector(".header .search-form");
const searchFormInput = document.querySelector(".header .search-form input");
const searchFormIcon = document.querySelector(".header .search-form i");

btnSearch.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(btnSearch) &&
    !e.composedPath().includes(searchForm)
  ) {
    searchForm.classList.remove("active");
  }
});

//! menu
const btnMenu = document.getElementById("menu-btn");
const menu = document.querySelector(".header .navbar");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(menu) && !e.composedPath().includes(btnMenu)) {
    menu.classList.remove("active");
  }
});
