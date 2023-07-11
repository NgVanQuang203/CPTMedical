const dataSearchListHomPageTemplate = document.querySelector(
  "[data-searchlist-hp-template]"
);
const dataSearchListHomPageContainer = document.querySelector(
  "[data-searchlist-hp-container]"
);
const dataLoading_HP = document.querySelector("[data-Loading-HomePage]");
const searchInput_HP = document.querySelector("[data-search-homepage]");


// *Search Home-Page
let listItem_HP = [];
searchInput_HP.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  dataLoading_HP.classList.add("loading");
  const searchTimeout = setTimeout(() => {
    if (value) {
      listItem_HP.forEach((item) => {
        const isVisible = item.name.toLowerCase().includes(value);
        dataLoading_HP.classList.remove("loading");
        item.element.classList.toggle("searchbar-hide", !isVisible);
      });
    } else {
      listItem_HP.forEach((item) => {
        dataLoading_HP.classList.remove("loading");
        item.element.classList.toggle("searchbar-hide", true);
      });
    }
  }, 1000);
});
// *Search Home_page
listItem_HP = searchList.map(function (item) {
    const itemhtml = dataSearchListHomPageTemplate.content.cloneNode(true).children[0];
    const infoTitle = itemhtml.querySelector("[data-infoTitle-hp]");
    const infoDesc = itemhtml.querySelector("[data-infoDesc-hp]");
    const infoImgSrc = itemhtml.querySelector("[data-infoImgSrc-hp]");
    const infoLink = itemhtml.querySelector("#info-Link-hp");
    const infoLinks = itemhtml.querySelector(".info-Link-hp");
    infoTitle.textContent = item.name;
    infoDesc.textContent = item.infoDescription;
    infoImgSrc.src = item.imgSrc;
    infoLink.href = item.link;
    infoLinks.href = item.link;
    dataSearchListHomPageContainer.append(itemhtml);
    return { name: item.name, element: itemhtml };
  });