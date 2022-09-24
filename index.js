const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("mouseover", () => {
  searchBarContainerEl.classList.toggle("active");
});
magnifierEl.addEventListener("mouseout", () => {
    searchBarContainerEl.classList.reverse.toggle("active");
  });