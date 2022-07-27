

const cl = (x) => console.log(x);



const listCatArr = Array.from(document.querySelectorAll("#categories>li"));

cl("Number of categories: " + listCatArr.length);



const list = document.querySelector(".item");
const listTitles = document.querySelectorAll(".item>h2");
const listsInsideList = document.querySelectorAll(".item>ul");

for (let i = 0; i < listTitles.length; i++) {
  let t = listTitles[i].textContent;
  let listArr = listsInsideList[i].querySelectorAll("li");
  let listLen = listArr.length;
  cl("Category: " + t + "\n" + "Elements: " + listLen);
};

