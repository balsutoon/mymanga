```javascript
/* =========================
   SEARCH
========================= */

const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");


openSearch.addEventListener("click", () => {

    searchOverlay.classList.add("active");

    setTimeout(() => {
        searchInput.focus();
    }, 100);

});


closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("active");

});


searchOverlay.addEventListener("click", (event) => {

    if (event.target === searchOverlay) {

        searchOverlay.classList.remove("active");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("active");

    }

});


searchSubmit.addEventListener("click", () => {

    const value = searchInput.value.trim();

    if (!value) {

        searchInput.focus();

        return;

    }

    alert("Search: " + value);

});


searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        searchSubmit.click();

    }

});


/* =========================
   MOBILE MENU
========================= */

const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");


mobileMenu.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});
```
