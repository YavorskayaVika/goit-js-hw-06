const categoriesElem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryEl = category.querySelectorAll("ul li");
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryEl.length}`);
  });
