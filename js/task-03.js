const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galery = document.querySelector(".gallery");

galery.insertAdjacentHTML(
  "beforeend", images.map((image) =>
        `<li class="item"><img src="${image.url}" alt= "${image.alt}" width="320" height="200"></li>`
    )
    .join("")
);

galery.style.listStyleType = "None";
galery.style.display = "flex";
galery.style.flexWrap = "wrap";

for (let i = 0; i < images.length; i++) {
  let item = document.querySelectorAll("li");
  item[i].style.margin = "10px";
};
