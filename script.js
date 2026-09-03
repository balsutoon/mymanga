function openSearch() {
    document.getElementById("searchBox").style.display = "block";
    document.getElementById("searchInput").focus();
}

function closeSearch() {
    document.getElementById("searchBox").style.display = "none";
}

function doSearch() {

    const value = document
        .getElementById("searchInput")
        .value
        .trim();

    if (!value) return;

    alert("Arama: " + value);
}

document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            doSearch();
        }

        if (event.key === "Escape") {
            closeSearch();
        }

    });


document
    .querySelector(".load-more")
    .addEventListener("click", function() {

        this.innerText = "YÜKLENİYOR...";

        setTimeout(() => {
            this.innerText = "LOAD MORE";
        }, 700);

    });
