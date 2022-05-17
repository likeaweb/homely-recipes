// ****
// * Autocomplete Search
// ****
const searchable = [
  "Bread Butter Pudding",
  "Fish Curry Special",
  "Rice Neer Dosa",
  "Special Chicken Masala",
  "Traditional Rava Laddo",
  "Pork Indad"
];

const searchableLink = [
  "collections/dessert-recipes/bread-butter-pudding.html",
  "collections/fish-curry/fish-curry-special.html",
  "collections/dosa-recipes/rice-neer-dosa.html",
  "collections/chicken-recipes/special-chicken-masala.html",
  "collections/rava-recipes/traditional-rava-laddo.html",
  "collections/pork/pork-indad.html",
];

// filter the searchableLink array
function filterResults(e) {
  const searchTerm = e.target.value.toLowerCase();
  const searchResults = searchable.filter((item) => {
    return item.toLowerCase().includes(searchTerm);
  });
  const searchResultsLink = searchableLink.filter((item) => {
    return item.toLowerCase().includes(searchTerm);
  });
  const searchResultsList = document.querySelector(".search-results");
  searchResultsList.innerHTML = "";
  searchResults.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${searchResultsLink[index]}">${item}</a>`;
    searchResultsList.appendChild(li);
  });
  filterResults(searchResults);
}

const recipeAndLink = { searchable, searchableLink };
console.log(recipeAndLink);

// *
// * set variables from the DOM
// *
const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

searchInput.addEventListener("keyup", () => {
  // // console.log(e.target.value);
  // filter through our searchable variable's itemListElement
  const inputValue = searchInput.value;
  if (inputValue.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(inputValue.toLowerCase());
    });
  }
  renderResults(results);
});

// *
// * renders the results of filtered variable `searchable` array
// *
function renderResults(results) {
  // if there is no items or no results.length - remove the class .show
  if (!results.length) {
    return searchWrapper.classList.remove(
      "show"
    ); /* ? could it be toggle instead of remove? */
  }
  // * [ ] filter the searchableLink.map with results index /* todo */
  const searchableLinkItem = searchableLink[1];
  // when there are results, loop over results with callback function map of item
  const content = results
    .map((item) => {
      return `<li><a href="${searchableLinkItem}">${item}</a></li>`;
      // return `<li><a href="collections/${item.collection}/${item.recipe}.html">${item}</a></li>`;
    })
    .join(""); /* join this on a string */

  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

// when a <li> is clicked and searchable filter item's array index matches searchableLink,
// append the link to the searchableLink array index

// resultsWrapper.addEventListener("click", (e) => {
//   if (e.target.item == searchableLink[0]) {
//     const index = searchable.indexOf(e.target.textContent);
//     window.location.href = searchableLink[index];
//   } else {
//     return;
//   } /* ? */
// });
