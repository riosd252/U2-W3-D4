const pexels = "https://api.pexels.com/v1/search?query=Nature";
const authKey = "fR0JiVF6dDHxJJpfaf4nc4oNrlTNWlBkJQcWmLVw5DyA3ztZzS2qlNvb";

const firstBtn = document.getElementById("load-first");

firstBtn.addEventListener("click", () => {
  fetch(pexels, {
    headers: {
      Authorization: authKey,
    },
  })
    .then((resp) => resp.json())
    .then((pageObj) => pageObj.photos)
    .then((imgArr) => {});
});

const createCard = (imgSrc, imgId) => {
  const container = document.getElementById("main-container");
  const row = document.createElement("div");
  row.className = "row";
  const col = document.createElement("div");
  col.className = "col-md-4";
  const card = document.createElement("div");
  card.className = "card mb-4 shadow-sm";
  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top w-100";
  cardImg.src = imgSrc;
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = "Lorem Ipsum";
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
};
